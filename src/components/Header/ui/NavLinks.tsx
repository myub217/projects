// src/components/Header/ui/NavLinks.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks: React.FC = () => {
  const baseStyle = "btn btn-ghost text-base px-3";
  const activeStyle = "font-bold text-primary";

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : ""}`
        }
      >
        หน้าแรก
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : ""}`
        }
      >
        เกี่ยวกับเรา
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : ""}`
        }
      >
        บริการ
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : ""}`
        }
      >
        ติดต่อเรา
      </NavLink>
    </>
  );
};

export default NavLinks;