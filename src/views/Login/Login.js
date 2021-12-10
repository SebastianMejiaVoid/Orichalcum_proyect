import React, { useState } from "react";
import "./Login.css";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState('""');

  function handleChange(name, value) {
    if (name === "Correo") {
      setUser(value);
    } else {
      setPassword(value);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      console.log("account", account);
    }
  }

  return (
    <div className="login-container">
      <Title text="Iniciar Sesion" />
      <Label className="text-user" text="Correo" />
      <Input
        attribute={{
          id: "correo",
          name: "correo",
          type: "text",
          placeholder: "Ingrese su usuario",
        }}
        handleChange={handleChange}
        value={user}
      />
      <Label text="Contraseña" />
      <Input
        attribute={{
          id: "contraseña",
          name: "contraseña",
          type: "password",
          placeholder: "Ingrese su contraseña",
        }}
        handleChange={handleChange}
        value={password}
      />
      <div className="button-submit-container">
        <button
          className="button-submit"
          style={{ fontSize: 24 }}
          onClick={handleSubmit}
        >
          Ingresar
        </button>
      </div>
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

export default Login;
