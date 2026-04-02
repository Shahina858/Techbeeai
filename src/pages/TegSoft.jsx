import { motion } from "framer-motion"
import ProductPage, { PLabel, Chip, StepCard, UseCaseCard, StatPill } from "../components/ProductPage"

const BG = "https://framerusercontent.com/images/iuqtZdxTFuhutGpJoq0zkLbFw.png"

export default function Tegsoft() {
  return (
    <ProductPage
      badge="TEGSOFT AI AGENT"
      headline={<>Automate Customer Support.<br /><span style={{ color: "#f5b800" }}>Delight Every Customer.</span></>}
      sub="Tegsoft AI Agent handles your tier-1 support automatically — resolving queries, processing requests, and escalating intelligently — so your human agents focus on what matters most."
      cta="Request a Demo"
      bgImage={BG}
    >

      {/* HOW IT WORKS */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>HOW IT WORKS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Intelligent Support <span style={{ color: "#f5b800" }}>Automation</span>
          </h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <StepCard n="1" title="Customer Contacts" desc="Customer reaches out via call, chat, email, or WhatsApp. Tegsoft AI Agent picks up instantly — 24/7, no wait time." />
            <StepCard n="2" title="AI Resolves" desc="The agent understands intent, pulls from your knowledge base, and resolves the query autonomously in seconds." />
            <StepCard n="3" title="Escalate Smartly" desc="Complex issues are escalated to the right human agent with full context — no repeating, no frustration." />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CAPABILITIES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            Built for <span style={{ color: "#f5b800" }}>Enterprise Scale</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["Omnichannel: call, chat, email, WhatsApp", "AI-powered natural language understanding", "Smart escalation with full context handoff", "Live agent dashboard & analytics", "CRM integration (Salesforce, Zoho, HubSpot)", "GDPR & data compliance built-in", "50+ language support", "Custom knowledge base training", "Real-time sentiment analysis"].map(f => <Chip key={f}>{f}</Chip>)}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <StatPill value="60%" label="Reduction in Support Costs" />
            <StatPill value="24/7" label="Always-On AI Coverage" />
            <StatPill value="45%" label="Call Center Cost Savings (avg)" />
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>USE CASES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Powering Support Across <span style={{ color: "#f5b800" }}>Every Industry</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <UseCaseCard role="Call Centers"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/><path d="M2 2l20 20"/></svg>}
              title="Reduce agent workload by 60%."
              desc="Automate repetitive tier-1 queries so your agents spend time on complex, high-value interactions that truly need human attention." />
            <UseCaseCard role="E-Commerce"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>}
              title="Handle order, return & refund queries instantly."
              desc="Customers get real-time order status, return initiation, and refund processing — fully automated, no agent needed." />
            <UseCaseCard role="Banking & Finance"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>}
              title="Secure, compliant customer service automation."
              desc="Answer balance inquiries, transaction history, and account updates securely — with full compliance and audit trails." />
            <UseCaseCard role="Telecom & ISPs"
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6l5 5"/><path d="M6 6L1 11"/><path d="M17 6l5 5"/><path d="M22 6l-5 5"/><circle cx="12" cy="12" r="3"/></svg>}
              title="Troubleshoot & support at scale."
              desc="AI handles network diagnostics, plan upgrades, billing queries, and technical support — deflecting thousands of calls per month." />
          </div>
        </div>
      </section>

    </ProductPage>
  )
}
