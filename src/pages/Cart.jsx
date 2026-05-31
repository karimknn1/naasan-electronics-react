export default function Cart({ cartItems, onRemoveItem, onClearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="page-main">
      <section className="cart-header">
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
          <p className="page-subtitle">Review the items you selected before checkout.</p>
        </div>
      </section>

      <section className="cart-section">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h2>Your cart is empty</h2>
              <p>Go to the Products page and press Add to Cart.</p>
            </div>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={`${item.id}-${index}`}>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>
                        <button className="remove-btn" onClick={() => onRemoveItem(index)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td><strong>Total Items: {cartItems.length}</strong></td>
                    <td colSpan="2"><strong>Total Price: ${total}</strong></td>
                  </tr>
                </tfoot>
              </table>
              <div className="cart-actions">
                <button className="btn secondary" onClick={onClearCart}>Clear Cart</button>
                <a className="btn" href="#about">Proceed to Checkout</a>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
