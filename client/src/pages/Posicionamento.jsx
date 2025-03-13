import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Posicionamento.scss";

function Posicionamento() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientData = location.state?.patientData || {
    nome: "Paciente",
    idade: "55",
    peso: "80",
    altura: "180",
    imc: "24.7"
  };

  const handleProsseguir = () => {
    // Navigate to the next screen (to be implemented)
    alert("Próxima etapa em desenvolvimento");
  };

  return (
    <div className="posicionamento-container">
      <header>
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Voltar
        </button>
        <h1>Posicionamento</h1>
      </header>

      <div className="patient-info-card">
        <span>Adulto {patientData.peso} Kg</span>
        <span>Masculino</span>
        <span>IMC: {patientData.imc} Kg/m²</span>
        <span>{patientData.altura} m</span>
        <span>{patientData.idade} anos</span>
      </div>

      <div className="content">
        <h2>Sugestão de Posição:</h2>
        <ul>
          <li>Coxins na região occipital.</li>
          <li>Lóbulo da orelha alinhado ao esterno.</li>
        </ul>

        <div className="image-card">
          <img src="/assets/posicionamento.png" alt="Posicionamento do paciente" />
        </div>

        <button className="prosseguir-button" onClick={handleProsseguir}>
          Prosseguir
        </button>
      </div>
    </div>
  );
}

export default Posicionamento; 