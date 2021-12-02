import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let root = document.getElementById('root');

if(root != null)
    ReactDOM.render(<App />,root);
else 
    console.error("Can't find root element");
