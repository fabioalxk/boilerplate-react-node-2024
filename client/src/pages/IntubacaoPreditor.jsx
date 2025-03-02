import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./IntubacaoPreditor.scss";

function IntubacaoPreditor() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const navigate = useNavigate();

  const handleProsseguir = () => {
    if (checkboxChecked) {
      navigate('/dados-paciente');
    }
  };

  return (
    <div className="intubacao-preditor-container">
      <div className="header">
        <Link to="/classificacao-leon" className="back-button">←</Link>
        <div className="header-content">
          <h1 className="header-title">Intubação</h1>
          <h2 className="header-subtitle">com preditor</h2>
          <h3 className="header-description">de VAD</h3>
        </div>
      </div>
      
      <div className="content">
        <div className="consider-section">
          <h2 className="section-title">CONSIDERE:</h2>
          
          <ul className="numbered-list">
            <li className="list-item">
              <div className="number">1</div>
              <div className="item-text">Solicite ajuda de outro médico;</div>
            </li>
            <li className="list-item">
              <div className="number">2</div>
              <div className="item-text">O procedimento de intubação deverá ser realizado pelo médico mais experiente;</div>
            </li>
            <li className="list-item">
              <div className="number">3</div>
              <div className="item-text">Solicite todo o material de via aérea difícil;</div>
            </li>
            <li className="list-item">
              <div className="number">4</div>
              <div className="item-text">Considere realizar o procedimento com o paciente acordado;</div>
            </li>
            <li className="list-item">
              <div className="number">5</div>
              <div className="item-text">Considere via aérea cirúrgica.</div>
            </li>
          </ul>
          
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={checkboxChecked}
                onChange={() => setCheckboxChecked(!checkboxChecked)}
                className="checkbox-input"
              />
              <div className="checkbox-text">
                Entendendo os riscos que envolvem a administração de drogas sedativas e hipnóticas em pacientes com preditores de Via Aérea Difícil.
              </div>
            </label>
          </div>
        </div>
        
        <button 
          className={`continue-button ${!checkboxChecked ? 'disabled' : ''}`}
          disabled={!checkboxChecked}
          onClick={handleProsseguir}
        >
          Prosseguir
        </button>
      </div>
    </div>
  );
}

export default IntubacaoPreditor; 