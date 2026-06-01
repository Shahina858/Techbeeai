import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const CAMCARD_PRICING_URL = "https://b.camcard.com/payment/price"

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

function CheckRow({ children, gold = false }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={gold ? "#f5b800" : "#3d9e6e"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span style={{ color: "#bbb", fontSize: 13, lineHeight: 1.55 }}>{children}</span>
    </div>
  )
}

const PROFESSIONAL_FEATURES = [
  "Read unlimited cards",
  "High Accurate Proofreading (50 pieces/ID/month)",
  "Card Management",
  "Communication History",
  "Tag Management",
  "Administration",
  "Role Permissions",
  "Sharing",
  "Tasks and Reminders",
  "Security",
  "Send group email (10,000 mails/month)",
  "Import from Excel",
  "Export cards as Excel",
  "Export to Outlook",
  "Export to Google Contacts",
  "Export to Salesforce",
  "Export to Sugar CRM",
  "Integration via Web service API",
]

const PREMIUM_FEATURES = [
  "Read unlimited cards",
  "High Accurate Proofreading (20 pieces/ID/month)",
  "Card Management",
  "Communication History",
  "Tag Management",
  "Administration",
  "Role Permissions",
  "Sharing",
  "Tasks and Reminders",
  "Security",
  "Send group email (5,000 mails/month)",
  "Import from Excel",
  "Export cards as Excel",
  "Export to Outlook",
  "Export to Google Contacts",
  "Export to Salesforce",
  "Export to Sugar CRM",
  "Integration via Web service API",
]

const COMPARISON = [
  { metric: "Price", pro: "$25 / user / month", prem: "$21 / user / month" },
  { metric: "Minimum users", pro: "10 users", prem: "10 users" },
  { metric: "Proofreading (AI accuracy)", pro: "50 pieces / ID / month", prem: "20 pieces / ID / month" },
  { metric: "Group email volume", pro: "10,000 mails / month", prem: "5,000 mails / month" },
  { metric: "Card management", pro: "✓", prem: "✓" },
  { metric: "CRM export (Salesforce, Sugar)", pro: "✓", prem: "✓" },
  { metric: "Role permissions", pro: "✓", prem: "✓" },
  { metric: "Web service API integration", pro: "✓", prem: "✓" },
  { metric: "Best for", pro: "High-volume teams needing more proofread accuracy", prem: "Cost-conscious teams with standard usage" },
]

