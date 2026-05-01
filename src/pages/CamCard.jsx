import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const LOGO_IMG = "https://framerusercontent.com/images/lyszrRNqAQlPxY5yLXK4YieTqM.png"
const HERO_BG  = "https://framerusercontent.com/images/TglGme8G89i1DDRAZDRD0tqp90.jpg"
const CARD_IMG = "https://framerusercontent.com/images/PyScL707t80LQRQwFwICkFGY.jpeg"

const goToContact = (navigate) => {
  navigate("/")
  setTimeout(() => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, 300)
}

const SLabel = ({ children }) => (
  <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>{children}</p>
)

const Chip = ({ children }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,184,0,0.07)", border: "1px solid rgba(245,184,0,0.22)", borderRadius: 50, padding: "10px 20px", fontSize: 13.5, color: "#e0e0e0", fontWeight: 500, whiteSpace: "nowrap" }}>
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    {children}
  </div>
)

// ── How It Works steps ────────────────────────────────────────────────────────
const STEPS = [
  {
    n: "01", label: "Capture", title: "Snap cards or upload photos in bulk",
    desc: "Works with any card — physical, digital, landscape, portrait. Any orientation, any language, any format. No typing. No errors. No lost leads.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>
  },
  {
    n: "02", label: "Share & Collaborate", title: "Share contacts with your team instantly",
    desc: "Role-based access keeps sensitive leads private. Auto-deduplication and tags keep your contact list clean and organized across the entire team.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    n: "03", label: "Sync & Follow Up", title: "CRM stays accurate and up to date",
    desc: "No messy imports. Contacts sync directly into Salesforce, HubSpot, Zoho, Outlook, and more. Your pipeline stays accurate — every opportunity moves forward faster.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
  },
]

// ── Core features chips ───────────────────────────────────────────────────────
const FEATURES = [
  "AI card scanning in any language",
  "CRM auto-sync (Salesforce, HubSpot, Zoho)",
  "Smart deduplication & contact enrichment",
  "Team contact sharing with access controls",
  "LinkedIn & social profile auto-append",
  "40+ language OCR support",
  "Offline scanning — syncs when connected",
  "Bulk card scanning mode",
  "Export to Excel / CSV / vCard",
  "AI Notetaker for client meetings",
  "AI-powered follow-up email drafting",
  "Digital business card creation",
]

// ── Feature grid ──────────────────────────────────────────────────────────────
const FEATURE_GRID = [
  { icon: "🌍", title: "40+ Languages", desc: "OCR trained on Arabic, English, Chinese, Japanese, Hindi and 35+ more — capture contacts from any region." },
  { icon: "🔄", title: "Auto CRM Sync", desc: "Salesforce, HubSpot, Zoho, Outlook, Google Contacts — synced automatically on every scan. No messy imports." },
  { icon: "🧠", title: "Smart Deduplication", desc: "AI detects duplicates and merges records — keeping your CRM always clean and contact-ready." },
  { icon: "👥", title: "Team Sharing", desc: "Share contacts across your team with role-based permissions. Sensitive leads stay private." },
  { icon: "✨", title: "AI Deep Intelligence", desc: "Instantly identify key decision-makers, get company insights, and understand whether a lead is worth your time." },
  { icon: "📴", title: "Works Offline", desc: "Scan anywhere — plane, basement, conference hall. Everything syncs the moment you're back online." },
]

// ── AI Capabilities ───────────────────────────────────────────────────────────
const AI_CAPS = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    title: "Never Miss a High-Value Lead",
    desc: "Instantly identify key decision-makers and understand whether a company is worth your time. Stay updated on contact and company changes, and let AI guide you on what to say next.",
    tag: "AI Deep Intelligence",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Capture Every Client Conversation",
    desc: "CamCard AI Notetaker takes notes during Zoom and video calls, then attaches them to the correct lead along with any tags. A complete record of who you met, what mattered, and what to do next.",
    tag: "AI Notetaker",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    title: "Send Personalized Follow-Ups",
    desc: "Use AI insights to draft high-impact emails that feel personal, not robotic. Turn every handshake into a lasting impression — without the desk time. Standard, Marketing, Product Intro, and Holiday templates included.",
    tag: "Email AI",
  },
]

