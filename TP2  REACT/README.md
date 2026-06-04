# Inclan Axel
# React + Vite: Left 4 Dead 2 Characters App

En este repo  se encuentra una app en React que consume una API local de Left 4 Dead 2 que muestra personajes en tarjetas con su imagen y nombre. También permite buscarlos, agregarlos a favoritos y navegar entre distintas páginas. Para mantener el código más organizado se utilizaron componentes y custom hooks.



## Estructura del Proyecto

```text
src/
├── assets/
│   ├── hero.png
│   └── placeholder.jpg
├── components/
│   └── Personaje.jsx          # Tarjeta de personaje
├── hooks/
│   ├── ObtenerDatos.jsx       # Obtención de datos 
│   └── Favoritoxd.jsx         # Gestión de favoritos
├── App.jsx                    # Componente principal
├── App.css                    
├── index.css                  
└── main.jsx                  
```
## Aclaraciones sobre la API

La aplicación utiliza una API local desarrollada con Flask. Esta API almacena información de personajes de Left 4 Dead 2 y devuelve los datos en formato JSON para ser consumidos por el frontend realizado en React.
