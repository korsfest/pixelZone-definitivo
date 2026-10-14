export function CartModal({ isOpen, onClose, cart, removeFromCart, updateQuantity, setCurrentView, user, setLastOrder, clearCart }) {
    if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleFinalizarCompra = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    const clientData = user || {
      nombre: 'pedro',
      apellidos: 'hacker',
      correo: 'pedro.hacker20@example.com',
      calle: 'Los crisantemos, Edificio Norte',
      depto: 'Depto 603',
      region: 'Región Metropolitana de Santiago',
      comuna: 'Cerrillos',
      indicaciones: 'El martes no estaremos en el depto, pero puede dejarselo con el conserje.'
    };

    const order = {
      orderNum: Math.floor(10000000 + Math.random() * 90000000).toString(),
      orderCode: `ORDER${Math.floor(10000 + Math.random() * 90000)}`,
      ...clientData,
      items: cart.map(item => ({
        name: item.title,
        price: item.price,
        quantity: item.quantity
      }))
    };

    setLastOrder(order);
    alert('¡Gracias por tu compra en PixelZone!');
    clearCart();
    onClose();
    setCurrentView('compra-exitosa');
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }} tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-dark text-light border-secondary">
          <div className="modal-header border-secondary">
            <h5 className="modal-title text-info fw-bold">
              <i className="bi bi-cart-fill me-2"></i>Tu Carrito de Compras
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p className="text-center my-4 text-muted">Tu carrito está vacío</p>            ) : (
              <div className="table-responsive">
                <table className="table table-dark align-middle">
                  <thead>
                    <tr>
                      <th>Juego</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Subtotal</th>
                      <th className="text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img src={item.image} alt={item.title} width="40" height="30" className="rounded object-fit-cover" />
                            <span className="fw-semibold">{item.title}</span>
                          </div>
                        </td>
                        <td>${item.price.toLocaleString('es-CL')}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center gap-2">
                                <button 
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary text-light px-2 py-0" 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <span className="fw-bold px-1">{item.quantity}</span>
                                <button 
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary text-light px-2 py-0" 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                            </td>                        <td className="text-success fw-bold">${(item.price * item.quantity).toLocaleString('es-CL')}</td>
                        <td className="text-center">
                          <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="modal-footer border-secondary justify-content-between">
            <button type="button" className="btn btn-outline-light" onClick={onClose}>
              <i className="bi bi-arrow-left me-1"></i>Seguir Comprando
            </button>
            <div className="d-flex align-items-center gap-3">
              <h5 className="m-0 fw-bold">
                Total: <span className="text-success">${total.toLocaleString('es-CL')}</span>
              </h5>
              <button 
                type="button" 
                className="btn btn-primary fw-bold px-4"
                onClick={handleFinalizarCompra}
                disabled={cart.length === 0}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
