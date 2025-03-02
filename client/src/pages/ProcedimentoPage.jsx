import React from "react";
import { Link } from "react-router-dom";
import "./ProcedimentoPage.scss";

function ProcedimentoPage() {
  return (
    <div className="procedimento-container">
      <div className="header">
        <Link to="/" className="back-button">←</Link>
        <h1 className="header-title">Procedimento Adulto</h1>
      </div>
      
      <div className="content">
        <div className="section">
          <h2 className="section-title">Preparação</h2>
          <ul className="checklist">
            <li className="checklist-item">Verificar equipamento</li>
            <li className="checklist-item">Posicionamento do paciente</li>
            <li className="checklist-item">Pré-oxigenação</li>
            <li className="checklist-item">Medicações preparadas</li>
          </ul>
        </div>
        
        <div className="section">
          <h2 className="section-title">Parâmetros Recomendados</h2>
          <div className="parameters">
            <div className="parameter-item">
              <span className="parameter-label">Tamanho do tubo (homem):</span>
              <span className="parameter-value">7.5 - 8.0 mm</span>
            </div>
            <div className="parameter-item">
              <span className="parameter-label">Tamanho do tubo (mulher):</span>
              <span className="parameter-value">7.0 - 7.5 mm</span>
            </div>
            <div className="parameter-item">
              <span className="parameter-label">Profundidade de inserção:</span>
              <span className="parameter-value">21-23 cm na arcada dentária</span>
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">Procedimento</h2>
          <ol className="procedure-steps">
            <li className="procedure-step">Administrar sedação conforme protocolo</li>
            <li className="procedure-step">Utilizar técnica de laringoscopia direta</li>
            <li className="procedure-step">Visualizar cordas vocais</li>
            <li className="procedure-step">Inserir tubo com o balonete passando as cordas</li>
            <li className="procedure-step">Insuflar o balonete</li>
            <li className="procedure-step">Confirmar posição com capnografia</li>
          </ol>
        </div>
      </div>
      
      <div className="footer">
        <p className="disclaimer">
          Este aplicativo é apenas um guia auxiliar. Sempre siga os protocolos institucionais locais.
        </p>
      </div>
    </div>
  );
}

export default ProcedimentoPage; 