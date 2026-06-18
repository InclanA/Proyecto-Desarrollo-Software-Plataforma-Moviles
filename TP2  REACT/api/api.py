from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

personajes = [
{
    "id": 1,
    "nombre": "Nick",
    "descripcion": "Un tipo bastante egoísta al principio, pero que termina ayudando al grupo a sobrevivir.",
    "tipo": "Superviviente",
    "imagen": "http://localhost:5000/static/Nick.png"
},
{
    "id": 2,
    "nombre": "Coach",
    "descripcion": "Ex entrenador con una personalidad amigable que siempre intenta mantener unido al equipo.",
    "tipo": "Superviviente",
    "imagen": "http://localhost:5000/static/Coach.png"
},
{
    "id": 3,
    "nombre": "Ellis",
    "descripcion": "Un mecánico joven y optimista que siempre tiene una historia para contar.",
    "tipo": "Superviviente",
    "imagen": "http://localhost:5000/static/Ellis.png"
},
{
    "id": 4,
    "nombre": "Rochelle",
    "descripcion": "Periodista decidida que mantiene la cabeza fría incluso en situaciones extremas.",
    "tipo": "Superviviente",
    "imagen": "http://localhost:5000/static/Rochelle.png"

    },
    {
        "id": 5,
        "nombre": "Hunter",
        "descripcion": "Infectado especial que acecha desde las sombras y ataca por sorpresa.",
        "tipo": "Infectado Especial",
        "imagen": "http://localhost:5000/static/Hunter.png",
    
    },
    {
        "id": 6,
        "nombre": "Smoker",
        "descripcion": "Prefiere atacar a distancia y separar a los supervivientes del grupo.",
        "tipo": "Infectado Especial",
        "imagen": "http://localhost:5000/static/OIP.png",
    },
    {
        "id": 7,
        "nombre": "Boomer",
        "descripcion": "Lento y torpe, pero muy peligroso cuando logra acercarse.",
        "tipo": "Infectado Especial",
        "imagen": "http://localhost:5000/static/Bommer.png",
    },
    {
        "id": 8,
        "nombre": "Tank",
        "descripcion": "El infectado más temido por su enorme fuerza y resistencia.",
        "tipo": "Infectado Especial",
        "imagen": "http://localhost:5000/static/Tank.png",
       
    },
    {
        "id": 9,
        "nombre": "Witch",
        "descripcion": "Normalmente permanece quieta, pero es extremadamente peligrosa si la provocan.",
        "tipo": "Infectado Especial",
        "imagen": "http://localhost:5000/static/Witch.png",
        
    },
    {
        "id": 10,
        "nombre": "Charger",
        "descripcion": "Puede derribar a los supervivientes con una carga poderosa.",
        "tipo": "Infectado Especial",
        "imagen": "http://localhost:5000/static/Charger.png",
        
    },
    {
        "id": 11,
        "nombre": "Jockey",
        "descripcion": "Pequeño y molesto, intenta controlar el movimiento de sus víctimas.",
        "tipo": "Infectado Especial",
        "imagen": "http://localhost:5000/static/Jockey.png",
        
    },
    {
        "id": 12,
        "nombre": "Spitter",
        "descripcion": "Ataca desde lejos dejando zonas peligrosas cubiertas de ácido.",
        "tipo": "Infectado Especial",
        "imagen": "http://localhost:5000/static/Spitter.png",
        
    },
    {
    "id": 13,
    "nombre": "inclan",
    "descripcion": "soy yo :v",
    "tipo": "Comunes",
    "imagen": ""
},
{
    "id": 14,
    "nombre": "jordan",
    "descripcion": "un amigo",
    "tipo": "Comunes",
    "imagen": ""
} ,
{
    "id": 15,
    "nombre": "ema",
    "descripcion": "un amigo",
    "tipo": "Comunes",
    "imagen": ""
},
]
@app.route("/")
def inicio():
    return jsonify({"aguante": "l4d2"})

@app.route("/personajes")
def get_personajes():
    return jsonify(personajes)

if __name__ == "__main__":
    app.run(debug=True)