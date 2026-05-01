import ProductPage, { PLabel, Chip, StepCard, UseCaseCard, StatPill } from "../components/ProductPage"

const BG = "https://framerusercontent.com/images/iuqtZdxTFuhutGpJoq0zkLbFw.png"

export default function Lyrebird() {
  return (
    <ProductPage
      badge="LYREBIRD AI"
      headline={<>Clinical Documentation.<br /><span style={{ color: "#f5b800" }}>Done in Seconds.</span></>}
      sub="Lyrebird AI listens to patient consultations, transcribes speech in real time, and generates structured clinical notes automatically — saving clinicians up to 3 hours every single day."
      cta="Request a Demo"
      bgImage={BG}
    >

      {/* HOW IT WORKS */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>HOW IT WORKS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            From Consultation to Note <span style={{ color: "#f5b800" }}>in Minutes</span>
          </h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <StepCard n="1" title="Listen" desc="Lyrebird AI passively listens to your patient consultation via microphone or telehealth platform — fully HIPAA & GDPR compliant." />
            <StepCard n="2" title="Transcribe" desc="Real-time AI transcription captures every detail of the conversation with medical-grade accuracy in 50+ languages and handles varied accents." />
            <StepCard n="3" title="Generate Note" desc="A structured clinical note — SOAP or preferred format — is generated and ready for review in minutes." />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CAPABILITIES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            Built for <span style={{ color: "#f5b800" }}>Healthcare Professionals</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["Real-time clinical transcription", "SOAP & custom note format support", "HIPAA, GDPR, APP compliant", "EHR / EMR integration (Epic, Cerner, Best Practice)", "50+ language support", "Medical terminology recognition", "Documents & letters generation", "Telehealth platform compatible", "AES-256 bank-level encryption"].map(f => <Chip key={f}>{f}</Chip>)}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <StatPill value="80%" label="Reduction in Documentation Time" />
            <StatPill value="2-3h" label="Saved Per Clinician Per Day" />
            <StatPill value="88%" label="Improved Note Quality" />
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>USE CASES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Empowering Clinicians <span style={{ color: "#f5b800" }}>Across Specialties</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <UseCaseCard role="General Practice"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
              title="More accurate notes across repeat visits."
              desc="GPs see 20–30 patients a day. Lyrebird AI generates every note automatically with less cognitive load and fewer loose ends after hours." />
            <UseCaseCard role="Specialists"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>}
              title="Drafts that reflect patient context and your clinical voice."
              desc="Cardiologists, oncologists, and neurologists get structured specialist notes with relevant medical codes — ready for review, not hours of retyping." />
            <UseCaseCard role="Telehealth"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
              title="Full documentation for virtual consultations."
              desc="Lyrebird AI integrates directly with telehealth platforms — capturing and documenting every virtual encounter automatically." />
            <UseCaseCard role="Clinics & Enterprise"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>}
              title="Enterprise deployment across departments."
              desc="Deploy Lyrebird AI across multiple departments with centralized admin, compliance reporting, and EHR sync — trusted by enterprise healthcare organisations." />
          </div>
        </div>
      </section>

    </ProductPage>
  )
}
