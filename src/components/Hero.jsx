export function Hero({ setCurrentView }) {
  return (
    <section className="py-5 text-center bg-dark text-light border-bottom border-secondary">
      <div className="container py-4">
        <h1 className="display-4 fw-bold text-white mb-3">
          El Rastreador de Ofertas Definitivo
        </h1>
        <p className="lead text-white-50 mb-4 mx-auto" style={{ maxWidth: '650px' }}>
          Encuentra los mejores descuentos en videojuegos para Steam, Epic Games, PlayStation y Xbox en tiempo real.
        </p>
        
        {}
        <button 
          className="btn btn-primary btn-lg btn-animate fw-bold px-4 shadow"
          onClick={() => setCurrentView && setCurrentView('catalogo')}
        >
          <i className="bi bi-lightning-charge-fill me-2"></i>
          Ver Ofertas Relámpago
        </button>
      </div>
    </section>
  );
}