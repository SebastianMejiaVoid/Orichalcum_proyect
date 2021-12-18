import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./usuarios_admin.css";
import { useQuery, gql } from "@apollo/client";

const usuarios_Query = gql`
  query Usuarios {
    Usuarios {
      _id
      nombreCompleto
      tipoUsuario
      estado
    }
  }
`;

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "usuario", headerName: "Usuario", width: 130 },
  { field: "rol", headerName: "Rol", width: 130 },
  {
    field: "estado",
    headerName: "Estado",
    type: "text",
    width: 90,
  },
];

export default function DataTable() {
  const { data, loading, error } = useQuery(usuarios_Query);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      const usuariosFormated = data.Usuarios.map((usuario) => ({
        id: usuario._id,
        usuario: usuario.nombreCompleto,
        rol: usuario.tipoUsuario,
        estado: usuario.estado,
      }));
      setUsuarios(usuariosFormated);
    }
  }, [data, error, loading]);
  return (
    <div style={{ height: 400, width: "80%" }}>
      <h4 className="title">TABLA USUARIOS</h4>
      <DataGrid
        className="table_user"
        rows={usuarios}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <button className="button1">Autorizar </button>
      <button className="button2">Denegar</button>
    </div>
  );
}
