import "./App.css";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RouteList from "./pages/RouteList";
// import "../src/assets/css/";
// import "../src/assets/js";
// import "../src/assets/fonts";

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
