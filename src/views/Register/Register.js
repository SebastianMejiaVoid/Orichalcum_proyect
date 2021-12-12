import React, { useState, useEffect } from "react";
import "./Register.css";
import Input from "../Login/components/Input/Input";
import { useMutation, gql } from "@apollo/client";

const Register = () => {
  const [correo, setCorreo] = useState("conexion@conexion.com");
  const [numIdentidad, setNumIdentidad] = useState("147852369");
  const [nombre, setNombre] = useState("conexion");
  const [password, setPassword] = useState("123456789");
  const [rol, setRol] = useState("ADMINISTRADOR");

  const RegisterMutation = gql`
    mutation Registro(
      $correo: String!
      $identificacion: String!
      $nombreCompleto: String!
      $password: String!
      $tipoUsuario: TipoUsuario!
    ) {
      registro(
        correo: $correo
        identificacion: $identificacion
        nombreCompleto: $nombreCompleto
        password: $password
        tipoUsuario: $tipoUsuario
      ) {
        token
        error
      }
    }
  `;
  const [registerFunction, { data, loading, error }] =
    useMutation(RegisterMutation);

  function handleSubmit() {
    console.log(correo, numIdentidad, nombre, password, rol);
    registerFunction({
      variables: {
        correo: correo,
        identificacion: numIdentidad,
        nombreCompleto: nombre,
        password: password,
        tipoUsuario: rol,
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
      <h1 className="text-register">Registrarse</h1>
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
      <h1 className="div-rol">Rol</h1>
      <Input
        attribute={{
          id: "rol",
          name: "rol",
          type: "text",
          placeholder: "Ingrese su rol",
        }}
        handleChange={(event) => handleChange(setRol, event.target.value)}
        value={rol}
      />
      <div className="button-register-container">
        <button
          className="button-register"
          style={{ fontSize: 24 }}
          onClick={handleSubmit}
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default Register;
