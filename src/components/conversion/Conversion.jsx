import React from "react";
import { useState } from "react";
import styles from "./conversion-module.css";

export const Conversion = ({ precioDolar, precioEuro }) => {
  //! Declaracion de estados

  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [active, setActive] = useState(false);
  const [valores, setValores] = useState({
    valor1: "",
    valor2: "",
  });

  const [conver, setConver] = useState({
    arsTOeur: {
      sell: "",
      buy: "",
    },
    arsTOusd: {
      sell: "",
      buy: "",
    },
    eur: "",
    usd: "",
  });

  //* Declaracion de funciones

  const asignarValor = async (input, name) => {
    if (name === "arsTo") {
      setConver({
        ...conver,
        arsTOusd: {
          sell: input / (await precioDolar[0].value_sell),
          buy: input / (await precioDolar[0].value_buy),
        },
        arsTOeur: {
          sell: input / (await precioEuro[1]?.value_sell),
          buy: input / (await precioEuro[1]?.value_buy),
        },
      });
    }

    if (name === "usd/eur") {
      setConver({
        ...conver,
        eur: input * (await precioEuro[1]?.value_sell),
        usd: input * (await precioDolar[0]?.value_sell),
      });
    }
  };
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    if (name === "arsTo") {
      setInput(value);
      setValores({
        ...valores,
        valor1: Number(value),
      });
      asignarValor(input, name);
    } else if (name === "usd/eur") {
      setInput2(value);
      setValores({
        ...valores,
        valor2: Number(value),
      });
      asignarValor(input2, name);
    }
    setActive(false);
  };

  const handleOnSubmit = (e) => {
    if (conver.arsTOeur.buy !== "" || conver.eur !== "" || conver.usd !== "") {
      setInput("");
      setInput2("");
      setActive(true);
    }
  };

  return (
    <div className="contenido">
      <span>Monto a convertir</span>
      <input
        name="arsTo"
        type="number"
        onChange={handleOnChange}
        placeholder="Monto en ARS $"
        value={input}
      />

      <input
        name="usd/eur"
        type="number"
        placeholder="Monto en USD/EUR $"
        value={input2}
        onChange={handleOnChange}
      />
      <button onClick={handleOnSubmit}>Convertir</button>

      <div className={active === true ? "active" : "inactive"}>
        <h1>Pesos Argentinos a Euro/Dolar Blue</h1>
        <p>{`${valores.valor1.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} ARS$  son: ${conver?.arsTOusd.sell.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} USD$`}</p>
        <p>{`${valores.valor1.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} ARS$  son: ${conver?.arsTOeur.sell.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} EUR€`}</p>

        <h1>Conversion Euro/Dolar a Pesos Argentinos</h1>
        <p>{`${valores.valor2.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} USD$ son: ${conver?.usd.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} ARS$`}</p>
        <p>{`${valores.valor2.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} EUR€ son: ${conver?.eur.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} ARS$`}</p>
      </div>
    </div>
  );
};
