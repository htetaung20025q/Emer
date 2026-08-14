from sqlalchemy import Column, Integer, String, Boolean, Date, Text
from backend.app.config.database import Base

class VolunteerModel(Base):
    __tablename__ = "volunteers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    age = Column(Integer)
    gender = Column(String)
    phone = Column(String) # Encrypted
    blood_group = Column(String, index=True)
    address = Column(String) # Encrypted
    last_donation_date = Column(Date, nullable=True)
    never_donated = Column(Boolean, default=False)
    weight = Column(Integer)
    ready_for_emergency = Column(Boolean, default=False)
    contact_number = Column(String, nullable=True) # Encrypted
    contact_number_by = Column(String, nullable=True) # Encrypted
    final_blood_donor = Column(String, nullable=True)
