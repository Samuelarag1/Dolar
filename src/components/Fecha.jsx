import React from "react";

export const Fecha = ({ props }) => {
  const horaFormated =
    props.split("-")[2].split("T")[1].split(":")[0] +
    ":" +
    props.split("-")[2].split("T")[1].split(":")[1] +
    ":" +
    Math.trunc(props.split("-")[2].split("T")[1].split(":")[2]);

  const fechaFormated =
    props.split("-")[2].split("T")[0] +
    "/" +
    props.split("-")[1] +
    "/" +
    props.split("-")[0];

  return (
    <div>
      <p>
        Actualizado a la hora y fecha: {fechaFormated + " | " + horaFormated}
      </p>
    </div>
  );
};
