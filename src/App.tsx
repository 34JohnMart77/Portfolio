import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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
  const shouldReduceMotion = useReducedMotion();
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

  return (
    <>
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="dev-loader"
          role="status"
          aria-label="Loading portfolio"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.985, filter: "blur(6px)" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="dev-loader__mark-wrap"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img className="dev-loader__mark" src="/logo.jpg" alt="JohnMart Dev logo" />
          </motion.div>
          <motion.div
            className="dev-loader__name"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.24, duration: shouldReduceMotion ? 0.01 : 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>JohnMart</span>
            <strong>Dev</strong>
          </motion.div>
          <div className="dev-loader__track"><span /></div>
        </motion.div>
      )}
    </AnimatePresence>
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
    </>
  );
}

export default App;
