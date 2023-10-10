import React, { useState } from "react";
import { Fecha } from "./Fecha";
import { Conversion } from "./conversion/Conversion";

export const Card = ({ datos }) => {
  const fecha = new Date().toLocaleDateString("es-mx", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  let precioEuro = [];
  let precioDolar = [];

  precioDolar.push(datos.blue);
  precioDolar.push(datos.oficial);

  precioEuro.push(datos.oficial_euro);
  precioEuro.push(datos.blue_euro);

  return (
    <div>
      <h1>Valor del Dolar y Euro Blue al {fecha}</h1>

      <div className="values">
        <h3>Dolar Blue</h3>
        <h4>Compra: {precioDolar[0].value_buy}$ ARS</h4>
        <h4>Venta: {precioDolar[0].value_sell}$ ARS</h4>
        <Conversion typeOfInput={"input1"} precioDolar={precioDolar} />
        <hr />

        <h3>Euro Blue</h3>
        <h4>Compra: {precioEuro[1].value_buy}$ ARS</h4>
        <h4>Venta: {precioEuro[1].value_sell}$ ARS</h4>
        <Conversion typeOfInput={"input2"} precioEuro={precioEuro} />
      </div>
      <hr />
      <Fecha props={datos.last_update} />
    </div>
  );
};
