import { useNavigate } from "react-router-dom"
import ProductPage, { PLabel, Chip, StepCard, UseCaseCard, StatPill } from "../components/ProductPage"

const BG = "https://framerusercontent.com/images/iuqtZdxTFuhutGpJoq0zkLbFw.png"

// ── Media assets ──────────────────────────────────────────────────────────────
const IMG_INTSIG_HERO        = "/intsig_client_retention.png"   // image 1 — hero right side (light bg, INTSIG laptop)
const IMG_INTSIG_COLLAB      = "/intsig_collab.png"             // image 2 — About INTSIG section (dark bg laptop)

// ── Navigate to home contact section ─────────────────────────────────────────
const goToContact = (navigate) => {
  navigate("/")
  setTimeout(() => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, 300)
}

// ── Responsive styles ─────────────────────────────────────────────────────────
const idpStyles = `
  .idp-hero-layout { display: flex; align-items: center; gap: 56px; padding: 0 32px 80px; flex-wrap: wrap; }
  .idp-hero-text   { flex: 0 0 50%; max-width: 580px; }
  .idp-hero-img    { flex: 0 0 44%; }
  .intsig-callout  { display: flex; gap: 40px; flex-wrap: wrap; align-items: center; }
  .intsig-img-wrap { flex: 0 0 44%; }
  .intsig-text     { flex: 1 1 300px; }
  @media (max-width: 900px) {
    .idp-hero-layout { flex-direction: column; padding: 0 20px 60px; }
    .idp-hero-text   { flex: unset; max-width: 100%; }
    .idp-hero-img    { flex: unset; width: 100%; max-width: 540px; margin: 0 auto; }
    .intsig-callout  { flex-direction: column; }
    .intsig-img-wrap { flex: unset; width: 100%; max-width: 560px; margin: 0 auto; }
  }
`

// ── small shared primitives ───────────────────────────────────────────────────

function ComparisonRow({ label, manual, idp }) {
  return (
    <tr>
      <td style={{ padding: "14px 16px", color: "#aaa", fontWeight: 500, fontSize: 14, borderBottom: "1px solid #1a1a1a" }}>{label}</td>
      <td style={{ padding: "14px 16px", color: "#ff5c5c", fontSize: 14, borderBottom: "1px solid #1a1a1a", textAlign: "center" }}>{manual}</td>
      <td style={{ padding: "14px 16px", color: "#4ade80", fontSize: 14, borderBottom: "1px solid #1a1a1a", textAlign: "center", fontWeight: 600 }}>{idp}</td>
    </tr>
  )
}

