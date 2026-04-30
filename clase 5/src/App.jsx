import './App.css'
import { CPU, RAM, GPU, Disco } from './components/componentesdepc'
import Saludar from './components/saludarme'
import { SinDefault } from './components/sinDefault'

function App() {
  return (
    <>
      <Saludar  nombre="Axel" apellido="Inclan" edad="39" />
      <SinDefault />

      <strong>COMPONENTES PC</strong>
      <CPU cpu="RYZEN 9 9950x3d" />
      <GPU gpu="RTX 5090" />
      <RAM ram="32" />
      <Disco disco="12" />
    </>
  )
}
export default App