import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiMail } from "react-icons/fi";
import { doing, profile } from "../data";
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
  theme,
}: {
  onNavigate: (tab: TabKey) => void;
  theme: "dark" | "light";
}) {
  const [portraitDirection, setPortraitDirection] = useState(0);
  const [isSmiling, setIsSmiling] = useState(false);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGaze = (event: PointerEvent) => {
      const bounds = portraitRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const x = ((event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2));
      const y = ((event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2));

      const gazeX = Math.max(-1, Math.min(1, x));
      const gazeY = Math.max(-1, Math.min(1, y));

      let direction = 0;
      if (gazeY < -0.35) {
        direction = gazeX < -0.35 ? 7 : gazeX > 0.35 ? 1 : 0;
      } else if (gazeY > 0.35) {
        direction = gazeX < -0.35 ? 5 : gazeX > 0.35 ? 3 : 4;
      } else {
        direction = gazeX < -0.35 ? 6 : gazeX > 0.35 ? 2 : 0;
      }
      setPortraitDirection(direction);
    };

    window.addEventListener("pointermove", updateGaze, { passive: true });
    window.addEventListener("pointerdown", updateGaze, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updateGaze);
      window.removeEventListener("pointerdown", updateGaze);
    };
  }, []);

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
            I build software and website that makes <span>everyday work better.</span>
          </h2>
          <p className="about-hero__intro">
            I’m {profile.name}, a full-stack developer and Information Systems student
            in the Makilala Institute Science and Technology(MIST). I build an Ai and  understanding the problem  and how to solve it 

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

        <aside className="about-scene" aria-label="A 3D-inspired developer workspace">
          <div className="about-scene__stage" aria-hidden="true">
            <div className="about-scene__halo" />
            <div className="about-scene__orbit about-scene__orbit--outer" />
            <div className="about-scene__orbit about-scene__orbit--inner" />
            <div className="about-scene__window">
              <div className="about-scene__window-top">
                <span /><span /><span />
                <span className="about-scene__filename">developer.ts</span>
              </div>
              <div className="about-scene__code">
                <span><i>01</i><b>const</b> developer = {"{"}</span>
                <span><i>02</i>&nbsp;&nbsp;build: <em>"useful things"</em>,</span>
                <span><i>03</i>&nbsp;&nbsp;learn: <em>"every day"</em>,</span>
                <span><i>04</i>&nbsp;&nbsp;ship: <strong>true</strong></span>
                <span><i>05</i>{"}"}</span>
              </div>
              <div className="about-scene__window-footer">
                <span><span className="about-scene__indicator" /> AVAILABLE FOR OPPORTUNITIES</span>
                <span>PH · 2026</span>
              </div>
            </div>
            <div
              className={`about-scene__portrait about-scene__portrait--${theme}${isSmiling ? " about-scene__portrait--smile" : ""}`}
              ref={portraitRef}
              role="button"
              tabIndex={0}
              aria-label="Click portrait to smile"
              onClick={() => {
                setIsSmiling(true);
                window.setTimeout(() => setIsSmiling(false), 1800);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setIsSmiling(true);
                  window.setTimeout(() => setIsSmiling(false), 1800);
                }
              }}
            >
              <img
                src={profile.avatarDirections[portraitDirection] ?? profile.avatar}
                alt="John Mart Murillon portrait"
              />
              <span className="about-scene__mouth" aria-hidden="true" />
            </div>
            <span className="about-scene__chip about-scene__chip--react">React</span>
            <span className="about-scene__chip about-scene__chip--typescript">TypeScript</span>
            <span className="about-scene__chip about-scene__chip--node">Node.js</span>
            <span className="about-scene__chip about-scene__chip--python">Python</span>
            <span className="about-scene__spark about-scene__spark--one">+</span>
            <span className="about-scene__spark about-scene__spark--two">*</span>
          </div>
          <button
            type="button"
            className="about-scene__link"
            onClick={() => onNavigate("resume")}
          >
            <span>Developer snapshot</span>
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
