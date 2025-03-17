import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProcedimentoPage.scss';

const ProcedimentoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [procedimento, setProcedimento] = useState(null);

  useEffect(() => {
    // Mock de dados para testes. Poderia buscar API
    const mockProcedimentos = {
      'classificacao-leon': {
        titulo: 'Classificação LEON',
        descricao: 'Protocolo para intubação traqueal em pacientes adultos',
        conteudo: `
          <h2>Classificação LEON</h2>
          <p>Este procedimento...</p>
          <h3>Etapas:</h3>
          <ul>
            <li>Avaliar vias aéreas</li>
            <li>Preparar equipamento</li>
            <li>Adm. de medicações</li>
            <li>Monitoramento contínuo</li>
          </ul>
        `,
      },
    };

    setProcedimento(mockProcedimentos[id] || null);
  }, [id]);

  if (!procedimento) {
    return (
      <div className="procedimento-page-container">
        <div className="not-found">
          Procedimento não encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="procedimento-page-container">
      {/* Header da página */}
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
        <h1 className="title">
          {procedimento.titulo}
        </h1>
      </header>

      {/* Conteúdo principal */}
      <div className="content">
        <p className="description">
          {procedimento.descricao}
        </p>
        
        <div 
          dangerouslySetInnerHTML={{ __html: procedimento.conteudo }} 
          className="procedimento-content"
        />
      </div>
    </div>
  );
};

export default ProcedimentoPage; 