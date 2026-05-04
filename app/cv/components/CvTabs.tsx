"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TABS, type TabId } from "../data";
import TabExp from "./TabExp";
import TabForm from "./TabForm";
import TabIntro from "./TabIntro";
import TabSkills from "./TabSkills";

const TAB_CONTENT: Record<TabId, React.ReactNode> = {
  intro: <TabIntro />,
  exp: <TabExp />,
  form: <TabForm />,
  skills: <TabSkills />,
};

export default function CvTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("intro");

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Tab bar */}
      <nav
        className="flex border-b overflow-x-auto"
        style={{ borderColor: "var(--border)" }}
      >
        {TABS.map((tab, i) => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            onClick={() => setActiveTab(tab.id)}
            className="relative shrink-0 px-6 py-4 font-mono text-xs tracking-widest uppercase transition-colors duration-200 border-none bg-transparent"
            style={{
              color:
                activeTab === tab.id ? "var(--accent)" : "var(--fg-subtle)",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id)
                (e.currentTarget as HTMLElement).style.color =
                  "var(--fg-muted)";
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id)
                (e.currentTarget as HTMLElement).style.color =
                  "var(--fg-subtle)";
            }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 inset-x-0 h-0.5"
                style={{ background: "var(--accent)" }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Content */}
      <div className="flex-1 px-6 md:px-12 py-10 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {TAB_CONTENT[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
