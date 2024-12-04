import React from 'react';
import styles from './VehiculoInfo.module.css';

const VehiculoInfo = ({
  placa,
  modelo,
  activo,
  fechaVinculacion,
  registradoPor,
  odometro,
  anio,
  color,
  tipoMedicion,
  tipoTrabajo,
  combustible,
  imagenSrc
}) => {
  return (
    <div className={styles['contenedor-info-vehiculo']}>
      <div className={styles['contenedor-info-vehiculo-imagen']}>
        <img src={imagenSrc} alt={`Logo ${modelo}`} />
      </div>
      <div className={styles['contenedor-info-contenido']}>
        <div className={styles['contenedor-info-contenido-titulo']}>
          <h2>
            <span>{placa}</span> {modelo}
          </h2>
          <p>
            <span className={activo ? styles.activo : styles.inactivo}></span> {activo ? 'activo' : 'inactivo'}
          </p>
        </div>
        <div className={styles['contenedor-info-contenido-detalles']}>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Fecha vinculación</span>
            <span>{fechaVinculacion}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Registrado por</span>
            <span>{registradoPor}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Odómetro actual</span>
            <span>{odometro}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Modelo</span>
            <span>{anio}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Color</span>
            <span>{color}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Tipo medición</span>
            <span>{tipoMedicion}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Tipo trabajo</span>
            <span>{tipoTrabajo}</span>
          </div>
          <div className={styles['contenedor-info-contenido-detalles-item']}>
            <span>Combustible</span>
            <span>{combustible}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiculoInfo;
