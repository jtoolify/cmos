export const menuItems = [
  {
    label: "Inicio",
    icon: "fas fa-home",
    path: "/",
  },
  {
    label: "Gestión de Vehículos",
    icon: "fas fa-car",
    submenu: [
      { label: "Listado de Vehículos", icon: "fas fa-list", path: "/vehiculos/lista" },
      // { label: "Asignación a Proyectos", icon: "fas fa-project-diagram", path: "#"  },
      // { label: "Estado y Operatividad", icon: "fas fa-cogs", path: "#"  },
      // { label: "Historial de Alquiler", icon: "fas fa-history", path: "#" },
      // { label: "Alertas de Mantenimiento", icon: "fas fa-bell", path: "#"  },
    ],
  },
  // {
  //   label: "Mantenimiento",
  //   icon: "fas fa-tools",
  //   submenu: [
  //     { label: "Crear Orden de Trabajo", icon: "fas fa-plus", path: "#"  },
  //     { label: "Historial de Mantenimiento", icon: "fas fa-clipboard-list", path: "#"  },
  //     { label: "Alertas de Mantenimiento", icon: "fas fa-bell", path: "#"    },
  //   ],
  // },
];
