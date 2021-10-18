import React from 'react';
import logo from './media/noxemia.png';
import './App.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeScreen from './screens/home';
import HeaderButton from './components/headerbutton';
import styled from 'styled-components';


function About(){
  return (
    <p>About me</p>
  )
}
function CV(){
  return (
    <p>My CV</p>
  )
}

const ScreenContainer = styled.div`
  height: 90%;
  width: 100%;
` 


function App() {
  return (
    <div className="App">
      <Router>
        <header>
        <Link to="/"><img src={logo} id="logo"/></Link>
        <div className="headerItems">
          <Link to="/about" className="headerLink"><HeaderButton itemText="About"/></Link>
          <Link to="/cv" className="headerLink"><HeaderButton itemText="CV"/></Link>
        </div>
        
        </header>
        <div className="maincontainer">
        <Route path="/" exact component={HomeScreen} />
        <Route path="/about" exact component={About} />
        <Route path="/cv" exact component={CV} />
        </div>
      </Router>
      <footer>
        Created by and for Aaron 'Nox' Sandgren
      </footer>
    </div>
  );
}

export default App;
