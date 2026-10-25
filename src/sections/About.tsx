import { motion } from "motion/react";
import { FiArrowDownRight, FiArrowUpRight, FiMail } from "react-icons/fi";
import { doing, profile, projects } from "../data";
import type { TabKey } from "../components/Nav";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function About({
  onNavigate,
}: {
  onNavigate: (tab: TabKey) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__copy">
          <p className="section-eyebrow">JUNIOR SOFTWARE ENGINEER · OPEN TO OPPORTUNITIES</p>
          <h2 className="about-hero__title" id="about-title">
            I build software that makes <span>everyday work better.</span>
          </h2>
          <p className="about-hero__intro">
            I’m {profile.name}, a full-stack developer and Information Systems student
            in the Philippines. I turn practical problems into thoughtful web
            applications, from the interface and API to the data behind it.
          </p>
          <div className="about-hero__actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onNavigate("work")}
            >
              Explore my projects <FiArrowUpRight aria-hidden="true" />
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => onNavigate("contact")}
            >
              <FiMail aria-hidden="true" /> Get in touch
            </button>
          </div>
          <div className="about-hero__stack" aria-label="Core technologies">
            <span>Currently building with</span>
            <div>
              {["React", "TypeScript", "Node.js", "Laravel", "MySQL"].map((tech) => (
                <span className="about-hero__tech" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <aside className="about-snapshot" aria-label="Developer profile summary">
          <div className="about-snapshot__top">
            <span className="about-snapshot__indicator" />
            <span>DEVELOPER SNAPSHOT</span>
            <span className="about-snapshot__location">PH</span>
          </div>
          <p className="about-snapshot__code"><span>const</span> developer = {"{"}</p>
          <dl className="about-snapshot__details">
            <div><dt>focus</dt><dd>Full-stack web apps</dd></div>
            <div><dt>education</dt><dd>BS Information Systems</dd></div>
            <div><dt>approach</dt><dd>Build · learn · improve</dd></div>
            <div><dt>projects</dt><dd>{projects.filter((project) => !project.status).length} built projects</dd></div>
          </dl>
          <p className="about-snapshot__code about-snapshot__code--end">{"}"}</p>
          <button
            type="button"
            className="about-snapshot__link"
            onClick={() => onNavigate("resume")}
          >
            See my background <FiArrowDownRight aria-hidden="true" />
          </button>
        </aside>
      </section>

      <section className="about-intro" aria-labelledby="about-me-heading">
        <div>
          <p className="section-eyebrow">A LITTLE ABOUT ME</p>
          <h2 className="section-title" id="about-me-heading">Curious by nature. Practical by design.</h2>
        </div>
        <p className="section-body">
          I enjoy taking a feature from a rough idea to a working product: shaping
          the user flow, building the interface, connecting APIs, and modeling
          data. My recent work includes an AI-assisted learning app, an
          operations dashboard, and systems designed around real organizational
          needs. I’m looking for a junior role where I can contribute, learn from
          an experienced team, and keep getting better at the craft.
        </p>
      </section>

      <motion.div
        className="doing-grid"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {doing.map((d) => (
          <motion.div className="doing-card" key={d.title} variants={itemVariants}>
            <span className="doing-card__tag">{d.tag}</span>
            <h3 className="doing-card__title">{d.title}</h3>
            <p className="doing-card__body">{d.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
