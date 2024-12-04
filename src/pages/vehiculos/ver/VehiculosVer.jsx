import React, { useState } from "react";
import FichaTecnica from "../../../components/FichaTecnica/FichaTecnica";
import VehiculoInfo from "../../../components/VehiculoInfo/VehiculoInfo";
import VehiculoMenu from "../../../components/VehiculoMenu/VehiculoMenu";
import imgcar from "../../../assets/img/carro.jpeg";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Tabla from "../../../components/Tabla/Tabla";

function VehiculosVer() {
  const { placa } = useParams();
  const [seccionActiva, setSeccionActiva] = useState("Ficha técnica");

  const vehiculos = [
    {
      Placa: 'DLZ759',
      Linea: "BT 50",
      "Tipo vehiculo": "Pick up",
      Modelo: "2012",
      Proveedor: "KAREN LICET ZAMBRANO BARRETO",
      Activo: true,
      FechaVinculacion: "2024-08-27",
      RegistradoPor: "Javier González",
      Odometro: "2024-08-27",
      Anio: "2024",
      Color: "Aluminio Metálico",
      TipoMedicion: "Kilómetros",
      TipoTrabajo: "Normal",
      Combustible: "DIESEL",
      ImagenSrc: imgcar,
      Marca: "MAZDA",
      TipoCarroceria: "DOBLE CABINA",
      Chasis: "9FJUN84W3C0105076",
      Propietario: "MONTENEGRO SILVA RAFAEL TOMAS",
      Cilindraje: "2499",
      Capacidad: "1000-5",
      Identificacion: "72272470",
      Servicio: "PARTICULAR",
      Motor: "WLAT1324667",
      FechaMatricula: "2012-05-17",
      Clase: "CAMIONETA",
      Vin: "9FJUN84W3C0105076",
      OrganismoTransito: "STRIA DE TTOYTTE MEDELLIN",
      Licencia: "10015567324",
      AfiliadoCon: "FACTORY IL",
      Interno: "# Interno"
    },
    {
      Placa: 'DLZ754',
      Linea: "BT 50",
      "Tipo vehiculo": "Pick up",
      Modelo: "2012",
      Proveedor: "CARLOS PÉREZ",
      Activo: false,
      FechaVinculacion: "2023-07-12",
      RegistradoPor: "María Rodríguez",
      Odometro: "2023-07-12",
      Anio: "2023",
      Color: "Blanco Perlado",
      TipoMedicion: "Kilómetros",
      TipoTrabajo: "Carga Pesada",
      Combustible: "GASOLINA",
      ImagenSrc: imgcar,
      Marca: "FORD",
      TipoCarroceria: "SENCILLA",
      Chasis: "1FTFX1EF0EKE77452",
      Propietario: "ANDRÉS GÓMEZ",
      Cilindraje: "3500",
      Capacidad: "1500-3",
      Identificacion: "65498712",
      Servicio: "COMERCIAL",
      Motor: "EFG12345678",
      FechaMatricula: "2018-09-15",
      Clase: "CAMIONETA",
      Vin: "1FTFX1EF0EKE77452",
      OrganismoTransito: "SECRETARÍA DE TRÁNSITO BOGOTÁ",
      Licencia: "12345678901",
      AfiliadoCon: "RUTA LOGÍSTICA",
      Interno: "#12345"
    },
    {
      Placa: 'DLZ753',
      Linea: "BT 50",
      "Tipo vehiculo": "Pick up",
      Modelo: "2012",
      Proveedor: "JUAN MARTÍNEZ",
      Activo: true,
      FechaVinculacion: "2022-03-15",
      RegistradoPor: "Luis Álvarez",
      Odometro: "2022-03-15",
      Anio: "2022",
      Color: "Negro Mate",
      TipoMedicion: "Millas",
      TipoTrabajo: "Personal",
      Combustible: "ELÉCTRICO",
      ImagenSrc: imgcar,
      Marca: "TESLA",
      TipoCarroceria: "LUXURY",
      Chasis: "5YJ3E1EA1JF086249",
      Propietario: "CLARA LÓPEZ",
      Cilindraje: "NA",
      Capacidad: "2000-6",
      Identificacion: "98765432",
      Servicio: "PARTICULAR",
      Motor: "ELE123456789",
      FechaMatricula: "2021-06-10",
      Clase: "SEDÁN",
      Vin: "5YJ3E1EA1JF086249",
      OrganismoTransito: "TRANSITO CALI",
      Licencia: "09876543211",
      AfiliadoCon: "GREEN TECH",
      Interno: "#67890"
    }
  ];

  const vehiculo = vehiculos.find((v) => v.Placa === placa);

  if (!vehiculo) {
    return <p>No se encontró un vehículo con esa placa.</p>;
  }

  const renderSeccionActiva = () => {
    switch (seccionActiva) {
      case "Ficha técnica":


        
        return (
          <FichaTecnica
            placa={vehiculo.Placa}
            marca={vehiculo.Marca}
            tipoCarroceria={vehiculo.TipoCarroceria}
            chasis={vehiculo.Chasis}
            linea={vehiculo.Linea}
            combustible={vehiculo.Combustible}
            propietario={vehiculo.Propietario}
            cilindraje={vehiculo.Cilindraje}
            capacidad={vehiculo.Capacidad}
            identificacion={vehiculo.Identificacion}
            servicio={vehiculo.Servicio}
            motor={vehiculo.Motor}
            fechaMatricula={vehiculo.FechaMatricula}
            clase={vehiculo.Clase}
            vin={vehiculo.Vin}
            organismoTransito={vehiculo.OrganismoTransito}
            licencia={vehiculo.Licencia}
            afiliadoCon={vehiculo.AfiliadoCon}
            interno={vehiculo.Interno}
          />
        );
      case "Documentación":

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

        return ( <Tabla
          datos={datos}      
  
          mostrarAcciones={true}    
          columnaAccion="Placa"   
          botonesAccion={botones}  
  
          habilitarPaginacion={false}
  
          habilitarBusqueda={false}
  
  
          habilitarOrdenamiento={true}
          // columnasVisibles={['Linea', 'Modelo']}
  
          habilitarExportacion={true}
  
          // nombreExcel="lista_de_vehiculos"
  
          habilitarTotalRegistros={false}
          > 
  
          </Tabla>);
      case "Comparendos":
        return <p>Componente de Comparendos</p>;
      case "Seg. odómetro":
        return <p>Componente de Seguimiento de Odómetro</p>;
      case "Mantenimientos":
        return <p>Componente de Mantenimientos</p>;
      case "Contratación":
        return <p>Componente de Contratación</p>;
      case "Operatividad":
        return <p>Componente de Operatividad</p>;
      case "Inspecciones":
        return <p>Componente de Inspecciones</p>;
      case "Latonería":
        return <p>Componente de Latonería</p>;
      case "Siniestros":
        return <p>Componente de Siniestros</p>;
      case "Proveedor":
        return <p>Componente de Proveedor</p>;
      default:
        return <p>Selecciona una opción válida</p>;
    }
  };

  return (
    <div>
      <VehiculoInfo
        placa={vehiculo.Placa}
        modelo={vehiculo.Linea}
        activo={vehiculo.Activo}
        fechaVinculacion={vehiculo.FechaVinculacion}
        registradoPor={vehiculo.RegistradoPor}
        odometro={vehiculo.Odometro}
        anio={vehiculo.Anio}
        color={vehiculo.Color}
        tipoMedicion={vehiculo.TipoMedicion}
        tipoTrabajo={vehiculo.TipoTrabajo}
        combustible={vehiculo.Combustible}
        imagenSrc={vehiculo.ImagenSrc}
      />

      <VehiculoMenu placa={vehiculo.Placa} setSeccionActiva={setSeccionActiva} />

      <div>{renderSeccionActiva()}</div>
    </div>
  );
}

export default VehiculosVer;
