import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PoliticaPrivacidade.scss';

const PoliticaPrivacidade = () => {
  const navigate = useNavigate();

  return (
    <div className="politica-privacidade-container">
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
          Política de Privacidade
        </h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content">
        <div className="privacy-content">
          <h2>
            Política de Privacidade do Aplicativo
          </h2>
          
          <p>
            Este documento explica como suas informações pessoais são coletadas, usadas e compartilhadas 
            quando você utiliza nosso aplicativo médico.
          </p>
          
          <h3>
            Informações que Coletamos
          </h3>
          
          <p>
            Este aplicativo não coleta dados pessoais que possam identificar o usuário individualmente. 
            Utilizamos apenas dados anônimos para melhorar a experiência do usuário.
          </p>
          
          <h3>
            Como Utilizamos Suas Informações
          </h3>
          
          <p>
            As informações coletadas são utilizadas exclusivamente para melhorar os serviços oferecidos pelo aplicativo, 
            incluindo o aprimoramento das funcionalidades e a resolução de problemas técnicos.
          </p>
          
          <h3>
            Compartilhamento de Dados
          </h3>
          
          <p>
            Não compartilhamos, vendemos ou transferimos suas informações pessoais a terceiros, 
            exceto quando exigido por lei ou para proteger nossos direitos.
          </p>
        </div>
        
        <div className="button-container">
          <button className="blue-button" onClick={() => navigate(-1)}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade; 