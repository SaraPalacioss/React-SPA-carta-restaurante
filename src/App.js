import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Carta from "./components/Carta";
import FormularioNuevo from "./components/Formularios/FormularioNuevo";
import FormularioEditar from "./components/Formularios/FormularioEditar";
import FormularioBorrar from "./components/Formularios/FormularioBorrar";

function App() {
  return (
   <Router>
     <Header/>
     <Switch>
       <Route exact path="/" component={Carta}/>
       <Route exact path="/nuevo" component={FormularioNuevo}/>
       <Route exact path="/editar/:id" component={FormularioEditar}/>
       <Route exact path="/borrar/:id" component={FormularioBorrar}/>
     </Switch>
   </Router>
  );
}

export default App;
