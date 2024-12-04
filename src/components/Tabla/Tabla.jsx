import React, { useState, useEffect } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import * as XLSX from 'xlsx'; 
import styles from './Tabla.module.css';

const Tabla = ({
  children,
  datos,
  mostrarAcciones,
  columnaAccion,
  botonesAccion,
  filasPorPagina = 3,
  habilitarPaginacion = true, 
  habilitarBusqueda = true, // Habilitar/deshabilitar búsqueda
  habilitarOrdenamiento = true, // Habilitar/deshabilitar ordenamiento
  columnasVisibles = [], // Propiedad para indicar qué columnas mostrar
  habilitarExportacion = false, // Habilitar/deshabilitar exportación a Excel
  columnasOmitidas = [], // Lista de columnas a omitir al exportar
  nombreExcel = "datos_tabla",
  habilitarTotalRegistros = true
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const paginaInicial = parseInt(queryParams.get('page'), 10) || 1;

  const [paginaActual, setPaginaActual] = useState(paginaInicial);
  const [filtro, setFiltro] = useState('');
  const [columnaOrdenada, setColumnaOrdenada] = useState(null); // Columna seleccionada para ordenar
  const [ordenAscendente, setOrdenAscendente] = useState(true); // Dirección del orden

  const ordenarDatos = (datos, columna, ascendente) => {
    if (!columna) return datos;
    return [...datos].sort((a, b) => {
      const valorA = a[columna];
      const valorB = b[columna];

      if (valorA == null) return 1;
      if (valorB == null) return -1;

      if (typeof valorA === 'string') {
        return ascendente
          ? valorA.localeCompare(valorB)
          : valorB.localeCompare(valorA);
      } else {
        return ascendente ? valorA - valorB : valorB - valorA;
      }
    });
  };

  const datosFiltrados = datos
    .filter((item) =>
      Object.values(item).some((valor) =>
        valor.toString().toLowerCase().includes(filtro.toLowerCase())
      )
    );

  const datosOrdenados = ordenarDatos(
    datosFiltrados,
    columnaOrdenada,
    ordenAscendente
  );

  const totalPaginas = habilitarPaginacion
    ? Math.ceil(datosOrdenados.length / filasPorPagina)
    : 1;

  const indiceUltimaFila = habilitarPaginacion
    ? paginaActual * filasPorPagina
    : datosOrdenados.length;
  const indicePrimeraFila = habilitarPaginacion
    ? indiceUltimaFila - filasPorPagina
    : 0;
  const datosPaginados = datosOrdenados.slice(indicePrimeraFila, indiceUltimaFila);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
      navigate(`?page=${nuevaPagina}`);
    }
  };

  const manejarOrdenamiento = (columna) => {
    if (columna === columnaOrdenada) {
      setOrdenAscendente(!ordenAscendente);
    } else {
      setColumnaOrdenada(columna);
      setOrdenAscendente(true);
    }
  };

  const totalRegistros = datosFiltrados.length;
  const primerRegistro = (paginaActual - 1) * filasPorPagina + 1;
  const ultimoRegistro = Math.min(paginaActual * filasPorPagina, totalRegistros);

  // Función para exportar los datos a Excel (ahora exporta todos los datos filtrados)
  const exportarAExcel = () => {
    // Exportamos todos los datos filtrados, sin paginación
    const datosAExportar = datosFiltrados;

    // Filtramos las columnas a exportar eliminando las columnas omitidas
    const datosFiltradosColumnas = datosAExportar.map((fila) => {
      const filaFiltrada = {};
      Object.keys(fila).forEach((key) => {
        if (!columnasOmitidas.includes(key)) {
          filaFiltrada[key] = fila[key];
        }
      });
      return filaFiltrada;
    });

    // Creamos el archivo Excel con los datos filtrados y omitidos
    const ws = XLSX.utils.json_to_sheet(datosFiltradosColumnas);

    // Creamos un libro de trabajo (workbook)
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');

    // Exportamos el archivo Excel
    XLSX.writeFile(wb, `${nombreExcel}.xlsx` );
  };

  return (
    <div className={styles.tablaContainer}>
     <div className={styles.ContenedorDeBotonesDeOpciones}>
         {/* Barra de filtrado */}
      {habilitarBusqueda && (
        <div className={styles.filtrado}>
          <input
            type="text"
            placeholder="Filtrar datos..."
            className={styles.filtro}
            value={filtro}
            onChange={(e) => {
              setFiltro(e.target.value);
              if (habilitarPaginacion) {
                setPaginaActual(1);
                navigate('?page=1');
              }
            }}
          />
        </div>
      )}
      <div className={styles.contenedorBtnAdicionales}>{children}</div>

      {/* Botón para exportar a Excel */}
      {habilitarExportacion && (
        <button onClick={exportarAExcel} className={styles.botonExportar}>
          Exportar a Excel
        </button>
      )}
     </div>

      <table className={styles.tabla}>
        <thead>
          <tr>
            {Object.keys(datos[0]).map((key) => (
              // Solo renderiza las columnas visibles
              columnasVisibles.length === 0 || columnasVisibles.includes(key) ? (
                <th
                  key={key}
                  className={`${habilitarOrdenamiento ? styles.ordenable : ''}`}
                  onClick={() => habilitarOrdenamiento && manejarOrdenamiento(key)}
                >
                  {key}
                  {habilitarOrdenamiento && columnaOrdenada === key && (
                    <span className={styles.indicadorOrden}>
                      {ordenAscendente ? '▲' : '▼'}
                    </span>
                  )}
                </th>
              ) : null
            ))}
            {mostrarAcciones && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {datosPaginados.map((fila, index) => (
            <tr key={index}>
              {Object.entries(fila).map(([key, valor], i) => (
                // Solo renderiza las celdas de las columnas visibles
                columnasVisibles.length === 0 || columnasVisibles.includes(key) ? (
                  <td key={i}>{valor !== null && valor !== undefined ? valor : ''}</td>
                ) : null
              ))}
              {mostrarAcciones && (
                <td className={styles.acciones}>
                  {botonesAccion.map((boton, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        navigate(`${boton.link}${fila[columnaAccion]}`)}
                      style={{ backgroundColor: boton.color }}
                      className={styles.botonAccion}
                    >
                      {boton.nombre}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Controles de paginación */}
      {habilitarPaginacion && (
        <div className={styles.paginacion}>
          <button
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
          >
            Anterior
          </button>

          {[...Array(totalPaginas).keys()].map((_, index) => (
            <button
              key={index}
              onClick={() => cambiarPagina(index + 1)}
              className={paginaActual === index + 1 ? styles.paginaActiva : ''}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          >
            Siguiente
          </button>
        </div>
      )}


      {habilitarTotalRegistros && (
          <div className={styles.contenedorTotalDeRegistro}>
            Mostrando registros del {primerRegistro} al {ultimoRegistro} de un total de {totalRegistros} registros
          </div>

      )}

    </div>
  );
};

export default Tabla;
