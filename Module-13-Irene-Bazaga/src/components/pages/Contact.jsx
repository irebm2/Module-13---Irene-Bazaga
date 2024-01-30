import React from 'react';
import './Contact.css';

const Contact = ({ showForm, setShowForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send email)
    console.log('Form submitted:', e.target.elements);
    setShowForm(false); // Close the form after submission
    // Reset form fields (optional for better user experience)
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="contact-title">Get in Touch</h1>
        <p>Feel free to reach out with any inquiries or feedback:</p>
        <ul className="contact-list">
          <li>
            <a href="https://github.com/irebm2" target="_blank" rel="noopener noreferrer">
              View my GitHub Profile
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/irene-bazaga/?locale=en_US" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:irebazaga@gmail.com">
              Send an Email
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <button className="submit-button" onClick={() => setShowForm(true)}>
          Send a Message
        </button>
        {showForm && (
          <div className={`modal ${showForm && 'show'}`}> {/* Add 'show' class dynamically */}
            <div className="modal-content">
              <button className="close" onClick={() => setShowForm(false)}>
                &times;
              </button>
              <form onSubmit={handleSubmit}>
                {/* Add your form fields here */}
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="4" />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;