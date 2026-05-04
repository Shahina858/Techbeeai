import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

const LOGO_IMG = "https://framerusercontent.com/images/lyszrRNqAQlPxY5yLXK4YieTqM.png"

// ── Navigate to home contact section ─────────────────────────────────────────
const goToContact = (navigate) => {
  navigate("/")
  // Small delay so the home page loads before scrolling
  setTimeout(() => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, 300)
}

// ── Shared section label ──────────────────────────────────────────────────────
export const PLabel = ({ children }) => (
  <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>
    {children}
  </p>
)

// ── Reusable feature chip ─────────────────────────────────────────────────────
export const Chip = ({ children }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,184,0,0.08)", border: "1px solid rgba(245,184,0,0.25)", borderRadius: 50, padding: "8px 18px", fontSize: 13, color: "#e0e0e0", fontWeight: 500 }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    {children}
  </div>
)

// ── Step card ─────────────────────────────────────────────────────────────────
export const StepCard = ({ n, title, desc }) => (
  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
    style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 16, padding: "28px 28px", flex: 1, minWidth: 220 }}>
    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(245,184,0,0.12)", border: "1px solid rgba(245,184,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
      <span style={{ color: "#f5b800", fontSize: 16, fontWeight: 800 }}>{n}</span>
    </div>
    <h3 style={{ color: "#ffffff", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
    <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{desc}</p>
  </motion.div>
)

// ── Use case card ─────────────────────────────────────────────────────────────
export const UseCaseCard = ({ icon, title, role, desc }) => (
  <motion.div whileHover={{ y: -4, borderColor: "rgba(245,184,0,0.45)" }} transition={{ duration: 0.2 }}
    style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.12)", borderRadius: 16, padding: "28px 28px" }}>
    <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(245,184,0,0.12)", border: "1px solid rgba(245,184,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
      {icon}
    </div>
    <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>{role}</p>
    <h3 style={{ color: "#ffffff", fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
    <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{desc}</p>
  </motion.div>
)

// ── Stat pill ─────────────────────────────────────────────────────────────────
export const StatPill = ({ value, label }) => (
  <div style={{
    textAlign: "center",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(245,184,0,0.22)",
    borderRadius: 22,
    padding: "20px 28px",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
    position: "relative",
    overflow: "hidden",
  }}>
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top left, rgba(245,184,0,0.12), transparent 32%)", pointerEvents: "none" }} />
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ color: "#f5b800", fontSize: 42, fontWeight: 800, lineHeight: 1, marginBottom: 8 }}>{value}</div>
      <div style={{ color: "#ddd", fontSize: 13 }}>{label}</div>
    </div>
  </div>
)

// ── Main ProductPage wrapper ──────────────────────────────────────────────────
export default function ProductPage({ badge, headline, sub, cta, bgImage, children }) {
  const navigate = useNavigate()

  return (
    <div className="bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar logoSrc={LOGO_IMG} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "80vh", paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>

        {/* BG image */}
        {bgImage && (
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <img src={bgImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.18, filter: "saturate(0.4)" }}/>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, #000 100%)" }}/>
          </div>
        )}

        <div className="relative" style={{ zIndex: 10, maxWidth: 780 }}>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #f5b800", borderRadius: 8, padding: "7px 18px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
            <span>✦</span> {badge}
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ffffff", margin: "0 0 20px" }}>
            {headline}
          </motion.h1>

          {/* Sub */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: "#aaa", fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
            {sub}
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>

            {/* Primary CTA → contact */}
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.6)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => goToContact(navigate)}
              style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "13px 36px", border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.4)", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
              {cta || "Book a Demo →"}
            </motion.button>

            {/* Watch Demo — no link, just visual */}
            <button
              style={{ background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 36px", border: "1px solid rgba(245,184,0,0.4)", cursor: "default", opacity: 0.7, display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              Watch Demo
            </button>

          </motion.div>
        </div>
      </section>

      {/* Page-specific content (sections passed as children) */}
      {children}

      {/* ══ CTA BANNER ════════════════════════════════════════════════════════ */}
      {/* <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.22)", borderRadius: 28, padding: "64px 56px", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 0 80px rgba(245,184,0,0.06)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,184,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }}/> */}

            {/* <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16 }}>
              GET STARTED TODAY
            </p>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.01em" }}>
              Ready to Get <span style={{ color: "#f5b800" }}>Started?</span>
            </h2>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px" }}>
              Book a personalized demo and see how TechBee AI transforms your workflow.
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}> */}

              {/* Book a Demo → home contact */}
              {/* <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.55)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => goToContact(navigate)}
                style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "14px 40px", border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.35)", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                Book a Demo →
              </motion.button> */}

              {/* Get Started → home contact */}
              {/* <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => goToContact(navigate)}
                style={{ background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 32px", border: "1px solid rgba(245,184,0,0.4)", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,184,0,0.08)"; e.currentTarget.style.borderColor = "#f5b800" }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)" }}>
                Get Started
              </motion.button> */}

              {/* Back to Home */}
              {/* <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/")}
                style={{ background: "transparent", color: "#888", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 0", border: "none", cursor: "pointer", transition: "color 0.2s", display: "inline-flex", alignItems: "center", gap: 6 }}
                onMouseEnter={e => e.currentTarget.style.color = "#f5b800"}
                onMouseLeave={e => e.currentTarget.style.color = "#888"}>
                ← Back to Home
              </motion.button>

            </div>
          </div>
        </div>
      </section> */}

    </div>
  )
}
