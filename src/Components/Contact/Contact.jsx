import React, { useState } from "react";
import "./Contact.css"; // Make sure this file exists

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    profession: "",
    contact: "",
    alt: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleWhatsApp = () => {
    const message = `*New Contact Submission*\n
*Name:* ${form.name}\n
*Age:* ${form.age}\n
*Profession:* ${form.profession}\n
*Contact Number:* ${form.contact}\n
*Alternative Number:* ${form.alt}`;

    const phoneNumber = ""; // Add your WhatsApp number later (e.g., '919876543210')
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  return (
    <div className="contact-box">
      <h2>REGISTER NOW</h2>
      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          placeholder="ENTER YOUR NAME"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          placeholder="ENTER YOUR AGE"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="profession">Profession:</label>
        <select id="profession" onChange={handleChange}>
          <option value="">SELECT PROFESSION</option>
          <option value="Student">Student</option>
          <option value="Employee">Employee</option>
          <option value="Self-Employed">Self-Employed</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact Number:</label>
        <input
          type="tel"
          id="contact"
          placeholder="ENTER YOUR CONTACT NUMBER"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="alt">Alternative Number:</label>
        <input
          type="tel"
          id="alt"
          placeholder="ENTER YOUR ALTERNATIVE NUMBER"
          onChange={handleChange}
        />
      </div>
      <button id="sendBtn" onClick={handleWhatsApp}>
        SUMBIT
      </button>
    </div>
  );
};

export default Contact;