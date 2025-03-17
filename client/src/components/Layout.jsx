import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  
  // Não renderizar o layout na página home
  if (location.pathname === '/') {
    return <Outlet />;
  }

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
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: '#f9fafb',
      fontFamily: "'Inter var', 'Roboto', system-ui, sans-serif",
      overflow: 'hidden'
    }}>
      {/* Header/Navegação */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '0.5rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ 
              fontSize: '1.25rem', 
              fontWeight: 600, 
              color: '#4f46e5',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path d="M4.5 12.5C4.5 8.91 7.41 6 11 6C14.59 6 17.5 8.91 17.5 12.5C17.5 16.09 14.59 19 11 19C7.41 19 4.5 16.09 4.5 12.5Z" stroke="#4f46e5" strokeWidth="2" />
                <path d="M17.5 12H22" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 9L20 15" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
              </svg>
              doc-facil
            </Link>
            
            {/* Botão de menu hamburguer para mobile */}
            {isMobile && (
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 20
                }}
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
              <nav style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" style={{ 
                  marginRight: '1.5rem', 
                  color: '#6b7280', 
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  paddingBottom: '0.25rem',
                  transition: 'color 0.2s'
                }}>
                  Home
                </Link>
                <Link to="/politica-privacidade" style={{ 
                  marginRight: '1.5rem', 
                  color: location.pathname === '/politica-privacidade' ? '#4f46e5' : '#6b7280', 
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  paddingBottom: '0.25rem',
                  transition: 'color 0.2s',
                  position: 'relative'
                }}>
                  Política de Privacidade
                  {location.pathname === '/politica-privacidade' && (
                    <span style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      height: '2px', 
                      backgroundColor: '#4f46e5', 
                      borderRadius: '1px'
                    }}></span>
                  )}
                </Link>
                <Link to="/eula" style={{ 
                  color: location.pathname === '/eula' ? '#4f46e5' : '#6b7280', 
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  paddingBottom: '0.25rem',
                  transition: 'color 0.2s',
                  position: 'relative'
                }}>
                  EULA
                  {location.pathname === '/eula' && (
                    <span style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      height: '2px', 
                      backgroundColor: '#4f46e5', 
                      borderRadius: '1px'
                    }}></span>
                  )}
                </Link>
              </nav>
            )}
          </div>
          
          {/* Menu mobile expandido */}
          {isMobile && isMenuOpen && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              zIndex: 15,
              paddingTop: '5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Link 
                to="/" 
                style={{ 
                  margin: '1rem 0',
                  color: '#6b7280', 
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.2s'
                }}
                onClick={handleLinkClick}
                onMouseEnter={(e) => {
                  if (location.pathname !== '/') {
                    e.currentTarget.style.color = '#4f46e5';
                    e.currentTarget.style.borderBottom = '2px solid #4f46e5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== '/') {
                    e.currentTarget.style.color = '#6b7280';
                    e.currentTarget.style.borderBottom = '2px solid transparent';
                  }
                }}
              >
                Home
              </Link>
              <Link 
                to="/politica-privacidade" 
                style={{ 
                  margin: '1rem 0',
                  color: location.pathname === '/politica-privacidade' ? '#4f46e5' : '#6b7280', 
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: location.pathname === '/politica-privacidade' ? '2px solid #4f46e5' : '2px solid transparent',
                  transition: 'all 0.2s'
                }}
                onClick={handleLinkClick}
                onMouseEnter={(e) => {
                  if (location.pathname !== '/politica-privacidade') {
                    e.currentTarget.style.color = '#4f46e5';
                    e.currentTarget.style.borderBottom = '2px solid #4f46e5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== '/politica-privacidade') {
                    e.currentTarget.style.color = '#6b7280';
                    e.currentTarget.style.borderBottom = '2px solid transparent';
                  }
                }}
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/eula" 
                style={{ 
                  margin: '1rem 0',
                  color: location.pathname === '/eula' ? '#4f46e5' : '#6b7280', 
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: location.pathname === '/eula' ? '2px solid #4f46e5' : '2px solid transparent',
                  transition: 'all 0.2s'
                }}
                onClick={handleLinkClick}
                onMouseEnter={(e) => {
                  if (location.pathname !== '/eula') {
                    e.currentTarget.style.color = '#4f46e5';
                    e.currentTarget.style.borderBottom = '2px solid #4f46e5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== '/eula') {
                    e.currentTarget.style.color = '#6b7280';
                    e.currentTarget.style.borderBottom = '2px solid transparent';
                  }
                }}
              >
                EULA
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Outlet/Conteúdo principal */}
      <main style={{ 
        flex: '1',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ 
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          position: 'relative'
        }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout; 