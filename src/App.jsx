import { useEffect, useState } from "react";
import { Card } from "./components/card/Card.jsx";
import axios from "axios";
import { Footer } from "./components/footer/Footer.jsx";
import "./index.css";

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
    <div className="contenedor">
      {datos && <Card datos={datos} />}

      <Footer />
    </div>
  );
}

export default App;
