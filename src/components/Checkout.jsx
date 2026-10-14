import React from 'react';

export function Checkout({ cart, clearCart, setCurrentView }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setCurrentView('compra-exitosa');
  };

  return (
    <div className="container py-5 text-light">
      <div className="card bg-secondary text-light p-4 mx-auto" style={{ maxWidth: '600px', borderRadius: '12px' }}>
        <h3 className="text-info fw-bold mb-4">Formulario de Pago</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small">Nombre Completo</label>
            <input type="text" className="form-control" required placeholder="Pedro Hacker" />
          </div>
          <div className="mb-3">
            <label className="form-label small">Correo Electrónico</label>
            <input type="email" className="form-control" required placeholder="pedro@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label small">Número de Tarjeta</label>
            <input type="text" className="form-control" required placeholder="1234 5678 9012 3456" />
          </div>
          <div className="mb-4">
            <h5 className="fw-bold text-warning">Total a Pagar: ${total.toLocaleString('es-CL')}</h5>
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-success flex-grow-1 fw-bold">
              Confirmar Pago
            </button>
            <button 
              type="button" 
              className="btn btn-outline-light"
              onClick={() => setCurrentView('catalogo')}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}