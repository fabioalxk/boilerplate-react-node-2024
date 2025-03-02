import React from "react";
import { Link } from "react-router-dom";
import "./ClassificacaoLeon.scss";

function ClassificacaoLeon() {
  return (
    <div className="leon-container">
      <div className="header">
        <Link to="/" className="back-button">←</Link>
        <h1 className="header-title">Classificação LEON</h1>
        <div className="info-button">i</div>
      </div>
      
      <div className="content">
        <Link to="/intubacao-preditor" className="leon-option">
          <div className="option-text">
            <span className="option-title">Com preditor</span>
            <span className="option-subtitle">de Via Aérea Difícil - VAD</span>
          </div>
          <div className="arrow-icon">→</div>
        </Link>
        
        <Link to="/intubacao-sem-preditor" className="leon-option">
          <div className="option-text">
            <span className="option-title">Sem preditor</span>
            <span className="option-subtitle">de Via Aérea Difícil - VAD</span>
          </div>
          <div className="arrow-icon">→</div>
        </Link>
      </div>
    </div>
  );
}

export default ClassificacaoLeon; 