// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Efeito para detectar redimensionamento da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Função para fechar o menu após clicar em um link
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="home-container">
      {/* Header/Navegação */}
      <header className="header">
        <div className="header-content">
          <div className="navbar">
            <a href="/" className="logo-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 12.5C4.5 8.91 7.41 6 11 6C14.59 6 17.5 8.91 17.5 12.5C17.5 16.09 14.59 19 11 19C7.41 19 4.5 16.09 4.5 12.5Z" stroke="#4f46e5" strokeWidth="2" />
                <path d="M17.5 12H22" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 9L20 15" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="logo-text">doc-facil</span>
            </a>
            
            {/* Botão de menu hamburguer para mobile */}
            {isMobile && (
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="menu-button"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h18M3 6h18M3 18h18"></path>
                  </svg>
                )}
              </button>
            )}
            
            {/* Menu para desktop */}
            {!isMobile && (
              <nav className="desktop-nav">
                <Link to="/" className="nav-link active">
                  Home
                  <span className="active-indicator"></span>
                </Link>
                <Link to="/politica-privacidade" className="nav-link">
                  Política de Privacidade
                </Link>
                <Link to="/eula" className="nav-link">
                  EULA
                </Link>
              </nav>
            )}
          </div>
          
          {/* Menu mobile expandido */}
          {isMobile && isMenuOpen && (
            <div className="mobile-menu">
              <Link 
                to="/" 
                className="nav-link active"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link 
                to="/politica-privacidade" 
                className="nav-link"
                onClick={handleLinkClick}
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/eula" 
                className="nav-link"
                onClick={handleLinkClick}
              >
                EULA
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">doc-facil</h1>
            <p className="hero-subtitle">
              Assistente médico para intubação traqueal em pacientes adultos
            </p>
          </div>
        </section>

        {/* Procedures Section */}
        <section className="procedures-section">
          <div className="container">
            <h2 className="section-title">Procedimentos Disponíveis</h2>
            
            <div className="procedures-grid">
              <Link to="/classificacao-leon" className="procedure-card">
                <div className="card-content">
                  <div className="card-text">
                    <h3 className="card-title">Classificação LEON</h3>
                    <p className="card-description">
                      Protocolo para intubação traqueal em pacientes adultos
                    </p>
                  </div>
                  <div className="chevron-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="author-info">
                <p className="author-title">Aplicativo médico por</p>
                <p className="author-name">Dr. Antonio | CRM xxx-xxx</p>
              </div>
              
              <div className="footer-links">
                <Link to="/politica-privacidade" className="footer-link">
                  Política de Privacidade
                </Link>
                <span className="divider">|</span>
                <Link to="/eula" className="footer-link">
                  EULA
                </Link>
              </div>
              
              <div className="copyright">
                © {new Date().getFullYear()} doc-facil. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
