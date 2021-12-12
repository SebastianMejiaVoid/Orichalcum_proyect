import React, { useState, useEffect } from "react";
import "./Login.css";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import { useMutation, gql } from "@apollo/client";

const loginQuery = gql`
  mutation Login($correo: String!, $password: String!) {
    login(correo: $correo, password: $password) {
      token
      error
    }
  }
`;

const Login = () => {
  const [loginFunction, { data, loading, error }] = useMutation(loginQuery);

  const [user, setUser] = useState("registro@gmail.com");
  const [password, setPassword] = useState("2415452");

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

  function handleChange(name, value) {
    if (name === "Correo") {
      setUser(value);
    } else {
      setPassword(value);
    }
  }

  function handleSubmit() {
    console.log(user, password);
    loginFunction({ variables: { correo: user, password: password } });
  }

  // if (loading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>;

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
        handleChange={(event) => handleChange("Correo", event.target.value)}
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
        handleChange={(event) => handleChange("Password", event.target.value)}
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
