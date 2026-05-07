export default function Componentes({nombre,precio,imagem}) {
  return (
    <div>
        <img className="xd" src={imagem} />
      <h1>nombre :{nombre} </h1>
        <h1> precio: ${precio}</h1>
        
    
    </div>
  )
}