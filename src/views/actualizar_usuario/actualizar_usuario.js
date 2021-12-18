import React, { useState, useEffect } from "react";
import "./actualizar_usuario.css";
import Input from "../Login/components/Input/Input";
import { useMutation, gql } from "@apollo/client";

const Actualizar_usuario = () => {
  const [correo, setCorreo] = useState("");
  const [numIdentidad, setNumIdentidad] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const actualizarMutation = gql`
    mutation EditarUsuario(
      $correo: String
      $identificacion: String
      $nombreCompleto: String
      $password: String
      $id: String!
    ) {
      editarUsuario(
        correo: $correo
        identificacion: $identificacion
        nombreCompleto: $nombreCompleto
        password: $password
        _id: $id
      ) {
        correo
        identificacion
        nombreCompleto
        password
      }
    }
  `;
  const [actualizarFunction, { data, loading, error }] =
    useMutation(actualizarMutation);

  function handleSubmit() {
    console.log(correo, numIdentidad, nombre, password);
    actualizarFunction({
      variables: {
        correo: correo,
        identificacion: numIdentidad,
        nombreCompleto: nombre,
        password: password,
        estado: "PENDIENTE",
      },
    });
  }

  function handleChange(set, value) {
    set(value);
  }

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (!loading && !error) {
      alert(JSON.stringify(data));
      console.log(data);
    }
  }, [data, error, loading]);

  return (
    <div className="login-container">
      <h1 className="text-register">Actualizar datos</h1>
      <div className="div-correo">
        <h1 className="div-correo">Correo</h1>
      </div>
      <Input
        attribute={{
          id: "correo",
          name: "correo",
          type: "text",
          placeholder: "Ingrese su correo",
        }}
        handleChange={(event) => handleChange(setCorreo, event.target.value)}
        value={correo}
      />
      <h1 className="div-numero">Numero de identificacion</h1>
      <Input
        attribute={{
          id: "numIdentidad",
          name: "numIdentidad",
          type: "text",
          placeholder: "Ingrese su numero de identidad",
        }}
        handleChange={(event) =>
          handleChange(setNumIdentidad, event.target.value)
        }
        value={numIdentidad}
      />
      <h1 className="div-nombre">Nombre Completo</h1>
      <Input
        attribute={{
          id: "nombre",
          name: "nombre",
          type: "text",
          placeholder: "Ingrese su nombre completo",
        }}
        handleChange={(event) => handleChange(setNombre, event.target.value)}
        value={nombre}
      />
      <h1 className="div-contraseña">Contraseña</h1>
      <Input
        attribute={{
          id: "password",
          name: "password",
          type: "password",
          placeholder: "Ingrese su contraseña",
        }}
        handleChange={(event) => handleChange(setPassword, event.target.value)}
        value={password}
      />
      <div className="button-register-container">
        <button
          className="button-register"
          style={{ fontSize: 24 }}
          onClick={handleSubmit}
        >
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default Actualizar_usuario;
