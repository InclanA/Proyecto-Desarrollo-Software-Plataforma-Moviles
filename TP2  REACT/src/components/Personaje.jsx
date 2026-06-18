import placeholder from "../assets/placeholder.jpg"

function Personaje({ personaje, agregarfav }) {

return (
  <div className="personaje">
  <h2>{personaje.nombre}</h2>
{
personaje.imagen == "" ? 
  <img src={placeholder}/> 
  :<img src={personaje.imagen}/>
}
  <p> <strong className="ea">Descripcion </strong>
  <br/> <br/>{personaje.descripcion}</p>
    
  <button onClick={() => agregarfav(personaje)}>o</button>
    
</div>
  )
}

export default Personaje