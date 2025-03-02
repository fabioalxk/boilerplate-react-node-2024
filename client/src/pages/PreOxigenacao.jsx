import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./PreOxigenacao.scss";
// Importar a imagem corretamente
import entubadoImg from "../assets/entubado.png";
// A imagem do paciente sendo entubado precisa ser adicionada aos assets do projeto
// Você precisará adicionar uma imagem com nome "pre-oxigenacao.png" na pasta assets

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

  // Função para navegar para a próxima tela (a ser implementada)
  const handleProsseguir = () => {
    // Adicionar futuramente a navegação para a próxima tela
    alert("Próxima etapa em desenvolvimento");
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
          {/* Nota: Esta imagem precisa ser adicionada aos assets do projeto */}
          <img 
            src={entubadoImg} 
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