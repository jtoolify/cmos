import FichaTecnica from "../../../components/FichaTecnica/FichaTecnica";
import VehiculoInfo from "../../../components/VehiculoInfo/VehiculoInfo";
import imgcar from "../../../assets/img/carro.jpeg";
import VehiculoMenu from "../../../components/VehiculoMenu/VehiculoMenu";
import { useParams } from "react-router-dom";

function VehiculosVer() {
  const { placa } = useParams();

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
  

  const vehiculo = vehiculos.find(v => v.Placa === placa);

  if (!vehiculo) {
    return <p>No se encontró un vehículo con esa placa.</p>;
  }

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

      <VehiculoMenu placa={vehiculo.Placa} />

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
    </div>
  );
}

export default VehiculosVer;
