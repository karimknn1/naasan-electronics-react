import { useEffect, useState } from 'react';
import { carouselSlides, products } from '../data.js';
import ProductCard from '../components/ProductCard.jsx';

export default function Home({ onAddToCart }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const featuredProducts = products.slice(0, 3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 3500);
    return () => clearInterval(intervalId);
  }, []);

  function previousSlide() {
    setActiveSlide((current) => current === 0 ? carouselSlides.length - 1 : current - 1);
  }

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % carouselSlides.length);
  }

  return (
    <main>
      <section className="home-hero">
        <div className="home-carousel">
          {carouselSlides.map((slide, index) => (
            <img
              key={slide.id}
              className={index === activeSlide ? 'carousel-image active' : 'carousel-image'}
              src={slide.image}
              alt={slide.title}
            />
          ))}
          <button className="carousel-control carousel-prev" onClick={previousSlide}>‹</button>
          <button className="carousel-control carousel-next" onClick={nextSlide}>›</button>
        </div>
      </section>

      <section className="about-us-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            We are an electronics store specialized in UPS devices, voltage stabilizers, and lighting products.
            Our mission is to provide dependable and efficient solutions that meet the needs of both home and
            commercial users. Whether you are looking for backup power, voltage protection, or modern lighting,
            we aim to deliver products you can trust.
          </p>
        </div>
      </section>

      <section className="featured-products-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid three-columns">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
