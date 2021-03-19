import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carta from "./components/Carta";
import FormularioNuevo from "./components/Formularios/FormularioNuevo";
import FormularioEditar from "./components/Formularios/FormularioEditar";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Carta} />
          <Route exact path="/nuevo" component={FormularioNuevo} />
          <Route exact path="/editar/:id" component={FormularioEditar} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
