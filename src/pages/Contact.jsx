import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_xxxxx",   // ← Remplace par ton Service ID
      "template_xxxxx",  // ← Remplace par ton Template ID
      form.current,
      "public_xxxxx"     // ← Remplace par ta Public Key
    )
    .then(() => {
      setStatus("Message envoyé !");
      form.current.reset();
    }, (err) => {
      console.error(err);
      setStatus("Erreur d'envoi, réessaie plus tard.");
    });
  };

  return (
    <main className="project-page">
      <h1 className="center-title">CONTACT</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div>
          <label>Nom</label>
          <input type="text" name="user_name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" rows="6" required />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {status && <p style={{textAlign:'center'}}>{status}</p>}
    </main>
  );
}
