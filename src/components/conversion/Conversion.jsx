import React from "react";
import { useState } from "react";

export const Conversion = ({ precioDolar, precioEuro }) => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
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
  };

  return (
    <div className="h-fit bg-[#0B3142] w-fit rounded-lg border-black border-2 p-4 m-2 shadow-lg shadow-black">
      <h3 className="text-center text-2xl font-bold text-white">Conversion</h3>
      <div className="flex flex-col md:flex-row md:gap-5 items-center align-middle p-2 justify-center">
        <div className="w-48">
          <p className="ml-2 font-semibold text-white">
            Monto a convertir en ARS$
          </p>
          <input
            name="arsTo"
            type="number"
            onChange={handleOnChange}
            placeholder="Monto en ARS $"
            value={input}
            className="p-2 rounded-lg"
          />
        </div>
        <div className="w-48">
          <p className="ml-2 font-semibold text-white">
            Monto a convertir en USD/EUR
          </p>
          <input
            name="usd/eur"
            type="number"
            placeholder="Monto en USD/EUR $"
            value={input2}
            onChange={handleOnChange}
            className="p-2 rounded-lg"
          />
        </div>
      </div>
      <br />
      {valores.valor1 ? (
        <div className="text-white">
          <h1 className="text-center text-xl font-bold">
            Pesos Argentinos a Euro/Dolar Blue
          </h1>
          <br />
          <div className="flex flex-col justify-around items-center">
            <div className="text-xl">
              <p>
                <strong>ARS$</strong>
                {`${valores.valor1.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}

                  = ${conver?.arsTOusd.sell.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}{" "}
                <strong> USD$</strong>
              </p>
            </div>
            <div className="text-xl">
              <p>
                <strong>ARS$</strong>
                {`${valores.valor1.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })} ARS$ = ${conver?.arsTOeur.sell.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })} `}
                <strong>EUR€</strong>
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {valores.valor2 ? (
        <>
          <hr />
          <div className="text-white">
            <h1 className="text-center text-xl font-bold">
              Conversion Euro y Dolar a Pesos Argentinos
            </h1>
            <br />
            <div className="flex flex-col justify-around items-center">
              <div className="text-xl">
                <p>
                  <strong>USD$ </strong>
                  {`${valores.valor2.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })} = ${conver?.usd.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
                  <strong> ARS$</strong>
                </p>
              </div>
              <div className="text-xl">
                <p>
                  <strong>EUR€ </strong>
                  {`${valores.valor2.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}  = ${conver?.eur.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
                  <strong> ARS$</strong>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}{" "}
    </div>
  );
};
