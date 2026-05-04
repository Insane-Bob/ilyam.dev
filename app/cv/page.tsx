import CvHeader from "./components/CvHeader";
import CvSidebar from "./components/CvSidebar";
import CvTabs from "./components/CvTabs";

export const metadata = { title: "CV — Ilyam Dupuis" };

export default function CVPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <CvHeader />
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-3rem)]">
        <CvSidebar />
        <CvTabs />
      </div>
    </div>
  );
}
