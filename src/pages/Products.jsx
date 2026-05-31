import { products } from '../data.js';
import ProductCard from '../components/ProductCard.jsx';

export default function Products({ onAddToCart }) {
  return (
    <main className="page-main">
      <section className="products-hero">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">Explore our UPS systems, voltage stabilizers, and LED lighting products.</p>
        </div>
      </section>

      <section className="products-list-section">
        <div className="container">
          <h2 className="section-title">Shop Now</h2>
          <div className="products-grid two-columns">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
