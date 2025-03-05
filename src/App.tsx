import React from 'react';
import logo from './logo.svg';
import { isMobile } from 'react-device-detect';
import './App.css';
import Router from './shared/Router';
import { Analytics } from "@vercel/analytics/react"

function App() {
  <Analytics />
  return (isMobile ? <></> : <Router />);
}

export default App;