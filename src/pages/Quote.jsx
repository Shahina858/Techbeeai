import React, { useState } from "react";

const gold = "#f5b800";
const goldDim = "rgba(245,184,0,0.1)";
const goldBorder = "rgba(245,184,0,0.2)";

export default function Quote() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff", fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

      {/* HERO */}
      <div style={{ padding: "100px 24px 80px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
        <span style={{ background: goldDim, border: `1px solid ${goldBorder}`, color: gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 50, display: "inline-block", marginBottom: 28 }}>
          Smart IT Procurement Platform
        </span>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
          Stop Chasing Quotes.<br />
          <span style={{ color: gold }}>Start Winning Deals.</span>
        </h1>
        <p style={{ color: "#888", fontSize: 17, lineHeight: 1.8, maxWidth: 580, margin: "0 auto 40px" }}>
          Webishopi is a fully branded B2B eCommerce and quotation platform that TechBee builds and manages for your business — AI-powered, ready in days, zero technical work.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://webishopi.com" target="_blank" rel="noopener noreferrer"
            style={{ background: gold, color: "#000", fontWeight: 700, fontSize: 14, padding: "14px 36px", borderRadius: 50, textDecoration: "none", boxShadow: `0 0 24px rgba(245,184,0,0.35)` }}>
            Get Your Store →
          </a>
          <a href="mailto:sales@techbee.ae"
            style={{ background: "transparent", color: "#ccc", fontWeight: 600, fontSize: 14, padding: "14px 36px", borderRadius: 50, textDecoration: "none", border: "1px solid #2a2a2a" }}>
            Talk to Us
          </a>
        </div>
      </div>

      {/* STAT BAR */}
      <div style={{ borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {[
          { val: "24/7", label: "Store Always Open" },
          { val: "1000+", label: "Products in Minutes" },
          { val: "Instant", label: "Quote Turnaround" },
          { val: "100%", label: "Your Own Brand" },
          { val: "Auto", label: "AI Email Responses" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "28px 32px", textAlign: "center", borderRight: "1px solid #1a1a1a" }}>
            <div style={{ fontSize: "1.9rem", fontWeight: 800, color: gold }}>{s.val}</div>
            <div style={{ fontSize: 11, color: "#555", marginTop: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "80px 24px" }}>

        {/* WHO USES IT */}

        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>MOST USED BY</p>
          <h2 style={h2}>Built for the People Who <span style={{ color: gold }}>Run B2B Businesses</span></h2>
          <p style={body}>Webishopi is designed around the daily reality of procurement teams, IT departments, and project leads — the people who actually deal with quotations every day.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 40 }}>
            {[
              { icon: "🗂️", role: "Procurement Officers", pain: "Spend hours chasing 3 vendor quotes per BOQ. Webishopi delivers them in minutes." },
              { icon: "💻", role: "IT Managers", pain: "Need accurate specs and part numbers fast. Our catalog is searchable by name or SKU." },
              { icon: "📊", role: "Finance Teams", pain: "Tired of manual VAT calculations and errors. Every quote auto-calculates with zero mistakes." },
              { icon: "📋", role: "Project Managers", pain: "Delays from slow vendor responses kill timelines. Get pricing 24/7 without waiting on a rep." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", borderRadius: 18, padding: "28px 22px" }}>
                <div style={{ fontSize: 30, marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: gold, margin: "0 0 10px" }}>{c.role}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>{c.pain}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PAIN POINTS */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>PAIN POINTS WE SOLVE</p>
          <h2 style={h2}>Real Problems. <span style={{ color: gold }}>Real Solutions.</span></h2>
          <p style={body}>Every feature in Webishopi exists because B2B procurement teams told us what was slowing them down. Here's exactly what we fixed.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 40 }}>
            {[
              {
                challenge: "Hours wasted on quotations",
                challengeDesc: "Procurement teams spend 2–4 hours per BOQ manually searching for products, contacting vendors, and preparing quotations.",
                solution: "Instant quotation in minutes",
                solutionDesc: "Upload your BOQ and get a professional quotation PDF in under 5 minutes — automatically.",
              },
              {
                challenge: "Back-and-forth with vendors",
                challengeDesc: "Multiple emails and calls just to get pricing creates delays and slows down project timelines.",
                solution: "Self-service 24/7",
                solutionDesc: "Access product pricing and generate quotations anytime — no need to wait for a sales rep to respond.",
              },
              {
                challenge: "Manual errors in calculations",
                challengeDesc: "Manually calculating VAT, totals, and item prices often leads to costly errors in purchase orders.",
                solution: "Accurate automated calculations",
                solutionDesc: "Every quotation automatically calculates unit prices, VAT (5%), subtotal, and grand total with zero errors.",
              },
              {
                challenge: "Products not found in one place",
                challengeDesc: "Teams waste time searching multiple vendor websites and catalogs to find the right IT products.",
                solution: "Complete IT product catalog",
                solutionDesc: "All video conferencing, collaboration, and IT products in one place — searchable by name or part number.",
              },
            ].map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: i === 0 ? "16px 16px 0 0" : i === 3 ? "0 0 16px 16px" : 0, overflow: "hidden", borderBottom: "1px solid #161616" }}>
                {/* Challenge side */}
                <div style={{ background: "#110a00", borderRight: "1px solid #1e1e1e", padding: "28px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ background: "rgba(255,80,80,0.12)", border: "1px solid rgba(255,80,80,0.25)", color: "#ff6060", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", padding: "3px 10px", borderRadius: 50, textTransform: "uppercase" }}>Challenge</span>
                  </div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>{item.challenge}</h4>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>{item.challengeDesc}</p>
                </div>
                {/* Solution side */}
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

        {/* WHAT IS WEBISHOPI */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>WHAT WE OFFER</p>
          <h2 style={h2}>Your Business Deserves Its <span style={{ color: gold }}>Own Online Store</span></h2>
          <p style={body}>
            TechBee builds and manages a complete white-label eCommerce store for your B2B business using Webishopi technology. Your customers see your brand, your catalog, your pricing — with a battle-tested AI platform running silently underneath.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
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

        {/* HOW IT WORKS */}
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

        {/* DUAL VALUE */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>WHO BENEFITS</p>
          <h2 style={h2}>Built for <span style={{ color: gold }}>Both Sides</span> of Your Business</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 40 }}>
            <div style={{ background: "#0d0d0d", border: `1px solid ${goldBorder}`, borderRadius: 20, padding: "32px 28px" }}>
              <p style={{ fontSize: 11, color: gold, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>For Your Customers</p>
              {[
                "Request structured quotations without phone calls",
                "Get audit-ready documents that satisfy compliance",
                "Browse 24/7 and reorder past purchases easily",
                "Compare options and track their own requests",
              ].map(t => <Bullet key={t} text={t} />)}
            </div>
            <div style={{ background: "#0d0d0d", border: "1px solid #2a2a2a", borderRadius: 20, padding: "32px 28px" }}>
              <p style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>For Your Sales Team</p>
              {[
                "Receive ready-to-close leads with full customer context",
                "Eliminate hours spent on repetitive manual quoting",
                "AI handles follow-ups so your team focuses on revenue",
                "See top-requested products and plan inventory smarter",
              ].map(t => <Bullet key={t} text={t} dimmed />)}
            </div>
          </div>
        </div>

        {/* WHAT MAKES IT DIFFERENT */}
        <div style={{ marginBottom: 80 }}>
          <p style={labelStyle}>WHAT MAKES IT DIFFERENT</p>
          <h2 style={h2}>Not Just a Website. <span style={{ color: gold }}>A Sales Engine.</span></h2>
          <p style={body}>Most online stores are built for retail. Webishopi is purpose-built for B2B procurement — where speed, compliance, and accuracy win deals.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
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

        {/* WHO IS IT FOR */}
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

        {/* GETTING STARTED */}
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

        {/* FAQ */}
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
            ].map((faq, i) => (
              <div key={i} style={{ background: "#0d0d0d", borderBottom: "1px solid #161616", borderRadius: i === 0 ? "14px 14px 0 0" : i === 5 ? "0 0 14px 14px" : 0, overflow: "hidden" }}>
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

        {/* CTA */}
        <div style={{ background: "#0d0d0d", border: `1px solid ${goldBorder}`, borderRadius: 24, padding: "64px 40px", textAlign: "center" }}>
          <span style={{ background: goldDim, border: `1px solid ${goldBorder}`, color: gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 50, display: "inline-block", marginBottom: 24 }}>
            Ready to Start?
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
            The Company That Responds First —<br />
            <span style={{ color: gold }}>Wins.</span>
          </h2>
          <p style={{ color: "#777", fontSize: 15, lineHeight: 1.75, maxWidth: 500, margin: "0 auto 40px" }}>
            Let Webishopi make sure that company is yours. Transform your B2B sales and procurement workflow today.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
            <a href="mailto:sales@techbee.ae"
              style={{ background: gold, color: "#000", fontSize: 14, fontWeight: 800, padding: "14px 32px", borderRadius: 50, textDecoration: "none", boxShadow: `0 0 24px rgba(245,184,0,0.35)` }}>
              ✉ sales@techbee.ae
            </a>
            <a href="tel:+97142434882"
              style={{ background: "transparent", color: "#ccc", fontSize: 14, fontWeight: 600, padding: "14px 32px", borderRadius: 50, textDecoration: "none", border: "1px solid #2a2a2a" }}>
              📞 +971 4 2434 882
            </a>
            <a href="https://webishopi.com" target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", color: gold, fontSize: 14, fontWeight: 700, padding: "14px 32px", borderRadius: 50, textDecoration: "none", border: `1px solid ${goldBorder}` }}>
              🌐 webishopi.com
            </a>
          </div>
          <p style={{ color: "#444", fontSize: 12 }}>
            📍 R12 France Cluster, International City, Dubai, UAE &nbsp;|&nbsp; TechBee IT &amp; Designs LLC
          </p>
        </div>

      </div>
    </div>
  );
}

/* helpers */
const labelStyle = { color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16 };
const h2 = { fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2, letterSpacing: "-0.01em" };
const body = { color: "#888", fontSize: 15, lineHeight: 1.8, margin: "0 0 8px", maxWidth: 680 };

function Bullet({ text, dimmed }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
      <span style={{ color: dimmed ? "#555" : "#f5b800", fontSize: 14, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>▸</span>
      <span style={{ color: dimmed ? "#666" : "#ccc", fontSize: 13, lineHeight: 1.6 }}>{text}</span>
    </div>
  );
}
