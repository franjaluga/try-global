import React from 'react';
import ReactDOM from 'react-dom/client';
import { Intro } from './reporte';
import { Reporte } from './reporte';


ReactDOM.createRoot(document.getElementById('root-1')).render(
  <React.StrictMode>
      <Intro />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root-2')).render(
  <React.StrictMode>
      <Reporte />
  </React.StrictMode>
)
