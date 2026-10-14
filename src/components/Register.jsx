import React, { useState } from 'react';

export function Register({ setCurrentView, setUser }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(formData);
    alert(`¡Cuenta creada con éxito! Bienvenido ${formData.nombre}.`);
    setCurrentView('catalogo');
  };

  return (
    <div className="container py-5 text-light">
      <div className="card bg-secondary text-light p-4 mx-auto shadow" style={{ maxWidth: '600px', borderRadius: '12px' }}>
        <h3 className="text-info fw-bold mb-4 text-center">
          <i className="bi bi-person-plus-fill me-2"></i>Registro de Cliente
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-2 mb-3">
            <div className="col-md-6">
              <label className="form-label small">Nombre*</label>
              <input 
                type="text" 
                name="nombre" 
                className="form-control" 
                required 
                placeholder="Ej: Pedro" 
                value={formData.nombre}
                onChange={handleChange} 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label small">Apellidos*</label>
              <input 
                type="text" 
                name="apellidos" 
                className="form-control" 
                required 
                placeholder="Ej: Hacker" 
                value={formData.apellidos}
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label small">Correo Electrónico*</label>
            <input 
              type="email" 
              name="correo" 
              className="form-control" 
              required 
              placeholder="Ej: pedro.hacker20@example.com" 
              value={formData.correo}
              onChange={handleChange} 
            />
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold">
            Crear Cuenta e Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}