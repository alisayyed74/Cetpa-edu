import React from 'react'
import './Footer.css' 

const Footer = () => {
  return (
   <footer className="footer">
  <div className="footer-container">
    
    <div className="footer-col">
      <h3>About Cetpa Infotech</h3>
      <p>
        Cetpa Infotech Pvt. Ltd. is a leading training and software development company 
        specializing in IT, software, embedded systems, digital marketing, and industrial 
        training solutions. Since our inception, we have been committed to empowering 
        students, professionals, and organizations with the latest technologies to 
        stay ahead in the competitive digital era.
      </p>
    </div>

    
    <div className="footer-col">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    
    <div className="footer-col">
      <h3>Resources</h3>
      <ul>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms">Terms & Conditions</a></li>
        <li><a href="/support">Support</a></li>
      </ul>
    </div>

    
    <div className="footer-col">
      <h3>Contact Us</h3>
      <p><strong>Address:</strong> D-58, Sec-2, Red FM Lane, Noida, India</p>
      <p><strong>Email:</strong> info@cetpainfotech.com</p>
      <p><strong>Phone:</strong> +91-120-4535353, +91-9876543210</p>
      <div className="social-links">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>

 
  <div className="footer-bottom">
    <p>© 2025 Cetpa Infotech Pvt. Ltd. | All Rights Reserved.</p>
    <p>Designed with ❤️ in India | Powered by Innovation & Technology</p>
  </div>
</footer>

  )
}

export default Footer
