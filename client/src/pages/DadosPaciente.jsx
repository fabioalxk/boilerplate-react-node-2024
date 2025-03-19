import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DadosPaciente.scss";

function DadosPaciente() {
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [peso, setPeso] = useState("80");
  const [altura, setAltura] = useState("180");
  const [idade, setIdade] = useState("55");
  const [imcCalculado, setImcCalculado] = useState(null);
  const navigate = useNavigate();

  // Verificar se o botão de prosseguir deve estar habilitado
  const prosseguirHabilitado = nome.trim() !== "" && imcCalculado !== null;

  const calcularIMC = () => {
    if (peso && altura) {
      const pesoNum = parseFloat(peso.replace(',', '.'));
      const alturaNum = parseFloat(altura.replace(',', '.')) / 100;
      if (pesoNum > 0 && alturaNum > 0) {
        const imc = pesoNum / (alturaNum * alturaNum);
        setImcCalculado(imc.toFixed(1));
      }
    }
  };

  const handleContinue = () => {
    if (prosseguirHabilitado) {
      navigate('/pre-oxigenacao', {
        state: {
          patientData: {
            nome: nome,
            peso,
            altura,
            idade,
            sexo,
            imc: imcCalculado
          }
        }
      });
    }
  };

  return (
    <div className="page-container">
      {/* Header minimalista */}
      <header className="header">
        <button
          onClick={() => navigate('/intubacao-preditor')}
          className="back-button"
          aria-label="Voltar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="title">Dados do Paciente</h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content-with-footer">
        <div className="step-indicator">
          <div className="step">1</div>
          <div className="step">2</div>
          <div className="step active">3</div>
          <div className="step">4</div>
          <div className="step">5</div>
        </div>

        <div className="patient-form">
          <div className="form-group">
            <label className="form-label" htmlFor="nome">Nome do Paciente <span className="required">*</span></label>
            <input
              id="nome"
              type="text"
              className="form-input"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do paciente"
            />
            {nome.trim() === "" && (
              <p className="field-message">O nome do paciente é obrigatório</p>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Sexo</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="sexo"
                    value="feminino"
                    checked={sexo === "feminino"}
                    onChange={() => setSexo("feminino")}
                  />
                  <span className="radio-label">Feminino</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="sexo"
                    value="masculino"
                    checked={sexo === "masculino"}
                    onChange={() => setSexo("masculino")}
                  />
                  <span className="radio-label">Masculino</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="idade">Idade</label>
              <input
                id="idade"
                type="text"
                className="form-input"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="peso">Peso (Kg)</label>
              <input
                id="peso"
                type="text"
                className="form-input"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="altura">Altura (cm)</label>
              <input
                id="altura"
                type="text"
                className="form-input"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>
          </div>

          <button
            className="calculate-button"
            onClick={calcularIMC}
            type="button"
          >
            Calcular IMC
          </button>

          {imcCalculado && (
            <div className="imc-result">
              <span className="imc-badge">IMC</span>
              <span className="imc-value">{imcCalculado}</span>
              <span className="imc-unit">kg/m²</span>
            </div>
          )}

          {!imcCalculado && (
            <p className="imc-message">É necessário calcular o IMC para prosseguir</p>
          )}
        </div>

      </div>

      <div className="footer-buttons">
        <button
          className={`action-button ${!prosseguirHabilitado ? 'disabled' : ''}`}
          onClick={handleContinue}
          disabled={!prosseguirHabilitado}
        >
          Prosseguir para Pré-oxigenação
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DadosPaciente;
