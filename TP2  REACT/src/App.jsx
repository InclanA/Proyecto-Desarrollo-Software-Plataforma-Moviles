import { useState } from 'react'
import './App.css'
import { ObtenerDatos } from './hooks/ObtenerDatos'
import { Favorito } from './hooks/Favoritoxd'
import Personaje from './components/Personaje'

function App() {
  const [input, setInput] = useState("")
  const { data,cargando,atras,adelante,cortar,filtro,eliminar} = ObtenerDatos()
  const { favoritos, agregarFavorito } = Favorito()

  return (
  <>
  <div>
  <input value={input} onChange={(ax28) => setInput(ax28.target.value)}/>
  <button onClick={() => filtro(input)}> filtrar :v </button>
  <button onClick={() => eliminar()}> eliminar :V </button>
  </div>

  {
  <p className="xdp">{favoritos.map(axel => <p>{axel.nombre} </p>)}</p>
  }

<main className="inclan">  
  {
    cargando ? <h1>cargandoo</h1> : 
    cortar.map(personaje => 
    ( <Personaje  
      key={personaje.id} 
      personaje={personaje} 
      agregarfav={agregarFavorito}/>
    ))
  } 
</main>
<button className="botonesxd" onClick={adelante}>adelante</button>
<button className="botonesxd" onClick={atras}>atras</button>
</>
  );
}

export default App