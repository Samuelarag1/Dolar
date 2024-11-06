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
    <div className="w-[100%] text-center mt-5">
      <span className="text-center text-xl text-white">
        Actualizado a la hora y fecha: {fechaFormated + " | " + horaFormated}
      </span>
    </div>
  );
};
