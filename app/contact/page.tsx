import Footer from "../component/Footer";
import Header from "../component/Header";
import "./about.css" // Import custom CSS file

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-title">Contact Me</div>
        <form className="contact-form">
          <label className="form-label">Name:</label>
          <input type="text" className="form-input" /> <br />

          <label className="form-label">Email:</label>
          <input type="email" className="form-input" /> <br />

          <label className="form-label">Phone:</label>
          <input type="tel" className="form-input" /> <br />

          <label className="form-label">Message:</label>
          <input type="text" className="form-input" /> <br />
        </form>
      </div>
      <Footer />
    </>
  );
}
