import { useEffect, useState } from "react";

export function ObtenerDatos() {
    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/personajes")
            .then(res => res.json())
            .then(data => {
                setData(data);
                setCargando(false);
            })
            .catch(error => {
                console.log(error);
                setCargando(false);
            });
    }, []);

    return {
        data,
        cargando
    };
}