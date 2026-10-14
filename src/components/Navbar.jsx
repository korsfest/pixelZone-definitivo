import React from 'react';

export function Navbar({ currentView, setCurrentView, cartCount, setIsCartOpen, user, setUser }) {
  const handleLogout = () => {
    setUser(null);
    setCurrentView('inicio');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-4 shadow-sm">
      <div className="container-fluid">
        <a 
          className="navbar-brand fw-bold text-info fs-4 d-flex align-items-center gap-2" 
          onClick={() => setCurrentView('inicio')}
          style={{ cursor: 'pointer' }}
        >
          <i className="bi bi-controller"></i> PixelZone
        </a>

        <div className="d-flex align-items-center gap-3">
          <button 
            className={`btn btn-sm ${currentView === 'inicio' ? 'btn-info' : 'btn-outline-light'}`}
            onClick={() => setCurrentView('inicio')}
          >
            Inicio
          </button>
          
          <button 
            className={`btn btn-sm ${currentView === 'catalogo' ? 'btn-info' : 'btn-outline-light'}`}
            onClick={() => setCurrentView('catalogo')}
          >
            Catálogo
          </button>

          {}
          {user?.role === 'admin' && (
            <button 
              className={`btn btn-sm ${currentView === 'admin' ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => setCurrentView('admin')}
            >
              <i className="bi bi-shield-lock-fill me-1"></i>Panel Admin
            </button>
          )}

          {}
          <button 
            className="btn btn-outline-info position-relative btn-sm me-2" 
            onClick={() => setIsCartOpen(true)}
          >
            <i className="bi bi-cart-fill me-1"></i> Carrito
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </button>

          {}
          {user ? (
            <div className="d-flex align-items-center gap-2 border-start ps-3 border-secondary">
              <span className="badge bg-success py-2 px-3 fs-6 fw-normal d-flex align-items-center gap-1">
                <i className="bi bi-person-check-fill"></i> Hola, {user.nombre}
              </span>
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                Salir
              </button>
            </div>
          ) : (
            <div className="d-flex gap-2 border-start ps-3 border-secondary">
              <button 
                className={`btn btn-sm ${currentView === 'login' ? 'btn-info' : 'btn-outline-light'}`}
                onClick={() => setCurrentView('login')}
              >
                Iniciar Sesión
              </button>
              <button 
                className={`btn btn-sm ${currentView === 'registro' ? 'btn-info' : 'btn-primary'}`}
                onClick={() => setCurrentView('registro')}
              >
                Registrarse
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}