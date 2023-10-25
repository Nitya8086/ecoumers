import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<CartContextProvider>
<App/>
</CartContextProvider>

</BrowserRouter>
);
