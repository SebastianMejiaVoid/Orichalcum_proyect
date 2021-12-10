import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./proyectos_estudiante.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "proyecto", headerName: "Proyecto", width: 130 },
  { field: "estado", headerName: "Estado", width: 130 },
];

const rows = [
  {
    id: 1,
    proyecto: "proyecto1",
    estado: "proyecto1",
    aceptado_rechazado: <button>aceptar</button>,
  },
  {
    id: 2,
    proyecto: "proyecto2",
    estado: "proyecto2",
    aceptado_rechazado: "rechazado",
  },
  {
    id: 3,
    proyecto: "proyecto3",
    estado: "proyecto3",
    aceptado_rechazado: "aceptado",
  },
  {
    id: 4,
    proyecto: "proyecto4",
    estado: "proyecto4",
    aceptado_rechazado: "aceptado",
  },
  {
    id: 5,
    proyecto: "proyecto5",
    estado: "proyecto5",
    aceptado_rechazado: "aceptado",
  },
  {
    id: 6,
    proyecto: "proyecto6",
    estado: "proyecto6",
    aceptado_rechazado: "aceptado",
  },
  {
    id: 7,
    proyecto: "proyecto7",
    estado: "proyecto7",
    aceptado_rechazado: "iaceptado",
  },
  {
    id: 8,
    proyecto: "proyecto8",
    estado: "proyecto8",
    aceptado_rechazado: "aceptado",
  },
  {
    id: 9,
    proyecto: "proyecto9",
    estado: "proyecto9",
    aceptado_rechazado: "aaceptado",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "80%" }}>
      <h4 className="title">LISTA PROYECTOS</h4>
      <DataGrid
        className="table_user"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <button className="buttonR">Inscribirse </button>
    </div>
  );
}
