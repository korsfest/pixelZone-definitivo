import { Hero } from '../components/Hero';
import { DealsGrid } from '../components/DealsGrid';
import { Catalog } from '../components/Catalog';
import { Checkout } from '../components/Checkout';
import { CheckoutSuccess } from '../components/CheckoutSuccess';
import { AdminDashboard } from '../components/AdminDashboard';
import { Login } from '../components/Login';
import { Register } from '../components/Register';

export function AppRoutes({
  currentView,
  setCurrentView,
  games,
  addToCart,
  cart,
  clearCart,
  lastOrder,
  handleAddGame,
  handleDeleteGame,
  setUser
}) {
  switch (currentView) {
    case 'inicio':
      return (
        <>
          <Hero setCurrentView={setCurrentView} />
          <DealsGrid />
        </>
      );

    case 'catalogo':
      return (
        <Catalog 
          games={games} 
          addToCart={addToCart} 
        />
      );

    case 'checkout':
      return (
        <Checkout
          cart={cart}
          clearCart={clearCart}
          setCurrentView={setCurrentView}
        />
      );

    case 'compra-exitosa':
      return (
        <CheckoutSuccess 
          orderData={lastOrder} 
          setCurrentView={setCurrentView} 
        />
      );

    case 'admin':
      return (
        <AdminDashboard
          games={games}
          onAddGame={handleAddGame}
          onDeleteGame={handleDeleteGame}
        />
      );

    case 'login':
      return (
        <Login 
          setCurrentView={setCurrentView} 
          setUser={setUser} 
        />
      );

    case 'registro':
      return (
        <Register 
          setCurrentView={setCurrentView} 
          setUser={setUser} 
        />
      );

    default:
      return (
        <>
          <Hero setCurrentView={setCurrentView} />
          <DealsGrid />
        </>
      );
  }
}