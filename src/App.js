import React, { useState } from "react";

import Home from "./pages/Home";
import Carga from "./pages/CargaFormal";
import Geometrias from "./pages/Geometrias";
import References from "./pages/References";
import About from "./pages/About";

import Header from "./containers/Header";

import "./App.css";

const App = () => {
  const [view, setView] = useState("Home");

  const currentContent = (view) => {
    switch (view) {
      case "Home":
        return( <Home />)
      case "Carga":
        return( <Carga />)
      case "Geometrias":
        return( <Geometrias />)
      case "References":
        return( <References />)
      case "About":
        return( <About />)
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header onChange={(string) => setView(string)} />
        <div id="container">{currentContent(view)}</div>
    </div>
  );
};

export default App;
