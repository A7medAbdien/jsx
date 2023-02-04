// 1. import
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

// 2. reference
const el = document.getElementById('root')

// 3. take control
const root = ReactDOM.createRoot(el)

// 4. show component
root.render(<App />)