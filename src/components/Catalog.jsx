import React from 'react';
import { initialGames } from '../data/gamesData';

export function Catalog({ games = [], addToCart }) {
  const displayGames = (games && games.length > 0) ? games : initialGames;

  return (
    <div className="container py-5 text-light">
      <h2 className="text-info fw-bold mb-4">
        <i className="bi bi-grid-fill me-2"></i>Catálogo de Ofertas
      </h2>

      <div className="row g-4">
        {displayGames.map((game) => (
          <div key={game.id} className="col-12 col-md-6 col-lg-4">
            <div className="card bg-secondary text-light h-100 overflow-hidden border-0 shadow">
              <img 
                src={game.image} 
                className="card-img-top object-fit-cover" 
                alt={game.title} 
                height="180" 
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-dark text-info border border-info">
                      <i className={`bi ${game.icon || 'bi-controller'} me-1`}></i>{game.store}
                    </span>
                    <span className="badge bg-danger">{game.discount}</span>
                  </div>
                  <h5 className="card-title fw-bold text-white">{game.title}</h5>
                </div>
                
                <div className="mt-3">
                  <div className="d-flex align-items-baseline gap-2 mb-2">
                    
                    <span className="fs-4 fw-bold" style={{ color: '#00ff88' }}>
                      ${game.price.toLocaleString('es-CL')}
                    </span>
                    {game.originalPrice && (
                      <span className="text-light text-decoration-line-through small opacity-75">
                        ${game.originalPrice.toLocaleString('es-CL')}
                      </span>
                    )}
                  </div>
                  <button 
                    className="btn btn-info w-100 fw-bold" 
                    onClick={() => addToCart(game)}
                  >
                    <i className="bi bi-cart-plus me-1"></i>Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}