// ── Use cases ─────────────────────────────────────────────────────────────────
const USE_CASES = [
  {
    role: "Sales Teams",
    title: "Scan. Sync. Close deals faster at every event and trade show.",
    desc: "Sales reps scan hundreds of cards at conferences. CamCard AI extracts every detail and pushes contacts directly into Salesforce or HubSpot — no manual entry, no lost leads.",
    tags: ["Trade Shows", "Salesforce Sync", "Zero Manual Entry"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  },
  {
    role: "Executive Assistants",
    title: "Manage contacts for the entire leadership team.",
    desc: "Digitize, organize, and share executive contacts across the team with role-based access — always in sync, always up to date.",
    tags: ["Role-based Access", "Team Sharing", "Always in Sync"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    role: "Field Sales",
    title: "On-the-go scanning. Works offline, syncs when connected.",
    desc: "No internet? No problem. CamCard AI scans and stores locally — syncing everything to your CRM the moment you're back online.",
    tags: ["Offline Mode", "Auto Sync", "Mobile-First"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  },
  {
    role: "HR & Recruitment",
    title: "Turn job fair contacts into qualified candidates instantly.",
    desc: "Recruiters scan candidate cards at hiring events and CamCard AI syncs every detail directly into their ATS or CRM — so no promising candidate ever slips through the cracks.",
    tags: ["ATS Integration", "Hiring Events", "Candidate Tracking"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  },
  {
    role: "Healthcare & Medical",
    title: "Referral contacts organized instantly.",
    desc: "Specialists scan referral cards at conferences. Contacts sync to CRM automatically — specialists, conferences, referrals, all tracked and maintained.",
    tags: ["Specialists", "Conferences", "Referrals", "Sync to CRM"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  },
]

// ── Digital Business Card features ───────────────────────────────────────────
const DIGITAL_CARD = [
  {
    icon: "✏️",
    title: "Quickly Create",
    desc: "Scan or import your physical business card information to instantly create a personal electronic business card.",
  },
  {
    icon: "🎨",
    title: "Custom Made",
    desc: "Create custom QR code designs for your business cards and design webinar backgrounds used during video conferences.",
  },
  {
    icon: "📤",
    title: "Easy Share",
    desc: "Use SMS, Email, Business Card URL, QR codes, and video conference backgrounds to share and receive cards effortlessly.",
  },
]

// ── Security certifications ───────────────────────────────────────────────────
const CERTS = ["DJCP", "ISO/IEC 27001", "ISO/IEC 9001", "ISO/IEC 20000", "CMMI V2.0 3", "ISO/IEC 27701"]

// ══════════════════════════════════════════════════════════════════════════════
export default function CamCard() {
  const navigate = useNavigate()
  const [activeCase, setActiveCase] = useState(0)

  return (
    <div className="bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar logoSrc={LOGO_IMG} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <img src={HERO_BG} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }}/>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.52)" }}/>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to top, #000 0%, transparent 100%)" }}/>
        </div>

        <div className="relative w-full" style={{ zIndex: 10, maxWidth: 1300, margin: "0 auto", padding: "140px 64px 80px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48 }}>
          {/* LEFT */}
          <div style={{ flex: "0 0 52%", maxWidth: 640 }}>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(245,184,0,0.12)", border: "1px solid #f5b800", borderRadius: 6, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28 }}>
              <span style={{ color: "#ffffff" }}>CAMCARD</span>
              <span style={{ color: "#f5b800", marginLeft: 4 }}>BUSINESS</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", margin: "0 0 24px", textAlign: "left" }}>
              <span style={{ color: "#ffffff" }}>Your Team's AI<br />Assistant for Every </span>
              <span style={{ color: "#f5b800" }}>Trade Show</span>
              <span style={{ color: "#ffffff" }}><br />and Client Visit</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: "#aaaaaa", fontSize: "clamp(0.88rem, 1.2vw, 1rem)", lineHeight: 1.75, maxWidth: 520, margin: "0 0 40px", textAlign: "left" }}>
              Scan cards, collaborate with your team, sync to CRM, and let AI handle the details — from first scan to signed deal.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => goToContact(navigate)}
                style={{ background: "#f5b800", color: "#000", fontSize: 15, fontWeight: 700, borderRadius: 50, padding: "14px 40px", border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.45)", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                Start Free Trial
              </button>
              <button
                style={{ background: "transparent", color: "#f5b800", fontSize: 15, fontWeight: 600, borderRadius: 50, padding: "13px 32px", border: "1px solid rgba(245,184,0,0.5)", cursor: "default", opacity: 0.75, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* RIGHT — image */}
          <motion.div initial={{ opacity: 0, x: 48 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            style={{ flex: "0 0 40%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "clamp(260px, 34vw, 460px)", aspectRatio: "1 / 1", borderRadius: 32, overflow: "hidden", boxShadow: "0 0 80px rgba(0,180,255,0.4), 0 0 160px rgba(0,180,255,0.18), 0 40px 80px rgba(0,0,0,0.7)", border: "1px solid rgba(0,200,255,0.25)" }}>
              <img src={CARD_IMG} alt="CamCard Business" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════════════ */}
      <section className="py-[100px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>HOW IT WORKS</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", marginBottom: 64, letterSpacing: "-0.01em" }}>
            From Scan to <span style={{ color: "#f5b800" }}>Faster Follow-Up</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} whileHover={{ y: -4 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.14)", borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(245,184,0,0.08)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.14)"; e.currentTarget.style.boxShadow = "none" }}>
                <div style={{ position: "absolute", top: 16, right: 20, color: "rgba(245,184,0,0.07)", fontSize: 72, fontWeight: 900, fontFamily: "monospace", lineHeight: 1, pointerEvents: "none" }}>{step.n}</div>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>{step.icon}</div>
                <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 10 }}>Step {step.n} — {step.label}</p>
                <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, lineHeight: 1.3, marginBottom: 12 }}>{step.title}</h3>
                <p style={{ color: "#777", fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POWERFUL FEATURES ═════════════════════════════════════════════════ */}
      <section className="py-[100px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>POWERFUL FEATURES</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Everything Your Team Needs to <span style={{ color: "#f5b800" }}>Win More Customers</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7 }}>
            Know your customer the moment you scan their business card. Capture key conversations automatically and send smarter follow-ups in seconds.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 56 }}>
            {FEATURES.map(f => <Chip key={f}>{f}</Chip>)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {FEATURE_GRID.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.1)", borderRadius: 16, padding: "28px 24px", transition: "border-color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.35)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.1)"}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ color: "#ffffff", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════════════════════════ */}
      <section className="py-[80px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { value: "99.9%", label: "AI Card Recognition", sub: "Scans any card in 40+ languages with near-perfect precision. No manual corrections needed." },
              { value: "2s", label: "Avg. Scan-to-CRM Time", sub: "From point-and-shoot to CRM entry — faster than writing a single field by hand." },
              { value: "40+", label: "Languages Supported", sub: "Arabic, English, Chinese, Japanese, French, Spanish and 34+ more." },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{ textAlign: "center", background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 20, padding: "36px 28px" }}>
                <div style={{ color: "#f5b800", fontSize: 48, fontWeight: 800, lineHeight: 1, marginBottom: 10 }}>{s.value}</div>
                <div style={{ color: "#ffffff", fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{s.label}</div>
                <div style={{ color: "#666", fontSize: 13, lineHeight: 1.65 }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AI CAPABILITIES ═══════════════════════════════════════════════════ */}
      <section className="py-[100px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>AI CAPABILITIES</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Let AI Handle <span style={{ color: "#f5b800" }}>Every Detail</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 500, margin: "0 auto 56px", lineHeight: 1.7 }}>
            From identifying high-value leads to drafting personalized follow-ups — CamCard AI works alongside your team at every step.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {AI_CAPS.map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.14)", borderRadius: 20, padding: "36px 32px", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(245,184,0,0.07)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.14)"; e.currentTarget.style.boxShadow = "none" }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>{cap.icon}</div>
                <span style={{ display: "inline-block", background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", borderRadius: 50, padding: "4px 12px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>{cap.tag}</span>
                <h3 style={{ color: "#ffffff", fontSize: 17, fontWeight: 700, lineHeight: 1.35, marginBottom: 12 }}>{cap.title}</h3>
                <p style={{ color: "#777", fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ USE CASES ═════════════════════════════════════════════════════════ */}
      <section className="py-[100px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>USE CASES</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", marginBottom: 8, letterSpacing: "-0.01em" }}>How CamCard Business Powers</h2>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#f5b800", marginBottom: 14, letterSpacing: "-0.01em" }}>Your Business</h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}>
            From the first scan to the final deal — every connection handled intelligently.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
            {USE_CASES.map((uc, i) => (
              <button key={i} onClick={() => setActiveCase(i)}
                style={{ background: activeCase === i ? "#f5b800" : "transparent", color: activeCase === i ? "#000" : "#888", border: activeCase === i ? "none" : "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "9px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { if (activeCase !== i) { e.currentTarget.style.borderColor = "#f5b800"; e.currentTarget.style.color = "#f5b800" } }}
                onMouseLeave={e => { if (activeCase !== i) { e.currentTarget.style.borderColor = "rgba(245,184,0,0.2)"; e.currentTarget.style.color = "#888" } }}>
                {uc.role}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeCase} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }}
              style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 24, padding: "48px 48px", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ width: 72, height: 72, borderRadius: 18, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  {USE_CASES[activeCase].icon}
                </div>
                <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>{USE_CASES[activeCase].role}</p>
              </div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <h3 style={{ color: "#ffffff", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}>{USE_CASES[activeCase].title}</h3>
                <p style={{ color: "#888", fontSize: 14.5, lineHeight: 1.8, marginBottom: 24 }}>{USE_CASES[activeCase].desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {USE_CASES[activeCase].tags.map(tag => (
                    <span key={tag} style={{ background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", borderRadius: 50, padding: "5px 14px", color: "#f5b800", fontSize: 12, fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══ DIGITAL BUSINESS CARD ═════════════════════════════════════════════ */}
      <section className="py-[100px] px-6" style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d0d 50%, #0a0a0a 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,184,0,0.04) 0%, transparent 70%)", pointerEvents: "none" }}/>
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <SLabel>DIGITAL BUSINESS CARD</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Collect More Leads,<br /><span style={{ color: "#f5b800" }}>Go Green with CamCard Business</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 480, margin: "0 auto 56px", lineHeight: 1.7 }}>
            Maximize your revenue while reducing paper waste — create, customize, and share your digital business card in minutes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {DIGITAL_CARD.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{ background: "rgba(245,184,0,0.03)", border: "1px solid rgba(245,184,0,0.14)", borderRadius: 20, padding: "36px 32px", transition: "border-color 0.3s, background 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"; e.currentTarget.style.background = "rgba(245,184,0,0.06)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.14)"; e.currentTarget.style.background = "rgba(245,184,0,0.03)" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ color: "#ffffff", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "#666", fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECURITY & COMPLIANCE ════════════════════════════════════════════ */}
      <section className="py-[100px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SLabel>CAMCARD BUSINESS</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Confidently Protect Team<br /><span style={{ color: "#f5b800" }}>and Customer Data</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.7 }}>
            Keep your data safe with offline synchronization, on-device protection, and privacy programs that block unauthorized connections.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            {CERTS.map((cert, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 14, padding: "18px 28px", textAlign: "center", minWidth: 120 }}>
                <div style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{cert}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* ══ CTA BANNER ════════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.22)", borderRadius: 28, padding: "64px 56px", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 0 80px rgba(245,184,0,0.06)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,184,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }}/>
            <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16 }}>GET STARTED TODAY</p>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.01em" }}>
              Ready to Turn Every Card into<br />
              <span style={{ color: "#f5b800" }}>a CRM Opportunity?</span>
            </h2>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px" }}>
              Join thousands of sales professionals, executives, and recruiters who never lose a contact again.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <button
                onClick={() => goToContact(navigate)}
                style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "14px 40px", border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.35)", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                Start Free Trial →
              </button>
              <button
                onClick={() => goToContact(navigate)}
                style={{ background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 32px", border: "1px solid rgba(245,184,0,0.4)", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,184,0,0.08)"; e.currentTarget.style.borderColor = "#f5b800" }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)" }}>
                Get Started
              </button>
              <button
                onClick={() => navigate("/")}
                style={{ background: "none", border: "none", color: "#888", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, transition: "color 0.2s", padding: "14px 0" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f5b800"}
                onMouseLeave={e => e.currentTarget.style.color = "#888"}>
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>
       {/* ══ AUTHORIZED PARTNER ════════════════════════════════════════════════ */}
      <section className="py-[60px] px-6" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(245,184,0,0.08)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#555", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>AUTHORIZED PARTNER</p>
          <p style={{ color: "#888", fontSize: 14, lineHeight: 1.8, marginBottom: 4 }}>Techbee IT & Designs LLC</p>
          <p style={{ color: "#555", fontSize: 13, lineHeight: 1.8 }}>S-01, R-12, International City, Dubai, UAE</p>
          <p style={{ color: "#555", fontSize: 13, lineHeight: 1.8 }}>+971564116174 &nbsp;|&nbsp; +971 4 2434882</p>
          <p style={{ color: "#555", fontSize: 13, lineHeight: 1.8 }}>
            <a href="mailto:sales@techbee.ae" style={{ color: "#f5b800", textDecoration: "none" }}>sales@techbee.ae</a>
            &nbsp;|&nbsp;
            <a href="https://www.techbee.ae" target="_blank" rel="noreferrer" style={{ color: "#f5b800", textDecoration: "none" }}>www.techbee.ae</a>
          </p>
        </div>
      </section>

    </div>
  )
}
