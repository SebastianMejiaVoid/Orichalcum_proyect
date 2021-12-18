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
import revisar_proyecto_administrador from "./views/revisar_proyecto_administrador/revisar_proyecto_administrador";
import actualizar_proyecto_lider from "./views/actualizar_proyecto_lider/actualizar_proyecto_lider";
import registrar_avance from "./views/registrar_avance/registrar_avance";
import revisar_avance from "./views/revisar_avance/revisar_avance";
import actualizar_avance from "./views/actualizar_avance/actualizar_avance";

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
          <Route path="/registrar_avance" component={registrar_avance} />
          <Route path="/revisar_avance" component={revisar_avance} />
          <Route path="/actualizar_avance" component={actualizar_avance} />
          <Route
            path="/actualizar_proyecto_lider"
            component={actualizar_proyecto_lider}
          />
          <Route
            path="/revisar_proyecto_administrador"
            component={revisar_proyecto_administrador}
          />
          <Route
            path="/crear_proyecto_lider"
            component={crear_proyecto_lider}
          />
          <Route
            path="/proyectos_estudiante"
            component={proyectos_estudiante}
          />
          <Route
            path="/registrar_avance"
            component={registrar_avance}
          />
          <Route
            path="/revisar_avance"
            component={revisar_avance}
          />
          <Route
            path="/actualizar_avance"
            component={actualizar_avance}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
