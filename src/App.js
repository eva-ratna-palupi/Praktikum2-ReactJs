import React from 'react';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Component/Fungsional/Homepage';
import AboutComp from './Component/Fungsional/AboutComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import Homepage from './Component/Fungsional/Homepage';
import AboutComp from './Component/Fungsional/AboutComp';
//import logo from './logo.svg';
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/about" component={AboutComp}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
