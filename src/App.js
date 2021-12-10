import "./App.css";
import Login from "./views/Login/Login";
import Menu from "./views/Menu/Menu";
import Register from "./views/Register/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/Ingreso" component={Login} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Registro" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
