import { useState } from 'react';

export function AdminDashboard({ games, onAddGame, onUpdateGame, onDeleteGame }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [categoria, setCategoria] = useState('Acción');
  const [stock, setStock] = useState(10);
  const [editingId, setEditingId] = useState(null);

  const resetForm = () => {
    setTitulo('');
    setDescripcion('');
    setPrecio('');
    setImagenUrl('');
    setCategoria('Acción');
    setStock(10);
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !precio) return;

    const gameData = {
      titulo,
      descripcion: descripcion || 'Juego digital para PC/Consola',
      precio: Number(precio),
      imagenUrl: imagenUrl || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
      categoria: categoria || 'General',
      stock: Number(stock) || 0,
    };

    if (editingId) {
      onUpdateGame(editingId, gameData);
    } else {
      onAddGame(gameData);
    }

    resetForm();
  };

  const handleEditClick = (game) => {
    setEditingId(game.id);
    setTitulo(game.titulo || '');
    setDescripcion(game.descripcion || '');
    setPrecio(game.precio || '');
    setImagenUrl(game.imagenUrl || '');
    setCategoria(game.categoria || 'Acción');
    setStock(game.stock ?? 10);
  };

  return (
    <div className="container py-5 text-light">
      <h2 className="text-info fw-bold mb-4">Panel de Administración (CRUD)</h2>

      <form onSubmit={handleSubmit} className="mb-4 bg-secondary p-3 rounded">
        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Título del juego *"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Precio *"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Categoría (ej. RPG)"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Descripción breve"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="URL de imagen (opcional)"
              value={imagenUrl}
              onChange={(e) => setImagenUrl(e.target.value)}
            />
          </div>
          <div className="col-md-2 d-flex gap-1">
            <button
              type="submit"
              className={`btn ${editingId ? 'btn-warning' : 'btn-success'} w-100 fw-bold`}
            >
              {editingId ? 'Guardar' : 'Agregar'}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-dark fw-bold"
                onClick={resetForm}
              >
                X
              </button>
            )}
          </div>
        </div>
      </form>

      <ul className="list-group">
        {games.map((game) => (
          <li
            key={game.id}
            className="list-group-item bg-dark text-light d-flex justify-content-between align-items-center border-secondary"
          >
            <div>
              <span className="fw-bold">{game.titulo}</span> — ${game.precio}{' '}
              <small className="text-info">
                ({game.categoria} | Stock: {game.stock})
              </small>
            </div>
            <div className="d-flex gap-2">
              <button
                className="btn btn-warning btn-sm fw-bold"
                onClick={() => handleEditClick(game)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm fw-bold"
                onClick={() => onDeleteGame(game.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}