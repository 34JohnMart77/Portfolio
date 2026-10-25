import type { ReactNode } from "react";
import { motion } from "motion/react";
import { FiUser, FiFileText, FiFolder, FiEdit3, FiMail } from "react-icons/fi";

export type TabKey = "about" | "resume" | "work" | "notes" | "contact";

export const tabs: { key: TabKey; label: string; icon: ReactNode }[] = [
  { key: "about", label: "About", icon: <FiUser size={14} /> },
  { key: "resume", label: "Resume", icon: <FiFileText size={14} /> },
  { key: "work", label: "Work", icon: <FiFolder size={14} /> },
  { key: "notes", label: "Notes", icon: <FiEdit3 size={14} /> },
  { key: "contact", label: "Contact", icon: <FiMail size={14} /> },
];

export function TopNav({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (t: TabKey) => void;
}) {
  return (
    <nav className="topnav" aria-label="Primary">
      <div className="topnav__brand" aria-label="John Mart portfolio">
        <span className="portfolio-brand-mark" aria-hidden="true">JM</span>
        <span className="topnav__brand-name">John Mart</span>
      </div>

      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          data-tab={t.key}
          className={`topnav__tab ${active === t.key ? "topnav__tab--active" : ""}`}
          onClick={() => onChange(t.key)}
          aria-current={active === t.key ? "page" : undefined}
        >
          {active === t.key && (
            <motion.span
              layoutId="topnav-bg"
              className="topnav__tab-bg"
              transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            />
          )}
          {t.label}
        </button>
      ))}
    </nav>
  );
}

export function BottomNav({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (t: TabKey) => void;
}) {
  return (
    <nav className="bottomnav" aria-label="Mobile navigation">
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          data-tab={t.key}
          className={`bottomnav__item ${active === t.key ? "bottomnav__item--active" : ""}`}
          onClick={() => onChange(t.key)}
        >
          {t.icon}
          {t.label}
        </button>
      ))}
    </nav>
  );
}
