import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const handleProsseguir = () => {
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
    <div className="dados-paciente-container">
      <div className="header">
        <Link to="/intubacao-preditor" className="back-button">←</Link>
        <div className="header-content">
          <h1 className="header-title">Dados do</h1>
          <h2 className="header-subtitle">Paciente Adulto</h2>
        </div>
      </div>
      
      <div className="content">
        <div className="form-section">
          <div className="form-group">
            <label className="form-label">Nome do Paciente <span className="required">*</span></label>
            <input 
              type="text" 
              className="form-input" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do paciente"
            />
            {nome.trim() === "" && (
              <p className="field-error">O nome do paciente é obrigatório</p>
            )}
          </div>

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
          
          <div className="input-row">
            <div className="form-group">
              <label className="form-label">Peso (Kg)</label>
              <input 
                type="text" 
                className="form-input" 
                value={peso} 
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Altura (cm)</label>
              <input 
                type="text" 
                className="form-input" 
                value={altura} 
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Idade</label>
              <input 
                type="text" 
                className="form-input" 
                value={idade} 
                onChange={(e) => setIdade(e.target.value)}
              />
            </div>
          </div>
          
          <button className="calculate-button" onClick={calcularIMC}>
            Calcular IMC
          </button>
          
          {imcCalculado && (
            <div className="imc-result">
              <p className="imc-text">IMC = {imcCalculado} Kg/m²</p>
            </div>
          )}
          
          {!imcCalculado && (
            <p className="imc-warning">É necessário calcular o IMC para prosseguir</p>
          )}
        </div>
        
        <button 
          className={`blue-button ${!prosseguirHabilitado ? 'disabled' : ''}`}
          onClick={handleProsseguir}
          disabled={!prosseguirHabilitado}
        >
          Prosseguir
        </button>
      </div>
    </div>
  );
}

export default DadosPaciente; 