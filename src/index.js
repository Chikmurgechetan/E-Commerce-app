import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Components/Context/ContextProvider';
import { AuthContextProvider } from './Components/Context/Auth-Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider >
    <ContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </ContextProvider>
  </AuthContextProvider>

 
);

reportWebVitals();
