import fetch from './hooks/Fetch'
import Carro from './hooks/Carrito'
import backendapi from './hooks/Backend'
import './App.css'

function App() {
const{carrito,agregar,eliminar,reducir,aumentar,total} = Carro()
const {data} = fetch()
const {enviar} = backendapi()

return (
<>
<h1>laptops</h1>
<div className="xd">
<div className="productos">
{data?.map(productos=>(
<div key={productos.id}>
    <img className="imagen" src={productos.images?.[0]}/>
    <h2 className="nombre">{productos.title}</h2>
    <p className="precio">${productos.price}</p>
    <button className="boton" onClick={()=>agregar(productos)}>agregar al acarro</button>
</div>
))}
</div>


<aside className="carrito">

<h2>Carrito :v</h2>

<hr />

{carrito.length===0 ? (
  <p>carro vacio :v</p>
) : (
<div className="lista">

{carrito.map(productos=>(
<div className="item" key={productos.id}>

<span>{productos.title}</span>

<span>x{productos.cantidad}</span>

<div className="botones-cantidad">
<button onClick={()=>reducir(productos)}>-</button>
<button onClick={()=>aumentar(productos)}>+</button>
<button onClick={()=>eliminar(productos)}>x</button>
</div>

</div>
))}


<p>total ${total}</p>

</div>
)}
<button className="boton-confirmar" onClick={()=>enviar(carrito)}>confirmar compra :v</button>
</aside>
</div>
</>
)
}

export default App;