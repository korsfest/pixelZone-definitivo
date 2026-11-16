import { useState, useEffect } from 'react';
import './styles/App.css';
import { Navbar } from './components/Navbar';
import { CartModal } from './components/CartModal';
import { Footer } from './components/Footer';
import { AppRoutes } from './routes/AppRoutes';

const API_URL = 'http://localhost:8080/api/juegos';

export default function App() {
  // Mantiene la vista activa si recargas con F5
  const [currentView, setCurrentView] = useState(() => {
    return sessionStorage.getItem('pixelzone_view') || 'inicio';
  });

  // Recupera el carrito guardado
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('pixelzone_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [games, setGames] = useState([]);

  // Recupera la sesión del usuario/admin guardada
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('pixelzone_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [lastOrder, setLastOrder] = useState(null);

  // Sincroniza la vista actual
  useEffect(() => {
    sessionStorage.setItem('pixelzone_view', currentView);
  }, [currentView]);

  // Sincroniza la sesión del usuario en localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('pixelzone_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('pixelzone_user');
    }
  }, [user]);

  // Sincroniza el carrito en localStorage
  useEffect(() => {
    localStorage.setItem('pixelzone_cart', JSON.stringify(cart));
  }, [cart]);

  // Carga los juegos desde Spring Boot (AWS RDS)
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error('Error cargando juegos:', err));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  const handleAddGame = async (newGame) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGame),
      });
      if (response.ok) {
        const savedGame = await response.json();
        setGames((prevGames) => [...prevGames, savedGame]);
      }
    } catch (error) {
      console.error('Error al agregar juego:', error);
    }
  };

  const handleUpdateGame = async (id, updatedGame) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGame),
      });
      if (response.ok) {
        const data = await response.json();
        setGames((prevGames) =>
          prevGames.map((game) => (game.id === id ? data : game))
        );
      }
    } catch (error) {
      console.error('Error al actualizar juego:', error);
    }
  };

  const handleDeleteGame = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setGames((prevGames) => prevGames.filter((game) => game.id !== id));
      }
    } catch (error) {
      console.error('Error al eliminar juego:', error);
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={totalCartCount}
        setIsCartOpen={setIsCartOpen}
        user={user}
        setUser={setUser}
      />

      <main className="flex-grow-1">
        <AppRoutes
          currentView={currentView}
          setCurrentView={setCurrentView}
          games={games}
          addToCart={addToCart}
          cart={cart}
          clearCart={clearCart}
          lastOrder={lastOrder}
          handleAddGame={handleAddGame}
          handleUpdateGame={handleUpdateGame}
          handleDeleteGame={handleDeleteGame}
          setUser={setUser}
        />
      </main>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        setCurrentView={setCurrentView}
        user={user}
        setLastOrder={setLastOrder}
        clearCart={clearCart}
        updateQuantity={updateQuantity}
      />

      <Footer />
    </div>
  );
}