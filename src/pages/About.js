import React from "react";

import logo from "../images/logo.png";

const About = () => {
  return (
    <div>
      <div class="logo-font android-slogan"><h2>Acerca de</h2></div>
      <div class="logo-font android-sub-slogan">
        <br />
        "La Química Formal" es un proyecto estudiantil de la
        <b>Universidad Nacional Autónoma de México</b> que busca facilitar la
        comprensión de temas relacionados con la Química.
        <br />
        <br />
        <img src={logo} alt="logo"/>
        es la primera App de este proyecto y su objetivo es ayudar al estudiante
        a calcular y comprender de una mejor manera las estructuras de Lewis,
        así como la geometría molecular.
        <br />
      </div>
    </div>
  );
};

export default About;
