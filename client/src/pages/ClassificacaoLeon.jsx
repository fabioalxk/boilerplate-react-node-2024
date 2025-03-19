import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClassificacaoLeon.scss';

const ClassificacaoLeon = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/intubacao-preditor');
  };

  return (
    <div className="page-container">
      {/* Header minimalista */}
      <header className="header">
        <button
          onClick={() => navigate('/procedimento')}
          className="back-button"
          aria-label="Voltar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="title">Classificação LEON</h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content-with-footer">
        <div className="step-indicator">
          <div className="step active">1</div>
          <div className="step">2</div>
          <div className="step">3</div>
          <div className="step">4</div>
          <div className="step">5</div>
        </div>

        <div className="leon-card">
          <h2>Protocolo de Intubação</h2>
          <p className="subtitle">
            Classificação LEON para avaliação de via aérea difícil
          </p>

          <div className="leon-table">
            <div className="leon-row header-row">
              <div className="leon-cell">L</div>
              <div className="leon-cell">Look externally</div>
              <div className="leon-cell">Avaliação externa</div>
            </div>
            <div className="leon-row">
              <div className="leon-cell">E</div>
              <div className="leon-cell">Evaluate 3-3-2 rule</div>
              <div className="leon-cell">Avaliação da regra 3-3-2</div>
            </div>
            <div className="leon-row">
              <div className="leon-cell">O</div>
              <div className="leon-cell">Obstruction</div>
              <div className="leon-cell">Obstrução das vias aéreas</div>
            </div>
            <div className="leon-row">
              <div className="leon-cell">N</div>
              <div className="leon-cell">Neck mobility</div>
              <div className="leon-cell">Mobilidade do pescoço</div>
            </div>
          </div>

          <div className="instructions">
            <p>
              Avalie todos os parâmetros da classificação LEON para identificar potenciais dificuldades de intubação.
            </p>
          </div>
        </div>

        <div className="disclaimer">
          <p>IMPORTANTE: Este guia serve apenas como um auxílio. A avaliação clínica presencial da equipe de saúde é insubstituível.</p>
        </div>

      </div>

      <div className="footer-buttons">
        <button
          className="action-button"
          onClick={handleContinue}
        >
          Prosseguir para Intubação com Preditor
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClassificacaoLeon;
