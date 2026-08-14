from pydantic import BaseModel
from typing import Optional
from datetime import date

class Volunteer(BaseModel):
    id: Optional[int] = None
    name: str
    age: int
    gender: str
    phone: str
    blood_group: str
    address: str
    last_donation_date: Optional[date] = None
    never_donated: bool = False
    weight: int
    ready_for_emergency: bool = False
    contact_number: Optional[str] = None
    contact_number_by: Optional[str] = None
    final_blood_donor: Optional[str] = None

    class Config:
        from_attributes = True