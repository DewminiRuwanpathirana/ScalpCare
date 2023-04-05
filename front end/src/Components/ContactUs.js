import React, { useEffect } from 'react';
import './ContactUs.css';

function ContactUs() {
  useEffect(() => {
    const footer = document.querySelector('.footer');
    const body = document.querySelector('body');
    const bodyHeight = body.clientHeight;
    const viewportHeight = window.innerHeight;
    if (bodyHeight < viewportHeight) {
      footer.style.position = 'fixed';
    } else {
      footer.style.position = 'relative';
    }
  }, []);

  return (
    <div className="contact-us-container">
      <h1 className='contact-h1'>Contact Us</h1>
      <h2 className='contact-h2'>ScalpCare: A solution to your hair/scalp problems</h2>
      <p className='contact-para'>Please feel free to get in touch with us for any inquiries or feedback.</p>
      <form className='contact-form'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button className='conbutton' type="submit">Submit</button>
      </form>
      <div className="footer">
        <p className='contact-para'>&copy; ScalpCare</p>
      </div>
    </div>
  );
}

export default ContactUs;

