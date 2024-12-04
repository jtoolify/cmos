import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout/DashboardLayout'
import Inicio from '../pages/Inicio/Inicio'
import VehiculosLista from '../pages/vehiculos/lista/VehiculosLista'
import VehiculosVer from '../pages/vehiculos/ver/VehiculosVer'

function Routers() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/vehiculos/lista" element={<VehiculosLista />} />
        <Route path="/vehiculos/ver/:placa" element={<VehiculosVer />} />
      </Route>

      <Route >
        <Route path="/*" element={<div>404 <a href="/">ir a inicio</a></div>} />
      </Route>
    </Routes>
  )
}

export default Routers