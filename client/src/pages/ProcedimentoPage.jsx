import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProcedimentoPage.scss';

const ProcedimentoPage = () => {
  const navigate = useNavigate();

  const handleStartProcedure = () => {
    navigate('/classificacao-leon');
  };

  return (
    <div className="page-container">
      {/* Header minimalista */}
      <header className="header">
        <button
          onClick={() => navigate('/')}
          className="back-button"
          aria-label="Voltar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="title">Procedimento Adulto</h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content-with-footer">
        <div className="procedure-info">
          <p className="procedure-description">
            Protocolo sequencial para intubação traqueal em pacientes adultos
          </p>

          <div className="procedure-flow">
            <h2>Fluxo do Procedimento</h2>
            <ol className="flow-steps">
              <li>Classificação LEON</li>
              <li>Intubação com Preditor</li>
              <li>Dados do Paciente</li>
              <li>Pré-Oxigenação</li>
              <li>Posicionamento</li>
            </ol>
          </div>

          <div className="disclaimer">
            <p>IMPORTANTE: Este guia serve apenas como um auxílio. A avaliação clínica
              presencial da equipe de saúde é insubstituível.</p>
          </div>
        </div>

      </div>

      <div className="footer-buttons">
        <button
          className="action-button"
          onClick={handleStartProcedure}
        >
          Iniciar Procedimento
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProcedimentoPage;
