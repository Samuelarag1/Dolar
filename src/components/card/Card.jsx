import React, { useState } from "react";
import { Fecha } from "../fecha/Fecha";
import { Conversion } from "../conversion/Conversion";

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
    <div className="flex flex-col items-center gap-10 ">
      <div className="bg-[#0B3142] w-full">
        <h1 className="md:text-4xl text-2xl text-center text-white p-1 font-bold ">
          Valor del Dolar y Euro Blue
          <br />
          {fecha}
        </h1>
      </div>
      <div className="bg-[#0B3142] md:h-fit w-fit h-fit rounded-md p-4 shadow-black shadow-xl border-2 border-black m-2">
        <div className="text-center">
          <strong className="text-xl text-white">Cotizaciones del dia</strong>
        </div>
        <div className="flex flex-col justify-center mt-5 gap-10">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="bg-[#04724D] text-white text-xl w-64 h-48 rounded-lg p-2 flex flex-col justify-around items-center shadow-xl shadow-black border-2 border-white">
              <h3 className="text-3xl font-bold">Dolar Blue</h3>
              <div className="mt-2">
                <h4>
                  <span className="font-bold">Compra: </span>
                  {precioDolar[0].value_buy} <strong>$ARS</strong>
                </h4>
                <h4>
                  <span className="font-bold">Venta: </span>
                  {precioDolar[0].value_sell} <strong>$ARS</strong>
                </h4>
              </div>
            </div>

            <div className="bg-[#042172] text-white text-xl w-64 h-48 rounded-lg p-2 flex flex-col justify-around items-center shadow-xl shadow-black border-2 border-white">
              <h3 className="text-3xl font-bold">Euro Blue</h3>
              <div className="mt-2">
                <h4>
                  {" "}
                  <span className="font-bold">Compra: </span>{" "}
                  {precioEuro[1].value_buy}
                  <strong> $ARS</strong>
                </h4>
                <h4>
                  <span className="font-bold">Venta: </span>{" "}
                  {precioEuro[1].value_sell}
                  <strong> $ARS</strong>
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center lg:hidden">
            <button
              className="bg-[#FAF4D3] hover:bg-[#47463c] hover:text-white duration-500 text-black p-2 rounded-full border-white
          border-2 mt-2 font-bold"
            >
              Conversion
            </button>
          </div>
          <div className="w-full">
            <Fecha props={datos.last_update} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center align-middle m-2">
        <Conversion
          typeOfInput={"input2"}
          precioEuro={precioEuro}
          precioDolar={precioDolar}
        />
      </div>
    </div>
  );
};
