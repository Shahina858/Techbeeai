import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar"

// ── shared label ──────────────────────────────────────────────────────────────
const PLabel = ({ children }) => (
  <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>
    {children}
  </p>
)

// ── value card ────────────────────────────────────────────────────────────────
function ValueCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(245,184,0,0.45)" }}
      transition={{ duration: 0.2 }}
      style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div style={{ background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.28)", borderRadius: 10, width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {icon}
      </div>
      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: 0 }}>{title}</h3>
      <p style={{ color: "#777", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </motion.div>
  )
}

// ── stat block ────────────────────────────────────────────────────────────────
function StatBlock({ value, label }) {
  return (
    <div style={{ textAlign: "center", padding: "28px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 14, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top left, rgba(245,184,0,0.08), transparent 60%)", pointerEvents: "none" }} />
      <p style={{ color: "#f5b800", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, margin: "0 0 8px", lineHeight: 1, position: "relative" }}>{value}</p>
      <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6, margin: 0, position: "relative" }}>{label}</p>
    </div>
  )
}

// ── main page ─────────────────────────────────────────────────────────────────
export default function AboutUs() {
  const navigate = useNavigate()

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px 24px 80px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #000 0%, #0a0a0a 60%, #0d0d0d 100%)",
      }}>
        {/* Hero background image */}
