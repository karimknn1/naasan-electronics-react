export default function About() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you. Your message was received.');
    event.currentTarget.reset();
  }

  return (
    <main className="page-main">
      <section className="contact-section">
        <div className="container">
          <div className="contact-box">
            <h1 className="section-title">Contact Us</h1>
            <p><strong>Phone Number:</strong> +961 81 214 695</p>
            <p><strong>Email:</strong> mhmdnaasan11@gmail.com</p>
            <p>
              <strong>Location:</strong>{' '}
              <a href="https://maps.app.goo.gl/17na5o1QVsg3o9V9A" target="_blank" rel="noreferrer">Beirut, Lebanon</a>
            </p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <div className="form-box">
            <h2 className="section-title">Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Email address" required />
              <textarea placeholder="Your comment" required></textarea>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <h3 className="location-area">Bchara El Khoury</h3>
          <h4 className="location-street">Zehrawi Street</h4>
          <iframe
            className="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.034740972092!2d35.5052373!3d33.8887591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172ff2d556dd%3A0xede78175d9f188b8!2s3amto%20kafa!5e0!3m2!1sen!2slb!4v1776799897790!5m2!1sen!2slb"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Naasan Electronics Location"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
