const componentes = [
    { 
    id: 1, 
    nombre: "Procesador",
    precio: 250 
    },
    { 
    id: 2, 
    nombre: "Placa de video", 
    precio: 1500
    },
    {
    id: 3,
    nombre: "Memoria RAM",
    precio: 600
    },
    { 
    id: 4,
    nombre: "disco duro",
    precio: 120
    },
    {
    id: 5,
    nombre: "Placa madre",
    precio: 250
    },
    {
    id: 6,
    nombre: "Fuente de poder",
    precio: 300
    } 
];
const componentesxd = componentes.map((componente) => {
    return `
    
    <h3> id: ${componente.id} </h3> 
    <p> nombre: ${componente.nombre} </p> 
    <p> precio: ${componente.precio} </p>
    <hr>
    `
    
});
document.getElementById("lista").innerHTML = componentesxd.join(" ");
let componentexd = document.getElementById("buscar");
let botonxdd = document.getElementById("botonxd");
let reiniciarxd = document.getElementById("r");

botonxdd.addEventListener("click", (e) => {
    e.preventDefault()
    const componentesE = componentes.filter(componente => componente.nombre === componentexd.value)
    document.getElementById("lista").innerHTML = componentesE.map(componente => `<h3> id: ${componente.id} </h3> <p> nombre: ${componente.nombre} </p> <p> precio: ${componente.precio} </p>`).join("")
})
reiniciarxd.addEventListener("click", (e) => {
e.preventDefault()
document.getElementById("lista").innerHTML = componentesxd.join('')

})