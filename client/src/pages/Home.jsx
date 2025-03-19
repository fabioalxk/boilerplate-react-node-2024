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
      {/* Header minimalista */}
      <header className="header">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.5C4.5 8.91 7.41 6 11 6C14.59 6 17.5 8.91 17.5 12.5C17.5 16.09 14.59 19 11 19C7.41 19 4.5 16.09 4.5 12.5Z" stroke="#4f46e5" strokeWidth="2" />
            <path d="M17.5 12H22" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 9L20 15" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>doc-facil</span>
        </div>

        {/* Botão de menu mobile */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            )}
          </button>
        )}

        {/* Menu para desktop */}
        {!isMobile && (
          <nav className="nav">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/politica-privacidade" className="nav-link">Política</Link>
            <Link to="/eula" className="nav-link">EULA</Link>
          </nav>
        )}
      </header>

      {/* Menu mobile */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link active" onClick={handleLinkClick}>Home</Link>
          <Link to="/politica-privacidade" className="nav-link" onClick={handleLinkClick}>Política</Link>
          <Link to="/eula" className="nav-link" onClick={handleLinkClick}>EULA</Link>
        </div>
      )}

      {/* Conteúdo principal */}
      <main className="main">
        {/* Hero section */}
        <section className="hero">
          <h1>doc-facil</h1>
          <p>Assistente médico para intubação traqueal em pacientes adultos</p>
        </section>

        {/* Procedimento card */}
        <section className="procedure-section">
          <Link to="/procedimento" className="procedure-card">
            <div className="card-content">
              <h2>Procedimento Adulto</h2>
              <p>Protocolo sequencial para intubação traqueal em pacientes adultos</p>
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>
        </section>
      </main>

      {/* Footer minimalista */}
      <footer className="footer">
        <div className="footer-content">
          <span>Dr. Antonio | CRM xxx-xxx</span>
          <div className="footer-links">
            <Link to="/politica-privacidade">Política</Link>
            <span>|</span>
            <Link to="/eula">EULA</Link>
          </div>
          <span>© {new Date().getFullYear()} doc-facil</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
