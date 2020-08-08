import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css'
import './App.css';

import Routes from './routes'

function App() {

  M.AutoInit();

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
