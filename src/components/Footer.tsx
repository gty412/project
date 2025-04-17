import React from 'react';
import './OneSection.css'; 

interface CombinedSectionProps {} 

const CombinedSection: React.FC<CombinedSectionProps> = () => {
  return (
    <div className="combined-section">
      {/* --- Верхняя часть (Get a free consultation!) --- */}
      <div className="consultation-part">
        <h2>Get a free consultation!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet mauris odio et justo. Et odio at viverra.</p>
        <form className="consultation-form">
          <input type="email" placeholder="Email address" />
          <button type="submit">Submit</button>
        </form>
        <div className="consultation-image">
          {/* Здесь можно было бы добавить компонент для изображения */}
          {/* <img src="/path/to/image.jpg" alt="Consultation" /> */}
        </div>
      </div>

      {/* --- Нижняя часть (Футер) --- */}
      <footer className="main-footer">
        <div className="footer-section creator">
          <h3>Creator</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Vitae.</p>
          <div className="social-icons">
            {/* Компоненты для иконок социальных сетей */}
            <a href="#" target="_blank" rel="noopener noreferrer"> {}
              {/* <FontAwesomeIcon icon={faTwitter} /> */} Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"> {}
              {} Facebook
            </a>
            {/* ... другие иконки */}
          </div>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section support">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Purchasing Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section contact-me">
          <h3>Contact me</h3>
          <div className="contact-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Send</button>
          </div>
          <p><a href="#">Press</a></p>
          <p><a href="#">Help/Faq</a></p>
        </div>
      </footer>
    </div>
  );
};

export default CombinedSection;