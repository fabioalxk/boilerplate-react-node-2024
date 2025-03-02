import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./IntubacaoPreditor.scss"; // Reaproveitamos o mesmo estilo

function IntubacaoSemPreditor() {
  const navigate = useNavigate();

  return (
    <div className="intubacao-sem-preditor-container">
      <div className="header">
        <Link to="/classificacao-leon" className="back-button">←</Link>
        <div className="header-content">
          <h1 className="header-title">Intubação</h1>
          <h2 className="header-subtitle">sem preditor</h2>
          <h3 className="header-description">de VAD</h3>
        </div>
      </div>
      
      <div className="content">
        <div className="consider-section">
          <h2 className="section-title">CONSIDERE:</h2>
          
          <ul className="numbered-list">
            <li className="list-item">
              <div className="number">1</div>
              <div className="item-text">Verificar todos os equipamentos necessários;</div>
            </li>
            <li className="list-item">
              <div className="number">2</div>
              <div className="item-text">Posição olfativa adequada (elevação da cabeça e extensão do pescoço);</div>
            </li>
            <li className="list-item">
              <div className="number">3</div>
              <div className="item-text">Pré-oxigenação adequada por 3-5 minutos;</div>
            </li>
            <li className="list-item">
              <div className="number">4</div>
              <div className="item-text">Sequência rápida de intubação se indicado;</div>
            </li>
            <li className="list-item">
              <div className="number">5</div>
              <div className="item-text">Pressão cricóide se risco de aspiração.</div>
            </li>
          </ul>
        </div>
        
        <button 
          className="continue-button"
          onClick={() => navigate('/dados-paciente')}
        >
          Prosseguir
        </button>
      </div>
    </div>
  );
}

export default IntubacaoSemPreditor; 