import React, {Component} from 'react';
import { Routes ,Route } from 'react-router-dom';
import './App.css';


import MenuSuperior from "./components/MenuSuperior/MenuSuperior";
import Resumo from "./components/Resumo/Resumo";
import Consultas from "./components/Consulta/Consultas";
import Faturamento from "./components/Faturamento/Faturamento";

class App extends Component{
  render(){
    return(
      <>
    <MenuSuperior />

    <div className="container-fluid">
      <div className="row">
        <div className="col">

  
        <Routes>
        <Route exact path='/'  element={<Resumo />} />
        <Route path='consultas/*' element={<Consultas />} />
        <Route path='faturamento/*' element={<Faturamento />} />
        </Routes>
  </div>
      </div>
    </div>

      </>
    )
  }
}

export default App;

// No V6+ nao existe mais o Switch q foi subistituido pelo Routes
//<Switch>
//              <Route path="/" exact component={Resumo} />
//                <Route path="/consultas" component={Consultas} />
//                <Route path="/faturamento" component={Faturamento} />
//</Switch>




// Novo Modo de declara as Rotas :]

//<Routes>
//<Route exact path='/'  element={<Resumo />} />
//<Route path='consultas/*' element={<Consultas />} />
//<Route path='faturamento/*' element={<Faturamento />} />
//</Routes>