export default function CamCardPricing() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#000", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── HEADER BAR ─────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid #1a1a1a", padding: "16px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => navigate(-1)}
            style={{ background: "transparent", border: "1px solid #222", color: "#888", fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 50, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#222"; e.currentTarget.style.color = "#888" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            Back to CamCard
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "rgba(245,184,0,0.12)", border: "1px solid rgba(245,184,0,0.3)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: "#f5b800" }}>CC</div>
            <span style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>CamCard Business</span>
            <span style={{ color: "#333" }}>·</span>
            <span style={{ color: "#666", fontSize: 14 }}>Pricing</span>
          </div>

          <a
            href={CAMCARD_PRICING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
          >
            Official pricing
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </a>
        </div>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px 64px", textAlign: "center" }}>
        <SLabel>PRICING PLANS</SLabel>
        <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, marginBottom: 16, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          A variety of solutions to meet<br />
          <span style={{ color: "#f5b800" }}>the different needs of enterprises</span>
        </h1>
        <p style={{ color: "#777", fontSize: 16, maxWidth: 540, margin: "0 auto 16px", lineHeight: 1.75 }}>
          Both plans require a minimum of 10 users. Contact Techbee for UAE-specific pricing, volume discounts, and onboarding support.
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,184,0,0.08)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "8px 20px", fontSize: 13, color: "#f5b800", fontWeight: 600 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          Prices in USD · Min. 10 users per plan
        </div>
      </section>

      {/* ── PLAN CARDS ─────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>

          {/* PROFESSIONAL */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ background: "rgba(245,184,0,0.04)", border: "2px solid rgba(245,184,0,0.5)", borderRadius: 24, padding: "40px 36px", display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 0 60px rgba(245,184,0,0.07)" }}
          >
            <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#f5b800", color: "#000", fontSize: 10, fontWeight: 800, padding: "4px 16px", borderRadius: 50, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              MOST FEATURES
            </div>

            <p style={{ color: "#f5b800", fontSize: 12, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>Professional</p>

            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#888", fontSize: 14 }}>USD $</span>
              <span style={{ color: "#f5b800", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em" }}>25</span>
              <span style={{ color: "#888", fontSize: 14 }}> /user/month</span>
            </div>
            <p style={{ color: "#555", fontSize: 13, marginBottom: 28 }}>At least 10 users</p>

            <button
              onClick={() => goToContact(navigate)}
              style={{ background: "#f5b800", color: "#000", fontWeight: 800, fontSize: 15, padding: "14px", borderRadius: 50, border: "none", cursor: "pointer", marginBottom: 32, transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
            >
              Get Started — Professional
            </button>

            <div style={{ borderTop: "1px solid rgba(245,184,0,0.15)", paddingTop: 24 }}>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Professional Functional Rights</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {PROFESSIONAL_FEATURES.map(f => <CheckRow key={f} gold>{f}</CheckRow>)}
              </div>
            </div>
          </motion.div>

          {/* PREMIUM */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", borderRadius: 24, padding: "40px 36px", display: "flex", flexDirection: "column" }}
          >
            <p style={{ color: "#888", fontSize: 12, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>Premium</p>

            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#888", fontSize: 14 }}>USD $</span>
              <span style={{ color: "#fff", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em" }}>21</span>
              <span style={{ color: "#888", fontSize: 14 }}> /user/month</span>
            </div>
            <p style={{ color: "#555", fontSize: 13, marginBottom: 28 }}>At least 10 users</p>

            <button
              onClick={() => goToContact(navigate)}
              style={{ background: "transparent", color: "#f5b800", fontWeight: 800, fontSize: 15, padding: "13px", borderRadius: 50, border: "1px solid rgba(245,184,0,0.4)", cursor: "pointer", marginBottom: 32, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,184,0,0.1)"; e.currentTarget.style.borderColor = "#f5b800" }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)" }}
            >
              Get Started — Premium
            </button>

            <div style={{ borderTop: "1px solid #1c1c1c", paddingTop: 24 }}>
              <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Premium Functional Rights</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {PREMIUM_FEATURES.map(f => <CheckRow key={f}>{f}</CheckRow>)}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── KEY DIFFERENCE CALLOUT ──────────────────────────────── */}
      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 16, padding: "28px 32px", display: "flex", gap: 32, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Key Difference</p>
              <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.75 }}>
                The main difference between plans is <span style={{ color: "#fff", fontWeight: 700 }}>AI proofreading volume</span> and <span style={{ color: "#fff", fontWeight: 700 }}>group email capacity</span>. Professional gives 50 proofreads/ID/month and 10,000 group emails — ideal for high-volume sales teams. Premium gives 20 proofreads and 5,000 emails — suitable for smaller or cost-focused teams.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <div style={{ background: "rgba(245,184,0,0.08)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
                <p style={{ color: "#f5b800", fontWeight: 800, fontSize: 22, margin: 0 }}>50 vs 20</p>
                <p style={{ color: "#888", fontSize: 12, margin: "4px 0 0" }}>Proofreads / ID / month</p>
              </div>
              <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
                <p style={{ color: "#ccc", fontWeight: 800, fontSize: 22, margin: 0 }}>10k vs 5k</p>
                <p style={{ color: "#666", fontSize: 12, margin: "4px 0 0" }}>Group emails / month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SLabel>PLAN COMPARISON</SLabel>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, textAlign: "center", marginBottom: 40, letterSpacing: "-0.01em" }}>
            Professional vs <span style={{ color: "#f5b800" }}>Premium</span>
          </h2>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <div style={{ border: "1px solid #1a1a1a", borderRadius: 16, overflow: "hidden", minWidth: 500 }}>
              {/* Header */}
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", background: "#0d0d0d", borderBottom: "1px solid #1a1a1a" }}>
                <div style={{ padding: "14px 20px", color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Feature</div>
                <div style={{ padding: "14px 20px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderLeft: "1px solid #1a1a1a" }}>Professional</div>
                <div style={{ padding: "14px 20px", color: "#aaa", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderLeft: "1px solid #1a1a1a" }}>Premium</div>
              </div>
              {COMPARISON.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", borderBottom: i < COMPARISON.length - 1 ? "1px solid #111" : "none", background: i % 2 === 0 ? "#000" : "#060606" }}>
                  <div style={{ padding: "13px 20px", color: "#aaa", fontSize: 13, fontWeight: 500 }}>{row.metric}</div>
                  <div style={{ padding: "13px 20px", color: row.pro === "✓" ? "#f5b800" : "#ccc", fontSize: 13, fontWeight: 600, borderLeft: "1px solid #111" }}>{row.pro}</div>
                  <div style={{ padding: "13px 20px", color: row.prem === "✓" ? "#3d9e6e" : "#888", fontSize: 13, borderLeft: "1px solid #111" }}>{row.prem}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCOUNTS / CUSTOM ─────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 16, padding: "28px 32px", textAlign: "center" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Volume Discounts & Custom Services</p>
          <p style={{ color: "#888", fontSize: 14, lineHeight: 1.75, marginBottom: 20, maxWidth: 560, margin: "0 auto 20px" }}>
            For more discounts and customized services, contact Techbee — the authorized CamCard Business partner for the UAE and GCC. We handle onboarding, CRM integration, and training.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => goToContact(navigate)}
              style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
            >
              Contact Techbee UAE
            </button>
            <a
              href={CAMCARD_PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#f5b800", fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 50, textDecoration: "none", border: "1px solid rgba(245,184,0,0.35)", transition: "all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(245,184,0,0.08)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              View official pricing page
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", textAlign: "center", borderTop: "1px solid #111" }}>
        <SLabel>GET STARTED</SLabel>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, marginBottom: 14, letterSpacing: "-0.01em" }}>
          Ready to Turn Every Card into<br /><span style={{ color: "#f5b800" }}>a CRM Opportunity?</span>
        </h2>
        <p style={{ color: "#777", fontSize: 15, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.75 }}>
          Techbee brings CamCard Business to sales teams, enterprises, and recruitment firms across the UAE and GCC.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => goToContact(navigate)}
            style={{ background: "#f5b800", color: "#000", fontWeight: 800, fontSize: 15, padding: "14px 36px", borderRadius: 50, border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.35)", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
            onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
          >
            Start Free Trial →
          </button>
          <a href="tel:042434882"
            style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 50, textDecoration: "none", border: "1px solid rgba(245,184,0,0.4)" }}>
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
