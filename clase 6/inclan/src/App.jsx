import './App.css'
import Componentes from './components/Componentes'

function App() {

const pc = [
  {
    id: 1,
    nombre: "Ryzen 9 9950X3D",
    precio: 1200000,
    foto: "Ryzen 9.png"
  },
  {
    id: 2,
    nombre: "RTX 5090",
    precio: 3500000,
    foto: "RTX.png"
  },
  {
    id: 3,
    nombre: "Monitor 4K",
    precio: 900000,
    foto: "Monitor.png"
  },
  {
    id: 4,
    nombre: "RAM 64GB DDR5",
    precio: 450000,
    foto: "Ram 64.png"
  }
]
return (
<>
<h2>COMPONENTES inclan</h2>
<br />
 {
  pc.map(({id,nombre,precio, foto}) => {
    return(
      <Componentes 
      key={id} 
      imagem={foto}
      nombre={nombre}
      precio={precio}
       />
    )
  })
 }
</>
 )
}
export default App


