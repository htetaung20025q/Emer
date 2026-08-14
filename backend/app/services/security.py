from cryptography.fernet import Fernet
import os


SECRET_KEY = os.getenv("SECRET_KEY")

cipher_suite = Fernet(SECRET_KEY)

def encrypt(data):
    return cipher_suite.encrypt(data.encode())

def decrypt(data):
    return cipher_suite.decrypt(data).decode()