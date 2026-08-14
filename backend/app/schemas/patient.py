from pydantic import BaseModel, Field
from typing import Optional

class Patient(BaseModel):
    id: Optional[int] = None
    name: str
    age: int
    need_blood: str
    need_blood_body: Optional[str] = None
    blood_bags_quantity: int = 1
    emergency_level: Optional[str] = None
    hospital_name: str = Field(min_length=1)
    hospital_address: str
    contact_person_name: Optional[str] = None
    contact_number_by: Optional[str] = None
    contact_number: str
    doctor_recommendation: Optional[str] = None
    another: Optional[str] = None
    additional_notes: Optional[str] = None

    class Config:
        from_attributes = True