// hook para obtener productos uso de axios y dummyJSON

import { useEffect, useState } from "react";
import axios from "axios"
export default function fetch() {
const [data, setData] = useState([])

useEffect(() => {

async function datos() {
try{
const axel = await axios.get("https://dummyjson.com/products/category/laptops")
    setData(axel.data.products)
}catch(error){
    console.log(error)
}
}
datos()
}, [])
return{
    data
}
}