import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './routers/Home';
import { Enter } from './routers/Enter';
import { SaibaMais1 } from './routers/SaibaMais1';
import {Menu} from './routers/MenuPrincipal';
//<<<<<<< Updated upstream
import {SolicitacaoIndenizacao} from './routers/SolicitacaoIndenizacao';
import {SaibaMaisPrincipal} from './routers/SaibaMaisPrincipal';
//=======
import {Contrato} from './routers/Contrato';
//>>>>>>> Stashed changes
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {TelaCadastro} from './routers/TelaCadastro';
import {TelaEntrada} from './routers/TelaEntrada';
import {PedirIndenizacao} from './routers/PedirIndenizacao';
import { SaibaMais2 } from './routers/SaibaMais2';


const router = createBrowserRouter ([
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Enter",
    element: <Enter/>,
  },
  {
    path: "/SaibaMais1",
    element: <SaibaMais1/>, 
  },
  {
    path: "/Menu",
    element: <Menu/>, 
  },
  {
//<<<<<<< Updated upstream
    path: "/SolicitacaoIndenizacao",
    element: <SolicitacaoIndenizacao/>,
  },
  {
    path: "/SaibaMaisPrincipal",
    element: <SaibaMaisPrincipal/>,
  },
  {
    path: "/Contrato",
    element: <Contrato/>,
//>>>>>>> Stashed changes
  },
  {
    path: "/TelaCadastro",
    element: <TelaCadastro/>,
  },
    {
    path: "/PedirIndenizacao",
    element: <PedirIndenizacao/>,
  },
  {
    path: "/SaibaMais2",
    element: <SaibaMais2/>, 
  },
  {
    path: "/TelaEntrada",
    element: <TelaEntrada/>,
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
