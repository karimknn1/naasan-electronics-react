import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import About from './pages/About.jsx';

function cleanPageName(hashValue) {
  const page = hashValue.replace('#', '').replace('/', '');
  if (page === 'products' || page === 'cart' || page === 'about') return page;
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(cleanPageName(window.location.hash));
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(cleanPageName(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function addToCart(product) {
    setCartItems((items) => [...items, product]);
  }

  function removeItem(indexToRemove) {
    setCartItems((items) => items.filter((item, index) => index !== indexToRemove));
  }

  let page = <Home onAddToCart={addToCart} />;
  if (currentPage === 'products') page = <Products onAddToCart={addToCart} />;
  if (currentPage === 'cart') page = <Cart cartItems={cartItems} onRemoveItem={removeItem} onClearCart={() => setCartItems([])} />;
  if (currentPage === 'about') page = <About />;

  return (
    <>
      <Navbar currentPage={currentPage} cartCount={cartItems.length} />
      {page}
      <Footer />
    </>
  );
}
