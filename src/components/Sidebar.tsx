import { useEffect, useRef, useState, type ReactElement } from "react";
import { FiGithub, FiLinkedin, FiMail, FiFacebook, FiDownload, FiArrowUpRight, FiSun, FiMoon } from "react-icons/fi";
import { profile, stats } from "../data";
import type { TabKey } from "./Nav";

const socialIcons: Record<string, ReactElement> = {
  GitHub: <FiGithub size={15} />,
  LinkedIn: <FiLinkedin size={15} />,
  Email: <FiMail size={15} />,
  Facebook: <FiFacebook size={15} />,
};

export default function Sidebar({
  onNavigate,
  theme,
  onToggleTheme,
}: {
  onNavigate: (tab: TabKey) => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  const [portraitDirection, setPortraitDirection] = useState(0);
  const avatarRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateDirection = (event: PointerEvent) => {
      const bounds = avatarRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const x = (event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2);
      const y = (event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2);

      let direction = 0;
      if (y < -0.35) direction = x < -0.35 ? 7 : x > 0.35 ? 1 : 0;
      else if (y > 0.35) direction = x < -0.35 ? 5 : x > 0.35 ? 3 : 4;
      else direction = x < -0.35 ? 6 : x > 0.35 ? 2 : 0;

      setPortraitDirection(direction);
    };

    window.addEventListener("pointermove", updateDirection, { passive: true });
    return () => window.removeEventListener("pointermove", updateDirection);
  }, []);
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="portfolio-brand-mark" aria-hidden="true">JM</span>
        <span className="sidebar__brand-name">John Mart</span>
        <button
          type="button"
          className="sidebar__theme"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FiSun size={14} /> : <FiMoon size={14} />}
        </button>
      </div>

      <button
        ref={avatarRef}
        type="button"
        className={`sidebar__avatar sidebar__avatar--${theme}`}
        onClick={() => onNavigate("resume")}
        aria-label="Open John Mart Murillon's resume"
        title="Open resume"
      >
        {profile.avatar ? (
          <img
            src={profile.avatarDirections[portraitDirection] ?? profile.avatar}
            alt={`${profile.name} avatar`}
            className="sidebar__avatar-img"
          />
        ) : (
          profile.initials
        )}
        <span className="sidebar__avatar-expression" aria-hidden="true" />
        <span className="sidebar__avatar-arrow" aria-hidden="true">
          <FiArrowUpRight size={14} />
        </span>
      </button>
      <h1 className="sidebar__name">{profile.name}</h1>
      <p className="sidebar__title">
        {profile.title} · {profile.subtitle}
      </p>

      <span className="sidebar__status">
        <span className="sidebar__status-dot" />
        {profile.status}
      </span>

      <div className="sidebar__stats">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="sidebar__stat-value">{s.value}</div>
            <div className="sidebar__stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="sidebar__info">
        <div className="sidebar__info-row">
          <span className="sidebar__info-label">Email</span>
          <a href={`mailto:${profile.email}`} className="sidebar__info-value" style={{ color: "var(--accent)", fontSize: 13 }}>
            {profile.email}
          </a>
        </div>
        <div className="sidebar__info-row">
          <span className="sidebar__info-label">Location</span>
          <span className="sidebar__info-value">{profile.location}</span>
        </div>
        <div className="sidebar__info-row">
          <span className="sidebar__info-label">Stack Focus</span>
          <span className="sidebar__info-value">{profile.focus}</span>
        </div>
      </div>

      <div className="sidebar__socials">
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="sidebar__social"
            aria-label={s.label}
            target="_blank"
            rel="noreferrer"
          >
            {socialIcons[s.label]}
          </a>
        ))}
      </div>

      <a
        className="sidebar__cv"
        href="/john-mart-murillon-cv.txt"
        download="John-Mart-Murillon-CV.txt"
      >
        <FiDownload size={14} />
        Download CV
      </a>
    </aside>
  );
}
