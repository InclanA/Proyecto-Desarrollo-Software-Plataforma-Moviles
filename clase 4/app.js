import { fetchData } from "./utils/fetchData.js";
import { filterData } from "./utils/filterData.js";

const data = await fetchData();
console.log(data)
filterData(data);