// hook para manejar el carrito de compras
import { useEffect,useMemo,useState } from "react";

export default function Carro(){
    const[carrito, setCarrito] = useState(() => {
    const guardar = localStorage.getItem("Productos");
    return guardar ? JSON.parse(guardar) : []
    })
   
useEffect(() => {

localStorage.setItem("Productos", JSON.stringify(carrito))
}, [carrito])


const agregar = (productos) => {
    setCarrito(prev => {
        const inclan = prev.find(element => element.id === productos.id)
        if(inclan){
            return prev.map(element => element.id === productos.id ? {...element, cantidad: element.cantidad + 1} : element)
        }
        return[...prev, {...productos,cantidad: 1 }]
    })
}
const eliminar = (productos) => {
    setCarrito(prev => prev.filter(element => element.id !== productos.id))
}

const reducir = (productos) => {
    setCarrito(prev => prev.map(element => element.id === productos.id ? {...productos, cantidad: productos.cantidad - 1 >= 0 ? productos.cantidad - 1 : 0}: element))
}

const aumentar = (productos) => {
    setCarrito(prev => prev.map(element => element.id !== productos.id ? {...productos, cantidad: productos.cantidad + 1} : element))
}

const total = useMemo(() => {
    return Math.round(carrito.reduce((total,item) => total + (item.price * item.cantidad), 0)) 

}, [carrito])

return {
carrito,
agregar,
eliminar,
reducir,
aumentar,
total
}
}