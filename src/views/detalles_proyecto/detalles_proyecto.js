import React from "react";
import "./detalles_proyecto.css";
// import {FormLabel } from "@mui/material";

const detalles_proyecto_lider = () => {
  return (
    <div className="container">
      <form>
        <h1>Detalles proyecto </h1>
        <br></br>
        <br></br>
        <div className="div1">
          <label className="label_nombre" for="html">
            Nombre lider:
          </label>
          <input className="input_nombrelider" type="text"></input>
          <label className="label_identificacion" for="html">
            Identificacion del lider:
          </label>
          <input className="input_identificacionlider" type="text"></input>
          <label className="label_estado" for="html">
            Estado
          </label>
          <input className="input_radio1" type="radio" value="HTML"></input>
          <label className="label_activo" for="html">
            Activo
          </label>
          <input className="input_radio2" type="radio" value="HTML"></input>
          <label className="label_inactivo" for="html">
            Inactivo
          </label>
          <select className="selec_fase" name="fase">
            <option selected value="0">
              {" "}
              Elige una fase{" "}
            </option>
            <option value="1">Activa</option>
            <option value="2">Inactiva</option>
            <option value="3">En desarrollo</option>
          </select>
        </div>

        <div className="div2">
          <label className="label_nombreproyecto" for="html">
            Nombre del proyecto:
          </label>
          <input className="input_nombreproyecto" type="text"></input>
          <label className="label_fechainicio" for="html">
            Fecha inicio:
          </label>
          <input className="input_fechainicio" type="date"></input>
          <label className="label_fechafinal" for="html">
            Fecha final:
          </label>
          <input className="input_fechafinal" type="date"></input>
        </div>
        <br></br>
        <br></br>
        <div className="div3">
          <label className="label_objetivos_generales" for="html">
            Objetivos generales:
          </label>

          <label className="label_objetivos_especificos" for="html">
            Objetivos especificos:
          </label>
        </div>
        <div className="div4">
          <textarea className="input_text_generales" type="textarea"></textarea>
          <textarea
            className="input_text_especificos"
            type="textarea"
          ></textarea>
        </div>
        <label className="label_presupuestos" for="html">
          Presupuesto:
        </label>
        <input className="input_presupuestos" type="text"></input>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="button">Crear avance </button>
      </form>
    </div>
  );
};
export default detalles_proyecto_lider;
