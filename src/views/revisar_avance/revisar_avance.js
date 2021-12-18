import React from "react";
import "./revisar_avance.css";
// import {FormLabel } from "@mui/material";

const revisar_avance = () => {
  return (
    <div className="container">
      <form>
        <h1>Revisar Avance</h1>
        <br></br>
        <br></br>
        <div className="div1">
          <label className="label_nombre" for="html">
            Nombre Estudiante:
          </label>
          <input className="input_nombreestudiante" type="text"></input>
          <label className="label_identificacion" for="html">
            Identificacion del proyecto:
          </label>
          <input className="input_identificacionproyecto" type="text"></input>
      
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="div2">
          <label className="label_fechainicio" for="html">
            Fecha inicio:
          </label>
          <input className="input_fechainicio" type="date"></input>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="div3">
          <label className="label_observacion_lider" for="html">
            Observaciones del Lider:
          </label>

          <label className="label_descripcion_avance" for="html">
            Descripcion del Avance:
          </label>
        </div>
        <div className="div4">
          <textarea className="input_text_observacion" type="textarea"></textarea>
          <textarea
            className="input_text_descripcion"
            type="textarea"
          ></textarea>
        </div>
        <br></br>
        <br></br>

        <button className="button">Registrar </button>
      </form>
    </div>
  );
};
export default revisar_avance;