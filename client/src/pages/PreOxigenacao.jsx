import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./PreOxigenacao.scss";
// Using the image from the public assets directory
// No need to import the image when it's in the public directory

function PreOxigenacao() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientData = location.state?.patientData || {
    nome: "Paciente",
    idade: "-",
    peso: "-",
    altura: "-",
    imc: "-"
  };

  // Função para navegar para a próxima tela
  const handleProsseguir = () => {
    // Navegar para a página de Posicionamento com os dados do paciente
    navigate("/posicionamento", { state: { patientData } });
  };

  return (
    <div className="pre-oxigenacao-container">
      <div className="header">
        <Link to="/dados-paciente" className="back-button">←</Link>
        <div className="header-content">
          <h1 className="header-title">Pré-Oxigenação</h1>
        </div>
        <Link to="#" className="info-button">i</Link>
      </div>

      <div className="patient-info">
        <div className="info-column left">
          <div className="info-item">Nome: {patientData.nome}</div>
          <div className="info-item">Idade: {patientData.idade} anos</div>
        </div>
        <div className="info-column right">
          <div className="info-item">Peso: {patientData.peso} kg</div>
          <div className="info-item">Altura: {patientData.altura} cm</div>
          <div className="info-item">IMC: {patientData.imc}</div>
        </div>
      </div>

      <div className="content">
        <div className="instruction-text">
          Iniciar pré-oxigenação por 3-5 minutos com máscara bem ajustada e 100% de oxigênio.
        </div>

        <div className="image-container">
          {/* Using the image from the public assets directory */}
          <img 
            src="/assets/entubado.png" 
            alt="Procedimento de pré-oxigenação" 
            className="procedure-image"
          />
        </div>

        <button onClick={handleProsseguir} className="blue-button">
          Prosseguir
        </button>
      </div>
    </div>
  );
}

export default PreOxigenacao; 