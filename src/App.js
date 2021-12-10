import "./App.css";
import Login from "./views/Login/Login";
import Menu from "./views/Menu/Menu";
import Register from "./views/Register/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import usuarios_admin from "./views/usuarios_admin/usuarios_admin";
import proyectos_lider from "./views/proyectos_lider/proyectos_lider";
import usuarios_lider from "./views/usuarios_lider/usuarios_lider";
import proyectos_admin from "./views/proyectos_admin/proyectos_admin";
import proyectos_estudiante from "./views/proyectos_estudiante/proyectos_estudiante";
import crear_proyecto_lider from "./views/crear_proyecto_lider/crear_proyecto_lider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/Ingreso" component={Login} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Registro" component={Register} />
          <Route path="/Usuarios_Admin" component={usuarios_admin} />
          <Route path="/Proyectos_lider" component={proyectos_lider} />
          <Route path="/usuarios_lider" component={usuarios_lider} />
          <Route path="/proyectos_admin" component={proyectos_admin} />
          <Route
            path="/crear_proyecto_lider"
            component={crear_proyecto_lider}
          />
          <Route
            path="/proyectos_estudiante"
            component={proyectos_estudiante}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
