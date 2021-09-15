import React from 'react'
import './App.css';

import Header from '../Header/Header.jsx'
import Inicio from '../Inicio/Inicio.jsx'
import Muscular from '../Muscular/Muscular.jsx'
import Esqueletico from '../Esqueletico/Esqueletico';
import Articular from '../Articular/Articular'
import Cardiovascular from '../Cardiovascular/Cardiovascular';
import { Route, Switch} from 'react-router'
import Respiratorio from '../Respiratorio/Respiratorio';
import Superiores from '../Superiores/Superiores'
import Cutaneos from '../Cutaneos/Cutaneos'

function App() {
  return (
    <div>
 
      <Header />
      
      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/muscular" render = {(props) => <Muscular/>}></Route>
          <Route exact path = "/esqueletico" render = {(props) => <Esqueletico/>}></Route>
          <Route exact path = "/articular" render = {(props) => <Articular/>}></Route>
          <Route exact path = "/cardiovascular" render = {(props) => <Cardiovascular/>}></Route>
          <Route exact path = "/respiratorio" render = {(props) => <Respiratorio/>}></Route>
          <Route exact path = "/superiores" render = {(props) => <Superiores/>}></Route>
          <Route exact path = "/cutaneos" render = {(props) => <Cutaneos/>}></Route>

        </Switch>

      </main>
      
    </div>
  );
}

export default App;

