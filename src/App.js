import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import Carga from "./pages/CargaFormal";
import Geometrias from "./pages/Geometrias";
import References from "./pages/References";
import About from "./pages/About";

import Header from "./containers/Header";

const App = () => {
  const [view, setView] = useState("Home");

  useEffect(() => {
    console.log(view);
  });

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
      <div id="container">{currentContent}</div>
    </div>
  );
};

export default App;
