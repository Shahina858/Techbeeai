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

export default function TermsAndConditions() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Terms & Conditions | TechBee AI"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <Navbar logoSrc={LOGO_IMG} />

      {/* ── HERO ── */}
      <section style={{ padding: "140px 24px 60px", background: "linear-gradient(135deg, #000 0%, #0a0a0a 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(245,184,0,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: "20%", width: 400, height: 400, background: "radial-gradient(circle, rgba(245,184,0,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(245,184,0,0.3)", borderRadius: 8, padding: "7px 18px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24, background: "rgba(0,0,0,0.4)" }}>
            LEGAL
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>
            Terms & <span style={{ color: "#f5b800" }}>Conditions</span>
          </h1>
          <p style={{ color: "#666", fontSize: 14, marginBottom: 8 }}>
            Last updated: June 2, 2026
          </p>
          <p style={{ color: "#777", fontSize: 15, lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Please read these terms carefully before using the TechBee AI platform or any of its services.
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
                "1. Acceptance of Terms",
                "2. About TechBee AI",
                "3. Services Offered",
                "4. Use of the Platform",
                "5. Account Registration",
                "6. Intellectual Property",
                "7. Third-Party Products",
                "8. Payment & Billing",
                "9. Data & Privacy",
                "10. Disclaimers",
                "11. Limitation of Liability",
                "12. Termination",
                "13. Governing Law",
                "14. Contact Us",
              ].map((item, i) => (
                <p key={i} style={{ color: "#666", fontSize: 13, margin: 0, lineHeight: 1.8 }}>{item}</p>
              ))}
            </div>
          </div>

          <Section title="1. Acceptance of Terms">
            <P>By accessing or using the TechBee AI website at techbeeai.vercel.app, requesting a demo, submitting a contact form, or engaging with any of our AI-powered products or services, you agree to be bound by these Terms and Conditions.</P>
            <P>If you are using these services on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms. If you do not agree to these Terms, please do not use our platform or services.</P>
            <P>TechBee IT & Designs LLC reserves the right to update or modify these Terms at any time. Continued use of the platform following any such changes constitutes your acceptance of the revised Terms.</P>
          </Section>

          <Section title="2. About TechBee AI">
            <P>TechBee AI is a product and services platform operated by <strong style={{ color: "#ddd" }}>TechBee IT & Designs LLC</strong>, a company registered and operating in Dubai, United Arab Emirates.</P>
            <UL items={[
              "Registered Address: R-12, France Cluster, International City, Dubai, UAE",
              "Email: sales@techbee.ae",
              "Phone: +971 56 411 6174",
              "Website: techbeeai.vercel.app | techbee.ae",
            ]} />
            <P>TechBee AI specialises in reselling, implementing, and supporting AI-powered technology solutions for businesses across the UAE and GCC region.</P>
          </Section>

          <Section title="3. Services Offered">
            <P>Through the TechBee AI platform, we offer information, demo requests, and onboarding support for the following AI products and services:</P>
            <UL items={[
              "AI Contact Center Solutions (Tegsoft AI) — Cloud-based contact center with VoiceChannel, OmniChannel, and AIChannel",
              "AI-Powered Medical Intelligence (Lyrebird AI) — Medical AI scribe for clinical documentation",
              "Intelligent Document Processing (IDP) — AI-powered document extraction and classification",
              "AI Security (Check Point Infinity Platform) — Prevention-first cybersecurity platform",
              "AI Powered Contact Management (CamCard AI) — Business card digitization and contact management",
              "AI-Powered Quote Generation (Webishopi) — B2B IT procurement and quotation platform",
            ]} />
            <P>All products listed are subject to their respective vendor terms and licensing agreements. TechBee AI acts as a regional reseller and implementation partner and does not own the underlying technology of third-party products.</P>
          </Section>

          <Section title="4. Use of the Platform">
            <P>You agree to use the TechBee AI platform only for lawful purposes and in accordance with these Terms. You must not:</P>
            <UL items={[
              "Use the platform in any way that violates applicable UAE federal or local laws or regulations",
              "Submit false, misleading, or fraudulent information via any form or contact channel",
              "Attempt to gain unauthorized access to any part of our systems or infrastructure",
              "Use automated tools, bots, or scrapers to extract data from the website",
              "Transmit any malware, viruses, or harmful code through the platform",
              "Engage in any conduct that restricts or inhibits other users from using the platform",
              "Reproduce, duplicate, or resell any part of the platform without our express written permission",
            ]} />
            <P>TechBee AI reserves the right to restrict or terminate access to any user who violates these conditions without prior notice.</P>
          </Section>

          <Section title="5. Account Registration & Demo Requests">
            <P>When you submit a contact form or request a demo, you agree to provide accurate, current, and complete information. TechBee AI uses this information solely to respond to your enquiry, schedule demos, and follow up with relevant product information.</P>
            <P>By submitting a form, you consent to being contacted by a TechBee AI representative via email or phone. You may opt out of further communications at any time by contacting us at sales@techbee.ae.</P>
            <P>TechBee AI does not create user accounts on this platform. All interactions are handled directly by our sales and technical team.</P>
          </Section>

          <Section title="6. Intellectual Property">
            <P>All content on the TechBee AI website — including but not limited to text, graphics, logos, icons, images, product descriptions, and page layouts — is the property of TechBee IT & Designs LLC or its content suppliers and is protected by applicable intellectual property laws.</P>
            <P>Third-party product names, logos, and trademarks (including Lyrebird AI, Check Point, Tegsoft, CamCard, and others) remain the property of their respective owners. Their appearance on this platform does not imply endorsement unless explicitly stated.</P>
            <P>You may not copy, reproduce, republish, distribute, or modify any content from this platform without prior written consent from TechBee IT & Designs LLC.</P>
          </Section>

          <Section title="7. Third-Party Products & Vendor Terms">
            <P>Several products featured on TechBee AI are developed and owned by third-party vendors. By expressing interest in or purchasing these products through TechBee AI, you acknowledge that:</P>
            <UL items={[
              "Each product is subject to its own vendor End User License Agreement (EULA) and terms of service",
              "TechBee AI is not responsible for the performance, uptime, or data handling of third-party platforms",
              "Pricing, features, and availability of third-party products may change without notice",
              "Support for third-party products is provided by TechBee AI on a best-effort basis in conjunction with the respective vendor",
            ]} />
            <P>Links to third-party websites (such as lyrebirdhealth.com, checkpoint.com, tegsoft.com) are provided for convenience. TechBee AI is not responsible for the content or privacy practices of those sites.</P>
          </Section>

          <Section title="8. Payment & Billing">
            <P>Pricing for TechBee AI products and services is discussed and confirmed during the sales process. All prices are quoted in UAE Dirhams (AED) or US Dollars (USD) unless otherwise specified.</P>
            <P>Invoices are issued by TechBee IT & Designs LLC. Payment terms are as agreed in the applicable quotation or service agreement. Late payments may be subject to penalties as outlined in individual contracts.</P>
            <P>This website does not process payments directly. All financial transactions occur through formal purchase orders and invoices.</P>
          </Section>

          <Section title="9. Data & Privacy">
            <P>TechBee AI is committed to protecting your personal data. When you submit information through our contact forms, we collect and process it in accordance with our Privacy Policy.</P>
            <P>We collect only the information necessary to respond to your enquiry and provide our services. We do not sell, rent, or share your personal data with third parties for marketing purposes without your consent.</P>
            <P>Data submitted via our contact forms is transmitted via EmailJS and stored securely. For more information, please review our Privacy Policy.</P>
            <P>For questions about your data, contact us at: sales@techbee.ae</P>
          </Section>

          <Section title="10. Disclaimers">
            <P>The information on this platform is provided for general informational purposes only. While we strive to keep the content accurate and up to date, TechBee AI makes no warranties, express or implied, about:</P>
            <UL items={[
              "The accuracy, completeness, or timeliness of product information",
              "The fitness of any product or service for a particular purpose",
              "Uninterrupted or error-free operation of this website",
              "Results that may be achieved from using any product or service described",
            ]} />
            <P>Statistics and performance metrics (such as those attributed to Lyrebird AI or Check Point) are sourced from vendor-published research and independent testing. Actual results may vary based on individual use cases and environments.</P>
          </Section>

          <Section title="11. Limitation of Liability">
            <P>To the fullest extent permitted by UAE law, TechBee IT & Designs LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</P>
            <UL items={[
              "Your use of or inability to use this website or its content",
              "Any reliance placed on information provided on this platform",
              "Unauthorized access to or alteration of your data",
              "The performance or non-performance of any third-party product or service",
            ]} />
            <P>Our total liability for any claim arising from the use of this platform shall not exceed the amount paid by you to TechBee AI in the three (3) months preceding the claim.</P>
          </Section>

          <Section title="12. Termination">
            <P>TechBee AI reserves the right to suspend or terminate access to this platform, or any part of it, at any time and without notice, including in cases of suspected misuse, violation of these Terms, or for operational reasons.</P>
            <P>Upon termination, any rights granted to you under these Terms will immediately cease. Provisions that by their nature should survive termination (including intellectual property, disclaimers, and limitations of liability) shall remain in effect.</P>
          </Section>

          <Section title="13. Governing Law & Dispute Resolution">
            <P>These Terms and Conditions are governed by and construed in accordance with the laws of the <strong style={{ color: "#ddd" }}>United Arab Emirates</strong>, specifically the laws applicable in the Emirate of Dubai.</P>
            <P>Any disputes arising out of or in connection with these Terms shall first be attempted to be resolved amicably through direct negotiation. If unresolved within 30 days, disputes shall be referred to the courts of Dubai, UAE, which shall have exclusive jurisdiction.</P>
          </Section>

          <Section title="14. Contact Us">
            <P>If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:</P>
            <div style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 12, padding: "24px 28px", marginTop: 8 }}>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 12px" }}>TechBee IT & Designs LLC</p>
              <p style={{ color: "#777", fontSize: 14, margin: "0 0 6px" }}>📍 R-12, France Cluster, International City, Dubai, UAE</p>
              <p style={{ color: "#777", fontSize: 14, margin: "0 0 6px" }}>📧 sales@techbee.ae</p>
              <p style={{ color: "#777", fontSize: 14, margin: "0 0 16px" }}>📞 +971 56 411 6174</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://techbee.ae" target="_blank" rel="noopener noreferrer" style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>techbee.ae ↗</a>
                <span style={{ color: "#333" }}>|</span>
                {/* <a href="https://techbeeai.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>techbeeai.vercel.app ↗</a> */}
              </div>
            </div>
          </Section>

          {/* Back button */}
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
                onClick={() => navigate("/privacy")}
                style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 14, padding: "12px 32px", borderRadius: 8, border: "1px solid rgba(245,184,0,0.35)", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(245,184,0,0.08)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                Privacy Policy →
              </button>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </div>
  )
}
