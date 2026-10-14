import React, { useState } from 'react';

export function AdminDashboard({ games, onAddGame, onDeleteGame }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;
    onAddGame({
      title,
      price: Number(price),
      store: 'Digital',
      discount: '-10%',
      originalPrice: Number(price) * 1.1,
      icon: 'bi-controller',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'
    });
    setTitle('');
    setPrice('');
  };

  return (
    <div className="container py-5 text-light">
      <h2 className="text-info fw-bold mb-4">Panel de Administración (CRUD)</h2>
      <form onSubmit={handleSubmit} className="mb-4 bg-secondary p-3 rounded">
        <div className="row g-2">
          <div className="col-md-5">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Título del juego" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-md-5">
            <input 
              type="number" 
              className="form-control" 
              placeholder="Precio" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100 fw-bold">Agregar</button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {games.map((game) => (
          <li key={game.id} className="list-group-item bg-dark text-light d-flex justify-content-between align-items-center border-secondary">
            <span>{game.title} - ${game.price}</span>
            <button className="btn btn-danger btn-sm fw-bold" onClick={() => onDeleteGame(game.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}