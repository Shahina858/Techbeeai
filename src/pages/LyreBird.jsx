import ProductPage, { PLabel, Chip, StepCard, UseCaseCard, StatPill } from "../components/ProductPage"

const BG = "https://framerusercontent.com/images/iuqtZdxTFuhutGpJoq0zkLbFw.png"

// ── shared primitives ────────────────────────────────────────────────────────

function FeatureCard({ icon, title, desc }) {
  return (
    <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "26px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ background: "#f5b80012", border: "1px solid #f5b80030", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {icon}
      </div>
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

// ── main page ────────────────────────────────────────────────────────────────

export default function Lyrebird() {
  return (
    <ProductPage
      badge="LYREBIRD AI — MEDICAL AI SCRIBE"
      headline={<>Clinical Documentation.<br /><span style={{ color: "#f5b800" }}>Done in Seconds.</span></>}
      sub="Australia's most deeply integrated AI Scribe. Lyrebird AI listens to patient consultations, transcribes speech in real time, and generates structured clinical notes automatically — saving clinicians up to 3 hours every single day."
      cta="Request a Demo"
      bgImage={BG}
    >

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>HOW IT WORKS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            From Consultation to Note <span style={{ color: "#f5b800" }}>in Minutes</span>
          </h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <StepCard n="1" title="Listen" desc="Lyrebird AI passively listens to your patient consultation via microphone or telehealth platform — fully HIPAA, GDPR & APP compliant. No audio is stored; all sound is deleted once the consultation ends." />
            <StepCard n="2" title="Transcribe & Generate" desc="Real-time AI transcription captures every detail with medical-grade accuracy across 50+ languages and varied accents. A structured SOAP or custom clinical note is ready in under 20 seconds." />
            <StepCard n="3" title="Review & Transfer" desc="Review the note, make edits, and transfer directly to your EMR (Best Practice, Genie, Cerner) in one click — or copy and paste into any system." />
            <StepCard n="4" title="Learn Your Style" desc="Lyrebird learns from your edits and uploaded examples. The more you use it, the more it reflects your clinical voice — saving more time with every consult." />
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <StatPill value="80%" label="Reduction in Documentation Time" />
            <StatPill value="2–3h" label="Saved Per Clinician Per Day" />
            <StatPill value="88%" label="Clinicians Reporting Improved Note Quality" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
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
              "HIPAA, GDPR & APP compliant",
              "EHR / EMR integration (Best Practice, Genie, Cerner)",
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

          {/* Feature cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <FeatureCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>}
              title="Effortless Notes"
              desc="Lyrebird listens throughout your consult and produces complete, structured notes without you typing a single word. Ready for review in under 20 seconds."
            />
            <FeatureCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>}
              title="Smart Letters & Documents"
              desc="Generate referral letters, certificates, care plans, and patient updates in seconds. Upload your own examples and Lyrebird learns your preferred structure and tone."
            />
            <FeatureCard
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>}
              title="Complex Workflow Automation"
              desc="CCMPs, MHTPs, Centrelink, WorkCover, and NDIS PDFs all prepared and ready for review — not hours of retyping. Saves hours on Australia's most complex documentation workflows."
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
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────────────── */}
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
              desc="GPs see 20–30 patients a day. Lyrebird AI generates every note automatically — with less cognitive load, fewer loose ends after hours, and more time for eye contact with patients." />
            <UseCaseCard role="Specialists"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>}
              title="Drafts that reflect patient context and your clinical voice."
              desc="Cardiologists, oncologists, endocrinologists and neurologists get structured specialist notes with relevant medical codes — ready for review, not hours of retyping. Deployed across 21 specialties at Gold Coast Health." />
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
              desc="Deploy Lyrebird across multiple departments with centralised admin, compliance reporting, and EHR sync. Trusted by Gold Coast Health, NHS South West London, Qualitas, Healthia, and Ochre Health." />
          </div>
        </div>
      </section>

      {/* ── EMR INTEGRATIONS ──────────────────────────────────────────── */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>INTEGRATIONS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Works Inside <span style={{ color: "#f5b800" }}>Your EMR</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 620, margin: "0 auto 52px" }}>
            Deep integrations with leading EMRs and practice management platforms mean you finish notes, documents, and care plans without ever leaving your medical record system.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
            <div style={{ background: "#0f0f0f", border: "1px solid #f5b80030", borderRadius: 14, padding: "24px 20px" }}>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Deep EMR Integration</p>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 10px" }}>Work directly from your EMR</h4>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Integrates with Best Practice and Genie/Gentu. Finish notes, documents, and care plans inside your EMR — no copy-paste needed.</p>
            </div>
            <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "24px 20px" }}>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Complex Workflows</p>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 10px" }}>Complex workflows in seconds</h4>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>CCMPs, MHTPs, Centrelink, WorkCover, and NDIS PDFs all prepared and ready for review — not hours of retyping.</p>
            </div>
            <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, padding: "24px 20px" }}>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Patient Context</p>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 10px" }}>Patient history at your fingertips</h4>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Patient Summary formats medications, allergies, and history into one clear view — so you stop searching and start consulting.</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
            {["Best Practice", "Genie / Gentu", "Oracle Cerner", "FHIR API", "Epic", "Cubiko", "Telehealth Platforms", "REST API"].map(n => <IntegrationBadge key={n} name={n} />)}
          </div>
        </div>
      </section>

      {/* ── GOLD COAST CASE STUDY / RESEARCH ──────────────────────────── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CLINICAL RESEARCH</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Proven in Real <span style={{ color: "#f5b800" }}>Clinical Practice</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 640, margin: "0 auto 52px" }}>
            Because changes to clinical work matter, Lyrebird partners with clinicians and research teams to study real-world performance. The results speak for themselves.
          </p>

          {/* Case study callout */}
          <div style={{ background: "#0a0a0a", border: "1px solid #f5b80025", borderRadius: 16, padding: "32px 36px", marginBottom: 32, display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 320px" }}>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>Case Study — Gold Coast Health</p>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>100+ Clinicians. 21 Specialties.</h3>
              <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Gold Coast Health deployed Lyrebird across 21 specialties and 100+ clinicians. Clinicians reported they "can't imagine practicing without" it — with notes scoring higher on structured quality reviews (PDQI-9) than manually written notes.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, flex: "0 0 auto" }}>
              <ResearchStat value="80%" label="Reduction in post-consult documentation time" />
              <ResearchStat value="+88%" label="Clinicians reporting improved note quality" />
              <ResearchStat value="84%" label="Reported improved workflow efficiency" />
              <ResearchStat value="68%" label="Patients noticed increased clinician engagement" />
            </div>
          </div>

          {/* NHS callout */}
          <div style={{ background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 16, padding: "24px 32px", display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 6px" }}>Announcement</p>
              <h4 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: "0 0 6px" }}>Four South West London NHS Trusts Deploy Lyrebird to 20,000 Clinicians</h4>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>The UK's largest ambient AI implementation — confirming Lyrebird's position as a globally trusted clinical documentation platform.</p>
            </div>
            <span style={{ background: "#f5b80015", color: "#f5b800", fontWeight: 700, fontSize: 12, padding: "6px 14px", borderRadius: 6, border: "1px solid #f5b80030", flexShrink: 0 }}>20,000 Clinicians</span>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>WHAT CLINICIANS SAY</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Trusted by <span style={{ color: "#f5b800" }}>Thousands of Clinicians</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <TestimonialCard
              quote="It has shortened my note taking time by about 90%. In actual numbers, this translates to 40–60 minutes of time gained per 10-hour shift."
              name="Dr Dhruv Mori"
              role="Clinical Lead"
              org="Bendigo Hospital ED"
            />
            <TestimonialCard
              quote="The depth of information recorded with Lyrebird is more detailed than I would normally type during a consult or from memory later. Plus, I've been able to customise it to reflect my own structure, style, and technical language."
              name="Jessica Triay"
              role="Staff Specialist, Endocrinology"
              org="Gold Coast Health"
            />
            <TestimonialCard
              quote="Prior to using Lyrebird, I would spend an hour with a patient and another 1–2 hours on paperwork. Now it's just 15–20 minutes, saving me 2–3 hours a day. I can maintain eye contact with parents during deeper conversations."
              name="Angela Owens"
              role="Senior Medical Officer"
              org="Gold Coast Health"
            />
            <TestimonialCard
              quote="Lyrebird Health strikes the right balance between efficiency, security and patient-centred care. I highly recommend it to fellow practitioners."
              name="Dr Sean Stevens"
              role="Principal GP & Owner"
              org="Grove Medical"
            />
            <TestimonialCard
              quote="The results are so significant that we are planning to roll this out to all 32 of our doctors ASAP. This isn't just an efficiency tool; it's a critical investment in our entire operation."
              name="Dene Creegan"
              role="General Manager"
              org="7 Springs Medical Practice"
            />
            <TestimonialCard
              quote="In the last six months alone, our care plan process has become incredibly smoother. We have seen a significant increase in patient throughput, largely driven by Lyrebird's CDM and care plan processes."
              name="Louise Forster"
              role="Business Manager"
              org="Lake Kawana General Practice"
            />
          </div>
        </div>
      </section>

      {/* ── SECURITY & COMPLIANCE ─────────────────────────────────────── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>SECURITY & COMPLIANCE</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Safe, Compliant, <span style={{ color: "#f5b800" }}>Built for Healthcare</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 600, margin: "0 auto 52px" }}>
            We understand how sensitive clinical information is, and the responsibility that comes with protecting it. Every feature is designed with clinician and patient privacy front of mind.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28, marginBottom: 48 }}>
            <SecurityPoint
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
              title="Bank-Level Encryption"
              desc="All consultations and notes are protected with AES-256 encryption and strict access controls — the same standard used by financial institutions."
            />
            <SecurityPoint
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
              title="Data Stored Onshore in Australia"
              desc="All patient data is processed and stored within Australia, aligned with Australian Privacy Principles (APP). Not sent offshore."
            />
            <SecurityPoint
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
              title="We Never Train AI on Your Data"
              desc="Notes, transcripts, and patient information are never sold, shared, or used to train external AI models. Your data stays yours."
            />
            <SecurityPoint
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
              title="Consent Timestamping"
              desc="Lyrebird prompts clinicians to obtain patient consent before recording and timestamps it automatically — providing medicolegal clarity and peace of mind."
            />
          </div>

          {/* Compliance badges */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["HIPAA Compliant", "GDPR Compliant", "APP (Australian Privacy Principles)", "TGA Aligned", "CEP Certified", "SOC 2"].map(c => (
              <div key={c} style={{ background: "#0a0a0a", border: "1px solid #f5b80025", borderRadius: 8, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{ color: "#ddd", fontSize: 13, fontWeight: 500 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <PLabel>FAQ</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 52 }}>
            Common <span style={{ color: "#f5b800" }}>Questions</span>
          </h2>
          <FAQItem
            q="Do I need to install any software to use Lyrebird?"
            a="No. Lyrebird is entirely web-based — no downloads or installations required. Create an account and start right in your browser immediately. It works across all major browsers, though Google Chrome is strongly recommended."
          />
          <FAQItem
            q="Is patient consent required?"
            a="Yes. You should obtain patient consent before recording a consultation. Lyrebird prompts you to do this at the start of every consult and timestamps consent automatically for medicolegal clarity. A customisable patient privacy printout is also available for your clinic."
          />
          <FAQItem
            q="What EMR systems does Lyrebird integrate with?"
            a="Lyrebird offers deep integration with Best Practice and Genie/Gentu, allowing you to finish notes, documents, and care plans inside your EMR. It also works with Oracle Cerner via FHIR API. For systems without native integration, a simple one-click copy-paste transfer is available."
          />
          <FAQItem
            q="Does Lyrebird work for telehealth consultations?"
            a="Yes. Lyrebird supports both phone and video telehealth consults. For computer-based telehealth, Lyrebird can isolate audio directly from your video conferencing platform — capturing both clinician and patient voices clearly, even when using a headset."
          />
          <FAQItem
            q="Can I customise the note format to match my style?"
            a="Yes, fully. You can edit headings, structure, and content to match your preferred clinical style. Upload example letters and Lyrebird learns your preferred structure and language — applying it to future documents automatically."
          />
          <FAQItem
            q="Are there discounts for part-time clinicians, registrars, or group practices?"
            a="Yes. Discounts are available for part-time clinicians (working below 25 hours/week), registrars (with proof of registrar status), and practices with multiple clinicians. Discounts scale with practice size. Contact our team to discuss your organisation's needs."
          />
          <FAQItem
            q="Is there a free trial?"
            a="Yes — Lyrebird offers a 14-day free trial so you can fully experience the product before committing. No credit card required to start. You can also book a one-on-one onboarding session with the team."
          />
        </div>
      </section>

      {/* ── CTA FOOTER ────────────────────────────────────────────────── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <PLabel>GET STARTED</PLabel>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
            Focus on Patients,<br /><span style={{ color: "#f5b800" }}>Not Paperwork.</span>
          </h2>
          <p style={{ color: "#777", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Techbee brings Lyrebird AI to healthcare organisations across the UAE and GCC. Our team handles onboarding, EMR integration, and ongoing support — so your clinicians can start saving time from day one.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:sales@techbee.ae" style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 8, textDecoration: "none" }}>
              Request a Demo
            </a>
            <a href="tel:042434882" style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 8, textDecoration: "none", border: "1px solid #f5b80040" }}>
              Call +971 4 243 4882
            </a>
          </div>
          <p style={{ color: "#444", fontSize: 13, marginTop: 28 }}>
            📍 R-12, France Cluster, International City, Dubai &nbsp;·&nbsp; sales@techbee.ae
          </p>
        </div>
      </section>

    </ProductPage>
  )
}
