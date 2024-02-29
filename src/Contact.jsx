import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="wrapper" id='title-1'>
    
   <section className="contact-us" id="contact-section">
     <form action='https://formspree.io/f/mkndbqrp'
     method='post'
      id="contact" onSubmit={handleSubmit}>
        <div className="section-heading">
          <h4>Contact us</h4>
        </div>

        <div className="inputField">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="on"
            required
          />
          <span className="valid_info_name"></span>
        </div>

        <div className="inputField">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="valid_info_email"></span>
        </div>

        <div className="inputField">
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <span className="valid_info_message"></span>
        </div>

        <div className="inputField btn1">
          <button
            type="submit"
            id="form-submit"
            className="main-gradient-button"
            action="https://formspree.io/f/mkndbqrp"
            disabled={!name || !email || !message}
          >
            Send a message
          </button>
        </div>
      </form>
    </section> 
    </div>
    
  );
}

export default Contact;
