import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LYREBIRD_PRICING_URL = "https://lyrebirdhealth.com/au/pricing"

function PLabel({ children }) {
  return (
    <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>
      {children}
    </p>
  )
}

function CheckIcon({ color = "#f5b800" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function FeatRow({ children, type = "yes" }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 9 }}>
      {type === "yes" && <CheckIcon color="#f5b800" />}
      {type === "limit" && <CheckIcon color="#3d9e6e" />}
      {type === "no" && <CrossIcon />}
      <span style={{ color: type === "no" ? "#444" : "#999", fontSize: 13, lineHeight: 1.55 }}>{children}</span>
    </div>
  )
}

function FeatGroupTitle({ children }) {
  return (
    <p style={{ color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10, marginTop: 18 }}>
      {children}
    </p>
  )
}

function Divider() {
  return <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", margin: "18px 0" }} />
}

export default function LyrebirdPricing() {
  const [billing, setBilling] = useState("monthly")
  const navigate = useNavigate()

  const proMonthly = 160
  const proAnnual = Math.round((1920 / 12))   // 160 monthly = 1920/yr; annual = 1280/yr → ~107/mo

  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* ── HEADER BAR ─────────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid #1a1a1a", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1100, margin: "0 auto" }}>
        <button
          onClick={() => navigate(-1)}
          style={{ background: "transparent", border: "1px solid #222", color: "#888", fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          Back to Lyrebird
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "#f5b80015", border: "1px solid #f5b80030", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
          </div>
          <span style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Lyrebird AI</span>
          <span style={{ color: "#444", fontSize: 15 }}>·</span>
          <span style={{ color: "#666", fontSize: 14 }}>Pricing</span>
        </div>
        <a
          href={LYREBIRD_PRICING_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
        >
          Official site
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
        </a>
      </div>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px 64px", textAlign: "center" }}>
        <PLabel>PRICING PLANS</PLabel>
        <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16, lineHeight: 1.15 }}>
          Simple, Transparent <span style={{ color: "#f5b800" }}>Pricing</span>
        </h1>
        <p style={{ color: "#777", fontSize: 16, maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.75 }}>
          All plans include a 14-day free trial. No credit card required to start.
        </p>

        {/* Billing toggle */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 0, background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 10, padding: 4 }}>
          {["monthly", "annual"].map(b => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              style={{
                background: billing === b ? "#f5b800" : "transparent",
                color: billing === b ? "#000" : "#666",
                border: "none",
                fontWeight: 700,
                fontSize: 13,
                padding: "9px 22px",
                borderRadius: 7,
                cursor: "pointer",
                transition: "all 0.18s",
                display: "flex",
                alignItems: "center",
                gap: 8
              }}
            >
              {b === "monthly" ? "Monthly billing" : "Annual billing"}
              {b === "annual" && (
                <span style={{
                  background: billing === "annual" ? "#00000025" : "#f5b80015",
                  color: billing === "annual" ? "#000" : "#f5b800",
                  fontSize: 10,
                  fontWeight: 800,
                  padding: "2px 7px",
                  borderRadius: 20,
                  letterSpacing: "0.04em"
                }}>
                  SAVE 33%
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── PLAN CARDS ─────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>

          {/* FREE PLAN */}
          <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Free Plan</p>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Starter</h3>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 50 }}>A taste tester of Lyrebird — great for trying the basics before committing.</p>
            <div style={{ marginBottom: 22 }}>
              <span style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 800 }}>$0</span>
              <span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>/ forever</span>
            </div>
            <a
              href={LYREBIRD_PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "transparent", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, textDecoration: "none", marginBottom: 22, transition: "all 0.18s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#ccc" }}
            >
              Start free
            </a>
            <Divider />
            <FeatGroupTitle>Transcribe & Dictate</FeatGroupTitle>
            <FeatRow type="limit"><strong style={{ color: "#ccc" }}>50 actions</strong>&nbsp;per month</FeatRow>
            <FeatRow type="limit">Consult notes & custom templates</FeatRow>
            <FeatGroupTitle>Documents & Letters</FeatGroupTitle>
            <FeatRow type="limit"><strong style={{ color: "#ccc" }}>10 actions</strong>&nbsp;per month</FeatRow>
            <FeatRow type="limit">Referral & patient letters</FeatRow>
            <FeatRow type="limit">WorkCover certificates</FeatRow>
            <FeatGroupTitle>Care Plans</FeatGroupTitle>
            <FeatRow type="no">Not available</FeatRow>
            <FeatGroupTitle>Integrations</FeatGroupTitle>
            <FeatRow type="no">No EMR integrations</FeatRow>
            <FeatGroupTitle>Team & User Management</FeatGroupTitle>
            <FeatRow type="no">Not included</FeatRow>
          </div>

          {/* BP FREE */}
          <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Bp Free</p>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>BP Premier</h3>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 50 }}>Scribing solution included with your existing Bp Premier subscription.</p>
            <div style={{ marginBottom: 22 }}>
              <span style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 800 }}>$0</span>
              <span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>via BP Premier</span>
            </div>
            <a
              href={LYREBIRD_PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "#111", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, textDecoration: "none", marginBottom: 22, transition: "all 0.18s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#fff" }}
              onMouseLeave={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#ccc" }}
            >
              Check eligibility
            </a>
            <Divider />
            <FeatGroupTitle>Transcribe & Dictate</FeatGroupTitle>
            <FeatRow type="yes"><strong style={{ color: "#ccc" }}>Unlimited</strong>&nbsp;consult notes</FeatRow>
            <FeatRow type="yes">Customised note templates</FeatRow>
            <FeatGroupTitle>Documents & Letters</FeatGroupTitle>
            <FeatRow type="limit"><strong style={{ color: "#ccc" }}>10 actions</strong>&nbsp;per month</FeatRow>
            <FeatRow type="limit">Referral & patient letters</FeatRow>
            <FeatRow type="limit">WorkCover certificates</FeatRow>
            <FeatGroupTitle>Care Plans</FeatGroupTitle>
            <FeatRow type="limit">20 all-time limit</FeatRow>
            <FeatGroupTitle>Integrations</FeatGroupTitle>
            <FeatRow type="yes">BP integration included</FeatRow>
            <FeatGroupTitle>Team & User Management</FeatGroupTitle>
            <FeatRow type="yes">Team template sharing</FeatRow>
            <FeatRow type="yes">Centralised billing</FeatRow>
          </div>

          {/* PRO — FEATURED */}
          <div style={{ background: "#0f0f0f", border: "2px solid #f5b800", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column", position: "relative" }}>
            <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#f5b800", color: "#000", fontSize: 11, fontWeight: 800, padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
              MOST POPULAR
            </div>
            <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Pro Plan</p>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Pro</h3>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 50 }}>For clinics & GPs to automate care plans, assessments, and unlimited documentation.</p>
            <div style={{ marginBottom: 4 }}>
              <span style={{ color: "#f5b800", fontSize: "2.2rem", fontWeight: 800 }}>
                ${billing === "annual" ? 107 : proMonthly}
              </span>
              <span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>/ month</span>
            </div>
            <p style={{ color: "#555", fontSize: 12, marginBottom: 18 }}>
              {billing === "annual" ? "$1,280 billed annually" : "Billed monthly"}
            </p>
            <a
              href={LYREBIRD_PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "#f5b800", color: "#000", border: "none", fontWeight: 800, fontSize: 14, padding: "13px", borderRadius: 8, textDecoration: "none", marginBottom: 22, transition: "background 0.18s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
            >
              Try free for 14 days
            </a>
            <Divider />
            <FeatGroupTitle>Transcribe & Dictate</FeatGroupTitle>
            <FeatRow type="yes"><strong style={{ color: "#ccc" }}>Unlimited</strong>&nbsp;consult notes</FeatRow>
            <FeatRow type="yes">Customised note templates</FeatRow>
            <FeatGroupTitle>Documents & Letters</FeatGroupTitle>
            <FeatRow type="yes"><strong style={{ color: "#ccc" }}>Unlimited</strong>&nbsp;(incl. PDFs)</FeatRow>
            <FeatRow type="yes">Referral & patient letters</FeatRow>
            <FeatRow type="yes">WorkCover certificates</FeatRow>
            <FeatGroupTitle>Care Plans</FeatGroupTitle>
            <FeatRow type="yes"><strong style={{ color: "#ccc" }}>Unlimited</strong>&nbsp;care plans & assessments</FeatRow>
            <FeatGroupTitle>Integrations</FeatGroupTitle>
            <FeatRow type="yes"><strong style={{ color: "#ccc" }}>All integrations</strong>&nbsp;included</FeatRow>
            <FeatRow type="yes">BP + Cubiko + BetterConsult</FeatRow>
            <FeatGroupTitle>Team & User Management</FeatGroupTitle>
            <FeatRow type="yes">Team template sharing</FeatRow>
            <FeatRow type="yes">Centralised billing</FeatRow>
          </div>

          {/* ENTERPRISE */}
          <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Enterprise</p>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Enterprise</h3>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 50 }}>Large organisations needing custom deployment, SSO, and dedicated support.</p>
            <div style={{ marginBottom: 22 }}>
              <span style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 800 }}>Custom</span>
              <p style={{ color: "#555", fontSize: 12, marginTop: 4 }}>Flexible billing</p>
            </div>
            <a
              href={LYREBIRD_PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "transparent", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, textDecoration: "none", marginBottom: 22, transition: "all 0.18s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#ccc" }}
            >
              Talk to sales
            </a>
            <Divider />
            <FeatGroupTitle>Everything in Pro, plus:</FeatGroupTitle>
            <FeatRow type="yes">Tiered discounts</FeatRow>
            <FeatRow type="yes">Organisation sharing</FeatRow>
            <FeatRow type="yes">SSO as an add-on</FeatRow>
            <FeatRow type="yes">Personalised onboarding</FeatRow>
            <FeatRow type="yes">Dedicated account manager</FeatRow>
          </div>

        </div>
      </section>

      {/* ── DISCOUNTS STRIP ────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 14, padding: "24px 32px", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Discounts Available</p>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7 }}>
              Discounts for <span style={{ color: "#ddd" }}>part-time clinicians</span> (under 25h/week), <span style={{ color: "#ddd" }}>registrars</span> (with proof of status), and <span style={{ color: "#ddd" }}>group practices</span>. Discounts scale with practice size.
            </p>
          </div>
          <a
            href={LYREBIRD_PRICING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent", color: "#f5b800", fontWeight: 700, fontSize: 13, padding: "12px 22px", borderRadius: 8, textDecoration: "none", border: "1px solid #f5b80040", display: "flex", alignItems: "center", gap: 8, flexShrink: 0, transition: "all 0.18s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#f5b80012"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            View full pricing
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </a>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <PLabel>FAQ</PLabel>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, textAlign: "center", marginBottom: 48 }}>
            Common <span style={{ color: "#f5b800" }}>Questions</span>
          </h2>
          {[
            { q: "Is there a free trial?", a: "Yes — Lyrebird offers a 14-day free trial with no credit card required. You can also book a one-on-one onboarding session." },
            { q: "Are prices in AUD?", a: "Yes, all listed prices are in Australian Dollars (AUD). Techbee handles onboarding, EMR integration, and support for clinics across the UAE and GCC." },
            { q: "Can I cancel anytime?", a: "Yes. Monthly plans can be cancelled any time. Annual plans run for the subscription period." },
            { q: "Are discounts available for part-time or registrars?", a: "Yes — discounts are available for part-time clinicians working below 25 hours/week, registrars with proof of status, and practices with multiple clinicians. Contact our team to discuss." },
            { q: "What happens after the free trial?", a: "After 14 days you'll be prompted to choose a plan. Your notes and documents are preserved. You can also downgrade to the Free plan." },
          ].map(({ q, a }) => (
            <div key={q} style={{ borderBottom: "1px solid #1a1a1a", padding: "22px 0" }}>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: 10 }}>{q}</p>
              <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FOOTER ─────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", textAlign: "center", borderTop: "1px solid #111" }}>
        <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>GET STARTED</p>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, marginBottom: 14 }}>
          Focus on Patients,<br /><span style={{ color: "#f5b800" }}>Not Paperwork.</span>
        </h2>
        <p style={{ color: "#777", fontSize: 15, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.75 }}>
          Techbee brings Lyrebird AI to healthcare organisations across the UAE and GCC. Our team handles onboarding, EMR integration, and ongoing support.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={LYREBIRD_PRICING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#f5b800", color: "#000", fontWeight: 800, fontSize: 15, padding: "14px 32px", borderRadius: 8, textDecoration: "none", transition: "background 0.18s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
            onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
          >
            Start free trial
          </a>
          <a
            href="tel:042434882"
            style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 8, textDecoration: "none", border: "1px solid #f5b80040" }}
          >
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
