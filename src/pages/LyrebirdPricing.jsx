import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LYREBIRD_PRICING_URL  = "https://lyrebirdhealth.com/au/pricing"
const LYREBIRD_LOGO_H       = "/lyrebird_logo_horizontal.png"

function PLabel({ children }) {
  return (
    <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>
      {children}
    </p>
  )
}
function CheckIcon({ color = "#f5b800" }) {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><polyline points="20 6 9 17 4 12"/></svg>
}
function CrossIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
}
function FeatRow({ children, type = "yes" }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 9 }}>
      {type === "yes"   && <CheckIcon color="#f5b800" />}
      {type === "limit" && <CheckIcon color="#3d9e6e" />}
      {type === "no"    && <CrossIcon />}
      <span style={{ color: type === "no" ? "#444" : "#999", fontSize: 13, lineHeight: 1.55 }}>{children}</span>
    </div>
  )
}
function FeatGroupTitle({ children }) {
  return <p style={{ color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10, marginTop: 18 }}>{children}</p>
}
function Divider() {
  return <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", margin: "18px 0" }} />
}

export default function LyrebirdPricing() {
  const [billing, setBilling] = useState("monthly")
  const navigate = useNavigate()

  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* ── HEADER BAR ── */}
      <div style={{ borderBottom: "1px solid #1a1a1a", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1100, margin: "0 auto" }}>
        <button onClick={() => navigate(-1)}
          style={{ background: "transparent", border: "1px solid #222", color: "#888", fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to Lyrebird
        </button>

        {/* Lyrebird Health logo in header */}
        <div style={{ background: "#fff", borderRadius: 8, padding: "8px 20px", display: "flex", alignItems: "center" }}>
          <img src={LYREBIRD_LOGO_H} alt="Lyrebird Health" style={{ height: 28, width: "auto", display: "block" }} />
        </div>

        <a href={LYREBIRD_PRICING_URL} target="_blank" rel="noopener noreferrer"
          style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
          Official site
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>

      {/* ── HERO ── */}
      <section style={{ padding: "80px 24px 64px", textAlign: "center" }}>
        <PLabel>PRICING PLANS</PLabel>
        <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16, lineHeight: 1.15 }}>
          Simple, Transparent <span style={{ color: "#f5b800" }}>Pricing</span>
        </h1>
        <p style={{ color: "#777", fontSize: 16, maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.75 }}>
          All plans include a 14-day free trial. No credit card required to start.
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 10, padding: 4 }}>
          {["monthly", "annual"].map(b => (
            <button key={b} onClick={() => setBilling(b)}
              style={{ background: billing === b ? "#f5b800" : "transparent", color: billing === b ? "#000" : "#666", border: "none", fontWeight: 700, fontSize: 13, padding: "9px 22px", borderRadius: 7, cursor: "pointer", transition: "all 0.18s", display: "flex", alignItems: "center", gap: 8 }}>
              {b === "monthly" ? "Monthly billing" : "Annual billing"}
              {b === "annual" && <span style={{ background: billing === "annual" ? "#00000025" : "#f5b80015", color: billing === "annual" ? "#000" : "#f5b800", fontSize: 10, fontWeight: 800, padding: "2px 7px", borderRadius: 20, letterSpacing: "0.04em" }}>SAVE 33%</span>}
            </button>
          ))}
        </div>
      </section>

      {/* ── PLAN CARDS — 3 columns (BP Free removed per PDF) ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>

          {/* FREE */}
          <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Free Plan</p>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Starter</h3>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 50 }}>Access essential features. A taste tester of Lyrebird Health.</p>
            <div style={{ marginBottom: 22 }}><span style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 800 }}>$0</span><span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>Free for everyone</span></div>
            <a href={LYREBIRD_PRICING_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "transparent", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, textDecoration: "none", marginBottom: 22 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#ccc" }}>
              Start now
            </a>
            <Divider />
            <FeatGroupTitle>What's included in Starter</FeatGroupTitle>
            <FeatRow type="limit">50 actions per month</FeatRow>
            <FeatRow type="limit">Upload documents to teach Lyrebird</FeatRow>
            <FeatRow type="limit">Access to community shared templates</FeatRow>
            <FeatRow type="limit">Unlimited macros</FeatRow>
          </div>

          {/* PRO — featured */}
          <div style={{ background: "#0f0f0f", border: "2px solid #f5b800", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column", position: "relative" }}>
            <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#f5b800", color: "#000", fontSize: 11, fontWeight: 800, padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>MOST POPULAR</div>
            <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Pro Plan</p>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Pro</h3>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 50 }}>Unlock the most value. For clinics & GPs to automate care plans and assessments.</p>
            <div style={{ marginBottom: 22 }}><span style={{ color: "#f5b800", fontSize: "2.2rem", fontWeight: 800 }}>$50</span><span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>per user / year (billed annually)</span></div>
            <a href={LYREBIRD_PRICING_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "#f5b800", color: "#000", fontWeight: 800, fontSize: 14, padding: "13px", borderRadius: 8, textDecoration: "none", marginBottom: 22 }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
              Try it for 14 days
            </a>
            <Divider />
            <FeatGroupTitle>All features in Starter, and:</FeatGroupTitle>
            <FeatRow type="yes">Unlimited actions</FeatRow>
            <FeatRow type="yes">Integrations with no added cost</FeatRow>
            <FeatRow type="yes">Priority support</FeatRow>
          </div>

          {/* ENTERPRISE */}
          <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Enterprise Plan</p>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Enterprise</h3>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 50 }}>Empower your organisation. Large organisations needing custom deployment & SSO.</p>
            <div style={{ marginBottom: 22 }}><span style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 800 }}>Custom</span><p style={{ color: "#555", fontSize: 12, marginTop: 4 }}>Flexible billing</p></div>
            <a href={LYREBIRD_PRICING_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "transparent", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, textDecoration: "none", marginBottom: 22 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#ccc" }}>
              Contact sales
            </a>
            <Divider />
            <FeatGroupTitle>All features in Pro, and:</FeatGroupTitle>
            <FeatRow type="yes">Tiered discounts</FeatRow>
            <FeatRow type="yes">Organisation sharing</FeatRow>
            <FeatRow type="yes">SSO as an add-on</FeatRow>
            <FeatRow type="yes">Personalised onboarding</FeatRow>
            <FeatRow type="yes">Dedicated account manager</FeatRow>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA — replaces "view full pricing" per PDF ── */}
      <section style={{ padding: "0 24px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 14, padding: "28px 32px", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ color: "#f5b800", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>💬 Talk to a TechBee Rep</p>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7 }}>
              Discounts available for <span style={{ color: "#ddd" }}>part-time clinicians</span>, <span style={{ color: "#ddd" }}>registrars</span>, and <span style={{ color: "#ddd" }}>group practices</span>. Get in contact with us to discuss pricing tailored to your organisation.
            </p>
          </div>
          <a href="mailto:sales@techbee.ae"
            style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "13px 24px", borderRadius: 8, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}
            onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
            onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
            Get in Contact →
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <PLabel>FAQ</PLabel>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, textAlign: "center", marginBottom: 48 }}>
            Common <span style={{ color: "#f5b800" }}>Questions</span>
          </h2>
          {[
            { q: "Is there a free trial?", a: "Yes — Lyrebird offers a 14-day free trial with no credit card required. You can also book a one-on-one onboarding session." },
            { q: "Can I cancel anytime?", a: "Yes. Monthly plans can be cancelled any time. Annual plans run for the subscription period." },
            { q: "Are discounts available for part-time or registrars?", a: "Yes — discounts are available for part-time clinicians, registrars, and practices with multiple clinicians. Contact our TechBee team to discuss." },
            { q: "What happens after the free trial?", a: "After 14 days you'll be prompted to choose a plan. Your notes and documents are preserved. You can also downgrade to the Free plan." },
            { q: "Who handles onboarding for UAE & GCC clinics?", a: "TechBee manages all onboarding, EMR integration, and ongoing support for healthcare organisations across the UAE and GCC." },
          ].map(({ q, a }) => (
            <div key={q} style={{ borderBottom: "1px solid #1a1a1a", padding: "22px 0" }}>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: 10 }}>{q}</p>
              <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section style={{ padding: "80px 24px", textAlign: "center", borderTop: "1px solid #111" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: "14px 28px" }}>
            <img src={LYREBIRD_LOGO_H} alt="Lyrebird Health" style={{ height: 36, width: "auto", display: "block" }} />
          </div>
        </div>
        <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>GET STARTED</p>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, marginBottom: 14 }}>
          Focus on Patients,<br /><span style={{ color: "#f5b800" }}>Not Paperwork.</span>
        </h2>
        <p style={{ color: "#777", fontSize: 15, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.75 }}>
          Techbee brings Lyrebird Health to healthcare organisations across the UAE and GCC. Our team handles onboarding, EMR integration, and ongoing support.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={LYREBIRD_PRICING_URL} target="_blank" rel="noopener noreferrer"
            style={{ background: "#f5b800", color: "#000", fontWeight: 800, fontSize: 15, padding: "14px 32px", borderRadius: 8, textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
            onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
            Start free trial
          </a>
          <a href="mailto:sales@techbee.ae"
            style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 8, textDecoration: "none", border: "1px solid #f5b80040" }}>
            Email sales@techbee.ae
          </a>
          <a href="tel:+97142434882"
            style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 8, textDecoration: "none", border: "1px solid #f5b80040" }}>
            Call +971 4 243 4882
          </a>
        </div>
        <p style={{ color: "#333", fontSize: 13, marginTop: 28 }}>
          📍 R-12, France Cluster, International City, Dubai &nbsp;·&nbsp; sales@techbee.ae
        </p>
      </section>
    </div>
  )
}
