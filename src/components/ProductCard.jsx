import { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom">
          <strong>${product.price}</strong>
          <button className={added ? 'btn added-btn' : 'btn'} onClick={handleAddToCart}>
            {added ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}
