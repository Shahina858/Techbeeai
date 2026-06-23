import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ProductPage, { PLabel, Chip, StepCard, UseCaseCard, StatPill } from "../components/ProductPage"
import Footer from "../components/Footer"

const BG = "https://framerusercontent.com/images/iuqtZdxTFuhutGpJoq0zkLbFw.png"

const IMG_INTSIG_HERO   = "/intsig_client_retention.png"
const IMG_INTSIG_COLLAB = "/intsig_collab.png"

// ── IDP demo video — place this file in your public/ folder ──────────────────
const IDP_DEMO_VIDEO = "/home_video.mp4"

function SEOMeta() {
  useEffect(() => {
    document.title = "IDP — Intelligent Document Processing | INTSIG AI | TechBee UAE"
    const setMeta = (name, content, prop = false) => {
      const attr  = prop ? "property" : "name"
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.setAttribute("content", content)
    }
    setMeta("description", "TechBee is the authorised INTSIG IDP partner in the UAE & GCC. Intelligent Document Processing powered by AI — 99%+ OCR accuracy, 50+ languages, SAP/Oracle integration. Automate invoices, KYC, contracts, and more.")
    setMeta("keywords", "intelligent document processing UAE, IDP software Dubai, INTSIG DocFlow, document automation GCC, OCR AI invoice processing, KYC automation UAE, accounts payable automation, contract extraction AI, document classification AI, CamScanner enterprise, Arabic OCR, SAP document integration, Oracle IDP connector, NLP document extraction, AI document processing Middle East, paperless office UAE, digital transformation document, TechBee INTSIG, RPA document automation, xParse AI parsing")
    setMeta("robots", "index, follow")
    setMeta("author", "TechBee IT & Designs LLC")
    setMeta("language", "English")
    setMeta("geo.region", "AE-DU")
    setMeta("geo.placename", "Dubai, UAE")
    setMeta("og:type",        "website",                                      true)
    setMeta("og:title",       "IDP — Intelligent Document Processing | TechBee UAE", true)
    setMeta("og:description", "AI-powered document automation for UAE & GCC enterprises. 99%+ OCR accuracy, 50+ languages, SAP/Oracle/Salesforce integration. Powered by INTSIG.", true)
    setMeta("og:url",         "https://www.techbee.ae/products/idp",          true)
    setMeta("og:image",       "https://www.techbee.ae/intsig_client_retention.png", true)
    setMeta("og:site_name",   "TechBee IT & Designs LLC",                     true)
    setMeta("og:locale",      "en_AE",                                        true)
    setMeta("twitter:card",        "summary_large_image")
    setMeta("twitter:title",       "IDP — Intelligent Document Processing | TechBee UAE")
    setMeta("twitter:description", "Stop processing documents manually. INTSIG IDP automates extraction, classification, and routing — 99%+ accuracy, 80% less manual work.")
    setMeta("twitter:image",       "https://www.techbee.ae/intsig_client_retention.png")
    let canonical = document.querySelector("link[rel='canonical']")
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical) }
    canonical.href = "https://www.techbee.ae/products/idp"
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "SoftwareApplication", "name": "INTSIG IDP — Intelligent Document Processing", "applicationCategory": "BusinessApplication", "operatingSystem": "Web, Cloud, On-Premise", "description": "AI-powered intelligent document processing platform with 99%+ OCR accuracy across 50+ languages. Automates invoices, KYC, contracts, and enterprise document workflows.", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "TechBee IT & Designs LLC" } }, "featureList": ["OCR AI", "Document Classification", "Invoice Automation", "KYC Processing", "SAP Integration", "Arabic Language Support"] },
        { "@type": "LocalBusiness", "name": "TechBee IT & Designs LLC", "description": "Authorised INTSIG IDP partner for UAE and GCC. AI document processing, intelligent automation, and enterprise software solutions.", "url": "https://www.techbee.ae", "telephone": "+97142434882", "email": "sales@techbee.ae", "address": { "@type": "PostalAddress", "streetAddress": "R-12, France Cluster, International City", "addressLocality": "Dubai", "addressCountry": "AE" }, "areaServed": ["AE", "SA", "QA", "KW", "BH", "OM"], "sameAs": ["https://www.techbee.ae"] },
        { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What is Intelligent Document Processing?", "acceptedAnswer": { "@type": "Answer", "text": "IDP uses AI, OCR, and NLP to automatically read, extract, classify, and route data from any document type — replacing manual data entry with 99%+ accuracy." } }, { "@type": "Question", "name": "Does INTSIG IDP support Arabic documents?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. INTSIG's OCR engine supports 50+ languages including Arabic with 99%+ accuracy — essential for UAE and GCC government and enterprise document workflows." } }, { "@type": "Question", "name": "Which ERP systems does IDP integrate with?", "acceptedAnswer": { "@type": "Answer", "text": "IDP integrates with SAP, Oracle, Microsoft Dynamics 365, NetSuite, QuickBooks, Xero, Salesforce, SharePoint, and any system via REST API." } }] },
      ],
    }
    let scriptEl = document.querySelector("script[data-idp-schema]")
    if (!scriptEl) { scriptEl = document.createElement("script"); scriptEl.type = "application/ld+json"; scriptEl.setAttribute("data-idp-schema", "1"); document.head.appendChild(scriptEl) }
    scriptEl.textContent = JSON.stringify(schema)
    return () => { document.title = "TechBee IT & Designs LLC" }
  }, [])
  return null
}

