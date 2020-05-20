import React, { useState } from "react";

const Geometria = ({ name, img, electrons }) => {
  const [geoStatus, setGeoStatus] = useState(false);
  return (
    <div onClick={(e) => setGeoStatus(!geoStatus)}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className="center">Número de electrónes: {electrons}</p>
    </div>
  );
};

export default Geometria;
