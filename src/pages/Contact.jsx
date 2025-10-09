import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* SECTION À PROPOS */}
      <section className="about">
        <h2>À propos</h2>
        <p>
          Photographe passionné, je capture les émotions et les détails qui font
          la beauté de chaque instant. Chaque séance photo est une collaboration,
          une rencontre et une histoire à raconter à travers la lumière et les
          textures.
        </p>
      </section>

      <hr className="separator" />

      {/* TITRE PRINCIPAL */}
      <h1>Contact</h1>

      {/* FORMULAIRE DE CONTACT */}
      <section className="contact-form">
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    action="/merci"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p className="hidden">
      <label>
        Ne pas remplir ce champ : <input name="bot-field" />
      </label>
    </p>

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required />

    <label htmlFor="name">Nom & Prénom</label>
    <input type="text" id="name" name="name" required />

    <label htmlFor="formula">Quelle formule t'intéresse ?</label>
    <select id="formula" name="formula">
      <option value="portrait">Portrait</option>
      <option value="food">Food Photography</option>
      <option value="editorial">Editorial</option>
    </select>

    <label htmlFor="message">En quelques mots...</label>
    <textarea
      id="message"
      name="message"
      rows="5"
      placeholder="Explique-moi..."
    ></textarea>

    <button type="submit">Envoyer</button>
  </form>
</section>
    </div>
  );
}

export default Contact;