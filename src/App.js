import "./App.css";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RouteList from "./pages/RouteList";
import axios from "axios"
// import "../src/assets/css/";
// import "../src/assets/js";
// import "../src/assets/fonts";
// To setup axios with laravel snactum
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Header />
      <RouteList />
      <Footer />
    </>
  );
}

export default App;
