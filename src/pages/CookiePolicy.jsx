import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const LOGO_IMG = "/TechBee_AI_Logo_Modified.png"

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{ color: "#f5b800", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{title}</h2>
    <div style={{ color: "#888", fontSize: 14, lineHeight: 1.85 }}>{children}</div>
  </div>
)

const P = ({ children }) => <p style={{ marginBottom: 12 }}>{children}</p>

const UL = ({ items }) => (
  <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
    {items.map((item, i) => <li key={i} style={{ marginBottom: 8, color: "#888" }}>{item}</li>)}
  </ul>
)

const Table = ({ rows }) => (
  <div style={{ border: "1px solid #1a1a1a", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", background: "#0d0d0d", borderBottom: "1px solid #1a1a1a" }}>
      {["Cookie Name", "Type", "Purpose", "Duration"].map(h => (
        <div key={h} style={{ padding: "12px 16px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{h}</div>
      ))}
    </div>
    {rows.map((row, i) => (
      <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", borderBottom: i < rows.length - 1 ? "1px solid #0f0f0f" : "none", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
        {row.map((cell, j) => (
          <div key={j} style={{ padding: "12px 16px", color: "#777", fontSize: 13, lineHeight: 1.55 }}>{cell}</div>
        ))}
      </div>
    ))}
  </div>
)

export default function CookiePolicy() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Cookie Policy | TechBee AI"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <Navbar logoSrc={LOGO_IMG} />

      {/* ── HERO ── */}
      <section style={{ padding: "140px 24px 60px", background: "linear-gradient(135deg, #000 0%, #0a0a0a 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(245,184,0,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "30%", width: 400, height: 400, background: "radial-gradient(circle, rgba(245,184,0,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(245,184,0,0.3)", borderRadius: 8, padding: "7px 18px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24, background: "rgba(0,0,0,0.4)" }}>
            LEGAL
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>
            Cookie <span style={{ color: "#f5b800" }}>Policy</span>
          </h1>
          <p style={{ color: "#666", fontSize: 14, marginBottom: 8 }}>Last updated: June 3, 2026</p>
          <p style={{ color: "#777", fontSize: 15, lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            This policy explains what cookies are, which ones TechBee AI uses, and how you can control them.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          {/* TOC */}
          <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 14, padding: "24px 28px", marginBottom: 56 }}>
            <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Table of Contents</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
              {[
                "1. What Are Cookies",
                "2. How We Use Cookies",
                "3. Types of Cookies We Use",
                "4. Cookies We Set",
                "5. Third-Party Cookies",
                "6. How to Control Cookies",
                "7. Cookie Consent",
                "8. Changes to This Policy",
                "9. Contact Us",
              ].map((item, i) => (
                <p key={i} style={{ color: "#666", fontSize: 13, margin: 0, lineHeight: 1.8 }}>{item}</p>
              ))}
            </div>
          </div>

          {/* Intro box */}
          <div style={{ background: "rgba(245,184,0,0.04)", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 12, padding: "24px 28px", marginBottom: 48 }}>
            <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              This Cookie Policy applies to <strong>TechBee AI</strong>, operated by <strong>TechBee IT & Designs LLC</strong>, Dubai, UAE. We use cookies minimally — no advertising networks, no cross-site tracking. This policy tells you exactly what we use and why.
            </p>
          </div>

          <Section title="1. What Are Cookies">
            <P>Cookies are small text files that are placed on your device (computer, tablet, or phone) when you visit a website. They are widely used to make websites work correctly, remember your preferences, and provide basic analytics to site owners.</P>
            <P>Cookies do not contain personally identifiable information on their own. They typically store a small identifier or value that allows a website to recognise your browser on a return visit.</P>
            <P>There are different types of cookies:</P>
            <UL items={[
              "Session cookies — temporary, deleted when you close your browser",
              "Persistent cookies — remain on your device for a set period or until manually deleted",
              "First-party cookies — set directly by the website you are visiting (techbee.ae / TechBee AI)",
              "Third-party cookies — set by external services embedded in the site (e.g., analytics tools)",
            ]} />
          </Section>

          <Section title="2. How We Use Cookies">
            <P>TechBee AI uses cookies for the following purposes only:</P>
            <UL items={[
              "To ensure the website functions correctly across all pages",
              "To remember your preferences (such as language or display settings) during your visit",
              "To understand basic, anonymous usage patterns so we can improve the site",
              "To maintain security and prevent fraudulent or abusive access",
            ]} />
            <P>We do <strong style={{ color: "#ddd" }}>not</strong> use cookies for:</P>
            <UL items={[
              "Targeted or behavioural advertising",
              "Selling or sharing data with advertising networks",
              "Cross-site tracking across third-party websites",
              "Building individual user profiles for marketing",
            ]} />
          </Section>

          <Section title="3. Types of Cookies We Use">

            {/* Essential */}
            <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
                <p style={{ color: "#4ade80", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>Essential Cookies — Always Active</p>
              </div>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                These cookies are necessary for the website to function. They cannot be switched off. They are usually set in response to actions you take — such as filling in a form or setting preferences. Without them, parts of the site will not work correctly.
              </p>
            </div>

            {/* Analytics */}
            <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f5b800", flexShrink: 0 }} />
                <p style={{ color: "#f5b800", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>Analytics Cookies — Optional</p>
              </div>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                These cookies help us understand how visitors use our site — which pages are visited most, where users come from, and how they navigate. All data is anonymous and aggregated. You can decline these without affecting site functionality.
              </p>
            </div>

            {/* Preference */}
            <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#60a5fa", flexShrink: 0 }} />
                <p style={{ color: "#60a5fa", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>Preference Cookies — Optional</p>
              </div>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                These cookies remember choices you make — such as display preferences — so we can provide a more personalised experience. They are not used to track you across other websites.
              </p>
            </div>

          </Section>

          <Section title="4. Cookies We Set">
            <P>The following cookies may be set when you use the TechBee AI platform:</P>
            <Table rows={[
              ["_tb_session", "Essential", "Maintains your session state during your visit", "Session"],
              ["_tb_prefs", "Preference", "Stores display or language preferences", "30 days"],
              ["_tb_consent", "Essential", "Records your cookie consent choice", "12 months"],
              ["_ga", "Analytics", "Google Analytics — anonymous visitor tracking (if enabled)", "2 years"],
              ["_ga_*", "Analytics", "Google Analytics session identifier", "2 years"],
            ]} />
            <P>Note: We are working toward removing third-party analytics cookies entirely. If Google Analytics is not active on your visit, the _ga cookies will not be set.</P>
          </Section>

          <Section title="5. Third-Party Cookies">
            <P>TechBee AI does not load advertising or social media tracking cookies. The only potential third-party cookies come from services that power core functionality:</P>
            <UL items={[
              "Google Fonts — may set a short-lived cookie to serve web fonts (no personal data stored)",
              "Google Analytics — anonymous, aggregated usage statistics only (opt-out available — see Section 6)",
            ]} />
            <P>We do not embed Facebook Pixel, LinkedIn Insight, TikTok, or any advertising tracker on this site.</P>
            <P>Links on our site may lead to third-party websites (such as techbee.ae, webishopi.com, lyrebirdhealth.com). Those sites have their own cookie policies that we do not control.</P>
          </Section>

          <Section title="6. How to Control Cookies">
            <P>You have several options to control or limit cookie use:</P>

            <p style={{ color: "#f5b800", fontSize: 13, fontWeight: 700, marginBottom: 8, marginTop: 20 }}>a) Browser Settings</p>
            <P>All major browsers allow you to view, block, or delete cookies through their settings. Blocking essential cookies may affect how the site works.</P>
            <UL items={[
              "Chrome: Settings → Privacy & Security → Cookies and other site data",
              "Firefox: Settings → Privacy & Security → Cookies and Site Data",
              "Safari: Preferences → Privacy → Manage Website Data",
              "Edge: Settings → Cookies and site permissions → Cookies and site data",
            ]} />

            <p style={{ color: "#f5b800", fontSize: 13, fontWeight: 700, marginBottom: 8, marginTop: 20 }}>b) Google Analytics Opt-Out</p>
            <P>To opt out of Google Analytics tracking across all websites, install the official browser add-on from Google:</P>
            <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 8, padding: "14px 18px", marginBottom: 12 }}>
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                tools.google.com/dlpage/gaoptout ↗
              </a>
            </div>

            <p style={{ color: "#f5b800", fontSize: 13, fontWeight: 700, marginBottom: 8, marginTop: 20 }}>c) Do Not Track</p>
            <P>If your browser sends a "Do Not Track" signal, TechBee AI will honour it by disabling analytics cookie tracking for your session.</P>
          </Section>

          <Section title="7. Cookie Consent">
            <P>When you first visit TechBee AI, you may see a cookie consent notice. By continuing to use the site, you consent to essential cookies being set.</P>
            <P>Optional cookies (analytics, preferences) are only activated if you accept them via the consent notice. You can change your consent at any time by:</P>
            <UL items={[
              "Clearing your browser cookies (which resets the consent record)",
              "Contacting us at sales@techbee.ae to request preference reset",
              "Using your browser's cookie management settings",
            ]} />
            <P>Withdrawing consent for optional cookies does not affect the lawfulness of any processing that occurred before withdrawal.</P>
          </Section>

          <Section title="8. Changes to This Policy">
            <P>TechBee IT & Designs LLC may update this Cookie Policy from time to time as our platform evolves or legal requirements change.</P>
            <P>We will update the "Last updated" date at the top of this page when changes are made. Significant changes will also be noted in our cookie consent notice. Continued use of the site after changes are posted constitutes acceptance of the updated policy.</P>
          </Section>

          <Section title="9. Contact Us">
            <P>For any questions about our use of cookies or to request data deletion related to cookies:</P>
            <div style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 12, padding: "24px 28px", marginTop: 8 }}>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 12px" }}>TechBee IT & Designs LLC</p>
              <p style={{ color: "#777", fontSize: 14, margin: "0 0 6px" }}>📍 R-12, France Cluster, International City, Dubai, UAE</p>
              <p style={{ color: "#777", fontSize: 14, margin: "0 0 6px" }}>📧 sales@techbee.ae</p>
              <p style={{ color: "#777", fontSize: 14, margin: "0 0 16px" }}>📞 +971 56 411 6174</p>
              <a href="https://techbee.ae" target="_blank" rel="noopener noreferrer" style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>techbee.ae ↗</a>
            </div>
          </Section>

          {/* Bottom nav */}
          <div style={{ textAlign: "center", marginTop: 64, paddingTop: 48, borderTop: "1px solid #1a1a1a" }}>
            <p style={{ color: "#555", fontSize: 13, marginBottom: 24 }}>© 2026 TechBee IT & Designs LLC. All rights reserved.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => navigate("/")}
                style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "12px 32px", borderRadius: 8, border: "none", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                ← Back to Home
              </button>
              <button onClick={() => navigate("/privacy")}
                style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 14, padding: "12px 32px", borderRadius: 8, border: "1px solid rgba(245,184,0,0.35)", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(245,184,0,0.08)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                Privacy Policy →
              </button>
              <button onClick={() => navigate("/terms")}
                style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 14, padding: "12px 32px", borderRadius: 8, border: "1px solid rgba(245,184,0,0.35)", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(245,184,0,0.08)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                Terms & Conditions →
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
