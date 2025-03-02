// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="doc-facil-container">
      <div className="logo-section">
        <h1 className="logo-text">doc-facil</h1>
      </div>

      <div className="info-section">
        <p className="info-paragraph">
          Este aplicativo auxilia a intubação traqueal no paciente adulto.
        </p>
        <p className="info-paragraph">
          A avaliação clínica presencial da equipe de saúde é insubstituível.
        </p>
      </div>

      <div className="buttons-container">
        <Link to="/classificacao-leon" className="procedure-button">
          <div className="procedure-text">
            <span className="procedure-label">Procedimento</span>
            <span className="procedure-type">ADULTO</span>
          </div>
          <div className="arrow-icon">→</div>
        </Link>
      </div>

      <div className="footer">
        <p className="footer-text">Aplicativo médico by</p>
        <p className="footer-text">Dr. Antonio | CRM xxx-xxx</p>
        <p className="footer-text">
          <a href="/politica-privacidade" className="footer-link">política de privacidade</a> |
          <a href="/eula" className="footer-link">EULA</a>
        </p>
        <p className="footer-text">Copyright ©2022-2030 - Todos os direitos reservados.</p>
        <p className="footer-text">fabioalxk@@gmail.com</p>
      </div>
    </div>
  );
}

export default Home;
