import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
// import Title from "../login/components/title/Title";

const Menu = () => {
  return (
    <div className="container">
      {/* <Title className="clase" text="Menu" /> */}
      <div className="color">
        <h1 className="title"> Menu</h1>
      </div>

      <Link to="proyectos_lider">
        {" "}
        <button className="btn-menu">Proyectos</button>
      </Link>
      <Link to="registrar_avance">
        <button className="btn-menu">Avances</button>
      </Link>
      <Link to="usuarios_lider">
        <button className="btn-menu">Usuarios</button>
      </Link>
    </div>
  );
};

export default Menu;