<div style={{
  position: "absolute", inset: 0, zIndex: 0,
  backgroundImage: "url('/Frame_186_jpg.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.28,
  filter: "saturate(0.6)",
}} />
{/* dark overlay */}
<div style={{
  position: "absolute", inset: 0, zIndex: 0,
  background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 60%, #000 100%)",
}} />
{/* dot grid */}
<div style={{
  position: "absolute", inset: 0, zIndex: 0,
  backgroundImage: "radial-gradient(rgba(245,184,0,0.04) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none",
}} />
{/* ambient glows */}
<div style={{ position: "absolute", top: "5%", left: "-8%", width: 500, height: 500, background: "radial-gradient(circle, rgba(245,184,0,0.06) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
<div style={{ position: "absolute", bottom: "0%", right: "-5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(20,100,220,0.06) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

<div style={{ maxWidth: 760, textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* <div style={{ maxWidth: 760, textAlign: "center", position: "relative", zIndex: 1 }}> */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #f5b800", borderRadius: 8, padding: "7px 18px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
          >
            TECHBEE IT & DESIGNS LLC — DUBAI
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", margin: "0 0 22px" }}
          >
            We Build the Tech That <span style={{ color: "#f5b800" }}>Powers Tomorrow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: "#aaa", fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", lineHeight: 1.8, maxWidth: 620, margin: "0 auto 36px" }}
          >
            TechBee IT & Designs LLC is a Dubai-based technology company specialising in AI-powered solutions, enterprise software, and digital transformation — helping businesses across the UAE and GCC work smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
          >
            <button
              onClick={() => { navigate("/"); setTimeout(() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }) }, 300) }}
              style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "13px 36px", border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.35)" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
            >
              Get in Touch →
            </button>
            <a
              href="https://techbee.ae"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 36px", border: "1px solid rgba(245,184,0,0.35)", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(245,184,0,0.08)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              Visit techbee.ae ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#000" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <StatBlock value="10+"  label="Years delivering technology solutions" />
            <StatBlock value="200+" label="Projects delivered across UAE & GCC" />
            <StatBlock value="6"    label="AI-powered products in market" />
            <StatBlock value="UAE"  label="Headquartered in Dubai, serving globally" />
          </div>
        </div>
      </section>

      {/* ── STORY / MISSION ───────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <PLabel>OUR STORY</PLabel>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 22 }}>
              From IT Solutions to <span style={{ color: "#f5b800" }}>AI-First Innovation</span>
            </h2>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}>
              Founded in Dubai, TechBee IT & Designs LLC started as a trusted IT infrastructure and networking partner for businesses across the UAE. Over the years we expanded into full-stack software development, enterprise integrations, and digital transformation.
            </p>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}>
              Today, TechBee AI represents our leap into the next era — building and reselling AI-powered products that automate workflows, reduce operational costs, and unlock new revenue for our clients. From AI email agents to medical scribes and smart e-commerce platforms, we bring world-class technology to the GCC market.
            </p>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.85 }}>
              Our mission is simple: <span style={{ color: "#ddd", fontWeight: 600 }}>make cutting-edge AI accessible and practical for every business in the region.</span>
            </p>
          </div>

          {/* decorative panel */}
          <div style={{ position: "relative" }}>
            <div style={{ background: "#0f0f0f", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 18, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { year: "2014", text: "Founded in Dubai as TechBee IT & Designs LLC" },
                { year: "2020", text: "Expanded into full-stack web & software development" },
                { year: "2023", text: "Launched AI integration services for enterprise clients" },
                { year: "2024", text: "Launched TechBee AI — AI-first product platform" },
                { year: "2025", text: "Serving 200+ clients across UAE, GCC & beyond" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.3)", borderRadius: 8, padding: "4px 12px", flexShrink: 0 }}>
                    <span style={{ color: "#f5b800", fontSize: 12, fontWeight: 700 }}>{item.year}</span>
                  </div>
                  <p style={{ color: "#999", fontSize: 14, lineHeight: 1.6, margin: 0, paddingTop: 3 }}>{item.text}</p>
                </div>
              ))}
            </div>
            {/* glow */}
            <div style={{ position: "absolute", top: -20, right: -20, width: 200, height: 200, background: "radial-gradient(circle, rgba(245,184,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>OUR VALUES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 52 }}>
            What We <span style={{ color: "#f5b800" }}>Stand For</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <ValueCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
              title="Execution First"
              desc="We don't just consult — we build, deploy, and deliver. Every project ends with a working product in your hands, not a slide deck."
            />
            <ValueCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
              title="Trust & Transparency"
              desc="We build long-term partnerships. Our clients know exactly what we're building, why, and what it costs — no surprises, no hidden agendas."
            />
            <ValueCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>}
              title="Continuous Innovation"
              desc="Technology never stops evolving, and neither do we. We constantly research, test, and integrate the latest AI and software advancements for our clients."
            />
            <ValueCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
              title="Client-Centred"
              desc="Every decision we make starts with one question: does this make our client's life easier? Their success is the only metric that matters."
            />
            <ValueCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}
              title="Practical AI"
              desc="We cut through AI hype. We implement AI that solves real business problems — automating the repetitive, accelerating the complex, and delivering measurable ROI."
            />
            <ValueCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
              title="Regional Expertise"
              desc="We know the UAE and GCC market deeply — local regulations, business culture, and the unique challenges of operating in this region. Global tech, local understanding."
            />
          </div>
        </div>
      </section>

      {/* ── LOCATION / CONTACT ────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>FIND US</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 52 }}>
            Based in <span style={{ color: "#f5b800" }}>Dubai, UAE</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: "Address", value: "R-12, France Cluster, International City, Dubai, UAE" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: "Phone", value: "+971 56 411 6174" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: "Email", value: "sales@techbee.ae" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, label: "Website", value: "techbee.ai" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 12, padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", borderRadius: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 4px" }}>{item.label}</p>
                    <p style={{ color: "#ccc", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{item.value}</p>
                  </div>
                </div>
              ))}

              <button
                onClick={() => { navigate("/"); setTimeout(() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }) }, 300) }}
                style={{ marginTop: 8, background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 8, padding: "14px 32px", border: "none", cursor: "pointer", width: "100%" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
              >
                Send Us a Message →
              </button>
            </div>

            {/* map embed */}
            <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #1e1e1e", minHeight: 380 }}>
              <iframe
                title="TechBee Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.4141!3d25.1652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA5JzU0LjciTiA1NcKwMjQnNTAuOCJF!5e0!3m2!1sen!2sae!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#000" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <PLabel>LET'S WORK TOGETHER</PLabel>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Ready to Transform <br /><span style={{ color: "#f5b800" }}>Your Business?</span>
          </h2>
          <p style={{ color: "#777", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Whether you need AI automation, enterprise software, or a complete digital transformation — TechBee has the team, tools, and experience to make it happen.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => { navigate("/"); setTimeout(() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }) }, 300) }}
              style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 15, padding: "14px 36px", borderRadius: 8, border: "none", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
            >
              Request a Demo
            </button>
            <a href="tel:+971564116174" style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 8, textDecoration: "none", border: "1px solid rgba(245,184,0,0.4)", display: "inline-flex", alignItems: "center" }}>
              Call +971 56 411 6174
            </a>
          </div>
          <p style={{ color: "#444", fontSize: 13, marginTop: 28 }}>
            📍 R-12, France Cluster, International City, Dubai &nbsp;·&nbsp; sales@techbee.ae
          </p>
        </div>
      </section>

    </div>
  )
}
