import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { TopNav, BottomNav } from "./components/Nav";
import type { TabKey } from "./components/Nav";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Work from "./sections/Work";
import Notes from "./sections/Notes";
import Contact from "./sections/Contact";

type PanelProps = { onNavigate: (tab: TabKey) => void; theme: "dark" | "light" };

const panels: Record<TabKey, ComponentType<PanelProps>> = {
  about: About,
  resume: () => <Resume />,
  work: () => <Work />,
  notes: () => <Notes />,
  contact: () => <Contact />,
};

function App() {
  const [tab, setTab] = useState<TabKey>("about");
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 1700);
    return () => window.clearTimeout(loadingTimer);
  }, []);
  const Panel = panels[tab];

  if (isLoading) {
    return (
      <div className="dev-loader" role="status" aria-label="Loading portfolio">
        <div className="dev-loader__mark">JM</div>
        <div className="dev-loader__name">
          <span>JohnMart</span>
          <strong>Dev</strong>
        </div>
        <div className="dev-loader__track"><span /></div>
      </div>
    );
  }

  return (
    <div className="shell">
      <Sidebar
        onNavigate={setTab}
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === "dark" ? "light" : "dark")}
      />
      <main className="main">
        <TopNav active={tab} onChange={setTab} />
        <motion.div
          className="panel"
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
        >
          <AnimatePresence mode="wait">
            <Panel key={tab} onNavigate={setTab} theme={theme} />
          </AnimatePresence>
        </motion.div>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} John Mart Murillon · Built with React + TypeScript + Vite</span>
          <span>
            <a href="https://github.com/34JohnMart77" target="_blank" rel="noreferrer">GitHub</a>
            {" · "}
            <a href="https://linkedin.com/in/johnmartmurillon" target="_blank" rel="noreferrer">LinkedIn</a>
            {" · "}
            <a href="mailto:johnmart.murillon@gmail.com">Email</a>
          </span>
        </footer>
      </main>
      <BottomNav active={tab} onChange={setTab} />
    </div>
  );
}

export default App;
