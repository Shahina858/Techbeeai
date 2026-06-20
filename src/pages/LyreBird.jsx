import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProductPage, { PLabel, Chip, StepCard, UseCaseCard, StatPill } from "../components/ProductPage"
import Footer from "../components/Footer"

// ── Image assets (copy all to /public/) ──────────────────────────────────────
const LYREBIRD_LOGO_H   = "/lyrebird_logo_horizontal.png"  // wide black logo
const LYREBIRD_LOGO_W   = "/lyrebird_logo_white.png"       // white logo for dark bg
const HERO_IMG          = "/lyrebird_clinical_note.png"    // img1 — clinical note UI
const PATIENT_HIST_IMG  = "/lyrebird_patient_history.png"  // img2 — patient history
const DOCUMENTS_IMG     = "/lyrebird_documents.png"        // img3 — documents/letters

const goToContact = (navigate) => {
  navigate("/")
  setTimeout(() => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, 300)
}

function FeatureCard({ icon, title, desc, image }) {
  return (
    <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "26px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
      {image ? (
        <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: 4 }}>
          <img src={image} alt={title} style={{ width: "100%", display: "block", borderRadius: 10, background: "#fff" }} />
        </div>
      ) : (
        <div style={{ background: "#f5b80012", border: "1px solid #f5b80030", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {icon}
        </div>
      )}
      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: 0 }}>{title}</h3>
      <p style={{ color: "#777", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  )
}

function TestimonialCard({ quote, name, role, org }) {
  return (
    <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{ color: "#f5b800", fontSize: 26, lineHeight: 1, margin: 0 }}>"</p>
      <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.75, margin: 0, flex: 1 }}>{quote}</p>
      <div style={{ borderTop: "1px solid #1c1c1c", paddingTop: 16 }}>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: "0 0 2px" }}>{name}</p>
        <p style={{ color: "#f5b800", fontSize: 12, fontWeight: 600, margin: "0 0 2px" }}>{role}</p>
        <p style={{ color: "#555", fontSize: 12, margin: 0 }}>{org}</p>
      </div>
    </div>
  )
}

function IntegrationBadge({ name }) {
  return (
    <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 10, padding: "12px 20px", color: "#bbb", fontSize: 13, fontWeight: 600, textAlign: "center" }}>
      {name}
    </div>
  )
}

function SecurityPoint({ icon, title, desc }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div style={{ background: "#f5b80015", border: "1px solid #f5b80030", borderRadius: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{title}</h4>
        <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{desc}</p>
      </div>
    </div>
  )
}

function FAQItem({ q, a }) {
  return (
    <div style={{ borderBottom: "1px solid #1a1a1a", padding: "22px 0" }}>
      <p style={{ color: "#fff", fontWeight: 600, fontSize: 15, margin: "0 0 10px" }}>{q}</p>
      <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{a}</p>
    </div>
  )
}

function ResearchStat({ value, label }) {
  return (
    <div style={{ textAlign: "center", padding: "28px 20px", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 14 }}>
      <p style={{ color: "#f5b800", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, margin: "0 0 8px", lineHeight: 1 }}>{value}</p>
      <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{label}</p>
    </div>
  )
}

function PricingCheckIcon({ color = "#f5b800" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function PricingCrossIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
function PricingFeatRow({ children, type = "yes" }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 9 }}>
      {type === "yes"   && <PricingCheckIcon color="#f5b800" />}
      {type === "limit" && <PricingCheckIcon color="#3d9e6e" />}
      {type === "no"    && <PricingCrossIcon />}
      <span style={{ color: type === "no" ? "#444" : "#999", fontSize: 13, lineHeight: 1.55 }}>{children}</span>
    </div>
  )
}
function PricingFeatGroupTitle({ children }) {
  return (
    <p style={{ color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10, marginTop: 18 }}>
      {children}
    </p>
  )
}
function PricingDivider() {
  return <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", margin: "18px 0" }} />
}

