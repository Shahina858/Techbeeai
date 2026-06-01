import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

// ── Navigate to home contact section ─────────────────────────────────────────
const goToContact = (navigate) => {
  navigate("/")
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
// pricingCta — optional: pass an onClick handler to show a 3rd "View Pricing" button in the hero
export default function ProductPage({ badge, headline, sub, cta, bgImage, heroImg, heroStats, heroFloatingBadges, pricingCta, children }) {
  const navigate = useNavigate()

  const statRow = heroStats || [
    { n: "99%+", l: "OCR accuracy" },
    { n: "80%",  l: "less manual work" },
    { n: "50+",  l: "languages" },
  ]

  return (
    <div className="bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ══ HERO — two-column when heroImg is provided ════════════════════════ */}
      {heroImg ? (
        <section style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 60px 80px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #000 0%, #0a0a0a 60%, #0d0d0d 100%)",
        }}>
          {/* Subtle dot grid */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: "radial-gradient(rgba(245,184,0,0.035) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }} />
          {/* Gold ambient glow left */}
          <div style={{ position: "absolute", top: "10%", left: "-10%", width: 480, height: 480, background: "radial-gradient(circle, rgba(245,184,0,0.06) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          {/* Blue ambient glow right */}
          <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 560, height: 560, background: "radial-gradient(circle, rgba(20,100,220,0.07) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

          <div style={{
            maxWidth: 1200, margin: "0 auto", width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
            position: "relative", zIndex: 1,
          }}>

            {/* ── LEFT: text content ── */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: "1px solid #f5b800", borderRadius: 8,
                  padding: "7px 18px", color: "#f5b800",
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                  marginBottom: 28, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)",
                }}>
                {badge}
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", margin: "0 0 22px" }}>
                {headline}
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                style={{ color: "#999", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", lineHeight: 1.8, maxWidth: 500, margin: "0 0 16px" }}>
                {sub}
              </motion.p>

              {/* Stat row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "24px 0 36px" }}>
                {statRow.map(s => (
                  <div key={s.n} style={{
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(245,184,0,0.18)",
                    borderRadius: 10, padding: "10px 18px", textAlign: "center", minWidth: 76,
                  }}>
                    <div style={{ color: "#f5b800", fontSize: "1.25rem", fontWeight: 800, lineHeight: 1 }}>{s.n}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </motion.div>

              {/* ── CTAs ── */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>

                {/* Primary CTA — Request a Demo */}
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.6)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => goToContact(navigate)}
                  style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "13px 36px", border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.35)" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                  onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                  {cta || "Book a Demo →"}
                </motion.button>

                {/* Watch Demo button */}
                <button
                  style={{ background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 28px", border: "1px solid rgba(245,184,0,0.35)", cursor: "default", opacity: 0.7, display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                  Watch Demo
                </button>

                {/* ── View Pricing button — only rendered when pricingCta prop is passed ── */}
                {pricingCta && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={pricingCta}
                    style={{
                      background: "transparent",
                      color: "#f5b800",
                      fontSize: 14,
                      fontWeight: 600,
                      borderRadius: 50,
                      padding: "13px 28px",
                      border: "1px solid rgba(245,184,0,0.45)",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,184,0,0.08)"; e.currentTarget.style.borderColor = "#f5b800" }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.45)" }}
                  >
                    {/* Dollar sign icon — matches CamCard style */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    View Pricing
                  </motion.button>
                )}

              </motion.div>
            </div>

            {/* ── RIGHT: image ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              style={{ position: "relative" }}>
              {/* Glow behind image */}
              <div style={{ position: "absolute", inset: -28, borderRadius: 28, background: "radial-gradient(ellipse at center, rgba(245,184,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
              <img
                src={heroImg}
                alt="hero"
                style={{
                  width: "100%",
                  borderRadius: 18,
                  display: "block",
                  position: "relative", zIndex: 1,
                  boxShadow: "0 40px 90px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              />

              {/* Floating badge — bottom left: live processing */}
              <div style={{
                position: "absolute", bottom: -14, left: 24, zIndex: 2,
                background: "rgba(8,8,8,0.95)", border: "1px solid rgba(245,184,0,0.22)",
                borderRadius: 10, padding: "9px 16px",
                display: "flex", alignItems: "center", gap: 9,
                backdropFilter: "blur(12px)", boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
              }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 7px #22c55e", animation: "livePulse 1.6s ease-in-out infinite" }} />
                <span style={{ color: "#fff", fontSize: 12.5, fontWeight: 600 }}>AI Processing Active</span>
              </div>

              {/* Floating badge — top right: OCR accuracy */}
              <div style={{
                position: "absolute", top: 20, right: -12, zIndex: 2,
                background: "rgba(8,8,8,0.95)", border: "1px solid rgba(245,184,0,0.22)",
                borderRadius: 10, padding: "10px 14px", textAlign: "center",
                backdropFilter: "blur(12px)", boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
              }}>
                <div style={{ color: "#f5b800", fontSize: 20, fontWeight: 800, lineHeight: 1 }}>99%+</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 10.5, marginTop: 3 }}>OCR Accuracy</div>
              </div>
            </motion.div>
          </div>

          <style>{`
            @keyframes livePulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.4; transform: scale(1.5); }
            }
            @media (max-width: 860px) {
              .pp-hero-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

      ) : (

        /* ══ HERO — original full-width centered style (no heroImg) ══════════ */
        <section className="relative flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ minHeight: "80vh", paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>

          {bgImage && (
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
              <img src={bgImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.18, filter: "saturate(0.4)" }}/>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, #000 100%)" }}/>
            </div>
          )}

          <div className="relative" style={{ zIndex: 10, maxWidth: 780 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #f5b800", borderRadius: 8, padding: "7px 18px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
              {badge}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ffffff", margin: "0 0 20px" }}>
              {headline}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: "#aaa", fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
              {sub}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>

              <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.6)" }} whileTap={{ scale: 0.97 }}
                onClick={() => goToContact(navigate)}
                style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "13px 36px", border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.4)" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                {cta || "Book a Demo →"}
              </motion.button>

              <button style={{ background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 36px", border: "1px solid rgba(245,184,0,0.4)", cursor: "default", opacity: 0.7, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                Watch Demo
              </button>

              {/* View Pricing — centered hero version */}
              {pricingCta && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={pricingCta}
                  style={{
                    background: "transparent",
                    color: "#f5b800",
                    fontSize: 14,
                    fontWeight: 600,
                    borderRadius: 50,
                    padding: "13px 28px",
                    border: "1px solid rgba(245,184,0,0.45)",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,184,0,0.08)"; e.currentTarget.style.borderColor = "#f5b800" }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.45)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  View Pricing
                </motion.button>
              )}

            </motion.div>
          </div>
        </section>
      )}

      {/* Page-specific content */}
      {children}

    </div>
  )
}
