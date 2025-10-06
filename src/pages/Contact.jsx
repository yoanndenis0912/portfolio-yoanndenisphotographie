import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact-title">Contact</h1>
      <form className="contact-form">
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Votre nom" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Votre email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Votre message" rows="5" required />

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}