import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './routers/Home';
import { Enter } from './routers/Enter';
import { SaibaMais } from './routers/SaibaMais';
import {Menu} from './routers/MenuPrincipal';
<<<<<<< Updated upstream
import {SolicitacaoIndenizacao} from './routers/SolicitacaoIndenizacao';
import {SaibaMaisPrincipal} from './routers/SaibaMaisPrincipal';
=======
import {Contrato} from './routers/Contrato';
>>>>>>> Stashed changes
import {createBrowserRouter, RouterProvider} from "react-router-dom";


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
    path: "/SaibaMais",
    element: <SaibaMais/>, 
  },
  {
    path: "/Menu",
    element: <Menu/>, 
  },
  {
<<<<<<< Updated upstream
    path: "/SolicitacaoIndenizacao",
    element: <SolicitacaoIndenizacao/>,
  },
  {
    path: "/SaibaMaisPrincipal",
    element: <SaibaMaisPrincipal/>,
=======
    path: "/Contrato",
    element: <Contrato/>,
>>>>>>> Stashed changes
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
