from fastapi import FastAPI, Depends, HTTPException, status, Cookie, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from backend.app.config.database import SessionLocal, engine, Base, get_db
from backend.app.schemas.volunteer_data import Volunteer as VolunteerSchema
from backend.app.schemas.patient import Patient as PatientSchema
from backend.app.models.volunteer import VolunteerModel
from backend.app.models.patient import PatientModel
from backend.app.services.security import encrypt, decrypt
from pydantic import BaseModel
import jwt
from datetime import datetime, timedelta
import os

# Auto-generate tables if they don't exist
Base.metadata.create_all(bind=engine)

app = FastAPI()

security = HTTPBearer()

def verify_admin_token(token: str = Cookie(None, alias="admin_session")):
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    secret_key = os.getenv("JWT_SECRET_KEY")
    if not secret_key:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Server misconfigured: JWT_SECRET_KEY missing")
    try:
        payload = jwt.decode(token, secret_key, algorithms=["HS256"])
        if payload.get("role") != "admin":
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Insufficient permissions")
        return payload
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")

class AdminLoginRequest(BaseModel):
    username: str
    password: str

if os.getenv("CORS_ORIGINS"):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:5173"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

@app.post("/api/admin/login")
def admin_login(login_data: AdminLoginRequest, response: Response):
    admin_user = os.getenv("ADMIN_USERNAME")
    admin_pass = os.getenv("ADMIN_PASSWORD")
    jwt_secret = os.getenv("JWT_SECRET_KEY")

    if not admin_user or not admin_pass or not jwt_secret:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Admin credentials not configured on the server")

    if login_data.username == admin_user and login_data.password == admin_pass:
        expire = datetime.utcnow() + timedelta(hours=2)
        payload = {"sub": admin_user, "role": "admin", "exp": expire}
        token = jwt.encode(payload, jwt_secret, algorithm="HS256")
        
        response.set_cookie(key="admin_session", value=token, httponly=True, samesite="lax", secure=False)
        return {"message": "Login successful"}
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )

@app.get("/api/admin/me")
def auth_check(admin: dict = Depends(verify_admin_token)):
    return {"authenticated": True}

@app.post("/api/admin/logout")
def admin_logout(response: Response):
    response.delete_cookie("admin_session")
    return {"message": "Logged out successfully"}

def safe_encrypt(text):
    return encrypt(text).decode() if text else None

def safe_decrypt(text):
    return decrypt(text.encode()) if text else None

@app.post("/api/register/volunteer", response_model=VolunteerSchema)
def register_volunteer(form_data: VolunteerSchema, db: Session = Depends(get_db)):
    db_volunteer = VolunteerModel(
        name=form_data.name,
        age=form_data.age,
        gender=form_data.gender,
        phone=safe_encrypt(form_data.phone),
        blood_group=form_data.blood_group,
        address=safe_encrypt(form_data.address),
        last_donation_date=form_data.last_donation_date,
        never_donated=form_data.never_donated,
        weight=form_data.weight,
        ready_for_emergency=form_data.ready_for_emergency,
        contact_number=safe_encrypt(form_data.contact_number),
        contact_number_by=safe_encrypt(form_data.contact_number_by),
        final_blood_donor=form_data.final_blood_donor,
    )
    db.add(db_volunteer)
    db.commit()
    db.refresh(db_volunteer)
    return form_data # Return schema instance so it isn't returned encrypted

@app.post("/api/register/patient", response_model=PatientSchema)
def register_patient(form_data: PatientSchema, db: Session = Depends(get_db)):
    db_patient = PatientModel(
        name=form_data.name,
        age=form_data.age,
        need_blood=form_data.need_blood,
        need_blood_body=form_data.need_blood_body,
        blood_bags_quantity=form_data.blood_bags_quantity,
        emergency_level=form_data.emergency_level,
        hospital_name=safe_encrypt(form_data.hospital_name),
        hospital_address=safe_encrypt(form_data.hospital_address),
        contact_person_name=form_data.contact_person_name,
        contact_number_by=safe_encrypt(form_data.contact_number_by),
        contact_number=safe_encrypt(form_data.contact_number),
        doctor_recommendation=safe_encrypt(form_data.doctor_recommendation),
        another=safe_encrypt(form_data.another),
        additional_notes=form_data.additional_notes,
    )
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return form_data # Return schema instance so it isn't returned encrypted

@app.get("/api/admin/volunteers", response_model=list[VolunteerSchema])
def get_volunteers(admin: dict = Depends(verify_admin_token), db: Session = Depends(get_db)):
    db_volunteers = db.query(VolunteerModel).all()
    # Decrypt sensitive data before returning
    decrypted_volunteers = []
    for v in db_volunteers:
        decrypted_v = VolunteerSchema(
            id=v.id,
            name=v.name,
            age=v.age,
            gender=v.gender,
            phone=safe_decrypt(v.phone),
            blood_group=v.blood_group,
            address=safe_decrypt(v.address),
            last_donation_date=v.last_donation_date,
            never_donated=v.never_donated,
            weight=v.weight,
            ready_for_emergency=v.ready_for_emergency,
            contact_number=safe_decrypt(v.contact_number),
            contact_number_by=safe_decrypt(v.contact_number_by),
            final_blood_donor=v.final_blood_donor
        )
        decrypted_volunteers.append(decrypted_v)
    return decrypted_volunteers

@app.get("/api/admin/patients", response_model=list[PatientSchema])
def get_patients(admin: dict = Depends(verify_admin_token), db: Session = Depends(get_db)):
    db_patients = db.query(PatientModel).all()
    # Decrypt sensitive data before returning
    decrypted_patients = []
    for p in db_patients:
        decrypted_p = PatientSchema(
            id=p.id,
            name=p.name,
            age=p.age,
            need_blood=p.need_blood,
            need_blood_body=p.need_blood_body,
            blood_bags_quantity=p.blood_bags_quantity,
            emergency_level=p.emergency_level,
            hospital_name=safe_decrypt(p.hospital_name),
            hospital_address=safe_decrypt(p.hospital_address),
            contact_person_name=p.contact_person_name,
            contact_number_by=safe_decrypt(p.contact_number_by),
            contact_number=safe_decrypt(p.contact_number),
            doctor_recommendation=safe_decrypt(p.doctor_recommendation),
            another=safe_decrypt(p.another),
            additional_notes=p.additional_notes
        )
        decrypted_patients.append(decrypted_p)
    return decrypted_patients

@app.delete("/api/admin/volunteers/{volunteer_id}")
def delete_volunteer(volunteer_id: int, admin: dict = Depends(verify_admin_token), db: Session = Depends(get_db)):
    volunteer = db.query(VolunteerModel).filter(VolunteerModel.id == volunteer_id).first()
    if not volunteer:
        raise HTTPException(status_code=404, detail="Volunteer not found")
    
    db.delete(volunteer)
    db.commit()
    return {"message": "Deleted successfully"}

@app.delete("/api/admin/patients/{patient_id}")
def delete_patient(patient_id: int, admin: dict = Depends(verify_admin_token), db: Session = Depends(get_db)):
    patient = db.query(PatientModel).filter(PatientModel.id == patient_id).first()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    
    db.delete(patient)
    db.commit()
    return {"message": "Deleted successfully"}

