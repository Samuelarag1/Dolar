import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import axios from "axios";
import "./App.css";

function App() {
  const [datos, setDatos] = useState(null);

  const dataRecibida = async () => {
    try {
      const valores = await axios("https://api.bluelytics.com.ar/v2/latest");
      setDatos(valores.data);
    } catch (error) {
      return new Error(error);
    }
  };

  useEffect(() => {
    dataRecibida();
  }, []);

  return (
    <div>
      {datos && <Card datos={datos} />}

      <footer>
        <p>Todos los derechos reservados | Samuel Aragon 2023</p>
      </footer>
    </div>
  );
}

export default App;
