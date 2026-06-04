from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

personajes = [
{
    "id": 1,
    "nombre": "Nick",
    "descripcion": "Un tipo bastante egoísta al principio, pero que termina ayudando al grupo a sobrevivir.",
    "imagen": "http://localhost:5000/static/Nick.png"
},
{
    "id": 2,
    "nombre": "Coach",
    "descripcion": "Ex entrenador con una personalidad amigable que siempre intenta mantener unido al equipo.",
    "imagen": "http://localhost:5000/static/Coach.png"
},
{
    "id": 3,
    "nombre": "Ellis",
    "descripcion": "Un mecánico joven y optimista que siempre tiene una historia para contar.",
    "imagen": "http://localhost:5000/static/Ellis.png"
},
{
    "id": 4,
    "nombre": "Rochelle",
    "descripcion": "Periodista decidida que mantiene la cabeza fría incluso en situaciones extremas.",
    "imagen": "http://localhost:5000/static/Rochelle.png"

    },
    {
        "id": 101,
        "nombre": "Hunter",
        "descripcion": "Infectado especial que acecha desde las sombras y ataca por sorpresa.",
        "imagen": "http://localhost:5000/static/Hunter.png",
        "habilidad": "Ataques sorpresa"
    },
    {
        "id": 102,
        "nombre": "Smoker",
        "descripcion": "Prefiere atacar a distancia y separar a los supervivientes del grupo.",
        "imagen": "http://localhost:5000/static/OIP.webp",
        "habilidad": "Capturar enemigos desde lejos"
    },
    {
        "id": 103,
        "nombre": "Boomer",
        "descripcion": "Lento y torpe, pero muy peligroso cuando logra acercarse.",
        "imagen": "http://localhost:5000/static/Bommer.png",
        "habilidad": "Atraer hordas de infectados"
    },
    {
        "id": 104,
        "nombre": "Tank",
        "descripcion": "El infectado más temido por su enorme fuerza y resistencia.",
        "imagen": "http://localhost:5000/static/Tank.png",
        "habilidad": "Fuerza devastadora"
    },
    {
        "id": 105,
        "nombre": "Witch",
        "descripcion": "Normalmente permanece quieta, pero es extremadamente peligrosa si la provocan.",
        "imagen": "http://localhost:5000/static/Witch.png",
        "habilidad": "Ataque letal"
    },
    {
        "id": 106,
        "nombre": "Charger",
        "descripcion": "Puede derribar a los supervivientes con una carga poderosa.",
        "imagen": "http://localhost:5000/static/Charger.png",
        "habilidad": "Impacto brutal"
    },
    {
        "id": 107,
        "nombre": "Jockey",
        "descripcion": "Pequeño y molesto, intenta controlar el movimiento de sus víctimas.",
        "imagen": "http://localhost:5000/static/Jockey.png",
        "habilidad": "Desorientar supervivientes"
    },
    {
        "id": 108,
        "nombre": "Spitter",
        "descripcion": "Ataca desde lejos dejando zonas peligrosas cubiertas de ácido.",
        "imagen": "http://localhost:5000/static/Spitter.png",
        "habilidad": "Control de área"
    }
]
@app.route("/")
def inicio():
    return jsonify({"mensaje": "L4D2"})

@app.route("/personajes")
def get_personajes():
    return jsonify(personajes)

if __name__ == "__main__":
    app.run(debug=True)