import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import AuthLayout from "./layouts/AuthLayout"
import CheckIn from "./pages/CheckIn"
import CrearAsistente from "./pages/crearAsistente"
import BuscarAsistente from "./pages/BuscarAsistente"
import MenuStaff from "./pages/MenuStaff"
import BuscarTusLogros from "./pages/Logros/BuscarTusLogros"
import MenuLogros from "./pages/Logros/MenuLogros"
import MenuLogroMarca from "./pages/Logros/LogrosPorMarca/MenuLogroMarca"
import ObtenerLogro from "./pages/Logros/LogrosPorMarca/ObtenerLogro"
import PodioLogros from "./pages/Logros/PodioLogros"
import Itinerario from "./pages/Itinerario"
import MenuAsistente from "./pages/MenuAsistente"
import SidebarAsistente from "./components/SidebarAsistente";

//Routeo para redireccionar 

function App() {

  return (
    <BrowserRouter>
      {/* <SidebarAsistente> */}
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route path='/' element={<BuscarTusLogros />} />
            <Route path='itinerario' element={<Itinerario />} />
            <Route path='podio-recompensas' element={<PodioLogros />} />
          </Route>

          <Route path='/' element={<AuthLayout />}>
            <Route path="menu/staff" element={<MenuStaff />} />
            <Route path="check-in" element={<CheckIn />} />
            <Route path='crear-asistente' element={<CrearAsistente />} />
            <Route path='buscar-asistente' element={<BuscarAsistente />} />
            <Route path='itinerario-public' element={<Itinerario />} />

            {/* LOGROS ROUTES */}
            <Route path='menu-logros' element={<MenuLogros />} />
            <Route path='buscar-logros' element={<BuscarTusLogros />} />
            <Route path='menu-conseguir-logros' element={<MenuLogroMarca />} />
            <Route path='obtener-logro' element={<ObtenerLogro />} />
            <Route path='podio-recompensas-public' element={<PodioLogros />} />
          </Route>
        </Routes>
      {/* </SidebarAsistente> */}
    </BrowserRouter>
  )
}

export default App
