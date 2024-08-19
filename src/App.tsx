import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import image from "./logo.svg"
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './route/AppRoute';


function App() {
  return (
    <>
    <Header brand="React Typescript Crud Application" url={image}/>
    <Router>
      <AppRoute />
    </Router>
    </>
    
  );
}

export default App;
