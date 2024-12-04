import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./menucss.css";
import { menuItems } from "../../data/menuItems";

const MenuDashboard = () => {
  const location = useLocation(); // Obtiene la ubicación actual de la ruta
  const [activeLink, setActiveLink] = useState(null); // Controla el enlace activo
  const [openSubmenu, setOpenSubmenu] = useState(null); // Controla el submenú abierto

  useEffect(() => {
    // Establece el enlace activo basándose en la ruta actual
    const currentPath = location.pathname;
    const matchedItem = menuItems.find((item, menuIndex) => {
      if (item.path === currentPath) {
        setActiveLink(`${menuIndex}`);
        return true;
      }

      // Si tiene submenú, verificar los subelementos
      if (item.submenu) {
        const matchedSubItem = item.submenu.find((subItem, subIndex) => subItem.path === currentPath);
        if (matchedSubItem) {
          setActiveLink(`${menuIndex}-${item.submenu.indexOf(matchedSubItem)}`);
          return true;
        }
      }
      return false;
    });

    // Si la ruta no coincide con ningún enlace del menú, resetear el estado
    if (!matchedItem) {
      setActiveLink(null);
    }
  }, [location, menuItems]); // Ejecuta el efecto cuando cambie la ubicación o el menú

  const handleLinkClick = (menuIndex, subIndex = null) => {
    const linkIdentifier = subIndex !== null ? `${menuIndex}-${subIndex}` : `${menuIndex}`;
    setActiveLink(linkIdentifier); // Actualiza el estado del enlace activo
    setOpenSubmenu(subIndex === null ? null : menuIndex); // Abre o cierra el submenú según el caso
  };

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const isSubmenuActive = (menuIndex) => {
    // Verifica si algún enlace del submenú está activo
    return (
      menuItems[menuIndex].submenu?.some(
        (_, subIndex) => activeLink === `${menuIndex}-${subIndex}`
      ) || false
    );
  };

  return (
    <ul className="menudashboard sidebar-menu">
      {menuItems.map((item, menuIndex) => (
        <li
          key={menuIndex}
          className={`has-submenu ${openSubmenu === menuIndex ? "open" : ""}`}
        >
          {!item.submenu ? (
            <Link
              to={item.path}
              className={`item ${activeLink === `${menuIndex}` ? "active" : ""}`}
              onClick={() => handleLinkClick(menuIndex)}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </Link>
          ) : (
            <>
              <button
                className={`item ${
                  openSubmenu === menuIndex
                    ? "open"
                    : isSubmenuActive(menuIndex)
                    ? "active"
                    : ""
                }`}
                onClick={() => handleSubmenuToggle(menuIndex)}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
                <i className="fas fa-chevron-down submenu-icon"></i>
              </button>
              <ul className="submenu">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={subItem.path}
                      className={`item ${
                        activeLink === `${menuIndex}-${subIndex}` ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick(menuIndex, subIndex)}
                    >
                      <i className={subItem.icon}></i> {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuDashboard;
