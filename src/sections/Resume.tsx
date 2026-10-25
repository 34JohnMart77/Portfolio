import { useState } from "react";
import { motion } from "motion/react";
import { education, experience, skillGroups } from "../data";

export default function Resume() {
  const [activeSkill, setActiveSkill] = useState(skillGroups[0].key);
  const activeGroup = skillGroups.find((g) => g.key === activeSkill)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <p className="section-eyebrow">~ cat resume.md</p>
      <h2 className="section-title">Resume</h2>

      <div className="resume-columns">
        <div>
          <h3
            className="doing-card__title"
            style={{ fontSize: 14, marginBottom: 14 }}
          >
            Education
          </h3>
          <div className="timeline">
            {education.map((e) => (
              <div className="timeline-item" key={e.school}>
                <p className="timeline-item__role">{e.school}</p>
                <p className="timeline-item__period">
                  {e.place} · {e.period}
                </p>
                <p className="timeline-item__body">{e.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3
            className="doing-card__title"
            style={{ fontSize: 14, marginBottom: 14 }}
          >
            Experience
          </h3>
          <div className="timeline">
            {experience.map((e) => (
              <div className="timeline-item" key={e.role}>
                <p className="timeline-item__role">{e.role}</p>
                <p className="timeline-item__period">{e.period}</p>
                <p className="timeline-item__body">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="doing-card__title" style={{ fontSize: 14 }}>
        Skills &amp; Tools
      </h3>
      <div className="skills-tabs">
        {skillGroups.map((g) => (
          <button
            key={g.key}
            type="button"
            className={`skills-tab ${activeSkill === g.key ? "skills-tab--active" : ""}`}
            onClick={() => setActiveSkill(g.key)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div>
        {activeGroup.skills.map((s) => (
          <div className="skill-row" key={s.name}>
            <div className="skill-row__label">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="skill-row__track">
              <motion.div
                className="skill-row__fill"
                initial={{ width: 0 }}
                animate={{ width: `${s.level}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
