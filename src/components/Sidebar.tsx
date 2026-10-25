import type { ReactElement } from "react";
import { FiGithub, FiLinkedin, FiMail, FiFacebook, FiDownload } from "react-icons/fi";
import { profile, stats } from "../data";

const socialIcons: Record<string, ReactElement> = {
  GitHub: <FiGithub size={15} />,
  LinkedIn: <FiLinkedin size={15} />,
  Email: <FiMail size={15} />,
  Facebook: <FiFacebook size={15} />,
};

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="portfolio-brand-mark" aria-hidden="true">JM</span>
        <span className="sidebar__brand-name">John Mart</span>
      </div>

      <div className="sidebar__avatar">
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt={`${profile.name} avatar`}
            className="sidebar__avatar-img"
          />
        ) : (
          profile.initials
        )}
      </div>
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
