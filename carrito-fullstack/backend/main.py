from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Union
from fastapi.middleware.cors import CORSMiddleware
import mercadopago
import os
from dotenv import load_dotenv

load_dotenv()

Mercadopago = os.getenv("TOKEN_DESARROLLO")
sdk = mercadopago.SDK(Mercadopago)

class Producto(BaseModel):
    id: Union[int,str]
    title: str
    unit_price: float
    quantity: int

class Carrito(BaseModel):
    items: List[Producto]
    user: str


app = FastAPI()

dominios = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=dominios,       # Permite solicitudes de estos dominios
    allow_credentials=True,      # Permite cookies y encabezados de autenticación
    allow_methods=["*"],         # Permite todos los métodos (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],         # Permite todos los encabezados HTTP
)
@app.get("/")
def root():
    return ":v"
    
@app.get("/carrito")
def ver_carrito():
    return {"mensaje": "Carrito funcionando"}

@app.post("/carrito")
def carrito(carrito: Carrito):
    datos = {
        "items": [
    {
        "title": item.title,
        "quantity": item.quantity,
        "unit_price": item.unit_price,
    }
        for item in carrito.items
    ]
}

    respuesta = sdk.preference().create(datos)
    preferencia = respuesta["response"]

    return {
        "id": preferencia["id"],
        "init_point": preferencia["init_point"],
        "sandbox_init_point": preferencia["sandbox_init_point"]
}