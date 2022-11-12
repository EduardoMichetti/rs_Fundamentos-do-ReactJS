//obs: arquivo .jsx não precisa ser informado a extenção no import
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Home } from './pages/Home'; //não precisa informar index pq por default ele ja procura um index

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
