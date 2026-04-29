import React from "react";

export default function Quote() {
  return (
    <div style={{ padding: "80px 24px", background: "#0a0a0a", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>WEBISHOPI</span>
          <h1 style={{ color: "#ffffff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 16, marginBottom: 20, lineHeight: 1.15 }}>
            AI-Powered Quote Generation
          </h1>
          <p style={{ color: "#999", fontSize: 16, lineHeight: 1.75, maxWidth: 640, margin: "0 auto" }}>
            UAE's leading B2B platform for IT product quotations. We simplify and accelerate procurement so you can focus on business. Our platform connects you with verified IT suppliers across the UAE.
          </p>
        </div>

        {/* Key Features Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 64 }}>
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>AI Product Search</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Upload your Bill of Quantities (BOQ) in PDF, JPG, JPEG, or PNG format. Our AI will find matching products instantly. Supports files up to 2 pages for best results.</p>
          </div>
          
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Instant Quotations</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Get quick and accurate IT quotes online. Submit your needs and receive instant, competitive quotes with no delays. Fast, transparent, and efficient procurement process.</p>
          </div>
          
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Verified Suppliers</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>All vendors undergo a rigorous verification process ensuring reliability and trust. Connect with verified IT suppliers across the UAE.</p>
          </div>
          
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Wide Product Catalog</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Access a large database of IT hardware, software, and accessories. From networking equipment to cloud solutions — we have it all.</p>
          </div>
          
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Bulk Procurement</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Special pricing and handling for bulk or enterprise-level IT purchases. Get competitive deals for large orders with dedicated account support.</p>
          </div>
          
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Quotation PDF Generation</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Instantly download your quotation as a professional PDF document. Share with your team or clients with ease.</p>
          </div>
        </div>

        {/* Trusted Brands */}
        <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 24, padding: "48px 32px", marginBottom: 64 }}>
          <h3 style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 32 }}>TRUSTED BY LEADING IT BRANDS</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", alignItems: "center" }}>
            {["Logitech", "Poly", "Jabra", "Yealink", "Maxhub", "ClearOne", "Cisco", "Barco", "ScreenBeam"].map(brand => (
              <div key={brand} style={{ color: "#666", fontSize: 14, fontWeight: 600, padding: "8px 16px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}>{brand}</div>
            ))}
          </div>
        </div>

        {/* Why Choose Webishopi */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            Why Choose <span style={{ color: "#f5b800" }}>Webishopi?</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <div style={{ padding: "24px", background: "rgba(245,184,0,0.05)", borderRadius: 16, border: "1px solid rgba(245,184,0,0.15)" }}>
              <h4 style={{ color: "#ffffff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Faster Procurement</h4>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Speedy delivery and efficient processing. Get what you need when you need it.</p>
            </div>
            <div style={{ padding: "24px", background: "rgba(245,184,0,0.05)", borderRadius: 16, border: "1px solid rgba(245,184,0,0.15)" }}>
              <h4 style={{ color: "#ffffff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Secure Transactions</h4>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>End-to-end encrypted and compliant. Your data is safe with us.</p>
            </div>
            <div style={{ padding: "24px", background: "rgba(245,184,0,0.05)", borderRadius: 16, border: "1px solid rgba(245,184,0,0.15)" }}>
              <h4 style={{ color: "#ffffff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Expert Support</h4>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Our professionals help you pick the right solutions and clarify technical specs.</p>
            </div>
          </div>
        </div>

       

        {/* About Section */}
        <div style={{ marginTop: 80, marginBottom: 64 }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            About <span style={{ color: "#f5b800" }}>Webishopi</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
              <h3 style={{ color: "#f5b800", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Our Mission</h3>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>To simplify IT procurement by connecting businesses to reliable suppliers for fast, competitive quotations via a single intuitive platform.</p>
            </div>
            <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
              <h3 style={{ color: "#f5b800", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Our Vision</h3>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Empowering businesses across the UAE to make IT procurement seamless, transparent, and efficient with zero hassle.</p>
            </div>
            <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
              <h3 style={{ color: "#f5b800", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Our Values</h3>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Trust, Innovation, Customer-Centricity, and Excellence in Service — everything we do is rooted in empowering your business.</p>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            Product <span style={{ color: "#f5b800" }}>Categories</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { title: "Video Conferencing", desc: "Rally Bar, MeetUp, MeetingBar, RoomMate, Sight camera" },
              { title: "Audio Solutions", desc: "Mic Pods, Rally Mic Pod, extension cables, mounts" },
              { title: "Touch Controllers", desc: "Tap IP, Tap Scheduler, TC10, MeetingBoard" },
              { title: "Room Systems", desc: "MVC S40/S50/S80/S90/S98, Teams Rooms systems" },
              { title: "Wireless Presentation", desc: "ClickShare, RoomCast, Swytch" },
              { title: "Room Booking", desc: "Evoko Liso, Evoko Naso, room scheduling solutions" },
              { title: "UC Computers", desc: "ThinkSmart Core, RoomMate computing units" },
              { title: "Accessories", desc: "Cables, mounts, TV mounts, riser mounts" },
            ].map((cat, i) => (
              <div key={i} style={{ background: "#111", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: "20px" }}>
                <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{cat.title}</h4>
                <p style={{ color: "#666", fontSize: 12, lineHeight: 1.5, margin: 0 }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Capabilities */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            Key <span style={{ color: "#f5b800" }}>Capabilities</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {[
              "AI-Powered Product Search",
              "Instant Quote Generation",
              "Verified Supplier Network",
              "Bulk Procurement Support",
              "Multi-Brand Portfolio",
              "Secure Payment Options",
              "Dedicated Account Manager",
              "Technical Pre-Sales Support",
              "After-Sales Service",
              "Warranty Support",
              "Next-Day Delivery",
              "Volume Discounts",
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(245,184,0,0.08)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "10px 20px", color: "#f5b800", fontSize: 13, fontWeight: 600 }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            Frequently Asked <span style={{ color: "#f5b800" }}>Questions</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {[
              { q: "What is Webishopi?", a: "Webishopi is UAE's leading B2B platform for IT product quotations, connecting businesses with verified IT suppliers for fast, competitive quotes." },
              { q: "How does the quotation process work?", a: "Simply browse our product catalog or use AI Search to upload your BOQ. Our system will match you with verified suppliers who provide competitive quotes within 24 hours." },
              { q: "Are the suppliers on Webishopi trustworthy?", a: "Yes! All vendors undergo a rigorous verification process. We only work with pre-vetted, trusted IT suppliers across the UAE." },
              { q: "What payment methods do you accept?", a: "We accept bank transfers, credit cards, and offer credit options for pre-approved companies. Contact us for detailed payment terms." },
              { q: "Do you offer installation services?", a: "Yes, we provide professional installation services for video conferencing and room systems. Request this during your quotation." },
              { q: "Which regions do you serve?", a: "We serve businesses across the entire UAE, including Dubai, Abu Dhabi, Sharjah, and all northern emirates." },
            ].map((faq, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "24px" }}>
                <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 12 }}>{faq.q}</h4>
                <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 24, padding: "48px 32px", marginBottom: 64 }}>
          <h3 style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 40 }}>HOW IT WORKS</h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
            {[
              { n: "01", title: "Browse or Search", desc: "Explore our catalog or upload your BOQ for AI matching" },
              { n: "02", title: "Get Quotes", desc: "Receive competitive quotes from verified suppliers" },
              { n: "03", title: "Compare & Select", desc: "Review quotes and choose the best offer" },
              { n: "04", title: "Order & Delivery", desc: "Complete purchase and receive delivery" },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: "center", minWidth: 180 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <span style={{ color: "#f5b800", fontWeight: 800, fontSize: 14 }}>{step.n}</span>
                </div>
                <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{step.title}</h4>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
         {/* Contact CTA */}
        <div style={{ textAlign: "center", background: "linear-gradient(135deg, rgba(245,184,0,0.1) 0%, rgba(245,184,0,0.05) 100%)", border: "1px solid rgba(245,184,0,0.3)", borderRadius: 24, padding: "48px 32px" }}>
          <h3 style={{ color: "#ffffff", fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Ready to upgrade your IT infrastructure?</h3>
          <p style={{ color: "#999", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>Contact TechBee today to get started with a customized plan.</p>
          <a href="https://webishopi.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#f5b800", color: "#000", fontSize: 15, fontWeight: 700, padding: "14px 40px", borderRadius: 50, textDecoration: "none", boxShadow: "0 0 28px rgba(245,184,0,0.4)" }}>
            Visit webishopi.com
          </a>
          <div style={{ marginTop: 32, color: "#666", fontSize: 13 }}>
            <p>📍 R12 France Cluster, International City, Dubai, UAE</p>
            <p>📞 +971 56 411 6174 | 📧 info@techbee.ae</p>
          </div>
        </div>

      </div>
    </div>
    
  );
}

