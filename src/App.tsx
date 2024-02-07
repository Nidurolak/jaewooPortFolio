import React from 'react';
import logo from './logo.svg';
import { isMobile } from 'react-device-detect';
import './App.css';
import Router from './shared/Router';

function App() {
  return (isMobile ?<></> : <Router/>);
}

export default App;