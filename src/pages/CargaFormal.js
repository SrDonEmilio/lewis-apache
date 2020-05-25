import React from "react";

const CargaFormal = () => {
  return (
    <div>
      <h2>¿Qué es la Carga Formal? </h2>
      <p>
        Es la carga que tendria un atomo sino hubiera diferencias de
        electronegatividad entre los atomos que forman un enlace. Es decir seria
        la carga que tendria el atomo si este enlace se rompiese. Dicha carga se
        calcula con la siguiente formula:
      </p>{" "}
      <p className="ecuation"># Electrones de valencia - (# Electrones libres + 1/2 Enlaces) </p>{" "}
      <p>
        Un método alternativo para obtener la carga de un átomo tomando en
        cuenta la electronegatividad es por su número de oxidación.
      </p>
    </div>
  );
};

export default CargaFormal;
