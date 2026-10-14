import { useState } from 'react';
import './styles/App.css';
import { Navbar } from './components/Navbar';
import { CartModal } from './components/CartModal';
import { Footer } from './components/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { getStoredGames, addGameCRUD, deleteGameCRUD } from './data/gamesData';

export default function App() {
  const [currentView, setCurrentView] = useState('inicio');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [games, setGames] = useState(getStoredGames());
  
  const [user, setUser] = useState(null);
  const [lastOrder, setLastOrder] = useState(null);

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

  const handleAddGame = (newGame) => {
    const updated = addGameCRUD(games, newGame);
    setGames(updated);
  };
  const updateQuantity = (id, newQuantity) => {
  if (newQuantity <= 0) {
    removeFromCart(id);
  } else {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  }
};
  const handleDeleteGame = (id) => {
    const updated = deleteGameCRUD(games, id);
    setGames(updated);
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