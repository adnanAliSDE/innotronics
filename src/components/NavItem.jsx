import { NavLink } from "react-router-dom";
import React from "react";

const NavItem = ({ to, label, icon: Icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => `
          flex items-center px-4 py-2 rounded-lg transition-all duration-200
          ${
            isActive
              ? " text-white "
              : "text-gray-400 hover:bg-gray-800 hover:text-white"
          }
        `}
      >
        {Icon && (
          <Icon
            className={({ isActive }) => {
              return `${isActive ? "text-white" : "text-green-500"}`;
            }}
            size={18}
          />
        )}
        <span className="mx-2">{label}</span>
      </NavLink>
    </li>
  );
};

export { NavItem };
