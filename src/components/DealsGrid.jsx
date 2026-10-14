import { useState } from 'react';

export function DealsGrid() {
  const [deals] = useState([
    { id: 1, store: 'Steam Store', discount: '-30%', badgeColor: 'bg-primary', icon: 'bi-steam' },
    { id: 2, store: 'Epic Games', discount: '-40%', badgeColor: 'bg-info text-dark', icon: 'bi-controller' },
    { id: 3, store: 'Xbox Deals', discount: '-60%', badgeColor: 'bg-success', icon: 'bi-xbox' },
    { id: 4, store: 'Oferta Relámpago', discount: '-90%', badgeColor: 'bg-danger', icon: 'bi-lightning-charge-fill' }
  ]);

  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">
          <i className="bi bi-fire text-warning me-2"></i>¡Descuentos Activos en Tiempo Real!
        </h2>
        <div className="row g-4">
          {deals.map((deal) => (
            <div key={deal.id} className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 bg-secondary bg-opacity-10 border-secondary text-center p-3 shadow-sm">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <i className={`bi ${deal.icon} fs-1 text-primary mb-2`}></i>
                  <span className={`badge ${deal.badgeColor} fs-4 mb-2`}>
                    {deal.discount}
                  </span>
                  <p className="card-text text-light fw-medium mb-0">{deal.store}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}