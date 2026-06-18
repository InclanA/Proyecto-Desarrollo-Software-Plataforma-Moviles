import { useEffect, useState } from "react";

export function ObtenerDatos() {

    const [data, setData] = useState([]);
    const [cortar, setCortar] = useState ([])
    const [cargando, setCargando] = useState(true);
    const [pagina, setPagina] = useState(1)
    
    const APi = "http://localhost:5000/personajes" 
    const maximoporpagina = 4
    
    useEffect(() => {
       async function getdata(){
        try{
            const charger = await fetch(APi)
            const tank = await charger.json()
                setData(tank)
            } catch(error) {
                console.log(error);
            }finally{
                setCargando(false);
            }
        }
        getdata()

    }, []);

    useEffect(() => {
        const inicio = (pagina - 1) * maximoporpagina;  // 1 - 1 * 4 = 0. osea empieza en 0 la pagina 1
        const final = pagina * maximoporpagina;
        setCortar(data.slice(inicio, final));
    }, [data,pagina]);

    const adelante = () =>  {  setPagina(pagina + 1)
};
    const atras = () => { setPagina( pagina - 1)
       
};

const tipos = ["Superviviente", "Infectado Especial", "Comunes"];

const filtro = (nose) => {
const resultado = data.filter(personaje =>
personaje.tipo.includes(nose)
)
setCortar(resultado);
};

const eliminar = () => {
    setCortar([]);
};
    return {
        data,
        cargando,
        pagina,
        atras,
        adelante,
        cortar,
        filtro,
        eliminar
    }
}