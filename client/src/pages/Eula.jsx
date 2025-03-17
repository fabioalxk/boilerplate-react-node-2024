import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Eula.scss";

const Eula = () => {
  const navigate = useNavigate();

  return (
    <div className="eula-container">
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
          EULA
        </h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content">
        <div className="eula-content">
          <h2>
            Contrato de Licença de Usuário Final
          </h2>
          
          <p>
            Este Contrato de Licença de Usuário Final ("EULA") é um acordo legal entre você 
            e os desenvolvedores do aplicativo doc-facil.
          </p>
          
          <h3>
            1. Concessão de Licença
          </h3>
          
          <p>
            Os desenvolvedores concedem a você uma licença limitada, não exclusiva e intransferível para 
            usar o aplicativo doc-facil para fins médicos auxiliares.
          </p>
          
          <h3>
            2. Restrições de Uso
          </h3>
          
          <p>
            Você concorda em não modificar, adaptar, traduzir, descompilar, fazer engenharia 
            reversa ou tentar derivar o código-fonte do aplicativo.
          </p>
          
          <h3>
            3. Responsabilidade Limitada
          </h3>
          
          <p>
            O aplicativo é fornecido apenas como uma ferramenta auxiliar. A avaliação clínica presencial 
            da equipe de saúde é insubstituível.
          </p>
        </div>
        
        <div className="agreement-section">
          <div className="checkbox-container">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              Eu li e concordo com os termos e condições deste Contrato de Licença de Usuário Final.
            </label>
          </div>
          
          <div className="button-group">
            <button className="button decline" onClick={() => navigate(-1)}>
              Recusar
            </button>
            <button className="button accept" onClick={() => navigate('/')}>
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eula; 