function ProductCard({ name, icon, tag, desc, points }) {
  return (
    <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 14, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
        <div style={{ background: "#f5b80015", border: "1px solid #f5b80040", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {icon}
        </div>
        <div>
          <p style={{ color: "#f5b800", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>{tag}</p>
          <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: 0 }}>{name}</h3>
        </div>
      </div>
      <p style={{ color: "#888", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{desc}</p>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        {points.map(p => (
          <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#bbb", fontSize: 13 }}>
            <span style={{ color: "#f5b800", marginTop: 2, flexShrink: 0 }}>✦</span>{p}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TechPill({ label }) {
  return (
    <div style={{ background: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: 8, padding: "10px 18px", color: "#ccc", fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f5b800", flexShrink: 0 }} />
      {label}
    </div>
  )
}

function IntegrationLogo({ name }) {
  return (
    <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 10, padding: "14px 22px", color: "#aaa", fontSize: 13, fontWeight: 600, textAlign: "center", letterSpacing: "0.04em" }}>
      {name}
    </div>
  )
}

function CertBadge({ label }) {
  return (
    <div style={{ background: "#0a0a0a", border: "1px solid #f5b80030", borderRadius: 8, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      <span style={{ color: "#ddd", fontSize: 13, fontWeight: 500 }}>{label}</span>
    </div>
  )
}

function TestimonialCard({ quote, role, company }) {
  return (
    <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 14, padding: "28px 24px" }}>
      <p style={{ color: "#f5b800", fontSize: 22, lineHeight: 1, margin: "0 0 12px" }}>"</p>
      <p style={{ color: "#ccc", fontSize: 15, lineHeight: 1.7, margin: "0 0 20px" }}>{quote}</p>
      <div>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: 0 }}>{role}</p>
        <p style={{ color: "#666", fontSize: 13, margin: 0 }}>{company}</p>
      </div>
    </div>
  )
}

function FAQItem({ q, a }) {
  return (
    <div style={{ borderBottom: "1px solid #1c1c1c", padding: "22px 0" }}>
      <p style={{ color: "#fff", fontWeight: 600, fontSize: 16, margin: "0 0 10px" }}>{q}</p>
      <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{a}</p>
    </div>
  )
}

// ── main page ─────────────────────────────────────────────────────────────────

export default function IDP() {
  const navigate = useNavigate()
  return (
    <ProductPage
      badge="IDP — INTELLIGENT DOCUMENT PROCESSING"
      headline={<>Stop Processing Documents<br /><span style={{ color: "#f5b800" }}>Manually. Forever.</span></>}
      sub="Powered by INTSIG — the world-leading AI & Big Data company (SHSE: 688615) with 2.3B+ global users across 200+ countries. IDP reads, extracts, classifies, and routes data from any document with human-level accuracy."
      cta="Request a Demo"
      bgImage={BG}
      /* pass the hero image so ProductPage can render left-text / right-image */
      heroImage={IMG_INTSIG_HERO}
    >
      <style>{idpStyles}</style>

      {/* ══ HERO VISUAL (if ProductPage doesn't natively support heroImage,
           we render the split layout as the very first child section)        */}
      <section style={{ background: "#000", paddingTop: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="idp-hero-layout">

            {/* LEFT — key stats / trust signals */}
            <div className="idp-hero-text">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
                {[
                  { val: "2.3B+", label: "Global Users" },
                  { val: "200+", label: "Countries" },
                  { val: "99%+", label: "OCR Accuracy" },
                  { val: "80%", label: "Less Manual Work" },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center", background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 14, padding: "20px 24px", flex: "1 1 100px" }}>
                    <div style={{ color: "#f5b800", fontSize: "1.8rem", fontWeight: 800, lineHeight: 1 }}>{s.val}</div>
                    <div style={{ color: "#555", fontSize: 11, marginTop: 6, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <p style={{ color: "#888", fontSize: 14, lineHeight: 1.8, margin: "0 0 28px" }}>
                INTSIG — listed on Shanghai Stock Exchange (SHSE: 688615) — brings 20+ years of AI text intelligence to enterprise document automation. The same engine trusted by 2.3 billion users on consumer apps now powers your back-office workflows.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Finance", "Insurance", "Logistics", "Government", "Healthcare", "Banking"].map(tag => (
                  <span key={tag} style={{ background: "rgba(245,184,0,0.08)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "6px 16px", color: "#f5b800", fontSize: 12, fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* RIGHT — Image 1 (INTSIG hero laptop, light bg) — watermark cropped */}
            <div className="idp-hero-img">
              <div style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 0 80px rgba(245,184,0,0.08), 0 40px 80px rgba(0,0,0,0.6)",
                border: "1px solid rgba(245,184,0,0.12)",
                lineHeight: 0,
                position: "relative",
              }}>
                <img
                  src={IMG_INTSIG_HERO}
                  alt="INTSIG IDP — Retain All Your Client Information"
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                    /* scale slightly so the bottom-right sparkle watermark
                       falls outside the overflow:hidden container          */
                    transform: "scale(1.07)",
                    transformOrigin: "center center",
                  }}
                />
                {/* subtle gold gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(245,184,0,0.04) 0%, transparent 60%)",
                  pointerEvents: "none",
                }} />
              </div>
              <p style={{ textAlign: "center", color: "#333", fontSize: 11, marginTop: 12, letterSpacing: "0.06em" }}>
                INTSIG IDP · Client Data Intelligence · Document Automation
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>HOW IT WORKS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Documents In. <span style={{ color: "#f5b800" }}>Data Out. Instantly.</span>
          </h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <StepCard n="1" title="Ingest" desc="Upload documents via email, API, or direct integration. IDP handles PDFs, scans, images, Word docs, and more — powered by INTSIG's 99%+ accuracy OCR engine." />
            <StepCard n="2" title="Extract & Classify" desc="AI identifies document type, extracts key data fields using OCR + NLP + LLM, validates against rules, and flags anomalies automatically." />
            <StepCard n="3" title="Route & Integrate" desc="Processed data flows into your ERP, CRM, SAP, Oracle or workflow system — with full audit trail and human review queue." />
          </div>
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            <StatPill value="2.3B+" label="Global Users" />
            <StatPill value="200+" label="Countries" />
            <StatPill value="99%+" label="OCR Accuracy" />
            <StatPill value="80%" label="Reduction in Manual Processing" />
          </div>
        </div>
      </section>

      {/* ══ PRODUCT SUITE ═════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>PRODUCT SUITE</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Two Engines. <span style={{ color: "#f5b800" }}>One Platform.</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 600, margin: "0 auto 52px" }}>
            INTSIG's IDP platform is delivered as two powerful, complementary products — purpose-built for end-to-end document automation.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            <ProductCard
              name="DocFlow"
              tag="Document Workflow Automation"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>}
              desc="End-to-end intelligent document collection, parsing, classification, extraction and review. Provides efficient processing for enterprises across finance, logistics, insurance, customs clearance and credit review workflows."
              points={[
                "Handles PDFs, scans, images, DOC/DOCX, XLS/XLSX, TXT, OFD",
                "Efficient processing of documents up to 1,000 pages (tenders, prospectuses)",
                "Cross-page table recognition with merged cells and unstructured layouts",
                "Semantic paragraph breakdown with reading-order restoration",
                "Precise classification using few-shot configuration",
                "Human-in-the-loop review queue with confidence scoring",
              ]}
            />
            <ProductCard
              name="xParse"
              tag="AI Parsing & Data Extraction"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>}
              desc="Advanced AI-powered parsing engine that extracts structured data from semi-structured and unstructured documents. Combines OCR, NLP, and LLM intelligence to deliver schema-level extraction accuracy at enterprise scale."
              points={[
                "Titles, formulas, stamps, headers/footers and handwriting recognition",
                "Automatic cropping of multi-image single-page documents",
                "Accurate structured information extraction with field-level precision",
                "Flexible classification rule configuration and tuning",
                "REST API-first for seamless ERP/CRM/RPA integration",
                "Continuous learning — accuracy improves with every processed document",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CAPABILITIES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            End-to-End <span style={{ color: "#f5b800" }}>Document Automation</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {[
              "99%+ OCR accuracy across 50+ languages",
              "LLM & AGI-powered document understanding",
              "Smart Comprehension for semi-structured docs",
              "Automatic document classification",
              "Multi-format: PDF, Word, image, scan, handwriting",
              "ERP / CRM / SAP / Oracle integration",
              "Validation rules & exception handling",
              "Human-in-the-loop review queue",
              "13 Security Certifications (GDPR, SOC2)",
              "Cross-page table & formula recognition",
              "Multi-language receipts & invoices",
              "Continuous self-improving AI models",
              "Confidence scoring per extracted field",
              "Duplicate & fraud anomaly detection",
            ].map(f => <Chip key={f}>{f}</Chip>)}
          </div>
        </div>
      </section>

      {/* ══ USE CASES ═════════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>ENTERPRISE SOLUTIONS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Automating Documents <span style={{ color: "#f5b800" }}>Across Industries</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <UseCaseCard role="eKYC & Identity Verification"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>}
              title="Reduce onboarding to seconds."
              desc="Simplify KYC/AML compliance for regulated industries. Supports passports, national IDs, driver licenses, visas — extract DOB and key fields for age verification instantly." />
            <UseCaseCard role="Accounts Payable Automation"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>}
              title="Superior accuracy for invoices."
              desc="Dramatically reduces manual data entry errors. Handles complex tables and multi-column layouts. Deployed at international Financial Shared Services Centers — proven at scale." />
            <UseCaseCard role="Intelligent Contract Review"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>}
              title="AI-powered contract extraction."
              desc="Extracts parties, dates, obligations, clauses. Compares contracts for auditing across departments — reducing contract review time from hours to minutes." />
            <UseCaseCard role="Travel & Expense Management"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
              title="Optimise expense workflows."
              desc="Intelligent receipt capture via mobile camera scan. Automated bill collection and reimbursement. Multi-currency and multi-language receipt recognition." />
            <UseCaseCard role="Banking & Finance"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>}
              title="End-to-end banking solutions."
              desc="Corporate marketing, customer acquisition, risk management, compliance supervision, and document workflow digitization — covering operations, credit, risk control." />
            <UseCaseCard role="Logistics & Supply Chain"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
              title="Automated shipping documents."
              desc="Automated recognition of packing lists, shipping documents, supplier statements and contracts — accelerating supply chain documentation and clearance workflows." />
            <UseCaseCard role="Insurance Claims Processing"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
              title="Faster claims, fewer disputes."
              desc="Automate claims form ingestion, policy document extraction, and damage report classification. Reduce settlement turnaround from weeks to hours with AI-validated data." />
            <UseCaseCard role="Government & Public Sector"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
              title="Digitise citizen services."
              desc="Process permit applications, tax forms, customs declarations, and licensing documents at scale. Supports Arabic and multilingual government documents for the UAE and GCC markets." />
          </div>
        </div>
      </section>

      {/* ══ ROI COMPARISON ════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <PLabel>ROI IMPACT</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Manual Processing <span style={{ color: "#f5b800" }}>vs IDP</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, marginBottom: 48 }}>The numbers that justify the switch.</p>
          <div style={{ border: "1px solid #1e1e1e", borderRadius: 14, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#0f0f0f" }}>
                  <th style={{ padding: "16px", color: "#666", fontWeight: 600, fontSize: 13, textAlign: "left", letterSpacing: "0.06em", textTransform: "uppercase" }}>Metric</th>
                  <th style={{ padding: "16px", color: "#ff5c5c", fontWeight: 600, fontSize: 13, textAlign: "center", letterSpacing: "0.06em", textTransform: "uppercase" }}>Manual</th>
                  <th style={{ padding: "16px", color: "#4ade80", fontWeight: 600, fontSize: 13, textAlign: "center", letterSpacing: "0.06em", textTransform: "uppercase" }}>With IDP</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow label="Invoice processing time" manual="8–12 min / invoice" idp="< 30 seconds" />
                <ComparisonRow label="Cost per invoice" manual="$12–$30" idp="$3–$5" />
                <ComparisonRow label="Data entry error rate" manual="1–5%" idp="< 0.1%" />
                <ComparisonRow label="Processing capacity" manual="Limited by headcount" idp="Unlimited, 24/7" />
                <ComparisonRow label="Contract review time" manual="Hours per document" idp="Minutes per document" />
                <ComparisonRow label="Document formats supported" manual="Structured only" idp="Structured, semi-structured, handwritten" />
                <ComparisonRow label="Audit trail" manual="Manual, error-prone" idp="Automatic, complete" />
                <ComparisonRow label="Scalability" manual="Linear cost increase" idp="Near-zero marginal cost" />
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: "center", color: "#555", fontSize: 12, marginTop: 16 }}>Based on APQC benchmarking and Gartner research on intelligent document automation.</p>
        </div>
      </section>

      {/* ══ TECHNOLOGY STACK + ABOUT INTSIG (with Image 2) ═══════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>UNDER THE HOOD</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            World-Class AI <span style={{ color: "#f5b800" }}>Technology Stack</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 640, margin: "0 auto 52px" }}>
            INTSIG holds 200+ patents in OCR, ID recognition, document recognition, and AI — backed by 20+ years of text intelligence R&D.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 56 }}>
            {[
              "Proprietary OCR Engine (20+ years R&D)",
              "Large Language Models (LLM)",
              "Natural Language Processing (NLP)",
              "Computer Vision & Image Processing",
              "Handwriting Recognition AI",
              "Facial & Stamp Recognition",
              "Layout-Aware Document Parsing",
              "Confidence Scoring Engine",
              "Continuous Learning ML Models",
              "Multi-lingual NLP (50+ languages)",
              "AGI-powered Document Understanding",
              "Scene-based Intelligent Text Recognition",
            ].map(t => <TechPill key={t} label={t} />)}
          </div>

          {/* ── About INTSIG callout — Image 2 on LEFT, text on RIGHT ── */}
          <div className="intsig-callout" style={{
            background: "#0a0a0a",
            border: "1px solid rgba(245,184,0,0.12)",
            borderRadius: 20,
            padding: "0",
            overflow: "hidden",
          }}>
            {/* Image 2 — dark bg laptop, watermark cropped */}
            <div className="intsig-img-wrap" style={{ lineHeight: 0, flexShrink: 0 }}>
              <div style={{ overflow: "hidden", lineHeight: 0 }}>
                <img
                  src={IMG_INTSIG_COLLAB}
                  alt="INTSIG — Long-term Client Collaboration Platform"
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                    /* scale to push the bottom-right sparkle watermark
                       outside the overflow:hidden container             */
                    transform: "scale(1.07)",
                    transformOrigin: "center center",
                    borderRadius: "20px 0 0 20px",
                  }}
                />
              </div>
            </div>

            {/* Text content */}
            <div className="intsig-text" style={{ padding: "40px 40px" }}>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 10px" }}>About INTSIG</p>
              <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: "0 0 16px", lineHeight: 1.2 }}>The Company Behind the Engine</h3>
              <p style={{ color: "#888", fontSize: 14, lineHeight: 1.8, margin: "0 0 28px" }}>
                Founded in 2006 and publicly listed on the Shanghai Stock Exchange (SHSE: 688615), INTSIG is the creator of CamScanner and CamCard — two of the world's most downloaded productivity apps with a combined 2.3 billion users across 200+ countries. Their enterprise-grade text intelligence powers DocFlow and xParse, bringing the same AI that runs on consumer devices into the heart of enterprise document operations.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[["2006", "Founded"], ["200+", "Patents"], ["2.3B+", "Users"], ["SHSE: 688615", "Listed"]].map(([v, l]) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ color: "#f5b800", fontWeight: 800, fontSize: 20, minWidth: 110 }}>{v}</span>
                    <span style={{ color: "#555", fontSize: 13 }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTEGRATIONS ══════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>INTEGRATIONS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Plugs Into <span style={{ color: "#f5b800" }}>Your Existing Stack</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 600, margin: "0 auto 52px" }}>
            Pre-built connectors and REST APIs mean IDP goes live in days — not months. No rip-and-replace required.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12, marginBottom: 40 }}>
            {["SAP", "Oracle", "Microsoft Dynamics 365", "NetSuite", "QuickBooks", "Xero", "Salesforce", "SharePoint", "ServiceNow", "Workday", "SAP IRPA", "RPA Platforms", "REST API", "SFTP / Batch"].map(n => <IntegrationLogo key={n} name={n} />)}
          </div>
          <p style={{ textAlign: "center", color: "#555", fontSize: 13 }}>
            Custom integration services available for any enterprise system. Contact our team to discuss your environment.
          </p>
        </div>
      </section>

      {/* ══ SECURITY & COMPLIANCE ═════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>SECURITY & COMPLIANCE</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
            Enterprise-Grade <span style={{ color: "#f5b800" }}>Data Protection</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 600, margin: "0 auto 52px" }}>
            INTSIG holds 13 security certifications. Your documents and data are protected at every stage of the processing pipeline.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 48 }}>
            {["GDPR Compliant", "SOC 2 Type II", "ISO 27001", "ISO 9001", "CCPA", "Data Residency Options", "End-to-End Encryption", "Role-Based Access Control", "Full Audit Trail", "On-Premise Deployment Available", "Private Cloud Option", "Zero Data Retention Mode"].map(c => <CertBadge key={c} label={c} />)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: "🔒", title: "Data Stays Yours", desc: "Documents are never used for model training. Strict data isolation between tenants — your data is never shared." },
              { icon: "🏢", title: "On-Premise Option", desc: "Deploy fully within your own infrastructure for complete control over data residency and compliance requirements." },
              { icon: "📋", title: "Complete Audit Trail", desc: "Every document, extraction, and human review action is logged with timestamps, users, and version history." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>{title}</h4>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CUSTOMER SUCCESS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Trusted by <span style={{ color: "#f5b800" }}>Enterprise Teams Globally</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <TestimonialCard
              quote="IDP reduced our invoice processing time from 10 minutes to under 30 seconds per document. Our AP team now focuses on strategy, not data entry."
              role="VP of Finance Operations"
              company="International Financial Shared Services Center"
            />
            <TestimonialCard
              quote="The accuracy on multi-language invoices is remarkable. We process documents in 12 languages and IDP handles them all without breaking a sweat."
              role="Head of Shared Services"
              company="Global Integrated Circuit Manufacturer"
            />
            <TestimonialCard
              quote="Onboarding time for KYC dropped by 85%. Our compliance team can now handle 5x the volume with the same headcount."
              role="Chief Compliance Officer"
              company="Regional Bank, Middle East"
            />
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <PLabel>FAQ</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 52 }}>
            Common <span style={{ color: "#f5b800" }}>Questions</span>
          </h2>
          <FAQItem
            q="How long does implementation take?"
            a="Most enterprises go live within 2–4 weeks. Pre-built integrations for SAP, Oracle, and major ERPs reduce setup time significantly. Our Techbee team handles end-to-end deployment, configuration, and training in the UAE and GCC region."
          />
          <FAQItem
            q="What document formats does IDP support?"
            a="IDP supports PDF, JPEG, JPG, PNG, TIFF, DOC, DOCX, XLS, XLSX, OFD, TXT, and email attachments including multi-page scans. It handles printed text, handwriting, stamps, checkboxes, tables, and poor-quality scans."
          />
          <FAQItem
            q="Can IDP handle Arabic and other RTL languages?"
            a="Yes. INTSIG's OCR engine supports 50+ languages including Arabic, with the same 99%+ accuracy as Latin-script languages — critical for UAE and GCC government and enterprise use cases."
          />
          <FAQItem
            q="Is my data secure? Who can see my documents?"
            a="Documents are processed in isolated environments and are never used for model training. INTSIG holds 13 security certifications including GDPR and SOC2. On-premise and private cloud deployments are also available for sensitive industries."
          />
          <FAQItem
            q="What happens when the AI is uncertain about an extraction?"
            a="IDP assigns a confidence score to each extracted field. Low-confidence fields are automatically routed to a human-in-the-loop review queue where an operator can verify or correct the data — ensuring accuracy even in edge cases."
          />
          <FAQItem
            q="Does it integrate with our existing ERP / CRM?"
            a="Yes. IDP ships with pre-built connectors for SAP, Oracle, NetSuite, Dynamics 365, QuickBooks, Xero, Salesforce, and SharePoint. A REST API is also available for custom integrations with any enterprise system."
          />
        </div>
      </section>

      {/* ══ CTA FOOTER ════════════════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <PLabel>GET STARTED</PLabel>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
            Ready to Eliminate<br /><span style={{ color: "#f5b800" }}>Manual Document Work?</span>
          </h2>
          <p style={{ color: "#777", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Techbee is the authorised INTSIG IDP partner in the UAE and wider GCC. Our team handles scoping, deployment, integration, and ongoing support — so you can focus on results.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => goToContact(navigate)}
              style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 8, border: "none", cursor: "pointer", letterSpacing: "0.02em", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
            >
              Request a Demo
            </button>
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
