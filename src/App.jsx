import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import CheckIn from "./pages/CheckIn"
import CrearAsistente from "./pages/crearAsistente"
import BuscarAsistente from "./pages/BuscarAsistente"
import Menu from "./pages/Menu"
import Logros from "./pages/Logros"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthLayout/>}>
        <Route index element={<Menu/>}/>
        <Route path="check-in" element={<CheckIn/>}/>
        <Route path='crear-asistente' element={<CrearAsistente/>}/>
        <Route path='buscar-asistente' element={<BuscarAsistente/>}/>
        <Route path='buscar-logros' element={<Logros/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
