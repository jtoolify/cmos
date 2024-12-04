import React from 'react';
import Tabla from "../../../components/Tabla/Tabla";
import styles from "./Vehiculos.module.css"
import { Link } from 'react-router-dom';

// Definición de los botones con nombre, enlace y color
const botones = [
  { nombre: 'Ver', link: '/vehiculos/ver/', color: '#519453c7' },    
  { nombre: 'Editar', link: '/vehiculos/editar/', color: '#FF9800c7' }, 
  { nombre: 'Eliminar', link: '/eliminar/', color: '#f44336c7' }, 
];

const datos = [
    { Placa: 'DLZ759',  Marca: "mazda" ,Linea: "BT 50", "Tipo vehiculo": "Pick up", Modelo: "2012", Proveedor: "KAREN LICET ZAMBRANO BARRETO ajksajkbskja ajshash uiags ka iuagsjab ", Contrato: "con contrato", "estado": "taller" },
    { Placa: 'DLZ754',  Marca: "mazda" ,Linea: "BT 50", "Tipo vehiculo": "Pick up", Modelo: "2012", Proveedor: "KAREN LICET ZAMBRANO BARRETO", Contrato: "sin contrato", "estado": "taller" },
    { Placa: 'DLZ753',  Marca: "mazda" ,Linea: "BT 50", "Tipo vehiculo": "Pick up", Modelo: "2012", Proveedor: "KAREN LICET ZAMBRANO BARRETO", Contrato: "con contrato", "estado": "taller" },
    { Placa: 'DLZ752',  Marca: "mazda" ,Linea: "BT 50", "Tipo vehiculo": "Pick up", Modelo: "2012", Proveedor: "KAREN LICET ZAMBRANO BARRETO", Contrato: "sin contrato", "estado": "taller" },
    { Placa: 'DLZ751',  Marca: "mazda" ,Linea: "BT 50", "Tipo vehiculo": "Pick up", Modelo: "2012", Proveedor: "KAREN LICET ZAMBRANO BARRETO", Contrato: "sin contrato", "estado": "taller" },

];

function VehiculosLista() {
  return (
    <div>
      {/* <h1>Lista de vehículos</h1> */}

      <Tabla
        datos={datos}      

        mostrarAcciones={true}    
        columnaAccion="Placa"   
        botonesAccion={botones}  

        filasPorPagina={3}
        habilitarPaginacion={true}

        habilitarBusqueda={true}


        habilitarOrdenamiento={true}
        // columnasVisibles={['Linea', 'Modelo']}

        habilitarExportacion={true}
        columnasOmitidas={["Placa"]}

        // nombreExcel="lista_de_vehiculos"

        habilitarTotalRegistros={true}
        > 

        <Link to="#" className={styles.btnTool}>
          agregar 
        </Link>

        </Tabla>
    </div>
  );
}

export default VehiculosLista;
