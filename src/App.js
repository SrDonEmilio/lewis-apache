import React, { useState } from "react";

import Home from "./pages/Home";
import Carga from "./pages/CargaFormal";
import Geometrias from "./pages/Geometrias";
import References from "./pages/References";
import About from "./pages/About";

import Header from "./containers/Header";

import Box from "@material-ui/core/Box";

import "./App.css";

const App = () => {
  const [view, setView] = useState("Home");

  let currentContent;

  switch (view) {
    case "Home":
      currentContent = <Home />;
      break;
    case "Carga":
      currentContent = <Carga />;
      break;
    case "Geometrias":
      currentContent = <Geometrias />;
      break;
    case "References":
      currentContent = <References />;
      break;
    case "About":
      currentContent = <About />;
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <Header onChange={(string) => setView(string)} />
      <Box>
        <div id="container">{currentContent}</div>
      </Box>
    </div>
  );
};

export default App;
