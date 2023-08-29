import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import CheckIn from "./pages/CheckIn"
import CrearAsistente from "./pages/crearAsistente"
import BuscarAsistente from "./pages/BuscarAsistente"
import Menu from "./pages/Menu"
import BuscarTusLogros from "./pages/Logros/BuscarTusLogros"
import MenuLogros from "./pages/Logros/MenuLogros"
import MenuLogroMarca from "./pages/Logros/LogrosPorMarca/MenuLogroMarca"
import ObtenerLogro from "./pages/Logros/LogrosPorMarca/ObtenerLogro"
import PodioLogros from "./pages/Logros/PodioLogros"
import Itinerario from "./pages/Itinerario"

//Routeo para redireccionar 

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthLayout/>}>
        <Route index element={<Menu/>}/>
        <Route path="check-in" element={<CheckIn/>}/>
        <Route path='crear-asistente' element={<CrearAsistente/>}/>
        <Route path='buscar-asistente' element={<BuscarAsistente/>}/>
        <Route path='itinerario' element={<Itinerario/>}/>

        {/* LOGROS ROUTES */}
        <Route path='menu-logros' element={<MenuLogros/>}/>
        <Route path='buscar-logros' element={<BuscarTusLogros/>}/>
        <Route path='menu-conseguir-logros' element={<MenuLogroMarca/>}/>
        <Route path='obtener-logro' element={<ObtenerLogro />}/>
        <Route path='podio-recompensas' element={<PodioLogros/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
