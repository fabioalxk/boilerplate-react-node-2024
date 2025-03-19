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
    imc: "24.7",
    sexo: "masculino"
  };

  const handleFinish = () => {
    navigate('/procedimento', { state: { completed: true } });
  };

  return (
    <div className="posicionamento-container">
      {/* Header minimalista */}
      <header className="header">
        <button
          onClick={() => navigate('/pre-oxigenacao')}
          className="back-button"
          aria-label="Voltar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="title">Posicionamento</h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content">
        <div className="step-indicator">
          <div className="step">1</div>
          <div className="step">2</div>
          <div className="step">3</div>
          <div className="step">4</div>
          <div className="step active">5</div>
        </div>

        <div className="patient-summary">
          <h2>Dados do Paciente</h2>
          <div className="patient-info-grid">
            <div className="info-item">
              <span className="info-label">Nome:</span>
              <span className="info-value">{patientData.nome}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Idade:</span>
              <span className="info-value">{patientData.idade} anos</span>
            </div>
            <div className="info-item">
              <span className="info-label">Peso:</span>
              <span className="info-value">{patientData.peso} kg</span>
            </div>
            <div className="info-item">
              <span className="info-label">IMC:</span>
              <span className="info-value">{patientData.imc} kg/m²</span>
            </div>
          </div>
        </div>

        <div className="procedure-card">
          <h2>Posicionamento do Paciente</h2>
          <div className="procedure-steps">
            <div className="recommendations">
              <h3>Sugestão de Posição:</h3>
              <ul className="recommendation-list">
                <li>Coxins na região occipital</li>
                <li>Lóbulo da orelha alinhado ao esterno</li>
                <li>Elevação da cabeça entre 8-10cm do plano da maca</li>
                <li>Posição olfativa (sniffing position)</li>
              </ul>
            </div>

            <div className="image-container">
              <img
                src="/assets/posicionamento.png"
                alt="Posicionamento do paciente"
                className="procedure-image"
              />
            </div>

            <div className="position-tips">
              <p>
                O correto posicionamento do paciente é fundamental para facilitar a visualização das vias aéreas e aumentar a chance de sucesso na intubação.
              </p>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button
            className="finish-button"
            onClick={handleFinish}
          >
            Finalizar Procedimento
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Posicionamento;
