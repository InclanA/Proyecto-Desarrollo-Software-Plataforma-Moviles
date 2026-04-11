
const URLAPI = "https://rickandmortyapi.com/api/character";

//fetch(URLAPI)
   // .then(response => response.json())
    //.then(response => console.log(`usando.fetch ${response}`))
   // .catch(error=>  console.log(error));


const xd = async() => {
    try {
        const response = await fetch(URLAPI)
        const dataFinal = await response.json()
        renderData(dataFinal.results);
    }catch (error) {
        console.log(error)
    }
};

xd();


function renderData(apiResponse){
    apiResponse.forEach(element => {
        const toInsert = document.createElement('section');

        toInsert.innerHTML = `
        <article class="algo"> 
            <h1>${element.name}</h1>
            
            <img src="${element.image}">
        </article>
         `;
        toInsert.classList.add("otra")
        document.body.append(toInsert)
    
    });

}

    
