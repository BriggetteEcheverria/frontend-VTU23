import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import AuthLayout from "./layouts/AuthLayout"
import CheckIn from "./pages/CheckIn"
import CrearAsistente from "./pages/crearAsistente"
import BuscarAsistente from "./pages/BuscarAsistente"
import MenuZebra from "./pages/MenuZebra"
import BuscarTusLogros from "./pages/Logros/BuscarTusLogros"
import MenuLogros from "./pages/Logros/MenuLogros"
import MenuLogroMarca from "./pages/Logros/LogrosPorMarca/MenuLogroMarca"
import ObtenerLogro from "./pages/Logros/LogrosPorMarca/ObtenerLogro"
import PodioLogros from "./pages/Logros/PodioLogros"
import Itinerario from "./pages/Itinerario"
import ComoJugar from "./pages/ComoJugar";
import ZebraEquipaje from "./pages/ZebraEquipaje";
import BrazaleteZebra from "./pages/BrazaleteZebra";
import ImpresionTickets from "./pages/Logros/ImpresionTickets";
import FiestaZebra from "./pages/FiestaZebra";
import EloRetos from "./pages/EloRetos";
import ReservarVR from "./pages/ReservarVR";

//Routeo para redireccionar 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route path='/' element={<BuscarTusLogros />} />
          <Route path='itinerario' element={<Itinerario />} />
          <Route path='podio-recompensas' element={<PodioLogros />} />
          <Route path='como-jugar' element={<ComoJugar />} />

          <Route path="menuZebra" element={<MenuZebra />} />
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
          <Route path='impresion-tickets' element={<ImpresionTickets />} />

          {/* ZEBRA ROUTAS */}
          <Route path='equipaje-zebra' element={<ZebraEquipaje />} />
          <Route path='brazalete-zebra' element={<BrazaleteZebra />} />
          <Route path='fiesta-zebra' element={<FiestaZebra />} />

           {/* ELO ROUTAS */}
           <Route path='retos-elo' element={<EloRetos />} />
           <Route path='reservar-vr' element={<ReservarVR />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
