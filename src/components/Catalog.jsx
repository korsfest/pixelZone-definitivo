export function Catalog({ games = [], addToCart }) {
  return (
    <div className="container py-5 text-light">
      <h2 className="text-info fw-bold mb-4">
        <i className="bi bi-grid-fill me-2"></i>Catálogo de Juegos
      </h2>

      {games.length === 0 ? (
        <div className="alert alert-secondary text-center">
          No hay juegos disponibles en la base de datos. Agrega algunos desde el Panel de Administración.
        </div>
      ) : (
        <div className="row g-4">
          {games.map((game) => (
            <div key={game.id} className="col-12 col-md-6 col-lg-4">
              <div className="card bg-secondary text-light h-100 overflow-hidden border-0 shadow">
                <img
                  src={
                    game.imagenUrl ||
                    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'
                  }
                  className="card-img-top object-fit-cover"
                  alt={game.titulo}
                  height="180"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-dark text-info border border-info">
                        <i className="bi bi-controller me-1"></i>
                        {game.categoria || 'General'}
                      </span>
                      <span
                        className={`badge ${
                          game.stock > 0 ? 'bg-success' : 'bg-danger'
                        }`}
                      >
                        Stock: {game.stock ?? 0}
                      </span>
                    </div>
                    <h5 className="card-title fw-bold text-white">
                      {game.titulo}
                    </h5>
                    {game.descripcion && (
                      <p className="card-text small text-light opacity-75">
                        {game.descripcion}
                      </p>
                    )}
                  </div>

                  <div className="mt-3">
                    <div className="d-flex align-items-baseline gap-2 mb-2">
                      <span
                        className="fs-4 fw-bold"
                        style={{ color: '#00ff88' }}
                      >
                        ${Number(game.precio || 0).toLocaleString('es-CL')}
                      </span>
                    </div>
                    <button
                      className="btn btn-info w-100 fw-bold"
                      onClick={() => addToCart(game)}
                      disabled={game.stock === 0}
                    >
                      <i className="bi bi-cart-plus me-1"></i>
                      {game.stock === 0 ? 'Sin Stock' : 'Añadir al Carrito'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}