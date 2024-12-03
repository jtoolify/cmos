import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout/DashboardLayout'
import Inicio from '../pages/Inicio/Inicio'
import VehiculosLista from '../pages/vehiculos/lista/VehiculosLista'

function Routers() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/vehiculos/lista" element={<VehiculosLista />} />
      </Route>
    </Routes>
  )
}

export default Routers