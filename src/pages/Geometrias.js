import React from "react";

import Geometria from "../components/Geometria";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images/geometrias", false, /\.(png|jpe?g|svg)$/)
);

const data = [
  {
    name: "Lineal",
    n: 2,
  },
  {
    name: "Trigonal Plana",
    n: 3,
  },
  {
    name: "Angular",
    n: 3,
  },
  {
    name: "Tetraedrica",
    n: 4,
  },
  {
    name: "Piramidal Trigonal",
    n: 4,
  },
  {
    name: "Angular",
    n: 4,
  },
  {
    name: "Bipiramidal",
    n: 5,
  },
  {
    name: "Tetraedtro Distorcionado",
    n: 5,
  },
  {
    name: "Forma de T",
    n: 5,
  },
  {
    name: "Lineal",
    n: 5,
  },
  {
    name: "Octaedrica",
    n: 6,
  },
  {
    name: "Piramidal Cuadrada",
    n: 6,
  },
];

const Geometrias = () => {
  return (
    <div id="references" className="grid-container">
      <h2>¿Qué es la Geometria Molecular?</h2>
      <p>
        La geometría molecular es la distribución espacial de los átomos
        alrededor de un átomo central. Los átomos representan regiones donde
        existe una alta densidad electrónica, y se consideran por tanto grupos
        electrónicos, sin importar los enlaces que formen que pueden ser:
        simples, dobles o triples.
      </p>
      {data.map((value, index) => {
        return (
          <Geometria
            name={value.name}
            img={images[index]}
            electrons={value.n}
            key={value.name + value.n}
          />
        );
      })}
    </div>
  );
};

export default Geometrias;
