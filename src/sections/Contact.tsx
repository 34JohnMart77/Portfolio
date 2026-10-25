import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import { profile } from "../data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <p className="section-eyebrow">~ send --message</p>
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Full name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email address"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea placeholder="Message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button type="submit">Send message</button>
          {sent && <span className="contact-success">Message queued — I'll get back to you soon.</span>}
        </form>

        <div className="contact-panel">
          {profile.locationImage && (
            <div className="contact-panel__location-wrap">
              <img src={profile.locationImage} alt="Location" className="contact-panel__location-img" loading="lazy" />
            </div>
          )}
          <div>
            <span className="contact-panel__line-accent">email</span> {profile.email}
          </div>
          <div>
            <span className="contact-panel__line-accent">location</span> {profile.location}
          </div>
          <div>
            <span className="contact-panel__line-accent">status</span> {profile.status}
          </div>
          <div>
            <span className="contact-panel__line-accent">stack</span> {profile.focus}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
