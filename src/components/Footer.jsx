export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div>
          <h3 className="footer-logo">Naasan Electronics</h3>
          <p className="footer-text">Power & lighting solutions you can trust.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#cart">Cart</a>
          <a href="#about">About Us</a>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p className="footer-text">+961 81 214 695</p>
          <p className="footer-text">mhmdnaasan11@gmail.com</p>
          <a href="https://maps.app.goo.gl/17na5o1QVsg3o9V9A" target="_blank" rel="noreferrer">Beirut, Lebanon</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Naasan Electronics. All rights reserved.</p>
      </div>
    </footer>
  );
}
