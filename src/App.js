import React from 'react';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Component/Fungsional/Homepage';
import AboutComp from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/CSS/TambahComp';
import EditComp from './Component/Class/EditComp';
import HooksComp from './Component/Hooks/Class/HookComp';
import FuncHook from './Component/Hooks/Fungsi/FuncHook';
//import logo from './logo.svg';
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';
//import MyComponent2 from './Component/Class/MyComponent2';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/about" component={AboutComp}/>
      <Route exact path="/mahasiswa" component={ListComp}/>
      <Route exact path="/mahasiswa/tambah" component={TambahComp}/>
      <Route exact path="/mahasiswa/edit" component={EditComp}/>
      <Route exact path="/class" component={HooksComp}/>
      <Route exact path="/hook" component={FuncHook}/>
      <Route exact path="/detail/:id" component={DetailComp}/>

      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
