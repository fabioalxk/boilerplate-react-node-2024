import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntubacaoPreditor.scss";

function IntubacaoPreditor() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (checkboxChecked) {
      navigate('/dados-paciente');
    }
  };

  return (
    <div className="page-container">
      {/* Header minimalista */}
      <header className="header">
        <button
          onClick={() => navigate('/classificacao-leon')}
          className="back-button"
          aria-label="Voltar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="title">Intubação com Preditor</h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content-with-footer">
        <div className="step-indicator">
          <div className="step">1</div>
          <div className="step active">2</div>
          <div className="step">3</div>
          <div className="step">4</div>
          <div className="step">5</div>
        </div>

        <div className="preditor-card">
          <h2>Via Aérea Difícil (VAD)</h2>
          <p className="subtitle">
            Atenção: Preditores de VAD foram identificados
          </p>

          <div className="recommendations">
            <h3>Considere as seguintes ações:</h3>
            <ul className="recommendations-list">
              <li>Solicitar ajuda de outro médico</li>
              <li>O procedimento de intubação deve ser realizado pelo médico mais experiente</li>
              <li>Solicitar todo o material de via aérea difícil</li>
              <li>Considerar realizar o procedimento com o paciente acordado</li>
              <li>Considerar via aérea cirúrgica</li>
            </ul>
          </div>

          <div className="checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={checkboxChecked}
                onChange={() => setCheckboxChecked(!checkboxChecked)}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                Entendo os riscos que envolvem a administração de drogas sedativas e hipnóticas em pacientes com preditores de Via Aérea Difícil.
              </span>
            </label>
          </div>
        </div>

      </div>

      <div className="footer-buttons">
        <button
          className={`action-button ${!checkboxChecked ? 'disabled' : ''}`}
          disabled={!checkboxChecked}
          onClick={handleContinue}
        >
          Prosseguir para Dados do Paciente
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default IntubacaoPreditor;
