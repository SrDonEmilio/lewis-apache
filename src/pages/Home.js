import React from "react";

import gilber_lewis from "../images/Gilbert_N_Lewis.jpg";

const Home = () => {
  return (
    <div>
      <h2>Bienvenido a "La Química Formal"</h2>
      <p>
        En este pequeño rincón del conocimiento, encontrarás las herramientas
        necesarias para ponerte al dia en tu clase de quimica. Podreis encontrar
        desde contenido teorico en donde aclarar dudas que puedan surgir durante
        los calculos de "carga formal" o bien "Tipos de Estructruras". Tendreis
        la oportunidad de entender y ver la geometria molecular de una manera
        más didactica.
      </p>
      <img src={gilber_lewis} alt="Gilbert Lewis" />
      <br />
      <b>Gilbert N. Lewis</b>
      <p>
        Nació el 23 de octubre de 1875 en Weymouth, Massachusetts , fue un
        fisicoquímico estadounidense reconocido por su trabajo en los
        denominados diagramas de punto o la llamada también estructura de Lewis
        y por la idea del concepto de enlace covalente y fotón.
      </p>
      <p>
        En el año 1916 realizó trabajos sobre modelos atómicos y formuló su
        propio modelo conocido como modelo del átomo cubico, proclamó la idea
        del enlace covalente que se trataba de un par de electrones compartidos
        en los elementos no metálicos que tienen de 4 a 7 electrones de
        valencia, en base a esa teoría inventó el término molécula impar que se
        daba cuando un electrón no era compartido, también formuló la regla del
        octeto.
      </p>
    </div>
  );
};

export default Home;
