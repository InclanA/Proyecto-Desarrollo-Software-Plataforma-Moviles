import { useEffect, useState } from "react";

export default function useApod() {
  const [data, setData] = useState();
    useEffect(() => {
    fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=")
        .then(axel => axel.json())
        .then(data => setData(data[0]));
}, []);
  return data;
}