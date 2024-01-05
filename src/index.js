import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import BooksContext from './contexts/Books'
import { Provider } from './contexts/Books'

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


root.render(<Provider> 
    <App/>
</Provider>)


// root.render(<App/>)