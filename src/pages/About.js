import React from "react";

import logo from "../images/logo.png";

const About = () => {
  return (
    <div>
      <div>
        <h2>Acerca de</h2>
      </div>
      <div>
        <br />
        "La Química Formal" es un proyecto que busca facilitar la comprensión de
        temas relacionados con la Química.
        <br />
        <br />
        <img id="logo-about" src={logo} alt="logo" />
        es la primera App de este proyecto y su objetivo es ayudar al estudiante
        a calcular y comprender de una mejor manera las estructuras de Lewis,
        así como la geometría molecular.
        <br />
        <p>
          <b>Creado por: </b>Emilio Mtz <br/>
          <b>Con la colaboración de: </b><br /> - Elizabeth Mendoza. <br /> - Yvette Santana.
        </p>
      </div>
    </div>
  );
};

export default About;
