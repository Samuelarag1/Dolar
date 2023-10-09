import React from "react";
import { useState } from "react";

export const Conversion = (props) => {
  console.log(props);

  const [input, setInput] = useState("");

  const handleOnSubmit = (e) => {
    if (input !== "") {
      console.log(input);
      setInput("");
    }
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <p>Monto a convertir</p>
      <input type="text" value={input} onChange={handleOnChange} />
      <button onClick={handleOnSubmit}>Convertir</button>
    </div>
  );
};
