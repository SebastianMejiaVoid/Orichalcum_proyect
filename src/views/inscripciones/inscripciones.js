import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./inscripciones.css";
import { useQuery, gql } from "@apollo/client";

const inscripciones_Query = gql`
  query Inscripciones {
    Inscripciones {
      estudiante
      _id
      proyecto
      estado
      fechaInscripcion
      fechaEgreso
    }
  }
`;

const columns = [
  { field: "estudiante", headerName: "Estudiante", width: 130 },
  { field: "id", headerName: "ID", width: 70 },
  { field: "proyecto", headerName: "Proyecto", width: 130 },
  { field: "estado", headerName: "Estado", width: 130 },
  { field: "fechaInscripcion", headerName: "Fecha Inicio", width: 130 },
  { field: "efechaEgreso", headerName: "Fecha Egreso", width: 130 },
];

export default function DataTable() {
  const { data, loading, error } = useQuery(inscripciones_Query);
  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      const inscripcionesFormated = data.Inscripciones.map((inscripcion) => ({
        estudiante: inscripcion.estudiante,
        id: inscripcion._id,
        proyecto: inscripcion.nombre,
        estado: inscripcion.estado,
      }));
      setInscripciones(inscripcionesFormated);
    }
  }, [data, error, loading]);
  return (
    <div style={{ height: 400, width: "80%" }}>
      <h4 className="title">INSCRIPCIONES</h4>
      <DataGrid
        className="table_user"
        rows={inscripciones}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <button className="buttonR">Aceptar </button>
      <button className="buttonR">Rechazar </button>
    </div>
  );
}
