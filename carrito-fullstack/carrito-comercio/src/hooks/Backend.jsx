// conexion del carrito con el backend y MP

import axios from "axios"

export default function backendapi(){

const enviar = async (carro) => {

const items = carro.map(producto => ({
  id: producto.id,
  title: producto.title,
  unit_price: (producto.price),
  quantity: (producto.cantidad)
}))

try{
const respuesta = await axios.post(
  "http://localhost:8000/carrito",
{
  items,
  user: "cliente"
}
)
  console.log(respuesta.data)
  const urlpago = respuesta.data.sandbox_init_point

if(urlpago){
  window.location.href = urlpago
}

}catch(error){
  console.log(error.response.data)
}
}
return{
  enviar
}
}