const links = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'cart', label: 'Cart' },
  { id: 'about', label: 'About Us' }
];

export default function Navbar({ currentPage, cartCount }) {
  function goToPage(pageId) {
    window.location.hash = pageId;
  }

  return (
    <header className="site-header">
      <div className="container site-navbar">
        <button className="site-logo" onClick={() => goToPage('home')}>Naasan Electronics</button>
        <ul className="site-menu">
          {links.map((link) => (
            <li key={link.id}>
              <button
                className={currentPage === link.id ? 'nav-link active' : 'nav-link'}
                onClick={() => goToPage(link.id)}
              >
                {link.label}
                {link.id === 'cart' && cartCount > 0 ? <span className="cart-badge">{cartCount}</span> : null}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
