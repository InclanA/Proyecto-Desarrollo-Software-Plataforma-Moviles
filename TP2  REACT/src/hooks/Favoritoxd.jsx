import { useState } from "react";

export function Favorito() {

    const [favoritos, setFavoritos] = useState([])

    const agregarFavorito = (personaje) => {

        if (!favoritos.includes(personaje)) {

            setFavoritos([...favoritos, personaje])

        } else {

            const quitar = favoritos.filter(
                guardar => personaje.id !== guardar.id
            )

            setFavoritos(quitar)
        }
    }

    return {
        agregarFavorito,
        favoritos
    }
}


