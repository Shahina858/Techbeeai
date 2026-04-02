import { motion } from "framer-motion"
import ProductPage, { PLabel, Chip, StepCard, UseCaseCard, StatPill } from "../components/ProductPage"

const BG = "https://framerusercontent.com/images/iuqtZdxTFuhutGpJoq0zkLbFw.png"

export default function IDP() {
  return (
    <ProductPage
      badge="IDP — INTELLIGENT DOCUMENT PROCESSING"
      headline={<>Stop Processing Documents<br /><span style={{ color: "#f5b800" }}>Manually. Forever.</span></>}
      sub="IDP reads, extracts, classifies, and routes data from any document — invoices, contracts, onboarding forms — with human-level accuracy and zero manual effort."
      cta="Request a Demo"
      bgImage={BG}
    >

      {/* HOW IT WORKS */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>HOW IT WORKS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Documents In. <span style={{ color: "#f5b800" }}>Data Out. Instantly.</span>
          </h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <StepCard n="1" title="Ingest" desc="Upload documents via email, API, or direct integration. IDP handles PDFs, scans, images, Word docs, and more." />
            <StepCard n="2" title="Extract & Classify" desc="AI identifies document type, extracts key data fields, validates against rules, and flags anomalies automatically." />
            <StepCard n="3" title="Route & Integrate" desc="Processed data flows into your ERP, CRM, or workflow system — with full audit trail and human review queue." />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CAPABILITIES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            End-to-End <span style={{ color: "#f5b800" }}>Document Automation</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["AI-powered data extraction (OCR + NLP)", "Automatic document classification", "Multi-format support: PDF, Word, image, scan", "ERP / CRM / SAP / Oracle integration", "Validation rules & exception handling", "Human-in-the-loop review queue", "GDPR & SOC2 compliant", "Audit trail & version control", "Arabic, English & 40+ language support"].map(f => <Chip key={f}>{f}</Chip>)}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <StatPill value="98%" label="Data Extraction Accuracy" />
            <StatPill value="4 days → 4h" label="Invoice Processing Time (avg)" />
            <StatPill value="80%" label="Reduction in Manual Processing" />
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>USE CASES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Automating Documents <span style={{ color: "#f5b800" }}>Across Industries</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <UseCaseCard role="Finance & Accounting"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>}
              title="Invoice processing in hours, not days."
              desc="IDP extracts invoice data, validates against POs, flags discrepancies, and routes for approval — reducing 4-day cycles to under 4 hours." />
            <UseCaseCard role="Legal & Compliance"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>}
              title="Contract review & data extraction."
              desc="Extract key terms, obligations, renewal dates, and risk flags from contracts automatically — with full version history and audit trail." />
            <UseCaseCard role="HR & Onboarding"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>}
              title="Streamline employee onboarding documents."
              desc="Process ID docs, contracts, and compliance forms instantly — routing verified data directly into your HRIS for day-1 readiness." />
            <UseCaseCard role="Logistics & Supply Chain"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
              title="Bills of lading & customs docs automated."
              desc="Extract shipment details, customs declarations, and compliance data from shipping documents — eliminating hours of manual data entry per shipment." />
          </div>
        </div>
      </section>

    </ProductPage>
  )
}
