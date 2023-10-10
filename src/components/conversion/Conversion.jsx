import React from "react";
import { useState } from "react";
import "./conversion-modules.css";

export const Conversion = ({ typeOfInput, precioDolar, precioEuro }) => {
  const [input, setInput] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [valorTotal2, setValor2Total] = useState("");

  const asignarValor = async (input, typeOfInput) => {
    if (typeOfInput === "input1") {
      setValorTotal(input / (await precioDolar[0]?.value_sell));
      setValor2Total(input / (await precioDolar[0]?.value_buy));
    }
    if (typeOfInput === "input2") {
      setValorTotal(input / (await precioEuro[0]?.value_sell));
      setValor2Total(input / (await precioEuro[0]?.value_buy));
    }
  };
  const handleOnSubmit = (e) => {
    if (input !== "") {
      console.log(input);
      setInput("");
      asignarValor(input, typeOfInput);
      setValorTotal("");
    }
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <p>Monto a convertir</p>
      <input
        type="text"
        value={input}
        onChange={handleOnChange}
        placeholder="Ingrese monto en ARS"
      />
      <button onClick={handleOnSubmit}>Convertir</button>
      {valorTotal !== "" ? (
        <p>
          Valor para la venta:{" "}
          {valorTotal.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          {typeOfInput === "input1" ? "$ USD" : "$ EUR"}
        </p>
      ) : (
        ""
      )}
      {valorTotal2 !== "" ? (
        <p>
          Valor para la compra:{" "}
          {valorTotal2.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          {typeOfInput === "input1" ? "$ USD" : "$ EUR"}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
