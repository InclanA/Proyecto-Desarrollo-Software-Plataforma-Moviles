import { useState } from 'react'
import './App.css'
import { ObtenerDatos } from './hooks/ObtenerDatos'
import { Favorito } from './hooks/Favoritoxd'
import Personaje from './components/Personaje'

function App() {
  //const [input, setInput] = useState('')
  const { data , cargando } = ObtenerDatos()
  const { favoritos, agregarFavorito } = Favorito()

  return (
  <>
  <h1>Left 4 Dead 2</h1>
    
  {
  <p className='xd-p'>lista de personje favroito: {favoritos.map(axel => <p>{axel.nombre} </p>)}</p>
  }

  <main className="inclan">  
  {
    cargando ? <h1>cargando</h1> : data.map(personaje => ( <Personaje  key={personaje.id} personaje={personaje} agregarfav={agregarFavorito}/>))
  } 
  </main>
</>
  );
}

export default App