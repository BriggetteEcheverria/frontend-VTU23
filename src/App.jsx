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
import ListadoReservasVr from "./pages/ListadoReservasVr";
import PuntuacionVR from "./pages/puntuacionVR";
import TablaPuntuacionesVR from "./pages/TablaPuntuacionesVR";
import LogrosCharla from "./pages/Logros/LogrosCharla";
import Charlas2 from "./pages/Logros/Charlas2";
import Charlas3 from "./pages/Logros/Charlas3";
import TriviaZebra from "./pages/TriviaZebra";
import CorreosCharla from "./pages/CorreosCharla";
import ActivarCorreosCharla from "./pages/ActivarCorreosCharla";
import PodioLogros2 from "./pages/Logros/PodioLogros2";
import Gainscha from "./pages/Gainscha";


//Routeo para redireccionar 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route path='/' element={<BuscarTusLogros />} />
          <Route path='itinerario' element={<Itinerario />} />
          <Route path='podio-recompensas' element={<PodioLogros />} />
          <Route path='podio-recompensas2' element={<PodioLogros2 />} />
          <Route path='como-jugar' element={<ComoJugar />} />
          <Route path='logros-charla' element={<LogrosCharla />} />
          <Route path='charlas-3' element={<Charlas3 />} />
          <Route path='charlas-2' element={<Charlas2 />} />
          <Route path='correos-charla' element={<CorreosCharla />} />
          <Route path='activar-correos-charla' element={<ActivarCorreosCharla />} />



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
          <Route path='trivia-zebra' element={<TriviaZebra />} />

           {/* ELO ROUTAS */}
           <Route path='retos-elo' element={<EloRetos />} />
           <Route path='reservar-vr' element={<ReservarVR />} />
           <Route path='reservas-vr' element={<ListadoReservasVr />} />
           <Route path='puntuacion-vr' element={<PuntuacionVR />} />
           <Route path='tabla-puntuacion-vr' element={<TablaPuntuacionesVR />} />

          {/* GAINSCHA SOLUCION */}
          <Route path='gainscha' element={<Gainscha />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
