from sqlalchemy import Column, Integer, String, Boolean, Date, Text
from backend.app.config.database import Base

class PatientModel(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    age = Column(Integer)
    need_blood = Column(String)
    need_blood_body = Column(String, nullable=True)
    blood_bags_quantity = Column(Integer, default=1)
    emergency_level = Column(String, nullable=True)
    hospital_name = Column(String) # Encrypted
    hospital_address = Column(String) # Encrypted
    contact_person_name = Column(String, nullable=True)
    contact_number_by = Column(String, nullable=True) # Encrypted
    contact_number = Column(String) # Encrypted
    doctor_recommendation = Column(String, nullable=True) # Encrypted
    another = Column(String, nullable=True) # Encrypted
    additional_notes = Column(Text, nullable=True)
