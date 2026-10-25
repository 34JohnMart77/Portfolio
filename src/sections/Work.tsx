import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "../data";
import type { ProjectCategory } from "../data";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Full-Stack Apps",
  "Mobile",
  "Concepts",
];

type ChatMessage = {
  sender: "bot" | "user";
  text: string;
};

function getMuriReply(input: string) {
  const text = input.toLowerCase();
  if (text.includes("course") || text.includes("lesson") || text.includes("study")) {
    return "Muri is designed to help learners explore course content and stay on track with their study goals.";
  }
  if (text.includes("feature") || text.includes("progress")) {
    return "The concept includes learning progress, bookmarks, notes, achievements, and an in-lesson tutor experience.";
  }
  return "This is a portfolio prototype with sample replies, not a live AI service.";
}

export default function Work() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hi! This is a sample of the Muri learning assistant experience.",
    },
  ]);

  const filtered =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);
  const open = projects.find((project) => project.title === openTitle);

  const handleProjectOpen = (title: string) => {
    const selectedProject = projects.find((project) => project.title === title);
    if (selectedProject?.liveUrl) {
      window.open(selectedProject.liveUrl, "_blank", "noopener,noreferrer");
    }
    setOpenTitle(title);
  };

  const handleChatSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = chatInput.trim();
    if (!message) return;

    setChatHistory((previous) => [
      ...previous,
      { sender: "user", text: message },
      { sender: "bot", text: getMuriReply(message) },
    ]);
    setChatInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <p className="section-eyebrow">~ ls ./projects</p>
      <h2 className="section-title">Portfolio</h2>
      <p className="section-body">
        Selected work, plus clearly labeled project concepts I plan to build next.
      </p>

      <div className="filter-row" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-chip ${filter === category ? "filter-chip--active" : ""}`}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((project) => (
          <article
            className="project-card"
            key={project.title}
            role="button"
            tabIndex={0}
            aria-label={`View ${project.title} project details`}
            aria-expanded={openTitle === project.title}
            onClick={() => handleProjectOpen(project.title)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleProjectOpen(project.title);
              }
            }}
          >
            <div className="project-card__brand">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt=""
                  className="project-card__logo"
                  aria-hidden="true"
                />
              ) : (
                <div className="project-card__logo project-card__logo--fallback" aria-hidden="true">
                  {project.title.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            <div className="project-card__top">
              <h3 className="project-card__title">{project.title}</h3>
              <div className="project-card__meta">
                {project.year && <span className="project-card__year">{project.year}</span>}
                {project.status && (
                  <span className="project-card__status">{project.status}</span>
                )}
              </div>
            </div>
            <p className="project-card__summary">{project.summary}</p>
            <div className="project-card__stack" aria-label="Technology stack">
              {project.stack.map((technology) => (
                <span className="stack-pill" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {open && (
          <motion.section
            className="project-detail"
            aria-labelledby="project-detail-title"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <button
              className="project-detail__close"
              type="button"
              onClick={() => setOpenTitle(null)}
            >
              Close
            </button>
            {open.status && <p className="project-card__status">{open.status} · not yet built</p>}
            <h3 className="doing-card__title" id="project-detail-title" style={{ fontSize: 16 }}>
              {open.title}
            </h3>
            <p className="timeline-item__body">{open.detail}</p>

            {open.liveUrl && (
              <a
                className="project-detail__live"
                href={open.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open {open.title}
              </a>
            )}

            {open.demoType === "chatbot" && (
              <div className="project-demo">
                <div className="project-demo__header">
                  <span className="project-demo__status" />
                  Interactive prototype · sample replies
                </div>
                <div className="project-demo__messages" aria-live="polite">
                  {chatHistory.map((message, index) => (
                    <div
                      key={`${message.sender}-${index}`}
                      className={`project-demo__bubble project-demo__bubble--${message.sender}`}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
                <form className="project-demo__form" onSubmit={handleChatSubmit}>
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(event) => setChatInput(event.target.value)}
                    placeholder="Ask about Muri..."
                    aria-label="Ask about the Muri prototype"
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
