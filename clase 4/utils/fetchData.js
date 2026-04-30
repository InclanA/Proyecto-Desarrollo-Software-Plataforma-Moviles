export async function fetchData() {
    try {
        const URL = "https://jsonplaceholder.typicode.com/users";
        const resultado = await fetch(URL);
        const dataFinal = await resultado.json();
        
        return(dataFinal);

    } catch (error) {
        console.error(error);
    }
}

fetchData();