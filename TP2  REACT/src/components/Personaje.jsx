import placeholder from "../assets/placeholder.jpg"

function Personaje({ personaje, agregarfav }) {

return (
  <div className='personaje'>
    <h2>{personaje.nombre}</h2>
    {
      personaje.imagen == "" ? 
     <img src={placeholder}/> 
    :<img src={personaje.imagen}/>
    }
    <p>Descripcion - {personaje.descripcion}</p>
    <span> {personaje.habilidad}</span>
    <button onClick={() => agregarfav(personaje)}>❤</button>
</div>
  )
}

export default Personaje