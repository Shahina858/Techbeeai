import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const IMG_HERO     = "/image_hero_clean.png";
const IMG_PRODUCT  = "/image_product_clean.png";
const IMG_AISEARCH = "/image_aisearch.png";

const gold       = "#f5b800";
const goldDim    = "rgba(245,184,0,0.1)";
const goldBorder = "rgba(245,184,0,0.2)";

// ── Pricing check icon ────────────────────────────────────────────────────────
function PCheck({ color = "#f5b800" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ── Pricing plan data ─────────────────────────────────────────────────────────
const PLANS = [
  {
    name: "Starter",
    tag: "Small Business",
    desc: "Best for small businesses getting started with B2B quotations.",
    monthlyAED: 499,
    annualAED: 4790,
    setupAED: 1500,
    productLimit: "Up to 50 Products",
    users: "Up to 3 users",
    highlight: false,
    features: [
      "Product catalog management",
      "AI product search",
      "Quotation generation",
      "Email delivery of quotations",
      "Customer portal",
      "Basic reporting",
      "Setup: product upload, branding, email config & training",
    ],
  },
  {
    name: "Professional",
    tag: "Growing Business",
    desc: "For growing businesses needing AI-assisted quoting and RFQ management.",
    monthlyAED: 1299,
    annualAED: 12470,
    setupAED: 3500,
    productLimit: "Up to 250 Products",
    users: "Up to 10 users",
    highlight: true,
    features: [
      "Everything in Starter, plus:",
      "BOQ upload & AI matching",
      "RFQ management",
      "AI-assisted quotation creation",
      "Customer quote tracking",
      "CRM integration (basic)",
      "Advanced reporting",
    ],
  },
  {
    name: "Business",
    tag: "Distributor / Supplier",
    desc: "For established distributors and suppliers with high product volume.",
    monthlyAED: 2499,
    annualAED: 23990,
    setupAED: 7500,
    productLimit: "Up to 500 Products",
    users: "Up to 25 users",
    highlight: false,
    features: [
      "Everything in Professional, plus:",
      "Multi-user approval workflow",
      "AI-powered product recommendations",
      "Customer-specific pricing",
      "Distributor price comparison",
      "White-list customer approval",
      "Advanced analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    tag: "Large Enterprise",
    desc: "For large enterprises and marketplaces with 500+ products.",
    monthlyAED: null,
    annualAED: null,
    setupAED: "From AED 15,000",
    productLimit: "Unlimited Products",
    users: "Unlimited users",
    highlight: false,
    features: [
      "Unlimited products & users",
      "Multi-company support",
      "Custom AI models",
      "ERP / SAP / Oracle integration",
      "SSO authentication",
      "Dedicated account manager",
      "SLA support",
    ],
  },
];

const COMPARISON = [
  { feature: "Product limit",                  starter: "50",          pro: "250",            biz: "500",              ent: "Unlimited"    },
  { feature: "Users",                          starter: "3",           pro: "10",             biz: "25",               ent: "Unlimited"    },
  { feature: "AI product search",              starter: true,          pro: true,             biz: true,               ent: true           },
  { feature: "Quotation generation",           starter: true,          pro: true,             biz: true,               ent: true           },
  { feature: "Email delivery of quotes",       starter: true,          pro: true,             biz: true,               ent: true           },
  { feature: "Customer portal",                starter: true,          pro: true,             biz: true,               ent: true           },
  { feature: "BOQ upload & AI matching",       starter: false,         pro: true,             biz: true,               ent: true           },
  { feature: "RFQ management",                 starter: false,         pro: true,             biz: true,               ent: true           },
  { feature: "AI-assisted quotation",          starter: false,         pro: true,             biz: true,               ent: true           },
  { feature: "CRM integration",                starter: false,         pro: "Basic",          biz: true,               ent: true           },
  { feature: "Approval workflow",              starter: false,         pro: false,            biz: true,               ent: true           },
  { feature: "Customer-specific pricing",      starter: false,         pro: false,            biz: true,               ent: true           },
  { feature: "Advanced analytics",             starter: false,         pro: false,            biz: true,               ent: true           },
  { feature: "ERP / SAP / Oracle integration", starter: false,         pro: false,            biz: false,              ent: true           },
  { feature: "Custom AI models",               starter: false,         pro: false,            biz: false,              ent: true           },
  { feature: "SSO",                            starter: false,         pro: false,            biz: false,              ent: true           },
  { feature: "Dedicated account manager",      starter: false,         pro: false,            biz: false,              ent: true           },
  { feature: "Setup fee",                      starter: "AED 1,500",   pro: "AED 3,500",      biz: "AED 7,500",        ent: "From AED 15,000" },
];

function CellVal({ val }) {
  if (val === true)  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
  if (val === false) return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
  return <span style={{ color: val === "Unlimited" || val === "Basic" ? gold : "#bbb", fontSize: 12, fontWeight: 600 }}>{val}</span>;
}

// ── AI Sales Team capabilities ────────────────────────────────────────────────
const AI_SALES_CAPABILITIES = [
  { icon: "🧠", title: "Understands Requirements", desc: "AI reads customer inquiries, BOQs, and RFQs — extracting product needs automatically without manual interpretation." },
  { icon: "🔍", title: "Recommends Products", desc: "Matches customer requirements to your catalog instantly. Suggests alternatives and bundles based on past patterns." },
  { icon: "📄", title: "Generates Quotations", desc: "Professional, audit-ready PDF quotations created automatically — with correct pricing, VAT, and your branding." },
  { icon: "💬", title: "Answers Inquiries", desc: "Responds to common customer questions about products, availability, and specifications — 24/7, without your team." },
  { icon: "🔄", title: "Follows Up Automatically", desc: "Sends follow-up emails to customers who submitted requests but haven't responded — keeping deals warm." },
  { icon: "🤝", title: "Escalates to Humans", desc: "Complex deals or VIP customers get flagged and routed to your sales team with full context already captured." },
];

const AI_SALES_INDUSTRIES = [
  { emoji: "💻", label: "Technology & IT" },
  { emoji: "🏭", label: "Industrial Products" },
  { emoji: "🪑", label: "Furniture" },
  { emoji: "🏥", label: "Medical Supplies" },
  { emoji: "🏗️", label: "Building Materials" },
  { emoji: "🚗", label: "Automotive Products" },
  { emoji: "📦", label: "Wholesale & Distribution" },
];

export default function Quote() {
  const [openFaq, setOpenFaq] = useState(null);
  const [billing, setBilling] = useState("monthly");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const visibleRows = showAll ? COMPARISON : COMPARISON.slice(0, 10);

  const scrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff", fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

      <Navbar />

      {/* ── HERO ── */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "120px 48px 80px",
        display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap", minHeight: "90vh",
      }}>

        {/* LEFT CONTENT */}
        <div style={{ flex: "1 1 440px", minWidth: 300 }}>
          <span style={{ background: "transparent", border: `1px solid ${gold}`, color: gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "7px 18px", borderRadius: 6, display: "inline-block", marginBottom: 32 }}>
            AI Sales Team · 24/7 · B2B Procurement Platform
          </span>

          <h1 style={{ fontSize: "clamp(2.6rem, 4.5vw, 4rem)", fontWeight: 800, lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            Your AI Sales Team,<br />
            <span style={{ color: gold }}>Available 24/7.</span>
          </h1>

          <p style={{ color: "#888", fontSize: 16, lineHeight: 1.8, margin: "0 0 40px", maxWidth: 500 }}>
            Webishopi transforms your product catalog into an intelligent sales engine — helping customers discover products, submit requirements, receive quotations, and engage with your business instantly. No waiting. No manual work. Just results.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
            {[
              { val: "24/7",    label: "AI Sales Active"     },
              { val: "1000+",   label: "Products in Minutes" },
              { val: "Instant", label: "Quote Turnaround"    },
            ].map((s, i) => (
              <div key={i} style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: "14px 22px", textAlign: "center" }}>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: gold }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "#555", marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="https://webishopi.com" target="_blank" rel="noopener noreferrer"
              style={{ background: gold, color: "#000", fontWeight: 800, fontSize: 14, padding: "15px 36px", borderRadius: 50, textDecoration: "none", boxShadow: `0 0 28px rgba(245,184,0,0.4)` }}>
              Get Your Store →
            </a>
            <a href="mailto:sales@techbee.ae"
              style={{ background: "transparent", color: "#ccc", fontWeight: 600, fontSize: 14, padding: "15px 36px", borderRadius: 50, textDecoration: "none", border: "1px solid #2a2a2a", display: "flex", alignItems: "center", gap: 8 }}>
              ✉ Talk to Us
            </a>
            <button
              onClick={scrollToPricing}
              style={{ background: "transparent", color: gold, fontWeight: 700, fontSize: 14, padding: "15px 28px", borderRadius: 50, border: `1px solid rgba(245,184,0,0.45)`, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = goldDim; e.currentTarget.style.borderColor = gold }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.45)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              View Pricing
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: "1 1 460px", minWidth: 300, position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "90%", height: "70%", background: "radial-gradient(ellipse, rgba(245,184,0,0.13) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0, borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: 16, right: 0, zIndex: 3, background: "#1a1400", border: `1px solid ${goldBorder}`, borderRadius: 10, padding: "10px 18px", textAlign: "center" }}>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: gold }}>100%</div>
            <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.08em" }}>Your Brand</div>
          </div>
          <div style={{ position: "absolute", bottom: 24, left: 0, zIndex: 3, background: "#111", border: "1px solid #222", borderRadius: 50, padding: "10px 20px", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22cc66", display: "inline-block", boxShadow: "0 0 6px #22cc66" }} />
            <span style={{ fontSize: 13, color: "#ccc", fontWeight: 600 }}>AI Sales Team Active</span>
          </div>
          <img src={IMG_HERO} alt="Webishopi Platform" style={{ width: "100%", display: "block", position: "relative", zIndex: 1, filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.6))", borderRadius: 12 }} />
        </div>
      </div>

      {/* ── STAT BAR ── */}
      <div style={{ borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {[
          { val: "24/7",    label: "AI Sales Active"    },
          { val: "1000+",   label: "Products in Minutes" },
          { val: "Instant", label: "Quote Turnaround"    },
          { val: "100%",    label: "Your Own Brand"      },
          { val: "Auto",    label: "AI Email Responses"  },
        ].map((s, i) => (
          <div key={i} style={{ padding: "28px 32px", textAlign: "center", borderRight: "1px solid #1a1a1a" }}>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: gold }}>{s.val}</div>
            <div style={{ fontSize: 11, color: "#555", marginTop: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "80px 24px" }}>

        {/* ── WHO USES IT ── */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>MOST USED BY</p>
          <h2 style={h2}>Built for the People Who <span style={{ color: gold }}>Run B2B Businesses</span></h2>
          <p style={body}>Webishopi is designed around the daily reality of procurement teams, IT departments, and project leads — the people who actually deal with quotations every day.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 40 }}>
            {[
              { icon: "🗂️", role: "Procurement Officers", pain: "Spend hours chasing 3 vendor quotes per BOQ. Webishopi delivers them in minutes." },
              { icon: "💻", role: "IT Managers",           pain: "Need accurate specs and part numbers fast. Our catalog is searchable by name or SKU." },
              { icon: "📊", role: "Finance Teams",         pain: "Tired of manual VAT calculations and errors. Every quote auto-calculates with zero mistakes." },
              { icon: "📋", role: "Project Managers",      pain: "Delays from slow vendor responses kill timelines. Get pricing 24/7 without waiting on a rep." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", borderRadius: 18, padding: "28px 22px" }}>
                <div style={{ fontSize: 30, marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: gold, margin: "0 0 10px" }}>{c.role}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>{c.pain}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PAIN POINTS ── */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>PAIN POINTS WE SOLVE</p>
          <h2 style={h2}>Real Problems. <span style={{ color: gold }}>Real Solutions.</span></h2>
          <p style={body}>Every feature in Webishopi exists because B2B procurement teams told us what was slowing them down. Here's exactly what we fixed.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 40 }}>
            {[
              { challenge: "Hours wasted on quotations", challengeDesc: "Procurement teams spend 2–4 hours per BOQ manually searching for products, contacting vendors, and preparing quotations.", solution: "Instant quotation in minutes", solutionDesc: "Upload your BOQ and get a professional quotation PDF in under 5 minutes — automatically." },
              { challenge: "Back-and-forth with vendors", challengeDesc: "Multiple emails and calls just to get pricing creates delays and slows down project timelines.", solution: "Self-service 24/7", solutionDesc: "Access product pricing and generate quotations anytime — no need to wait for a sales rep to respond." },
              { challenge: "Manual errors in calculations", challengeDesc: "Manually calculating VAT, totals, and item prices often leads to costly errors in purchase orders.", solution: "Accurate automated calculations", solutionDesc: "Every quotation automatically calculates unit prices, VAT (5%), subtotal, and grand total with zero errors." },
              { challenge: "Products not found in one place", challengeDesc: "Teams waste time searching multiple vendor websites and catalogs to find the right IT products.", solution: "Complete IT product catalog", solutionDesc: "All video conferencing, collaboration, and IT products in one place — searchable by name or part number." },
            ].map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: i === 0 ? "16px 16px 0 0" : i === 3 ? "0 0 16px 16px" : 0, overflow: "hidden", borderBottom: "1px solid #161616" }}>
                <div style={{ background: "#110a00", borderRight: "1px solid #1e1e1e", padding: "28px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ background: "rgba(255,80,80,0.12)", border: "1px solid rgba(255,80,80,0.25)", color: "#ff6060", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", padding: "3px 10px", borderRadius: 50, textTransform: "uppercase" }}>Challenge</span>
                  </div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>{item.challenge}</h4>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>{item.challengeDesc}</p>
                </div>
                <div style={{ background: "#0a0f0a", padding: "28px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ background: goldDim, border: `1px solid ${goldBorder}`, color: gold, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", padding: "3px 10px", borderRadius: 50, textTransform: "uppercase" }}>Webishopi Solution</span>
                  </div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: gold, margin: "0 0 10px" }}>{item.solution}</h4>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>{item.solutionDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHAT WE OFFER ── */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>WHAT WE OFFER</p>
          <h2 style={h2}>Your Business Deserves Its <span style={{ color: gold }}>Own Online Store</span></h2>
          <p style={body}>TechBee builds and manages a complete white-label eCommerce store for your B2B business using Webishopi technology. Your customers see your brand, your catalog, your pricing — with a battle-tested AI platform running silently underneath.</p>
          <div style={{ marginTop: 40, borderRadius: 20, overflow: "hidden", border: `1px solid ${goldBorder}`, position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, #0a0a0a 100%)", zIndex: 1, pointerEvents: "none" }} />
            <img src={IMG_PRODUCT} alt="Webishopi Product Catalog" style={{ width: "100%", display: "block", borderRadius: 20 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
            {[
              { icon: "🏪", title: "Your Store, Your Brand", desc: "Custom domain, your logo, your colors. Customers interact with your business — not a third-party marketplace." },
              { icon: "🤖", title: "AI Does the Heavy Lifting", desc: "Automated email responses, smart product search, and instant quote generation — your team focuses on closing." },
              { icon: "⚡", title: "Live in Days, Not Months", desc: "TechBee handles setup, branding, and product upload. No developer, no code, no waiting." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: `1px solid ${goldBorder}`, borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{c.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#fff" }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ AI SALES TEAM ════════════════════════════════════════════════════ */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>YOUR AI SALES TEAM</p>
          <h2 style={h2}>Meet Your New <span style={{ color: gold }}>24/7 Sales Team</span></h2>
          <p style={body}>
            Customers expect answers immediately. Webishopi acts as your digital sales team — engaging customers the moment they visit, understanding their needs, and converting them into qualified leads automatically.
          </p>

          {/* Key benefits banner */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 32, marginBottom: 40 }}>
            {[
              { val: "24/7", label: "Always Available", desc: "Never miss a customer inquiry — day, night, or weekend." },
              { val: "Faster", label: "Response Times", desc: "Instant replies vs hours or days from manual teams." },
              { val: "More", label: "Deals Closed", desc: "More opportunities captured and converted at scale." },
            ].map((b, i) => (
              <div key={i} style={{ background: goldDim, border: `1px solid ${goldBorder}`, borderRadius: 16, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: gold, marginBottom: 4 }}>{b.val}</div>
                <div style={{ color: "#fff", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{b.label}</div>
                <div style={{ color: "#777", fontSize: 12, lineHeight: 1.6 }}>{b.desc}</div>
              </div>
            ))}
          </div>

          {/* 6 capabilities */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 48 }}>
            {AI_SALES_CAPABILITIES.map((cap, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", borderRadius: 16, padding: "26px 24px", display: "flex", gap: 16, alignItems: "flex-start", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = goldBorder}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#1e1e1e"}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{cap.icon}</div>
                <div>
                  <h4 style={{ color: gold, fontSize: 14, fontWeight: 700, margin: "0 0 8px" }}>{cap.title}</h4>
                  <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div style={{ background: "#0d0d0d", border: `1px solid ${goldBorder}`, borderRadius: 20, padding: "32px 28px" }}>
            <p style={{ color: gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Built for Every Product-Based Business</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {AI_SALES_INDUSTRIES.map((ind, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "#111", border: "1px solid #222", borderRadius: 50, padding: "10px 18px" }}>
                  <span style={{ fontSize: 16 }}>{ind.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#ccc" }}>{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>HOW IT WORKS</p>
          <h2 style={h2}>A Quote in <span style={{ color: gold }}>5 Simple Steps</span></h2>
          <p style={body}>From browsing your store to a professional PDF quote — without your team lifting a finger.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 40, justifyContent: "center" }}>
            {[
              { n: "01", title: "Customer Visits Your Store", desc: "Browses your branded catalog from any device, anywhere in UAE." },
              { n: "02", title: "AI Finds the Right Products", desc: "Smart search surfaces exact matches fast — no endless scrolling." },
              { n: "03", title: "Selects & Submits Request", desc: "Cart-style selection with quantities. Submitted in one click." },
              { n: "04", title: "Instant Quote Generated", desc: "Complete, audit-ready PDF quotation created automatically." },
              { n: "05", title: "Your Team Gets a Hot Lead", desc: "Ready-to-close request arrives. No back-and-forth required." },
            ].map((s, i) => (
              <div key={i} style={{ flex: "1 1 170px", background: i === 3 ? goldDim : "#0d0d0d", border: `1px solid ${i === 3 ? goldBorder : "#1e1e1e"}`, borderRadius: 16, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: gold, letterSpacing: "0.12em", marginBottom: 14 }}>{s.n}</div>
                <h4 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 8px", color: i === 3 ? gold : "#fff" }}>{s.title}</h4>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── DUAL VALUE ── */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>WHO BENEFITS</p>
          <h2 style={h2}>Built for <span style={{ color: gold }}>Both Sides</span> of Your Business</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 40 }}>
            <div style={{ background: "#0d0d0d", border: `1px solid ${goldBorder}`, borderRadius: 20, padding: "32px 28px" }}>
              <p style={{ fontSize: 11, color: gold, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>For Your Customers</p>
              {["Request structured quotations without phone calls","Get audit-ready documents that satisfy compliance","Browse 24/7 and reorder past purchases easily","Compare options and track their own requests"].map(t => <Bullet key={t} text={t} />)}
            </div>
            <div style={{ background: "#0d0d0d", border: "1px solid #2a2a2a", borderRadius: 20, padding: "32px 28px" }}>
              <p style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>For Your Sales Team</p>
              {["Receive ready-to-close leads with full customer context","Eliminate hours spent on repetitive manual quoting","AI handles follow-ups so your team focuses on revenue","See top-requested products and plan inventory smarter"].map(t => <Bullet key={t} text={t} dimmed />)}
            </div>
          </div>
        </div>

        {/* ── WHAT MAKES IT DIFFERENT ── */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>WHAT MAKES IT DIFFERENT</p>
          <h2 style={h2}>Not Just a Website. <span style={{ color: gold }}>A Sales Engine.</span></h2>
          <p style={body}>Most online stores are built for retail. Webishopi is purpose-built for B2B procurement — where speed, compliance, and accuracy win deals.</p>
          <div style={{ marginTop: 40, marginBottom: 40, borderRadius: 20, overflow: "hidden", border: "1px solid #1e1e1e", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #0a0a0a 100%)", zIndex: 1, pointerEvents: "none" }} />
            <img src={IMG_AISEARCH} alt="AI Product Search" style={{ width: "100%", display: "block", borderRadius: 20 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { title: "Fastest Quote Turnaround", desc: "Hours become minutes. Customers never wait on a quote from you again." },
              { title: "AI-Powered Product Search", desc: "Upload a BOQ image or PDF — AI matches products from your catalog instantly." },
              { title: "Built for Compliance", desc: "Every quotation is structured, numbered, and audit-ready from day one." },
              { title: "Sales Efficiency Engine", desc: "AI handles the paperwork. Your team handles the relationships and closings." },
              { title: "Auto AI Email Responses", desc: "Professional replies go out automatically the moment a request comes in." },
              { title: "Enterprise-Grade Security", desc: "SSL, DDoS protection, isolated data, MFA — your store and customer data are locked down." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", borderRadius: 16, padding: "24px 22px" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: gold, marginBottom: 14 }} />
                <h4 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 10px", color: "#fff" }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHO IT'S FOR ── */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>WHO IT'S FOR</p>
          <h2 style={h2}>If You Sell B2B, <span style={{ color: gold }}>Webishopi Is for You</span></h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 40 }}>
            {[
              { emoji: "🖥️", label: "IT Solution Providers" },
              { emoji: "📦", label: "Distributors & Wholesalers" },
              { emoji: "🔧", label: "Equipment & Hardware Suppliers" },
              { emoji: "💊", label: "Pharmacies & Health" },
              { emoji: "🏢", label: "Any B2B Business" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "#111", border: "1px solid #222", borderRadius: 50, padding: "12px 22px" }}>
                <span style={{ fontSize: 18 }}>{c.emoji}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#ccc" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── GETTING STARTED ── */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>GETTING STARTED</p>
          <h2 style={h2}>From First Call to <span style={{ color: gold }}>Live Store in Days</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 40 }}>
            {[
              { n: "01", title: "Contact TechBee", desc: "Call, WhatsApp, or email — tell us you're interested." },
              { n: "02", title: "We Learn Your Business", desc: "We understand your products, branding, and customer base." },
              { n: "03", title: "We Build Your Store", desc: "TechBee sets everything up — domain, logo, colors, structure." },
              { n: "04", title: "Upload Your Products", desc: "Use our Excel template — 1000 products live in under a minute." },
              { n: "05", title: "We Test Everything", desc: "Full quality check across mobile, tablet, and desktop." },
              { n: "06", title: "You Go Live 🚀", desc: "Your customers can browse, select, and request quotes from day one." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "center", padding: "20px 24px", background: "#0d0d0d", borderBottom: "1px solid #161616", borderRadius: i === 0 ? "14px 14px 0 0" : i === 5 ? "0 0 14px 14px" : 0 }}>
                <span style={{ color: gold, fontSize: 12, fontWeight: 800, minWidth: 28 }}>{s.n}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, margin: "0 0 3px", color: i === 5 ? gold : "#fff" }}>{s.title}</p>
                  <p style={{ fontSize: 12, color: "#666", margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 24 }}>
            {[
              { title: "Subscription-Based", desc: "Monthly or annual plan. No hidden fees, no surprises." },
              { title: "Scales with Growth", desc: "Start small, upgrade as your business grows." },
              { title: "Long-Term ROI", desc: "Less time quoting, more time selling — measurable returns." },
            ].map((c, i) => (
              <div key={i} style={{ background: goldDim, border: `1px solid ${goldBorder}`, borderRadius: 14, padding: "22px 18px", textAlign: "center" }}>
                <p style={{ color: gold, fontSize: 13, fontWeight: 700, margin: "0 0 8px" }}>{c.title}</p>
                <p style={{ fontSize: 12, color: "#888", margin: 0, lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ PRICING ═══════════════════════════════════════════════════════════ */}
        <div id="pricing" style={{ marginBottom: 80 }}>
          <p style={labelStyle}>PRICING</p>
          <h2 style={h2}>Simple, Transparent <span style={{ color: gold }}>Pricing</span></h2>
          <p style={body}>
            All prices in AED. Annual plans save 20%. One-time setup fee applies per plan. Contact TechBee for custom Enterprise quotes.
          </p>

          {/* Billing toggle */}
          <div style={{ display: "flex", marginTop: 32, marginBottom: 40 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 0, background: "#111", border: "1px solid #222", borderRadius: 10, padding: 4 }}>
              {["monthly", "annual"].map(b => (
                <button key={b} onClick={() => setBilling(b)}
                  style={{
                    background: billing === b ? gold : "transparent",
                    color: billing === b ? "#000" : "#666",
                    border: "none", fontWeight: 700, fontSize: 13,
                    padding: "9px 22px", borderRadius: 7, cursor: "pointer",
                    transition: "all 0.18s", display: "flex", alignItems: "center", gap: 8,
                  }}>
                  {b === "monthly" ? "Monthly" : "Annual"}
                  {b === "annual" && (
                    <span style={{
                      background: billing === "annual" ? "#00000025" : goldDim,
                      color: billing === "annual" ? "#000" : gold,
                      fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 20,
                    }}>SAVE 20%</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Plan cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
            {PLANS.map((plan, i) => (
              <div key={i} style={{
                background: plan.highlight ? goldDim : "#0d0d0d",
                border: plan.highlight ? `2px solid ${gold}` : "1px solid #1e1e1e",
                borderRadius: 18, padding: "28px 22px",
                display: "flex", flexDirection: "column",
                position: "relative",
                boxShadow: plan.highlight ? `0 0 40px rgba(245,184,0,0.08)` : "none",
              }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: gold, color: "#000", fontSize: 10, fontWeight: 800, padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.06em" }}>
                    MOST POPULAR
                  </div>
                )}
                <p style={{ color: plan.highlight ? gold : "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{plan.tag}</p>
                <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{plan.name}</h3>
                <p style={{ color: "#555", fontSize: 12, lineHeight: 1.6, marginBottom: 18, minHeight: 40 }}>{plan.desc}</p>
                {plan.monthlyAED ? (
                  <div style={{ marginBottom: 4 }}>
                    <span style={{ color: plan.highlight ? gold : "#fff", fontSize: "2rem", fontWeight: 900, lineHeight: 1 }}>
                      AED {billing === "annual"
                        ? Math.round(plan.annualAED / 12).toLocaleString()
                        : plan.monthlyAED.toLocaleString()}
                    </span>
                    <span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>/mo</span>
                  </div>
                ) : (
                  <div style={{ marginBottom: 4 }}>
                    <span style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 800 }}>Custom</span>
                  </div>
                )}
                {plan.monthlyAED && billing === "annual" && (
                  <p style={{ color: "#555", fontSize: 12, marginBottom: 4 }}>
                    AED {plan.annualAED.toLocaleString()} billed annually
                  </p>
                )}
                <p style={{ color: "#444", fontSize: 11, marginBottom: 18 }}>
                  Setup: {typeof plan.setupAED === "number" ? `AED ${plan.setupAED.toLocaleString()}` : plan.setupAED}
                </p>
                {plan.name === "Enterprise" ? (
                  <button onClick={goToContact}
                    style={{ display: "block", textAlign: "center", background: "transparent", color: gold, border: `1px solid rgba(245,184,0,0.4)`, fontWeight: 700, fontSize: 13, padding: "11px", borderRadius: 8, cursor: "pointer", marginBottom: 20, transition: "all 0.18s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = goldDim; e.currentTarget.style.borderColor = gold }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)" }}>
                    Contact Us
                  </button>
                ) : (
                  <a href="https://webishopi.com" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "block", textAlign: "center",
                      background: plan.highlight ? gold : "transparent",
                      color: plan.highlight ? "#000" : "#ccc",
                      border: plan.highlight ? "none" : "1px solid #2a2a2a",
                      fontWeight: 700, fontSize: 13, padding: "12px", borderRadius: 8,
                      textDecoration: "none", marginBottom: 20, transition: "all 0.18s",
                    }}
                    onMouseEnter={e => { if (!plan.highlight) { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff" } else e.currentTarget.style.background = "#ffc929" }}
                    onMouseLeave={e => { if (!plan.highlight) { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#ccc" } else e.currentTarget.style.background = gold }}>
                    Get Started
                  </a>
                )}
                <hr style={{ border: "none", borderTop: "1px solid #1e1e1e", marginBottom: 16 }} />
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  <span style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 50, padding: "4px 10px", fontSize: 11, color: "#888", fontWeight: 600 }}>{plan.productLimit}</span>
                  <span style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 50, padding: "4px 10px", fontSize: 11, color: "#888", fontWeight: 600 }}>{plan.users}</span>
                </div>
                {plan.features.map(f => (
                  <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                    <PCheck color={plan.highlight ? gold : "#3d9e6e"} />
                    <span style={{ color: "#999", fontSize: 12, lineHeight: 1.55 }}>{f}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <p style={{ ...labelStyle, marginTop: 56 }}>PLAN COMPARISON</p>
          <h3 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 700, color: "#fff", marginBottom: 28 }}>
            Feature <span style={{ color: gold }}>Breakdown</span>
          </h3>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <div style={{ border: "1px solid #1a1a1a", borderRadius: 14, overflow: "hidden", minWidth: 560 }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", background: "#0d0d0d", borderBottom: "1px solid #1a1a1a" }}>
                <div style={{ padding: "13px 18px", color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Feature</div>
                {["Starter", "Professional", "Business", "Enterprise"].map((h, i) => (
                  <div key={h} style={{ padding: "13px 12px", color: i === 1 ? gold : "#888", fontSize: 11, fontWeight: 700, textAlign: "center", borderLeft: "1px solid #1a1a1a" }}>{h}</div>
                ))}
              </div>
              {visibleRows.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", borderBottom: i < visibleRows.length - 1 ? "1px solid #111" : "none", background: i % 2 === 0 ? "#000" : "#060606" }}>
                  <div style={{ padding: "12px 18px", color: "#aaa", fontSize: 12 }}>{row.feature}</div>
                  {[row.starter, row.pro, row.biz, row.ent].map((val, j) => (
                    <div key={j} style={{ padding: "12px 12px", borderLeft: "1px solid #111", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <CellVal val={val} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {!showAll && (
            <div style={{ textAlign: "center", marginTop: 18 }}>
              <button onClick={() => setShowAll(true)}
                style={{ background: "transparent", color: gold, border: `1px solid rgba(245,184,0,0.35)`, fontWeight: 600, fontSize: 13, padding: "10px 24px", borderRadius: 50, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = goldDim}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                Show all {COMPARISON.length} features ↓
              </button>
            </div>
          )}
          {showAll && (
            <div style={{ textAlign: "center", marginTop: 18 }}>
              <button onClick={() => setShowAll(false)}
                style={{ background: "transparent", color: "#555", border: "1px solid #222", fontWeight: 600, fontSize: 13, padding: "10px 24px", borderRadius: 50, cursor: "pointer" }}>
                Show less ↑
              </button>
            </div>
          )}
        </div>

        {/* ── FAQ ── */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>FAQ</p>
          <h2 style={h2}>Common <span style={{ color: gold }}>Questions</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 40 }}>
            {[
              { q: "Do I need any technical knowledge?", a: "None at all. TechBee handles the complete setup — domain, branding, product upload, and testing. You just review and approve." },
              { q: "Is this my store or a shared marketplace?", a: "It is 100% your store. Your customers see your brand and your domain. Webishopi runs silently in the background." },
              { q: "How quickly can we go live?", a: "Most stores go live within 3–5 business days after TechBee receives your branding assets and product data." },
              { q: "Can we handle bulk or enterprise orders?", a: "Yes. The platform is built for B2B volume — bulk uploads, multi-line quotations, and large orders are all supported." },
              { q: "What if we want to add more products later?", a: "Simply re-upload the Excel template with new items, or add them individually through your admin panel anytime." },
              { q: "Which regions does TechBee support?", a: "TechBee serves businesses across the UAE — Dubai, Abu Dhabi, Sharjah, and all northern emirates." },
              { q: "Is the setup fee a one-time charge?", a: "Yes, the setup fee is a one-time charge that covers product upload, branding, email configuration, and training. There are no recurring setup costs." },
              { q: "Can I upgrade my plan later?", a: "Absolutely. You can upgrade from Starter to Professional or Business at any time as your product catalog and team grows." },
            ].map((faq, i) => (
              <div key={i} style={{ background: "#0d0d0d", borderBottom: "1px solid #161616", borderRadius: i === 0 ? "14px 14px 0 0" : i === 7 ? "0 0 14px 14px" : 0, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  <span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>{faq.q}</span>
                  <span style={{ color: gold, fontSize: 22, flexShrink: 0, lineHeight: 1, display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: 13, color: "#777", lineHeight: 1.75 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ background: "#0d0d0d", border: `1px solid ${goldBorder}`, borderRadius: 24, padding: "64px 40px", textAlign: "center" }}>
          <span style={{ background: goldDim, border: `1px solid ${goldBorder}`, color: gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 50, display: "inline-block", marginBottom: 24 }}>
            Ready to Start?
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
            Turn Your Catalog Into a<br />
            <span style={{ color: gold }}>24/7 Sales Engine.</span>
          </h2>
          <p style={{ color: "#777", fontSize: 15, lineHeight: 1.75, maxWidth: 500, margin: "0 auto 40px" }}>
            Generate more leads. Respond faster. Close more deals. Let Webishopi's AI sales team work for you around the clock.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
            <a href="mailto:sales@techbee.ae"
              style={{ background: gold, color: "#000", fontSize: 14, fontWeight: 800, padding: "14px 32px", borderRadius: 50, textDecoration: "none", boxShadow: `0 0 24px rgba(245,184,0,0.35)` }}>
              ✉ sales@techbee.ae
            </a>
            <a href="tel:+971564116174"
              style={{ background: "transparent", color: "#ccc", fontSize: 14, fontWeight: 600, padding: "14px 32px", borderRadius: 50, textDecoration: "none", border: "1px solid #2a2a2a" }}>
              📞 +971 564116174
            </a>
            <a href="https://webishopi.com" target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", color: gold, fontSize: 14, fontWeight: 700, padding: "14px 32px", borderRadius: 50, textDecoration: "none", border: `1px solid ${goldBorder}` }}>
              🌐 webishopi.com
            </a>
            <button onClick={scrollToPricing}
              style={{ background: "transparent", color: gold, fontSize: 14, fontWeight: 700, padding: "14px 28px", borderRadius: 50, border: `1px solid rgba(245,184,0,0.4)`, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = goldDim}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              View Pricing
            </button>
          </div>
          <p style={{ color: "#444", fontSize: 12 }}>
            📍 R12 France Cluster, International City, Dubai, UAE &nbsp;|&nbsp; TechBee IT &amp; Designs LLC
          </p>
        </div>

      </div>
    </div>
  );
}

/* ── helpers ── */
const labelStyle = {
  color: "#f5b800", fontSize: 11, fontWeight: 700,
  letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16,
};
const h2 = {
  fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800,
  margin: "0 0 16px", lineHeight: 1.2, letterSpacing: "-0.01em",
};
const body = {
  color: "#888", fontSize: 15, lineHeight: 1.8,
  margin: "0 0 8px", maxWidth: 680,
};

function Bullet({ text, dimmed }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
      <span style={{ color: dimmed ? "#555" : "#f5b800", fontSize: 14, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>▸</span>
      <span style={{ color: dimmed ? "#666" : "#ccc", fontSize: 13, lineHeight: 1.6 }}>{text}</span>
    </div>
  );
}
