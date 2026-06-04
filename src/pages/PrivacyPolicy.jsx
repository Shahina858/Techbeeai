import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const LOGO_IMG = "/TechBee_AI_Logo_Modified.png"

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{ color: "#f5b800", fontSize: 18, fontWeight: 700, marginBottom: 16, letterSpacing: "0.01em" }}>{title}</h2>
    <div style={{ color: "#888", fontSize: 14, lineHeight: 1.85 }}>{children}</div>
  </div>
)

const P = ({ children }) => <p style={{ marginBottom: 12 }}>{children}</p>

const UL = ({ items }) => (
  <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
    {items.map((item, i) => (
      <li key={i} style={{ marginBottom: 8, color: "#888" }}>{item}</li>
    ))}
  </ul>
)

const Table = ({ rows }) => (
  <div style={{ border: "1px solid #1a1a1a", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#0d0d0d", borderBottom: "1px solid #1a1a1a" }}>
      {["Data Type", "Purpose", "Retention"].map(h => (
        <div key={h} style={{ padding: "12px 16px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{h}</div>
      ))}
    </div>
    {rows.map((row, i) => (
      <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: i < rows.length - 1 ? "1px solid #0f0f0f" : "none", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
        {row.map((cell, j) => (
          <div key={j} style={{ padding: "12px 16px", color: "#777", fontSize: 13, lineHeight: 1.55 }}>{cell}</div>
        ))}
      </div>
    ))}
  </div>
)

export default function PrivacyPolicy() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Privacy Policy | TechBee AI"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <Navbar logoSrc={LOGO_IMG} />

      {/* ── HERO ── */}
      <section style={{ padding: "140px 24px 60px", background: "linear-gradient(135deg, #000 0%, #0a0a0a 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(245,184,0,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: "15%", width: 400, height: 400, background: "radial-gradient(circle, rgba(245,184,0,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(245,184,0,0.3)", borderRadius: 8, padding: "7px 18px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24, background: "rgba(0,0,0,0.4)" }}>
            LEGAL
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>
            Privacy <span style={{ color: "#f5b800" }}>Policy</span>
          </h1>
          <p style={{ color: "#666", fontSize: 14, marginBottom: 8 }}>Last updated: June 2, 2026</p>
          <p style={{ color: "#777", fontSize: 15, lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Your privacy matters to us. This policy explains what data we collect, how we use it, and your rights as a user of TechBee AI.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          {/* Quick nav */}
          <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 14, padding: "24px 28px", marginBottom: 56 }}>
            <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Table of Contents</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
              {[
                "1. Who We Are",
                "2. Data We Collect",
                "3. How We Use Your Data",
                "4. Legal Basis for Processing",
                "5. Data Sharing",
                "6. Third-Party Services",
                "7. Cookies",
                "8. Data Security",
                "9. Data Retention",
                "10. Your Rights",
                "11. Children's Privacy",
                "12. Changes to This Policy",
                "13. Contact Us",
              ].map((item, i) => (
                <p key={i} style={{ color: "#666", fontSize: 13, margin: 0, lineHeight: 1.8 }}>{item}</p>
              ))}
            </div>
          </div>

          {/* Intro */}
          <div style={{ background: "rgba(245,184,0,0.04)", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 12, padding: "24px 28px", marginBottom: 48 }}>
            <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              This Privacy Policy applies to the TechBee AI website at <span style={{ color: "#f5b800" }}>TechBee AI</span> and all services, contact forms, and communications operated by <strong>TechBee IT & Designs LLC</strong>, Dubai, UAE. By using our platform, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <Section title="1. Who We Are">
            <P>TechBee AI is a platform operated by <strong style={{ color: "#ddd" }}>TechBee IT & Designs LLC</strong>, a technology company based in Dubai, UAE. We specialise in AI-powered business solutions including AI Contact Center, Medical AI Scribe, Document Processing, Cybersecurity, and B2B procurement platforms.</P>
            <P><strong style={{ color: "#ddd" }}>Data Controller:</strong> TechBee IT & Designs LLC</P>
            <UL items={[
              "Address: R-12, France Cluster, International City, Dubai, UAE",
              "Email: sales@techbee.ae",
              "Phone: +971 56 411 6174",
            ]} />
          </Section>

          <Section title="2. Data We Collect">
            <P>We collect information you provide directly to us when you interact with our platform:</P>

            <p style={{ color: "#f5b800", fontSize: 13, fontWeight: 700, marginBottom: 10, marginTop: 20 }}>a) Contact Form Data</p>
            <P>When you submit our contact or demo request form, we collect:</P>
            <UL items={[
              "Full name",
              "Business email address",
              "Company name",
              "Job title",
              "Phone number",
              "Country / Address",
              "Product of interest",
              "Message content",
            ]} />

            <p style={{ color: "#f5b800", fontSize: 13, fontWeight: 700, marginBottom: 10, marginTop: 20 }}>b) Automatically Collected Data</p>
            <P>When you visit our website, we may automatically collect:</P>
            <UL items={[
              "IP address and general location (country/city level)",
              "Browser type and version",
              "Device type and operating system",
              "Pages visited and time spent on site",
              "Referring website or source",
            ]} />

            <p style={{ color: "#f5b800", fontSize: 13, fontWeight: 700, marginBottom: 10, marginTop: 20 }}>c) Communication Data</p>
            <P>If you contact us via email or phone, we may retain records of those communications to provide support and follow up on your enquiry.</P>
          </Section>

          <Section title="3. How We Use Your Data">
            <P>We use the information we collect for the following purposes:</P>
            <Table rows={[
              ["Name, Email, Phone", "Respond to demo requests and enquiries", "12 months after last contact"],
              ["Company, Job Title", "Personalize product recommendations", "12 months after last contact"],
              ["Product Interest", "Route to relevant sales team member", "12 months after last contact"],
              ["Message Content", "Provide accurate and relevant support", "12 months after last contact"],
              ["IP / Device Data", "Website analytics and security", "90 days"],
            ]} />
            <P>We do not use your data for automated decision-making or profiling that produces legal or significant effects on you.</P>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <P>Under applicable privacy laws including the UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection, we process your data on the following legal bases:</P>
            <UL items={[
              "Consent — when you voluntarily submit a contact form and agree to our privacy policy",
              "Legitimate Interests — to respond to business enquiries, improve our services, and maintain website security",
              "Contractual Necessity — when processing is required to fulfil a service agreement",
              "Legal Obligation — when required by UAE law or regulatory authority",
            ]} />
          </Section>

          <Section title="5. Data Sharing">
            <P>TechBee IT & Designs LLC does not sell, rent, or trade your personal data to third parties for their marketing purposes.</P>
            <P>We may share your data only in the following limited circumstances:</P>
            <UL items={[
              "With our internal sales and technical team members who need access to respond to your enquiry",
              "With third-party vendors (such as Lyrebird Health, Tegsoft, Check Point) when you express specific interest in their products — only with your knowledge and for the purpose of facilitating your request",
              "With service providers who assist in our operations (e.g., EmailJS for form transmission) under strict data processing agreements",
              "With legal authorities if required by UAE law, court order, or to protect the rights and safety of TechBee AI or others",
            ]} />
          </Section>

          <Section title="6. Third-Party Services">
            <P>Our platform uses the following third-party services that may process data:</P>
            <Table rows={[
              ["EmailJS", "Contact form transmission", "emailjs.com/legal"],
  
              ["Google Fonts / CDN", "Font rendering", "policies.google.com/privacy"],
            ]} />
            <P>Each of these services has its own privacy policy. We encourage you to review them. TechBee AI is not responsible for the privacy practices of third-party services.</P>
            <P>Our platform may contain links to third-party websites (techbee.ae, lyrebirdhealth.com, checkpoint.com, etc.). This Privacy Policy does not apply to those external sites.</P>
          </Section>

          <Section title="7. Cookies">
            <P>Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device.</P>
            <P>We may use the following types of cookies:</P>
            <UL items={[
              "Essential Cookies — necessary for the website to function correctly (cannot be disabled)",
              "Analytics Cookies — help us understand how visitors interact with our site (can be declined)",
              "Preference Cookies — remember your settings and preferences",
            ]} />
            <P>You can control cookie settings through your browser. Disabling certain cookies may affect the functionality of our website. We do not currently use advertising or tracking cookies for third-party ad networks.</P>
          </Section>

          <Section title="8. Data Security">
            <P>We take the security of your personal data seriously and implement appropriate technical and organisational measures including:</P>
            <UL items={[
              "HTTPS encryption for all data transmitted through our website",
              "Secure transmission of form data via EmailJS with encrypted connections",
              "Restricted access to personal data — only accessible by authorised team members",
              "Regular review of our data handling practices and security measures",
            ]} />
            <P>While we strive to protect your personal data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to using industry-standard protections.</P>
            <P>In the event of a data breach that affects your rights, we will notify affected individuals and relevant authorities in accordance with UAE data protection regulations.</P>
          </Section>

          <Section title="9. Data Retention">
            <P>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected:</P>
            <UL items={[
              "Contact form submissions: retained for up to 12 months after last interaction",
              "Sales communications and email records: retained for up to 3 years for business and legal compliance",
              "Website analytics data: retained for up to 90 days",
              "Data required by UAE law or regulation: retained for the legally required period",
            ]} />
            <P>After the retention period, data is securely deleted or anonymised. You may request earlier deletion of your data — see Section 10 for your rights.</P>
          </Section>

          <Section title="10. Your Rights">
            <P>Under UAE data protection law and applicable international standards, you have the following rights regarding your personal data:</P>
            <UL items={[
              "Right of Access — request a copy of the personal data we hold about you",
              "Right to Rectification — request correction of inaccurate or incomplete data",
              "Right to Erasure — request deletion of your personal data (subject to legal obligations)",
              "Right to Restrict Processing — request that we limit how we use your data",
              "Right to Data Portability — receive your data in a structured, machine-readable format",
              "Right to Object — object to processing based on legitimate interests",
              "Right to Withdraw Consent — withdraw consent at any time where processing is consent-based",
            ]} />
            <P>To exercise any of these rights, please contact us at <strong style={{ color: "#ddd" }}>sales@techbee.ae</strong> with the subject line "Data Privacy Request". We will respond within 30 days.</P>
            <P>We may need to verify your identity before processing certain requests to protect your data from unauthorized access.</P>
          </Section>

          <Section title="11. Children's Privacy">
            <P>TechBee AI is a B2B platform intended for business professionals. We do not knowingly collect personal data from individuals under the age of 18.</P>
            <P>If you believe a minor has submitted personal information through our platform, please contact us immediately at sales@techbee.ae and we will promptly delete the data.</P>
          </Section>

          <Section title="12. Changes to This Policy">
            <P>TechBee IT & Designs LLC may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons.</P>
            <P>We will notify users of significant changes by updating the "Last updated" date at the top of this page. We encourage you to review this policy periodically.</P>
            <P>Your continued use of the TechBee AI platform after changes are posted constitutes your acceptance of the updated Privacy Policy.</P>
          </Section>

          <Section title="13. Contact Us">
            <P>If you have any questions, concerns, or requests about this Privacy Policy or how we handle your data, please contact our team:</P>
            <div style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 12, padding: "24px 28px", marginTop: 8 }}>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 12px" }}>TechBee IT & Designs LLC — Data Privacy</p>
              <p style={{ color: "#777", fontSize: 14, margin: "0 0 6px" }}>📍 R-12, France Cluster, International City, Dubai, UAE</p>
              <p style={{ color: "#777", fontSize: 14, margin: "0 0 6px" }}>📧 sales@techbee.ae</p>
              <p style={{ color: "#777", fontSize: 14, margin: "0 0 16px" }}>📞 +971 56 411 6174</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://techbee.ae" target="_blank" rel="noopener noreferrer" style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>techbee.ae ↗</a>
                <span style={{ color: "#333" }}>|</span>
                
              </div>
            </div>
          </Section>

          {/* Bottom nav */}
          <div style={{ textAlign: "center", marginTop: 64, paddingTop: 48, borderTop: "1px solid #1a1a1a" }}>
            <p style={{ color: "#555", fontSize: 13, marginBottom: 24 }}>© 2026 TechBee IT & Designs LLC. All rights reserved.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => navigate("/")}
                style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "12px 32px", borderRadius: 8, border: "none", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
              >
                ← Back to Home
              </button>
              <button
                onClick={() => navigate("/terms")}
                style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 14, padding: "12px 32px", borderRadius: 8, border: "1px solid rgba(245,184,0,0.35)", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(245,184,0,0.08)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                Terms & Conditions →
              </button>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </div>
  )
}
