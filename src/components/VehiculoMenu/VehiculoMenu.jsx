import React from 'react';
import './styles.css'; 

const VehiculoMenu = ({placa}) => {
  return (
    <div className="contenedor-version-1">
      <div className="contenedor-version-1-info">
        <div className="contenedor-version-1-info-titulo">
          <h2>Ver detalles del vehículo: <span>{placa}</span></h2>
          <div className="contenedor-menu-vehiculo">
            <select name="" id="">
              <option value="">Ficha técnica</option>
              <option value="">Documentación</option>
              <option value="">Comparendos</option>
              <option value="">Seg. odómetro</option>
              <option value="">Mantenimientos</option>
              <option value="">Contratación</option>
              <option value="">Operatividad</option>
              <option value="">Inspecciones</option>
              <option value="">Latonería</option>
              <option value="">Siniestros</option>
              <option value="">Proveedor</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiculoMenu;
