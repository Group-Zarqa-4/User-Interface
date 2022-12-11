import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./store"
=======
import  AuthContextProvider  from './context/AuthContext';
>>>>>>> e18c32ace8e3fece6bca69aaa9388234cef6b4fa
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <Router>
    <App />
    </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
