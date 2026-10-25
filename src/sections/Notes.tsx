import { motion } from "motion/react";
import { notes } from "../data";

export default function Notes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <p className="section-eyebrow">~ tail notes.log</p>
      <h2 className="section-title">Notes</h2>
      <div className="notes-list">
        {notes.map((n) => (
          <div className="note-card" key={n.title}>
            <span className="note-card__date">{n.date}</span>
            <h3 className="note-card__title">{n.title}</h3>
            <p className="note-card__body">{n.body}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
