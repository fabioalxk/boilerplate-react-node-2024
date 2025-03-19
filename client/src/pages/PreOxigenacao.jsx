import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PreOxigenacao.scss";

function PreOxigenacao() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientData = location.state?.patientData || {
    nome: "Paciente",
    idade: "55",
    peso: "80",
    altura: "180",
    imc: "24.7"
  };

  const handleContinue = () => {
    navigate("/posicionamento", { state: { patientData } });
  };

  return (
    <div className="page-container">
      {/* Header minimalista */}
      <header className="header">
        <button
          onClick={() => navigate('/dados-paciente')}
          className="back-button"
          aria-label="Voltar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="title">Pré-Oxigenação</h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content-with-footer">
        <div className="step-indicator">
          <div className="step">1</div>
          <div className="step">2</div>
          <div className="step">3</div>
          <div className="step active">4</div>
          <div className="step">5</div>
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
          <h2>Procedimento</h2>
          <div className="procedure-steps">
            <p className="step-instruction">
              Iniciar pré-oxigenação por 3-5 minutos com máscara bem ajustada e 100% de oxigênio.
            </p>

            <div className="image-container">
              <img
                src="/assets/entubado.png"
                alt="Procedimento de pré-oxigenação"
                className="procedure-image"
              />
            </div>

            <ul className="instruction-list">
              <li>Verifique se a máscara está bem ajustada ao rosto do paciente</li>
              <li>Certifique-se de que o fluxo de oxigênio está regulado para 100%</li>
              <li>Monitore a saturação de oxigênio durante o procedimento</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-buttons">
        <button
          className="action-button"
          onClick={handleContinue}
        >
          Prosseguir para Posicionamento
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PreOxigenacao;