export default function Lyrebird() {
  const navigate = useNavigate()
  const [billing, setBilling] = useState("monthly")

  return (
    <ProductPage
      badge="LYREBIRD HEALTH — AMBIENT VOICE TECHNOLOGY"
      headline={<>Reconnect with your patients,<br /><span style={{ color: "#f5b800" }}>leave the paperwork to Lyrebird.</span></>}
      sub="Lyrebird Health listens to patient consultations, transcribes speech in real time, and generates structured clinical notes automatically — saving clinicians up to 3 hours every single day."
      cta="Request a Demo"
      heroImg={HERO_IMG}
      demoVideoSrc="https://www.youtube.com/embed/zafK5SGh_Fs?autoplay=1"
      heroStats={[
        { n: "80%", l: "less documentation time" },
        { n: "2–3h", l: "saved per day" },
        { n: "50+",  l: "languages" },
      ]}
      pricingCta={() => {
        const el = document.getElementById("pricing")
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }}
    >

      {/* ── LYREBIRD HEALTH LOGO BANNER ── */}
      <section style={{ background: "#000", padding: "48px 24px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "20px 40px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(245,184,0,0.1)" }}>
            <img src={LYREBIRD_LOGO_H} alt="Lyrebird Health" style={{ height: 48, width: "auto", display: "block" }} />
          </div>
          <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7, maxWidth: 480, textAlign: "center" }}>
            Official AI medical scribe by <span style={{ color: "#f5b800", fontWeight: 600 }}>Lyrebird Health</span> — deployed by TechBee across healthcare organisations in the UAE and GCC.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>HOW IT WORKS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            From Consultation to Note <span style={{ color: "#f5b800" }}>in Minutes</span>
          </h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <StepCard n="1" title="Listen" desc="Lyrebird passively listens to your patient consultation via microphone or telehealth platform — fully HIPAA, GDPR & APP compliant. No audio is stored; all sound is deleted once the consultation ends." />
            <StepCard n="2" title="Transcribe & Generate" desc="Real-time AI transcription captures every detail with medical-grade accuracy across 50+ languages and varied accents. A structured SOAP or custom clinical note is ready in under 20 seconds." />
            <StepCard n="3" title="Review & Transfer" desc="Review the note, make edits, and transfer directly to your EMR in one click — or copy and paste into any system." />
            <StepCard n="4" title="Learn Your Style" desc="Lyrebird learns from your edits and uploaded examples. The more you use it, the more it reflects your clinical voice — saving more time with every consult." />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <StatPill value="80%" label="Reduction in Documentation Time" />
            <StatPill value="2–3h" label="Saved Per Clinician Per Day" />
            <StatPill value="88%" label="Clinicians Reporting Improved Note Quality" />
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES — with img3 (documents) ── */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CAPABILITIES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            Built for <span style={{ color: "#f5b800" }}>Healthcare Professionals</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 52 }}>
            {[
              "Real-time clinical transcription",
              "SOAP & custom note format support",
              "ISO 27001:2022, Cyber Essentials+",
              "EHR / EMR integration (Cerner)",
              "50+ language & accent support",
              "Medical terminology recognition",
              "Documents & letters generation",
              "Telehealth platform compatible",
              "AES-256 bank-level encryption",
              "No software installation required",
              "CCMP, MHTP, WorkCover, NDIS PDFs",
              "Patient history summary view",
              "Dictation mode for custom documents",
              "AI-powered note editing",
              "Consent timestamping for medicolegal clarity",
            ].map(f => <Chip key={f}>{f}</Chip>)}
          </div>

          {/* Feature grid — img3 spans full width at top */}
          <div style={{ background: "#0f0f0f", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px", marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40, alignItems: "center" }}>
            <div>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Smart Documents & Letters</p>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 14 }}>Letters, Referrals & Complex Documents</h3>
              <p style={{ color: "#777", fontSize: 14, lineHeight: 1.75, marginBottom: 18 }}>
                Generate referral letters, certificates, care plans, and patient updates in seconds. CCMPs, MHTPs, WorkCover, and NDIS PDFs all prepared and ready for review — not hours of retyping. Saves hours on the most complex documentation workflows.
              </p>
              <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65 }}>
                Upload your own examples and Lyrebird learns your preferred structure and tone — applying it automatically to every future document.
              </p>
            </div>
            <div style={{ borderRadius: 14, overflow: "hidden", background: "#fff", padding: 8, boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
              <img src={DOCUMENTS_IMG} alt="Lyrebird documents and letters" style={{ width: "100%", display: "block", borderRadius: 10 }} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <FeatureCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>}
              title="Effortless Notes"
              desc="Lyrebird listens throughout your consult and produces complete, structured notes without you typing a single word. Ready for review in under 20 seconds."
            />
            <FeatureCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>}
              title="Patient History at a Glance"
              desc="Patient Summary formats medications, allergies, and history into one clear, structured view — so you stop searching and start consulting."
            />
            <FeatureCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>}
              title="Always Learning"
              desc="As you edit notes and documents, Lyrebird learns from those changes. The more you use it, the smarter it gets — continuously adapting to your clinical voice."
            />
            <FeatureCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
              title="Talk, Don't Type"
              desc="Use dictation mode to speak your notes, letters, or reports aloud. Lyrebird turns your voice into professional, formatted clinical text — instantly."
            />
            <FeatureCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>}
              title="Complex Workflow Automation"
              desc="CCMPs, MHTPs, Centrelink, WorkCover, and NDIS PDFs all prepared and ready for review — saves hours on the most complex documentation workflows."
            />
            <FeatureCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
              title="Secure & Compliant"
              desc="ISO 27001:2022 certified, AES-256 encrypted. Patient data processed in AWS Frankfurt. Never used to train AI models."
            />
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>USE CASES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Empowering Clinicians <span style={{ color: "#f5b800" }}>Across Specialties</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <UseCaseCard role="General Practice"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
              title="More accurate notes across repeat visits."
              desc="GPs see 20–30 patients a day. Lyrebird generates every note automatically — with less cognitive load, fewer loose ends after hours, and more time for eye contact with patients." />
            <UseCaseCard role="Specialists"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>}
              title="Drafts that reflect patient context and your clinical voice."
              desc="Cardiologists, oncologists, endocrinologists and neurologists get structured specialist notes with relevant medical codes — ready for review, not hours of retyping." />
            <UseCaseCard role="Telehealth"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
              title="Full documentation for virtual consultations."
              desc="Lyrebird integrates directly with telehealth platforms — capturing and documenting every virtual encounter automatically. Supports phone and video consults with audio isolation for clear patient voice capture." />
            <UseCaseCard role="Emergency & Hospital"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
              title="Shortened note time in high-volume settings."
              desc="Emergency clinicians save 40–60 minutes per 10-hour shift. Surgeons reduce post-operative note time from 3 hours to 30 minutes — giving back time for patient care and family." />
            <UseCaseCard role="Allied Health"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>}
              title="Built for every healthcare role."
              desc="Dentists, nurses, psychologists, midwives, physiotherapists and paramedics — Lyrebird adapts to any healthcare specialty's terminology, documentation style, and workflow nuances." />
            <UseCaseCard role="Clinics & Enterprise"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>}
              title="Enterprise deployment across departments."
              desc="Deploy Lyrebird across multiple departments with centralised admin, compliance reporting, and EHR sync. Trusted across global organizations including Gold Coast Health, NHS, Qualitas, Healthia, and Ochre Health." />
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS — with img2 (patient history) ── */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>INTEGRATIONS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Works Inside <span style={{ color: "#f5b800" }}>Your EMR</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 620, margin: "0 auto 52px" }}>
            Deep integrations with leading EMRs and practice management platforms mean you finish notes, documents, and care plans without ever leaving your medical record system.
          </p>

          {/* Patient history image + cards side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, alignItems: "center", marginBottom: 40 }}>
            <div style={{ borderRadius: 16, overflow: "hidden", background: "#f8f8ff", padding: 12, boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
              <img src={PATIENT_HIST_IMG} alt="Lyrebird patient history" style={{ width: "100%", display: "block", borderRadius: 10 }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#0f0f0f", border: "1px solid #f5b80030", borderRadius: 14, padding: "24px 20px" }}>
                <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Patient Context</p>
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 10px" }}>Patient history at your fingertips</h4>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Patient Summary formats medications, allergies, and history into one clear view — so you stop searching and start consulting.</p>
              </div>
              <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "24px 20px" }}>
                <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Deep EMR Integration</p>
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 10px" }}>Work directly from your EMR</h4>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Finish notes, documents, and care plans inside your EMR — no copy-paste needed.</p>
              </div>
              <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "24px 20px" }}>
                <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Complex Workflows</p>
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 10px" }}>Complex workflows in seconds</h4>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>CCMPs, MHTPs, Centrelink, WorkCover, and NDIS PDFs all prepared and ready for review — not hours of retyping.</p>
              </div>
            </div>
          </div>

          <p style={{ textAlign: "center", color: "#888", fontSize: 14, fontWeight: 600, marginBottom: 16 }}>
            Integrates seamlessly across leading EMR systems
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
            {["Best Practice", "Genie / Gentu", "Oracle Cerner", "FHIR API", "Epic", "Cubiko", "Telehealth Platforms", "REST API"].map(n => <IntegrationBadge key={n} name={n} />)}
          </div>
        </div>
      </section>

      {/* ── CLINICAL RESEARCH ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CLINICAL RESEARCH</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Proven in Real <span style={{ color: "#f5b800" }}>Clinical Practice</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 640, margin: "0 auto 52px" }}>
            Because changes to clinical work matter, Lyrebird partners with clinicians and research teams to study real-world performance. The results speak for themselves.
          </p>
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 16, padding: "36px", marginBottom: 24 }}>
            <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>Case Study — Gold Coast Health, Australia</p>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>100+ Clinicians. 21 Specialties.</h3>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.75, margin: "0 0 32px", maxWidth: 720 }}>
              Gold Coast Health deployed Lyrebird across 21 specialties and 100+ clinicians. Clinicians reported they "can't imagine practicing without" it — with notes scoring higher on structured quality reviews (PDQI-9) than manually written notes.
            </p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 28 }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              <ResearchStat value="80%" label="Reduction in post-consult documentation time" />
              <ResearchStat value="+88%" label="Clinicians reporting improved note quality" />
              <ResearchStat value="84%" label="Reported improved workflow efficiency" />
              <ResearchStat value="68%" label="Patients noticed increased clinician engagement" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>WHAT CLINICIANS SAY</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Trusted by <span style={{ color: "#f5b800" }}>Thousands of Clinicians</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <TestimonialCard quote="Prior to using Lyrebird, I would spend an hour with a patient and another 1-2 hours on paperwork. Now, it's just 15-20 minutes, saving me 2-3 hours a day. I can maintain eye contact with parents during those deeper conversations which is improving my relationships with families." name="Angela Owens" role="Senior Medical Officer" org="Gold Coast Health" />
            <TestimonialCard quote="The depth of information recorded with Lyrebird is more detailed than I would normally type during a consult or from memory later. Plus, I've been able to customize it to reflect my own structure, style, and technical language." name="Jessica Triay" role="Staff Specialist, Endocrinology" org="Gold Coast Health" />
            <TestimonialCard quote="Lyrebird's commitment to data security and its proven track record with other medical groups gave us the immediate confidence we needed. Coupled with the seamless integration with Cubiko and Best Practice, choosing Lyrebird was an absolute no-brainer." name="Louise Forster" role="Business Manager" org="Lake Kawana General Practice" />
            <TestimonialCard quote="Lyrebird Health strikes the right balance between efficiency, security and patient-centred care. I highly recommend it to fellow practitioners." name="Dr Sean Stevens" role="Principal GP & Owner" org="Grove Medical" />
            <TestimonialCard quote="The results are so significant that we are planning to roll this out to all 32 of our doctors ASAP. This isn't just an efficiency tool; it's a critical investment in our entire operation." name="Dene Creegan" role="General Manager" org="7 Springs Medical Practice" />
            <TestimonialCard quote="In the last six months alone, our care plan process has become incredibly smoother. We have seen a significant increase in patient throughput, largely driven by leveraging Lyrebird's chronic disease management and care plan processes." name="Louise Forster" role="Business Manager" org="Lake Kawana General Practice" />
          </div>
        </div>
      </section>

      {/* ── SECURITY & COMPLIANCE ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>SECURITY & COMPLIANCE</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Safe, Compliant, <span style={{ color: "#f5b800" }}>Built for Healthcare</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 600, margin: "0 auto 52px" }}>
            We understand how sensitive clinical information is, and the responsibility that comes with protecting it. Every feature is designed with clinician and patient privacy front of mind.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            <SecurityPoint icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>} title="Bank-Level Encryption" desc="All consultations and notes are protected with AES-256 encryption and strict access controls — the same standard used by financial institutions." />
            <SecurityPoint icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>} title="Data Processing & Storage" desc="All patient data is processed and stored within AWS Frankfurt." />
            <SecurityPoint icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>} title="We Never Train AI on Your Data" desc="Notes, transcripts, and patient information are never sold, shared, or used to train external AI models. Your data stays yours." />
            <SecurityPoint icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>} title="Consent Timestamping" desc="Lyrebird prompts clinicians to obtain patient consent before recording and timestamps it automatically — providing medicolegal clarity and peace of mind." />
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }} id="pricing">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>PRICING</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 14 }}>
            Simple, Transparent <span style={{ color: "#f5b800" }}>Pricing</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
            All plans include a 14-day free trial — no credit card required to start.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 10, padding: 4 }}>
              {["monthly", "annual"].map(b => (
                <button key={b} onClick={() => setBilling(b)}
                  style={{ background: billing === b ? "#f5b800" : "transparent", color: billing === b ? "#000" : "#666", border: "none", fontWeight: 700, fontSize: 13, padding: "9px 22px", borderRadius: 7, cursor: "pointer", transition: "all 0.18s", display: "flex", alignItems: "center", gap: 8 }}>
                  {b === "monthly" ? "Monthly" : "Annual"}
                  {b === "annual" && <span style={{ background: billing === "annual" ? "#00000025" : "#f5b80015", color: billing === "annual" ? "#000" : "#f5b800", fontSize: 10, fontWeight: 800, padding: "2px 7px", borderRadius: 20 }}>SAVE 33%</span>}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
            {/* FREE */}
            <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column" }}>
              <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Free Plan</p>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Starter</h3>
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 18, minHeight: 44 }}>Access essential features. A taste tester of Lyrebird Health.</p>
              <div style={{ marginBottom: 20 }}><span style={{ color: "#fff", fontSize: "2rem", fontWeight: 800 }}>$0</span><span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>Free for everyone</span></div>
              <a href="https://lyrebirdhealth.com" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: "transparent", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "11px", borderRadius: 8, textDecoration: "none", marginBottom: 20 }}>Start now</a>
              <PricingDivider />
              <PricingFeatGroupTitle>What's included in Starter</PricingFeatGroupTitle>
              <PricingFeatRow type="limit">50 actions per month</PricingFeatRow>
              <PricingFeatRow type="limit">Upload documents to teach Lyrebird</PricingFeatRow>
              <PricingFeatRow type="limit">Access to community shared templates</PricingFeatRow>
              <PricingFeatRow type="limit">Unlimited macros</PricingFeatRow>
            </div>

            {/* PRO */}
            <div style={{ background: "#0f0f0f", border: "2px solid #f5b800", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#f5b800", color: "#000", fontSize: 11, fontWeight: 800, padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap" }}>MOST POPULAR</div>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Pro Plan</p>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Pro</h3>
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 18, minHeight: 44 }}>Unlock the most value. For clinics & GPs to automate care plans and assessments.</p>
              <div style={{ marginBottom: 20 }}><span style={{ color: "#f5b800", fontSize: "2rem", fontWeight: 800 }}>$50</span><span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>per user / year (billed annually)</span></div>
              <a href="https://lyrebirdhealth.com" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: "#f5b800", color: "#000", fontWeight: 800, fontSize: 14, padding: "12px", borderRadius: 8, textDecoration: "none", marginBottom: 20 }}>Try it for 14 days</a>
              <PricingDivider />
              <PricingFeatGroupTitle>All features in Starter, and:</PricingFeatGroupTitle>
              <PricingFeatRow type="yes">Unlimited actions</PricingFeatRow>
              <PricingFeatRow type="yes">Integrations with no added cost</PricingFeatRow>
              <PricingFeatRow type="yes">Priority support</PricingFeatRow>
            </div>

            {/* ENTERPRISE */}
            <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column" }}>
              <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Enterprise Plan</p>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Enterprise</h3>
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 18, minHeight: 44 }}>Empower your organisation. Large organisations needing custom deployment & SSO.</p>
              <div style={{ marginBottom: 20 }}><span style={{ color: "#fff", fontSize: "1.7rem", fontWeight: 800 }}>$ Custom</span><p style={{ color: "#555", fontSize: 12, marginTop: 4 }}>Flexible billing</p></div>
              <a href="https://lyrebirdhealth.com/au/pricing" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: "transparent", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "11px", borderRadius: 8, textDecoration: "none", marginBottom: 20 }}>Contact sales</a>
              <PricingDivider />
              <PricingFeatGroupTitle>All features in Pro, and:</PricingFeatGroupTitle>
              <PricingFeatRow type="yes">Tiered discounts</PricingFeatRow>
              <PricingFeatRow type="yes">Organisation sharing</PricingFeatRow>
              <PricingFeatRow type="yes">SSO as an add-on</PricingFeatRow>
              <PricingFeatRow type="yes">Personalised onboarding</PricingFeatRow>
              <PricingFeatRow type="yes">Dedicated account manager</PricingFeatRow>
            </div>
          </div>

          <div style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 12, padding: "24px 28px", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <p style={{ color: "#f5b800", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>💬 Talk to a TechBee Rep</p>
              <p style={{ color: "#888", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Discounts available for part-time clinicians, registrars, and group practices. Get in contact with us to discuss pricing options tailored to your organisation.</p>
            </div>
            <button onClick={() => goToContact(navigate)}
              style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "12px 24px", borderRadius: 8, border: "none", cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
              Get in Contact →
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <PLabel>FAQ</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 52 }}>
            Common <span style={{ color: "#f5b800" }}>Questions</span>
          </h2>
          <FAQItem q="Do I need to install any software to use Lyrebird?" a="No. Lyrebird is entirely web-based — no downloads or installations required. Create an account and start right in your browser immediately. It works across all major browsers, though Google Chrome is strongly recommended." />
          <FAQItem q="Is patient consent required?" a="Yes. You should obtain patient consent before recording a consultation. Lyrebird prompts you to do this at the start of every consult and timestamps consent automatically for medicolegal clarity." />
          <FAQItem q="What EMR systems does Lyrebird integrate with?" a="Lyrebird offers deep integration with leading EMR platforms including Oracle Cerner via FHIR API. For systems without native integration, a simple one-click copy-paste transfer is available." />
          <FAQItem q="Does Lyrebird work for telehealth consultations?" a="Yes. Lyrebird supports both phone and video telehealth consults, capturing both clinician and patient voices clearly, even when using a headset." />
          <FAQItem q="Can I customise the note format to match my style?" a="Yes, fully. Upload example letters and Lyrebird learns your preferred structure and language — applying it to future documents automatically." />
          <FAQItem q="Are there discounts for part-time clinicians, registrars, or group practices?" a="Yes. Contact our team to discuss your organisation's needs." />
          <FAQItem q="Is there a free trial?" a="Yes — Lyrebird offers a 14-day free trial so you can fully experience the product before committing. No credit card required to start." />
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <PLabel>GET STARTED</PLabel>
          {/* Lyrebird Health logo in CTA */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: "14px 28px" }}>
              <img src={LYREBIRD_LOGO_H} alt="Lyrebird Health" style={{ height: 36, width: "auto" }} />
            </div>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
            Focus on Patients,<br /><span style={{ color: "#f5b800" }}>Not Paperwork.</span>
          </h2>
          <p style={{ color: "#777", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Techbee brings Lyrebird Health to healthcare organisations across the UAE and GCC. Our team handles onboarding, EMR integration, and ongoing support — so your clinicians can start saving time from day one.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => goToContact(navigate)}
              style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 8, border: "none", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
              Request a Demo
            </button>
            <button onClick={() => { const el = document.getElementById("pricing"); if (el) el.scrollIntoView({ behavior: "smooth" }) }}
              style={{ background: "transparent", color: "#f5b800", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 8, border: "1px solid #f5b80060", cursor: "pointer" }}>
              View Pricing
            </button>
            <a href="tel:+971564116174" style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 8, textDecoration: "none", border: "1px solid #f5b80040" }}>
              Call +971 56 411 6174
            </a>
          </div>
          <p style={{ color: "#444", fontSize: 13, marginTop: 28 }}>
            📍 R-12, France Cluster, International City, Dubai &nbsp;·&nbsp; sales@techbee.ae
          </p>
        </div>
      </section>

      <Footer />
    </ProductPage>
  )
}
