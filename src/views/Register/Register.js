import React, { useState } from "react";
import "./Register.css";
import Title from "../Login/components/Title/Title";
import Label from "../Login/components/Label/Label";
import Input from "../Login/components/Input/Input";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [numIdentidad, setNumIdentidad] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

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
        handleChange="{handleChange}"
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
        handleChange="{handleChange}"
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
        handleChange="{handleChange}"
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
        handleChange="{handleChange}"
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
        handleChange="{handleChange}"
        value={rol}
      />
      <div className="button-register-container">
        <button
          className="button-register"
          style={{ fontSize: 24 }}
          onClick="{handleSubmit}"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default Login;
