import React from "react";
import "./styles.css";

const VehiculoMenu = ({ placa, setSeccionActiva }) => {
  const handleChange = (e) => {
    setSeccionActiva(e.target.value);
  };

  return (
    <div className="contenedor-version-1">
      <div className="contenedor-version-1-info">
        <div className="contenedor-version-1-info-titulo">
          <h2>
            Ver detalles del vehículo: <span>{placa}</span>
          </h2>
          <div className="contenedor-menu-vehiculo">
            <select name="menu" id="menu" onChange={handleChange}>
              <option value="Ficha técnica">Ficha técnica</option>
              <option value="Documentación">Documentación</option>
              <option value="Comparendos">Comparendos</option>
              <option value="Seg. odómetro">Seg. odómetro</option>
              <option value="Mantenimientos">Mantenimientos</option>
              <option value="Contratación">Contratación</option>
              <option value="Operatividad">Operatividad</option>
              <option value="Inspecciones">Inspecciones</option>
              <option value="Latonería">Latonería</option>
              <option value="Siniestros">Siniestros</option>
              <option value="Proveedor">Proveedor</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiculoMenu;
