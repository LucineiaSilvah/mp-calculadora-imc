import { useState } from "react";
import "./App.css";
import Botao from "./components/Botao/Botao";
import CampoTexto from "./components/CampoTexto/CampoTexto";
import Resposta from "./components/Resposta/Resposta";
import Tabela from "./components/Tabela/Tabela";
import Rodape from "./components/Rodape/Rodape";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resposta, setResposta] = useState("");
  const [desabilitado, setDesabilitado] = useState(false);

  const handlePesoChange = (value) => {
    setPeso(value);
  };
  const handleAlturaChange = (value) => {
    setAltura(value);
  };

  const handleRespostaChange = () => {
    setResposta(null);
  };
  const resetar = () => {
    setDesabilitado(false);
  };
  const calcular = (e) => {
    e.preventDefault();

    let r = parseFloat(peso) / parseFloat(altura ** 2);
    let msg = "";
    switch (true) {
      case r < 17:
        msg = "Muito abaixo do peso";

        setResposta(
          <Resposta
            peso={peso}
            altura={altura}
            r={r.toFixed(2)}
            resultado={msg}
          />
        );
        break;

      case r > 17 && r < 18.49:
        msg = "Abaixo do peso";
        setResposta(
          <Resposta
            peso={peso}
            altura={altura}
            r={r.toFixed(2)}
            resultado={msg}
          />
        );
        break;

      case r > 18.5 && r < 24.99:
        msg = "Peso normal";
        setResposta(
          <Resposta
            peso={peso}
            altura={altura}
            r={r.toFixed(2)}
            resultado={msg}
          />
        );
        break;

      case r > 25 && r < 29.99:
        msg = "Acima do peso";
        setResposta(
          <Resposta
            peso={peso}
            altura={altura}
            r={r.toFixed(2)}
            resultado={msg}
          />
        );
        break;

      case r > 30 && r < 34.99:
        msg = "Obesidade I";
        setResposta(
          <Resposta
            peso={peso}
            altura={altura}
            r={r.toFixed(2)}
            resultado={msg}
          />
        );
        break;

      case r > 35 && r < 39.99:
        msg = "Obesidade II (severa)";
        setResposta(
          <Resposta
            peso={peso}
            altura={altura}
            r={r.toFixed(2)}
            resultado={msg}
          />
        );
        break;

      case r > 40:
        msg = "Obesidade III (mórbida)";
        setResposta(
          <Resposta
            peso={peso}
            altura={altura}
            r={r.toFixed(2)}
            resultado={msg}
          />
        );
        break;
    }
    setPeso("");
    setAltura("");
    setDesabilitado(true);
  };

  return (
    <>
      <main className="Container">
        <h1>Calculadora IMC</h1>
        <form className="Formulario">
          <CampoTexto
            nome="Peso"
            place="KG"
            value={peso}
            onChange={handlePesoChange}
            onClick={handleRespostaChange}
            disabled={desabilitado}
          />
          <CampoTexto
            nome="Altura"
            place="CM"
            value={altura}
            onChange={handleAlturaChange}
            disabled={desabilitado}
          />
          <Botao
            type="submit"
            onClick={desabilitado ? resetar : calcular}
            disabled={desabilitado}
            texto={desabilitado ? "resetar" : "calcular"}
          />

          <p>Saiba Agora se esta no seu peso ideal!</p>
        </form>
        {resposta}
        <Tabela />
      </main>
     <Rodape/>
    </>
  );
}

export default App;
