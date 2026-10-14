import { useState } from 'react';
export function Login({ setCurrentView, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const isAdmin = email.toLowerCase().includes('admin');

    const loggedUser = {
      nombre: isAdmin ? 'Administrador' : email.split('@')[0],
      apellidos: isAdmin ? 'PixelZone' : 'Cliente',
      correo: email,
      role: isAdmin ? 'admin' : 'client',
      calle: 'Av. Siempre Viva 123',
      depto: 'Depto 402',
      region: 'Región Metropolitana de Santiago',
      comuna: 'Santiago Centro',
      indicaciones: 'Entregar en conserjería del edificio.'
    };

    setUser(loggedUser);
    alert(`¡Bienvenido de nuevo, ${loggedUser.nombre}!`);
    setCurrentView(isAdmin ? 'admin' : 'catalogo');
  };

  return (
    <div className="container py-5 text-light">
      <div className="card bg-secondary text-light p-4 mx-auto shadow" style={{ maxWidth: '450px', borderRadius: '12px' }}>
        <h3 className="text-info fw-bold mb-4 text-center">
          <i className="bi bi-box-arrow-in-right me-2"></i>Iniciar Sesión
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small">Correo Electrónico*</label>
            <input 
              type="email" 
              className="form-control" 
              required 
              placeholder="cliente@ejemplo.com o admin@pixelzone.cl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="form-text text-light-50 small">
              *Usa un correo con la palabra <code>admin</code> para entrar al panel CRUD.
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label small">Contraseña*</label>
            <input 
              type="password" 
              className="form-control" 
              required 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-info w-100 fw-bold mb-3">
            Ingresar
          </button>
          <div className="text-center">
            <button 
              type="button" 
              className="btn btn-link text-light text-decoration-none small"
              onClick={() => setCurrentView('registro')}
            >
              ¿No tienes cuenta? Regístrate aquí
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}