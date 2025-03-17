import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClassificacaoLeon.scss';

const ClassificacaoLeon = () => {
  const navigate = useNavigate();

  return (
    <div className="classificacao-leon-container">
      {/* Header */}
      <header className="header">
        <button
          onClick={() => navigate(-1)}
          className="back-button"
          aria-label="Voltar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="header-title">
          Classificação LEON
        </h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content">
        <div className="protocol-info">
          <p className="protocol-text">
            IMPORTANTE: Este guia serve apenas como um auxílio. A avaliação clínica 
            presencial da equipe de saúde é insubstituível.
          </p>
        </div>

        <h2 className="protocol-title">
          Protocolo de Intubação
        </h2>
        
        <p className="protocol-description">
          Siga os passos abaixo para auxílio no procedimento de intubação traqueal.
        </p>
        
        <div className="steps-list">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Avaliação Inicial</h3>
              <p className="step-description">
                Realize a avaliação clínica do paciente e determine a necessidade de intubação.
              </p>
            </div>
          </div>
          
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Preparação</h3>
              <p className="step-description">
                Verifique o equipamento necessário e posicione adequadamente o paciente.
              </p>
            </div>
          </div>
          
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Procedimento</h3>
              <p className="step-description">
                Realize a intubação traqueal seguindo as técnicas apropriadas.
              </p>
            </div>
          </div>
          
          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3 className="step-title">Confirmação</h3>
              <p className="step-description">
                Confirme o posicionamento do tubo e inicie a ventilação.
              </p>
            </div>
          </div>
        </div>
        
        <div className="action-button">
          <button onClick={() => navigate('/intubacao-preditor')}>
            Prosseguir para o Preditor
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassificacaoLeon; 