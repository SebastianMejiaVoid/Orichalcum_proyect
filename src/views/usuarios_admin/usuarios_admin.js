import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./usuarios_admin.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Usuario", width: 130 },
  { field: "lastName", headerName: "Rol", width: 130 },
  {
    field: "age",
    headerName: "Estado",
    type: "text",
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "user1", firstName: "user1", age: "activo" },
  { id: 2, lastName: "user2", firstName: "user2", age: "inactivo" },
  { id: 3, lastName: "user3", firstName: "user3", age: "activo" },
  { id: 4, lastName: "user4", firstName: "user4", age: "inactivo" },
  { id: 5, lastName: "user5", firstName: "user5", age: "activo" },
  { id: 6, lastName: "user6", firstName: "user6", age: "activo" },
  { id: 7, lastName: "user7", firstName: "user7", age: "inactivo" },
  { id: 8, lastName: "user8", firstName: "user8", age: "activo" },
  { id: 9, lastName: "user9", firstName: "user9", age: "activo" },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "80%" }}>
      <h4 className="title">TABLA USUARIOS</h4>
      <DataGrid
        className="table_user"
        rows={rows}
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