const goToContact = (navigate) => {
  navigate("/")
  setTimeout(() => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, 300)
}

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
        <div style={{ background: "#f5b80015", border: "1px solid #f5b80040", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
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
    <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 10, padding: "14px 22px", color: "#aaa", fontSize: 13, fontWeight: 600, textAlign: "center", letterSpacing: "0.04em" }}>{name}</div>
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

function PCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

const IDP_HERO_STATS = [
  { n: "99%+", l: "OCR accuracy" },
  { n: "80%",  l: "less manual work" },
  { n: "50+",  l: "languages" },
]

const DOCFLOW_BASE_FEATURES = [
  "Create & configure workspaces",
  "Document parsing & classification",
  "File splitting & segmentation",
  "Information extraction",
  "Export results & Call API",
  "Image watermark removal",
  "Image quality enhancement",
  "24 mandays online support/year",
  "2 mandays remote implementation",
]

export default function IDP() {
  const navigate = useNavigate()
  const [deployTab, setDeployTab] = useState("onprem")

  return (
    <>
      <SEOMeta />

      <ProductPage
        badge="IDP — INTELLIGENT DOCUMENT PROCESSING"
        headline={<>Stop Processing Documents<br /><span style={{ color: "#f5b800" }}>Manually. Forever.</span></>}
        sub="Powered by INTSIG — the world-leading AI & Big Data company (SHSE: 688615) with 2.3B+ global users across 200+ countries. IDP reads, extracts, classifies, and routes data from any document with human-level accuracy."
        cta="Request a Demo"
        bgImage={BG}
        heroImg={IMG_INTSIG_HERO}
        heroStats={IDP_HERO_STATS}
        demoVideoSrc={IDP_DEMO_VIDEO}
        pricingCta={() => {
          const el = document.getElementById("pricing")
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }}
      >

        {/* ══ ABOUT INTSIG ══════════════════════════════════════════════════════ */}
        <section style={{ background: "#000", borderTop: "1px solid #111", borderBottom: "1px solid #111", padding: "32px 60px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <p style={{ color: "#555", fontSize: 13, margin: 0 }}>Authorised INTSIG IDP Partner · UAE & GCC</p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center" }}>
              {[{ val: "2.3B+", label: "Global Users" }, { val: "200+", label: "Countries" }, { val: "200+", label: "Patents" }, { val: "SHSE: 688615", label: "Listed" }].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ color: "#f5b800", fontSize: 18, fontWeight: 800, lineHeight: 1 }}>{s.val}</div>
                  <div style={{ color: "#444", fontSize: 11, marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Finance", "Insurance", "Logistics", "Government", "Healthcare", "Banking"].map(tag => (
                <span key={tag} style={{ background: "rgba(245,184,0,0.08)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "4px 12px", color: "#f5b800", fontSize: 11, fontWeight: 600 }}>{tag}</span>
              ))}
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
              <ProductCard name="DocFlow" tag="Document Workflow Automation"
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>}
                desc="End-to-end intelligent document collection, parsing, classification, extraction and review. Provides efficient processing for enterprises across finance, logistics, insurance, customs clearance and credit review workflows."
                points={["Handles PDFs, scans, images, DOC/DOCX, XLS/XLSX, TXT, OFD","Efficient processing of documents up to 1,000 pages (tenders, prospectuses)","Cross-page table recognition with merged cells and unstructured layouts","Semantic paragraph breakdown with reading-order restoration","Precise classification using few-shot configuration","Human-in-the-loop review queue with confidence scoring"]}
              />
              <ProductCard name="xParse" tag="AI Parsing & Data Extraction"
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>}
                desc="xParse is an AI-powered accelerator to create application with general large language model(LLM), it converts different format files into Mackdown or JSON which empowers LLM to be able to recognize and comprehend information from documents and images, it supports to detecte the page, section, column, paragraph and chunk of a document automatically, these elements will be helpful for LLM to do pre-train or fine-tune, and play an import role to raise the peformance of RAG and Agent."
                points={["Titles, formulas, stamps, headers/footers and handwriting recognition","Automatic cropping of multi-image single-page documents","Accurate structured information extraction with field-level precision","Flexible classification rule configuration and tuning","REST API-first for seamless ERP/CRM/RPA integration","Continuous learning — accuracy improves with every processed document"]}
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
              {["99%+ OCR accuracy across 50+ languages","LLM & AGI-powered document understanding","Smart Comprehension for semi-structured docs","Automatic document classification","Multi-format: PDF, Word, image, scan, handwriting","ERP / CRM / SAP / Oracle integration","Validation rules & exception handling","Human-in-the-loop review queue","13 Security Certifications (GDPR, SOC2)","Cross-page table & formula recognition","Multi-language receipts & invoices","Continuous self-improving AI models","Confidence scoring per extracted field","Duplicate & fraud anomaly detection"].map(f => <Chip key={f}>{f}</Chip>)}
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
              <UseCaseCard role="eKYC & Identity Verification" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>} title="Reduce onboarding to seconds." desc="Simplify KYC/AML compliance for regulated industries. Supports passports, national IDs, driver licenses, visas — extract DOB and key fields for age verification instantly." />
              <UseCaseCard role="Accounts Payable Automation" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>} title="Superior accuracy for invoices." desc="Dramatically reduces manual data entry errors. Handles complex tables and multi-column layouts. Deployed at international Financial Shared Services Centers — proven at scale." />
              <UseCaseCard role="Intelligent Contract Review" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>} title="AI-powered contract extraction." desc="Extracts parties, dates, obligations, clauses. Compares contracts for auditing across departments — reducing contract review time from hours to minutes." />
              <UseCaseCard role="Travel & Expense Management" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>} title="Optimise expense workflows." desc="Intelligent receipt capture via mobile camera scan. Automated bill collection and reimbursement. Multi-currency and multi-language receipt recognition." />
              <UseCaseCard role="Banking & Finance" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>} title="End-to-end banking solutions." desc="Corporate marketing, customer acquisition, risk management, compliance supervision, and document workflow digitization — covering operations, credit, risk control." />
              <UseCaseCard role="Logistics & Supply Chain" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>} title="Automated shipping documents." desc="Automated recognition of packing lists, shipping documents, supplier statements and contracts — accelerating supply chain documentation and clearance workflows." />
              <UseCaseCard role="Insurance Claims Processing" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>} title="Faster claims, fewer disputes." desc="Automate claims form ingestion, policy document extraction, and damage report classification. Reduce settlement turnaround from weeks to hours with AI-validated data." />
              <UseCaseCard role="Government & Public Sector" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>} title="Digitise citizen services." desc="Process permit applications, tax forms, customs declarations, and licensing documents at scale. Supports Arabic and multilingual government documents for the UAE and GCC markets." />
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
                  <ComparisonRow label="Invoice processing time"    manual="8–12 min / invoice"           idp="< 30 seconds" />
                  <ComparisonRow label="Cost per invoice"           manual="$12–$30"                      idp="$3–$5" />
                  <ComparisonRow label="Data entry error rate"      manual="1–5%"                         idp="< 0.1%" />
                  <ComparisonRow label="Processing capacity"        manual="Limited by headcount"         idp="Unlimited, 24/7" />
                  <ComparisonRow label="Contract review time"       manual="Hours per document"           idp="Minutes per document" />
                  <ComparisonRow label="Document formats supported" manual="Structured only"              idp="Structured, semi-structured, handwritten" />
                  <ComparisonRow label="Audit trail"                manual="Manual, error-prone"          idp="Automatic, complete" />
                  <ComparisonRow label="Scalability"                manual="Linear cost increase"         idp="Near-zero marginal cost" />
                </tbody>
              </table>
            </div>
            <p style={{ textAlign: "center", color: "#555", fontSize: 12, marginTop: 16 }}>Based on APQC benchmarking and Gartner research on intelligent document automation.</p>
          </div>
        </section>

        {/* ══ TECH STACK + ABOUT INTSIG ═════════════════════════════════════════ */}
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
              {["Proprietary OCR Engine (20+ years R&D)","Large Language Models (LLM)","Natural Language Processing (NLP)","Computer Vision & Image Processing","Handwriting Recognition AI","Facial & Stamp Recognition","Layout-Aware Document Parsing","Confidence Scoring Engine","Continuous Learning ML Models","Multi-lingual NLP (50+ languages)","AGI-powered Document Understanding","Scene-based Intelligent Text Recognition"].map(t => <TechPill key={t} label={t} />)}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 0, background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.12)", borderRadius: 20, overflow: "hidden" }}>
              <div style={{ flex: "0 0 44%", minWidth: 280, lineHeight: 0 }}>
                <img src={IMG_INTSIG_COLLAB} alt="INTSIG AI" style={{ width: "100%", display: "block", objectFit: "cover", minHeight: 320 }} />
              </div>
              <div style={{ flex: "1 1 300px", padding: "40px 40px" }}>
                <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 10px" }}>About INTSIG</p>
                <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: "0 0 16px", lineHeight: 1.2 }}>The Company Behind the Engine</h3>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.8, margin: "0 0 28px" }}>Founded in 2006 and publicly listed on the Shanghai Stock Exchange (SHSE: 688615), INTSIG is the creator of CamScanner and CamCard — two of the world's most downloaded productivity apps with a combined 2.3 billion users across 200+ countries. Their enterprise-grade text intelligence powers DocFlow and xParse, bringing the same AI that runs on consumer devices into the heart of enterprise document operations.</p>
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
            <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 600, margin: "0 auto 52px" }}>Pre-built connectors and REST APIs mean IDP goes live in days — not months. No rip-and-replace required.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12, marginBottom: 40 }}>
              {["SAP", "Oracle", "Microsoft Dynamics 365", "NetSuite", "QuickBooks", "Xero", "Salesforce", "SharePoint", "ServiceNow", "Workday", "SAP IRPA", "RPA Platforms", "REST API", "SFTP / Batch"].map(n => <IntegrationLogo key={n} name={n} />)}
            </div>
            <p style={{ textAlign: "center", color: "#555", fontSize: 13 }}>Custom integration services available for any enterprise system. Contact our team to discuss your environment.</p>
          </div>
        </section>

        {/* ══ SECURITY & COMPLIANCE ═════════════════════════════════════════════ */}
        <section className="py-[96px] px-6" style={{ background: "#000" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <PLabel>SECURITY & COMPLIANCE</PLabel>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
              Enterprise-Grade <span style={{ color: "#f5b800" }}>Data Protection</span>
            </h2>
            <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 600, margin: "0 auto 52px" }}>INTSIG holds 13 security certifications. Your documents and data are protected at every stage of the processing pipeline.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 48 }}>
              {["GDPR Compliant", "SOC 2 Type II", "ISO 27001", "ISO 9001", "CCPA", "Data Residency Options", "End-to-End Encryption", "Role-Based Access Control", "Full Audit Trail", "On-Premise Deployment Available", "Private Cloud Option", "Zero Data Retention Mode"].map(c => <CertBadge key={c} label={c} />)}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[{ icon: "🔒", title: "Data Stays Yours", desc: "Documents are never used for model training. Strict data isolation between tenants — your data is never shared." }, { icon: "🏢", title: "On-Premise Option", desc: "Deploy fully within your own infrastructure for complete control over data residency and compliance requirements." }, { icon: "📋", title: "Complete Audit Trail", desc: "Every document, extraction, and human review action is logged with timestamps, users, and version history." }].map(({ icon, title, desc }) => (
                <div key={title} style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                  <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>{title}</h4>
                  <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* ══ PRICING ═══════════════════════════════════════════════════════════ */}
        <section id="pricing" className="py-[96px] px-6" style={{ background: "#000" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <PLabel>PRICING</PLabel>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 14 }}>
              Flexible Deployment, <span style={{ color: "#f5b800" }}>Transparent Pricing</span>
            </h2>
            <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7 }}>
              DocFlow is available as a Private Cloud / On-Premise annual subscription or as a pay-per-page SaaS model. All prices in USD, excluding tax.
            </p>

            {/* Deployment toggle */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 0, background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 10, padding: 4 }}>
                {[
                  { key: "onprem", label: "Private Cloud / On-Premise" },
                  { key: "saas",   label: "SaaS (Pay per Page)" },
                ].map(tab => (
                  <button key={tab.key} onClick={() => setDeployTab(tab.key)}
                    style={{
                      background: deployTab === tab.key ? "#f5b800" : "transparent",
                      color: deployTab === tab.key ? "#000" : "#666",
                      border: "none", fontWeight: 700, fontSize: 13,
                      padding: "10px 24px", borderRadius: 7, cursor: "pointer",
                      transition: "all 0.18s",
                    }}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {deployTab === "onprem" && (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 860, margin: "0 auto 32px" }}>
                  <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 16, padding: "36px 30px", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                      <div style={{ background: "#f5b80015", border: "1px solid #f5b80030", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      </div>
                      <div>
                        <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>DocFlow</p>
                        <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, margin: 0 }}>Essentials</h3>
                      </div>
                    </div>
                    <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>Full document workflow automation — parsing, extraction, classification, and API access.</p>
                    <div style={{ marginBottom: 6 }}>
                      <span style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 900, lineHeight: 1 }}>$101,600</span>
                    </div>
                    <p style={{ color: "#555", fontSize: 12, marginBottom: 24 }}>Per year · 1 Production License</p>
                    <button onClick={() => goToContact(navigate)}
                      style={{ display: "block", textAlign: "center", background: "transparent", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, cursor: "pointer", marginBottom: 24, transition: "all 0.18s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff" }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#ccc" }}>
                      Request a Quote
                    </button>
                    <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", marginBottom: 18 }} />
                    <p style={{ color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Includes</p>
                    {DOCFLOW_BASE_FEATURES.map(f => (
                      <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 9 }}>
                        <PCheck />
                        <span style={{ color: "#999", fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 16, background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 8, padding: "12px 14px" }}>
                      <p style={{ color: "#555", fontSize: 12, lineHeight: 1.65, margin: 0 }}>Additional implementation days: <span style={{ color: "#888" }}>$640/day</span>. Travel expenses not included.</p>
                    </div>
                  </div>

                  <div style={{ background: "#0f0f0f", border: "2px solid #f5b800", borderRadius: 16, padding: "36px 30px", display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 0 60px rgba(245,184,0,0.07)" }}>
                    <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#f5b800", color: "#000", fontSize: 11, fontWeight: 800, padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>RECOMMENDED</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                      <div style={{ background: "#f5b80015", border: "1px solid #f5b80040", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                      </div>
                      <div>
                        <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>DocFlow</p>
                        <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, margin: 0 }}>Essentials + Smart Review</h3>
                      </div>
                    </div>
                    <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>Full document automation with Intelligent Audit — human-in-the-loop review built in.</p>
                    <div style={{ marginBottom: 6 }}>
                      <span style={{ color: "#f5b800", fontSize: "2.2rem", fontWeight: 900, lineHeight: 1 }}>$118,400</span>
                    </div>
                    <p style={{ color: "#555", fontSize: 12, marginBottom: 24 }}>Per year · 1 Production License</p>
                    <button onClick={() => goToContact(navigate)}
                      style={{ display: "block", textAlign: "center", background: "#f5b800", color: "#000", border: "none", fontWeight: 800, fontSize: 14, padding: "13px", borderRadius: 8, cursor: "pointer", marginBottom: 24, transition: "background 0.18s" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                      onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                      Request a Quote
                    </button>
                    <hr style={{ border: "none", borderTop: "1px solid #2a2a2a", marginBottom: 18 }} />
                    <p style={{ color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Everything in Essentials, plus</p>
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 9 }}>
                      <PCheck />
                      <span style={{ color: "#f5b800", fontSize: 13, lineHeight: 1.5, fontWeight: 600 }}>Intelligent Audit (Smart Review)</span>
                    </div>
                    <p style={{ color: "#666", fontSize: 12, lineHeight: 1.65, marginBottom: 16, marginLeft: 22 }}>Built-in human-in-the-loop review queue — low-confidence extractions are automatically flagged for human verification, ensuring accuracy even in edge cases.</p>
                    {DOCFLOW_BASE_FEATURES.map(f => (
                      <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 9 }}>
                        <PCheck />
                        <span style={{ color: "#999", fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 16, background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 8, padding: "12px 14px" }}>
                      <p style={{ color: "#555", fontSize: 12, lineHeight: 1.65, margin: 0 }}>Additional implementation days: <span style={{ color: "#888" }}>$640/day</span>. Travel expenses not included.</p>
                    </div>
                  </div>
                </div>

                <div style={{ maxWidth: 860, margin: "0 auto", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 12, padding: "18px 24px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0 }}>Pricing is per-year subscription for 1 production license. For multi-license deployments, additional site deployments, or custom enterprise terms, contact Techbee — the authorised INTSIG partner for UAE & GCC. Implementation support beyond the included 2 days remote is charged at <span style={{ color: "#ddd" }}>$640/day</span>.</p>
                </div>
              </>
            )}

            {deployTab === "saas" && (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 720, margin: "0 auto 32px" }}>
                  <div style={{ background: "#0f0f0f", border: "2px solid #f5b800", borderRadius: 16, padding: "36px 30px", display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 0 60px rgba(245,184,0,0.07)" }}>
                    <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#f5b800", color: "#000", fontSize: 11, fontWeight: 800, padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>RECOMMENDED FOR UAE</div>
                    <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>SaaS · Singapore DC</p>
                    <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>textin.ai/docflow</h3>
                    <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>Pay-per-page SaaS deployment hosted in Singapore. Closest data center for UAE & GCC customers.</p>
                    <div style={{ marginBottom: 6 }}>
                      <span style={{ color: "#f5b800", fontSize: "2.6rem", fontWeight: 900, lineHeight: 1 }}>$0.18</span>
                      <span style={{ color: "#555", fontSize: 14, marginLeft: 8 }}>per page</span>
                    </div>
                    <p style={{ color: "#555", fontSize: 12, marginBottom: 24 }}>No minimum commitment · Pay as you go</p>
                    <a href="https://www.textin.ai/docflow" target="_blank" rel="noopener noreferrer"
                      style={{ display: "block", textAlign: "center", background: "#f5b800", color: "#000", fontWeight: 800, fontSize: 14, padding: "13px", borderRadius: 8, textDecoration: "none", marginBottom: 24, transition: "background 0.18s" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                      onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                      Start on textin.ai →
                    </a>
                    <hr style={{ border: "none", borderTop: "1px solid #2a2a2a", marginBottom: 18 }} />
                    {["DocFlow Essentials — full feature set","Pay per page processed","No upfront license fee","Cloud-hosted, no infrastructure needed","Singapore data center (closest to UAE)","Instant access via web portal"].map(f => (
                      <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 9 }}>
                        <PCheck />
                        <span style={{ color: "#999", fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 16, padding: "36px 30px", display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>SaaS · China Mainland DC</p>
                    <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>textin.com/docflow</h3>
                    <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>Pay-per-page SaaS deployment hosted in China Mainland. Lower per-page cost for high-volume processing.</p>
                    <div style={{ marginBottom: 6 }}>
                      <span style={{ color: "#fff", fontSize: "2.6rem", fontWeight: 900, lineHeight: 1 }}>$0.06</span>
                      <span style={{ color: "#555", fontSize: 14, marginLeft: 8 }}>per page</span>
                    </div>
                    <p style={{ color: "#555", fontSize: 12, marginBottom: 24 }}>No minimum commitment · Pay as you go</p>
                    <a href="https://www.textin.com/product/textin_docflow" target="_blank" rel="noopener noreferrer"
                      style={{ display: "block", textAlign: "center", background: "transparent", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, textDecoration: "none", marginBottom: 24, transition: "all 0.18s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff" }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#ccc" }}>
                      Start on textin.com →
                    </a>
                    <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", marginBottom: 18 }} />
                    {["DocFlow Essentials — full feature set","Pay per page processed","No upfront license fee","Cloud-hosted, no infrastructure needed","China Mainland data center","Lower per-page cost for bulk processing"].map(f => (
                      <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 9 }}>
                        <PCheck />
                        <span style={{ color: "#999", fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ maxWidth: 720, margin: "0 auto", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 12, padding: "18px 24px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0 }}>SaaS pricing is consumption-based — you only pay for pages processed. For UAE & GCC customers with data residency requirements, the <span style={{ color: "#ddd" }}>Singapore DC ($0.18/page)</span> is recommended. Contact Techbee for volume discount pricing on high-page-count deployments.</p>
                </div>
              </>
            )}

            {/* Deployment comparison */}
            <div style={{ marginTop: 56 }}>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center", marginBottom: 28 }}>DEPLOYMENT COMPARISON</p>
              <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                <div style={{ border: "1px solid #1a1a1a", borderRadius: 14, overflow: "hidden", minWidth: 540 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: "#0d0d0d", borderBottom: "1px solid #1a1a1a" }}>
                    <div style={{ padding: "13px 20px", color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Feature</div>
                    <div style={{ padding: "13px 12px", color: "#888", fontSize: 11, fontWeight: 700, textAlign: "center", borderLeft: "1px solid #1a1a1a" }}>Essentials</div>
                    <div style={{ padding: "13px 12px", color: "#f5b800", fontSize: 11, fontWeight: 700, textAlign: "center", borderLeft: "1px solid #1a1a1a" }}>+ Smart Review</div>
                    <div style={{ padding: "13px 12px", color: "#888", fontSize: 11, fontWeight: 700, textAlign: "center", borderLeft: "1px solid #1a1a1a" }}>SaaS</div>
                  </div>
                  {[
                    { feature: "Deployment",              e: "Private Cloud / OP", sr: "Private Cloud / OP", s: "Cloud (SaaS)" },
                    { feature: "Pricing model",           e: "$101,600/yr",        sr: "$118,400/yr",        s: "$0.06–$0.18/page" },
                    { feature: "Document parsing",        e: true,  sr: true,  s: true  },
                    { feature: "Classification",          e: true,  sr: true,  s: true  },
                    { feature: "Information extraction",  e: true,  sr: true,  s: true  },
                    { feature: "API access",              e: true,  sr: true,  s: true  },
                    { feature: "Intelligent Audit",       e: false, sr: true,  s: false },
                    { feature: "Image quality enhance",   e: true,  sr: true,  s: false },
                    { feature: "Watermark removal",       e: true,  sr: true,  s: false },
                    { feature: "On-premise deployment",   e: true,  sr: true,  s: false },
                    { feature: "Data residency control",  e: true,  sr: true,  s: "DC choice only" },
                    { feature: "Implementation support",  e: "24 mandays/yr", sr: "24 mandays/yr", s: "Self-service" },
                  ].map((row, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderBottom: i < 11 ? "1px solid #111" : "none", background: i % 2 === 0 ? "#000" : "#060606" }}>
                      <div style={{ padding: "12px 20px", color: "#aaa", fontSize: 13 }}>{row.feature}</div>
                      {[row.e, row.sr, row.s].map((val, j) => (
                        <div key={j} style={{ padding: "12px 12px", borderLeft: "1px solid #111", display: "flex", justifyContent: "center", alignItems: "center" }}>
                          {val === true  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                         : val === false ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                         : <span style={{ color: j === 1 ? "#f5b800" : "#bbb", fontSize: 11, fontWeight: 600, textAlign: "center" }}>{val}</span>}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
        <section className="py-[96px] px-6" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <PLabel>FAQ</PLabel>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 52 }}>
              Common <span style={{ color: "#f5b800" }}>Questions</span>
            </h2>
            <FAQItem q="How long does implementation take?" a="Most enterprises go live within 2–4 weeks. Pre-built integrations for SAP, Oracle, and major ERPs reduce setup time significantly. Our Techbee team handles end-to-end deployment, configuration, and training in the UAE and GCC region." />
            <FAQItem q="What document formats does IDP support?" a="IDP supports PDF, JPEG, JPG, PNG, TIFF, DOC, DOCX, XLS, XLSX, OFD, TXT, and email attachments including multi-page scans. It handles printed text, handwriting, stamps, checkboxes, tables, and poor-quality scans." />
            <FAQItem q="Can IDP handle Arabic and other RTL languages?" a="Yes. INTSIG's OCR engine supports 50+ languages including Arabic, with the same 99%+ accuracy as Latin-script languages — critical for UAE and GCC government and enterprise use cases." />
            <FAQItem q="Is my data secure? Who can see my documents?" a="Documents are processed in isolated environments and are never used for model training. INTSIG holds 13 security certifications including GDPR and SOC2. On-premise and private cloud deployments are also available for sensitive industries." />
            <FAQItem q="What happens when the AI is uncertain about an extraction?" a="IDP assigns a confidence score to each extracted field. Low-confidence fields are automatically routed to a human-in-the-loop review queue where an operator can verify or correct the data — ensuring accuracy even in edge cases." />
            <FAQItem q="Does it integrate with our existing ERP / CRM?" a="Yes. IDP ships with pre-built connectors for SAP, Oracle, NetSuite, Dynamics 365, QuickBooks, Xero, Salesforce, and SharePoint. A REST API is also available for custom integrations with any enterprise system." />
            <FAQItem q="Which deployment option is right for UAE enterprises?" a="For most UAE and GCC enterprises with data residency requirements, the Private Cloud / On-Premise model gives maximum control. For fast onboarding or lower volumes, the SaaS Singapore DC option ($0.18/page) is the closest and most compliant cloud option. Contact Techbee for a recommendation based on your use case." />
          </div>
        </section>

        {/* ══ CTA FOOTER ════════════════════════════════════════════════════════ */}
        <section className="py-[96px] px-6" style={{ background: "#000" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <PLabel>GET STARTED</PLabel>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
              Ready to Eliminate<br /><span style={{ color: "#f5b800" }}>Manual Document Work?</span>
            </h2>
            <p style={{ color: "#777", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
              Techbee is the authorised INTSIG IDP partner in the UAE and wider GCC. Our team handles scoping, deployment, integration, and ongoing support — so you can focus on results.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => goToContact(navigate)}
                style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 8, border: "none", cursor: "pointer", letterSpacing: "0.02em", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                Request a Demo
              </button>
              <button
                onClick={() => { const el = document.getElementById("pricing"); if (el) el.scrollIntoView({ behavior: "smooth" }) }}
                style={{ background: "transparent", color: "#f5b800", fontWeight: 700, fontSize: 15, padding: "13px 28px", borderRadius: 8, border: "1px solid rgba(245,184,0,0.4)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,184,0,0.08)"; e.currentTarget.style.borderColor = "#f5b800" }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
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
<Footer/>
      </ProductPage>
    </>
  )
}
