import React from "react";
import Reference from "../components/Reference";

const References = () => {
  return (
    <div id="references" className="grid-container">
      <h2>Sitios de Interés</h2>
      <Reference
        title="Estructuras de Lewis"
        source="DCB Facultad de Ingeniería, Universidad Nacional Autónoma de México"
        link="http://www.dcb.unam.mx/cerafin/bancorec/ejenlinea/8_Estructuras_lewis.pdf"
      />
      <Reference
        title="Estructuras de Lewis"
        source="Facultad de Química, Universidad Nacional Autónoma de México"
        link="http://depa.fquim.unam.mx/amyd/archivero/Lewis_15330.pdf"
      />
      <Reference
        title="Carga Formal"
        source="Pontificia Universidad Católica del Perú"
        link="http://corinto.pucp.edu.pe/quimicageneral/contenido/342-carga-formal.html"
      />
      <Reference
        title="Estructura de Lewis y la regla del Octeto"
        source="Facultad de Química, Universidad Nacional Autónoma de México"
        link="http://depa.fquim.unam.mx/amyd/archivero/Teoriasdeenlace_20194.pdf"
      />
      <Reference
        title="Geometría molecular"
        source="DCB Facultad de Ingeniería, Universidad Nacional Autónoma de México"
        link="http://www.dcb.unam.mx/cerafin/bancorec/ejenlinea/9_Geometria_molecular.pdf"
      />
      <Reference
        title="Enlace"
        source="Facultad de Química, Universidad Autónoma de Madrid"
        link="http://www.qfa.uam.es/qq/Tema1t.pdf"
      />
    </div>
  );
};

export default References;
