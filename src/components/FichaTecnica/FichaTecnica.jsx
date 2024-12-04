import React from 'react';
import styles from './FichaTecnica.module.css';

const FichaTecnica = ({
  placa,
  marca,
  tipoCarroceria,
  chasis,
  linea,
  combustible,
  propietario,
  cilindraje,
  capacidad,
  identificacion,
  servicio,
  motor,
  fechaMatricula,
  clase,
  vin,
  organismoTransito,
  licencia,
  afiliadoCon,
  interno
}) => {
  return (
    <div className={styles['contenedor-info-vehiculo']}>
      <div className={styles['contenedor-info-contenido']}>
        <div className={styles['contenedor-info-contenido-titulo']}>
          <h2>Ficha Técnica: <span>{placa}</span></h2>
        </div>
        <div className={styles['contenedor-info-contenido-detalles']}>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Marca</span>
            <span>{marca}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Tipo carrocería</span>
            <span>{tipoCarroceria}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>No. Chasis</span>
            <span>{chasis}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Línea</span>
            <span>{linea}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Combustible</span>
            <span>{combustible}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Propietario</span>
            <span>{propietario}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Cilindraje</span>
            <span>{cilindraje}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Capacidad</span>
            <span>{capacidad}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Identificación</span>
            <span>{identificacion}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Servicio</span>
            <span>{servicio}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>No. Motor</span>
            <span>{motor}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Fecha Matrícula</span>
            <span>{fechaMatricula}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Clase</span>
            <span>{clase}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>VIN</span>
            <span>{vin}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Organismo de Tránsito</span>
            <span>{organismoTransito}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>No. Licencia</span>
            <span>{licencia}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Afiliado con</span>
            <span>{afiliadoCon}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>No. Interno</span>
            <span>{interno}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FichaTecnica;
