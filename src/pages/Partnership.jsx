import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import Navbar from "../components/Navbar"

const LOGO_IMG = "/TechBee_AI_Logo_Modified.png"

// ── Real TechBee vendor partners from techbee.ae ─────────────────────────────
const PARTNER_DATA = [
  { name: "Check Point",    country: "UAE", city: "Dubai", type: "Technology", tier: "Gold",     specialization: "Cybersecurity & Firewall",      phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/checkpoint-partner-in-dubai/",                      logo: "🛡️" },
  { name: "Cisco",          country: "UAE", city: "Dubai", type: "Technology", tier: "Gold",     specialization: "Networking & Switching",         phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/cisco-switches-in-dubai/",                          logo: "🌐" },
  { name: "Fortinet",       country: "UAE", city: "Dubai", type: "Technology", tier: "Gold",     specialization: "Network Security & Firewall",    phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/fortinet-firewall-in-dubai/",                       logo: "🔒" },
  { name: "Microsoft",      country: "UAE", city: "Dubai", type: "Technology", tier: "Platinum", specialization: "Cloud, M365 & Azure",            phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/microsoft-solution-partner-dubai",                  logo: "☁️" },
  { name: "HP",             country: "UAE", city: "Dubai", type: "Technology", tier: "Gold",     specialization: "Servers, Storage & Poly Video",  phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/poly-video-conferencing-solutions-systems-in-dubai/",logo: "🖥️" },
  { name: "Dell",           country: "UAE", city: "Dubai", type: "Technology", tier: "Gold",     specialization: "Servers & Storage Solutions",    phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/dell-partner-in-dubai/",                            logo: "💻" },
  { name: "Aruba (HPE)",    country: "UAE", city: "Dubai", type: "Technology", tier: "Gold",     specialization: "Wireless & Network Solutions",   phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/aruba-network-partner-in-dubai/",                   logo: "📡" },
  { name: "Veeam",          country: "UAE", city: "Dubai", type: "Technology", tier: "Silver",   specialization: "Backup & Data Recovery",         phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/veeam-backup-replication-in-dubai/",                logo: "💾" },
  { name: "Acronis",        country: "UAE", city: "Dubai", type: "Technology", tier: "Silver",   specialization: "Backup & Cyber Protection",      phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/acronis-backup-solution-in-dubai/",                 logo: "🔐" },
  { name: "Tegsoft",        country: "UAE", city: "Dubai", type: "Technology", tier: "Gold",     specialization: "AI Contact Center",              phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/tegsoft-partner-in-dubai/",                         logo: "🤖" },
  { name: "CrowdStrike",    country: "UAE", city: "Dubai", type: "Technology", tier: "Gold",     specialization: "Endpoint Security & EDR",        phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/crowdstrike-endpoint-security-partner-in-dubai/",  logo: "🦅" },
  { name: "ManageEngine",   country: "UAE", city: "Dubai", type: "Technology", tier: "Silver",   specialization: "IT Management Solutions",        phone: "+971 4 243 4882", email: "sales@techbee.ae", website: "https://techbee.ae/manageengine-it-solutions-in-dubai/",               logo: "⚙️" },
]

const TYPES = ["All Types", "Technology"]
const TIERS = ["All Tiers", "Platinum", "Gold", "Silver"]

const TIER_COLORS = {
  Platinum: { bg: "rgba(229,229,229,0.15)", border: "rgba(200,200,200,0.6)", text: "#d0d0d0" },
  Gold:     { bg: "rgba(245,184,0,0.12)",   border: "rgba(245,184,0,0.5)",   text: "#f5b800" },
  Silver:   { bg: "rgba(160,160,160,0.12)", border: "rgba(160,160,160,0.4)", text: "#aaa"    },
}

const PARTNER_BENEFITS = [
  { icon: "💰", title: "Revenue Share",          desc: "Earn competitive margins on every deal you close with TechBee AI products." },
  { icon: "🎓", title: "Training & Certification", desc: "Access dedicated training programs and earn official TechBee AI partner certifications." },
  { icon: "🤝", title: "Sales Support",           desc: "Joint sales motions, deal registration, and dedicated partner success managers." },
  { icon: "📣", title: "Co-Marketing",            desc: "Co-branded campaigns, leads sharing, and inclusion in our partner directory." },
  { icon: "🛠️", title: "Technical Resources",    desc: "Priority technical support, sandbox environments, and early access to new features." },
  { icon: "🌍", title: "Regional Coverage",       desc: "Expand your footprint across the UAE and GCC with TechBee's established market presence." },
]

const FORM_INIT = { company: "", name: "", email: "", phone: "", country: "", type: "", products: [], message: "", agree: false }
const PRODUCT_OPTIONS = ["AI Contact Center (Tegsoft)", "AI Medical Scribe (Lyrebird)", "Intelligent Document Processing", "AI Security (Check Point)", "Contact Management (CamCard)", "B2B Quote Generation (Webishopi)"]

export default function Partnership() {
  const navigate = useNavigate()

  const [search, setSearch]       = useState("")
  const [type, setType]           = useState("All Types")
  const [tier, setTier]           = useState("All Tiers")
  const [expanded, setExpanded]   = useState(null)

  const [form, setForm]           = useState(FORM_INIT)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState("")

  const handleForm = (e) => {
    const { name, value, type: t, checked } = e.target
    if (name === "products") {
      setForm(p => ({ ...p, products: checked ? [...p.products, value] : p.products.filter(x => x !== value) }))
    } else {
      setForm(p => ({ ...p, [name]: t === "checkbox" ? checked : value }))
    }
  }

  const handleSubmit = () => {
    setError("")
    if (!form.company || !form.name || !form.email || !form.country || !form.type || !form.agree) {
      setError("Please fill in all required fields and agree to the terms.")
      return
    }
    setLoading(true)
    const templateParams = {
      from_name:    form.name,
      company:      form.company,
      email:        form.email,
      phone:        form.phone || "Not provided",
      country:      form.country,
      partner_type: form.type,
      products:     form.products.length > 0 ? form.products.join(", ") : "Not specified",
      message:      form.message || "No message provided",
      subject:      "New Partner Application — " + form.company,
      to_email:     "sales@techbee.ae",
    }
   // CORRECT
emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE,
  process.env.REACT_APP_EMAILJS_TEMPLATE_PARTNER,  // ← add process.env.
  templateParams,                                   // ← move here
  process.env.REACT_APP_EMAILJS_KEY
)
    .then(() => { setSubmitted(true); setLoading(false) })
    .catch((err) => {
      console.error("EmailJS error:", err)
      setError("Something went wrong. Please try again or email us directly at sales@techbee.ae")
      setLoading(false)
    })
  }

  const filtered = PARTNER_DATA.filter(p => {
    const q = search.toLowerCase()
    return (
      (type === "All Types" || p.type === type) &&
      (tier === "All Tiers" || p.tier === tier) &&
      (!q || p.name.toLowerCase().includes(q) || p.specialization.toLowerCase().includes(q))
    )
  })

  const iCls = {
    width: "100%", borderRadius: 10, padding: "11px 14px", fontSize: 14,
    color: "#fff", background: "#0d0d0d", border: "1px solid #1f1f1f",
    outline: "none", transition: "border-color 0.2s", boxSizing: "border-box",
  }

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <Navbar logoSrc={LOGO_IMG} />

      {/* ══ HERO ══ */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 24px 80px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #000 0%, #0a0800 60%, #0d0b00 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(245,184,0,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(245,184,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #f5b800", borderRadius: 8, padding: "7px 18px", color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
            ✦ PARTNER PROGRAM
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
            Grow Your Business with <span style={{ color: "#f5b800" }}>TechBee AI</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: "#999", fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)", lineHeight: 1.8, maxWidth: 580, margin: "0 auto 36px" }}>
            Join the TechBee AI partner ecosystem — deliver cutting-edge AI solutions across the UAE and GCC while earning industry-leading margins and world-class support.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="#become-partner"
              style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "13px 36px", textDecoration: "none", display: "inline-block", boxShadow: "0 0 28px rgba(245,184,0,0.4)" }}>
              Become a Partner →
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="#our-partners"
              style={{ background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 36px", border: "1px solid rgba(245,184,0,0.4)", textDecoration: "none", display: "inline-block" }}>
              Our Technology Partners
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ══ PARTNER TIERS ══ */}
      <section style={{ padding: "80px 24px", background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>PARTNER TIERS</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 48 }}>
            A Program Built for <span style={{ color: "#f5b800" }}>Every Stage</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { tier: "Silver", icon: "🥈", req: "1+ certified staff · $25K annual revenue", perks: ["Partner portal access", "Sales training", "Co-branded materials", "Email support"] },
              { tier: "Gold", icon: "🥇", req: "2+ certified staff · $100K annual revenue", perks: ["All Silver benefits", "Dedicated partner manager", "Deal registration", "Co-marketing budget", "Priority support"], featured: true },
              { tier: "Platinum", icon: "💎", req: "5+ certified staff · $500K annual revenue", perks: ["All Gold benefits", "Executive sponsorship", "Custom SLA", "Joint business planning", "Early product access", "Regional exclusivity"] },
            ].map((t, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                style={{ background: "#0d0d0d", border: t.featured ? "2px solid #f5b800" : "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 28px", position: "relative" }}>
                {t.featured && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#f5b800", color: "#000", fontSize: 11, fontWeight: 800, padding: "4px 16px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>MOST POPULAR</div>}
                <div style={{ fontSize: 32, marginBottom: 12 }}>{t.icon}</div>
                <h3 style={{ color: TIER_COLORS[t.tier].text, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{t.tier} Partner</h3>
                <p style={{ color: "#555", fontSize: 12, marginBottom: 24, lineHeight: 1.6 }}>{t.req}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {t.perks.map(p => (
                    <div key={p} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ color: "#ccc", fontSize: 13 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BENEFITS ══ */}
      <section style={{ padding: "80px 24px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>WHY PARTNER WITH US</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 48 }}>
            Everything You Need to <span style={{ color: "#f5b800" }}>Succeed</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {PARTNER_BENEFITS.map((b, i) => (
              <motion.div key={i} whileHover={{ y: -3, borderColor: "rgba(245,184,0,0.4)" }} transition={{ duration: 0.2 }}
                style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{b.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECHNOLOGY PARTNERS (was: Partner Locator) ══ */}
      <section id="our-partners" style={{ padding: "80px 24px", background: "#050505", scrollMarginTop: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>TECHNOLOGY PARTNERS</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 8 }}>
            Our <span style={{ color: "#f5b800" }}>Certified Vendor Partners</span>
          </h2>
          <p style={{ textAlign: "center", color: "#666", fontSize: 14, marginBottom: 40, lineHeight: 1.7 }}>
            TechBee is an authorized reseller and implementation partner for these globally trusted technology brands across UAE and GCC.
          </p>

          {/* Filters */}
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 16, padding: "24px", marginBottom: 32 }}>
            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr", gap: 12, alignItems: "end" }}>
              <div>
                <p style={{ color: "#888", fontSize: 12, marginBottom: 8, fontWeight: 600 }}>Search Partner</p>
                <div style={{ position: "relative" }}>
                  <svg style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or specialization..."
                    style={{ ...iCls, paddingLeft: 38 }}
                    onFocus={e => e.target.style.borderColor = "rgba(245,184,0,0.5)"}
                    onBlur={e => e.target.style.borderColor = "#1f1f1f"} />
                </div>
              </div>
              {[
                { label: "Type", val: type, set: setType, opts: TYPES },
                { label: "Tier", val: tier, set: setTier, opts: TIERS },
              ].map(f => (
                <div key={f.label}>
                  <p style={{ color: "#888", fontSize: 12, marginBottom: 8, fontWeight: 600 }}>{f.label}</p>
                  <select value={f.val} onChange={e => f.set(e.target.value)}
                    style={{ ...iCls, appearance: "none", cursor: "pointer" }}
                    onFocus={e => e.target.style.borderColor = "rgba(245,184,0,0.5)"}
                    onBlur={e => e.target.style.borderColor = "#1f1f1f"}>
                    {f.opts.map(o => <option key={o} value={o} style={{ background: "#0d0d0d" }}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ color: "#555", fontSize: 13 }}>{filtered.length} partner{filtered.length !== 1 ? "s" : ""} found</p>
              <button onClick={() => { setSearch(""); setType("All Types"); setTier("All Tiers") }}
                style={{ background: "none", border: "none", color: "#f5b800", fontSize: 13, cursor: "pointer", fontWeight: 600 }}>
                Clear filters
              </button>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 16, fontWeight: 600, color: "#555" }}>No partners found</p>
              <p style={{ fontSize: 14, color: "#444", marginTop: 8 }}>Try adjusting your search filters</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {filtered.map((p, i) => (
                <motion.div key={i} layout whileHover={{ y: -2 }} transition={{ duration: 0.2 }}
                  style={{ background: "#0a0a0a", border: expanded === i ? "1px solid rgba(245,184,0,0.45)" : "1px solid rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden", cursor: "pointer" }}
                  onClick={() => setExpanded(expanded === i ? null : i)}>
                  <div style={{ padding: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{p.logo}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, margin: 0, marginBottom: 2 }}>{p.name}</h3>
                        <p style={{ color: "#555", fontSize: 12, margin: 0 }}>Authorized Partner — {p.city}, {p.country}</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                        <div style={{ background: TIER_COLORS[p.tier].bg, border: "1px solid " + TIER_COLORS[p.tier].border, borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: TIER_COLORS[p.tier].text, whiteSpace: "nowrap" }}>{p.tier}</div>
                        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#666", whiteSpace: "nowrap" }}>{p.type}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      <span style={{ color: "#888", fontSize: 12 }}>{p.specialization}</span>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
                        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                          {[
                            { icon: "📞", val: p.phone },
                            { icon: "📧", val: p.email },
                            { icon: "🌐", val: p.website },
                          ].map((row, ri) => (
                            <div key={ri} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <span style={{ fontSize: 14 }}>{row.icon}</span>
                              <span style={{ color: "#999", fontSize: 13 }}>{row.val}</span>
                            </div>
                          ))}
                          <a href={p.website} target="_blank" rel="noopener noreferrer"
                            style={{ marginTop: 8, display: "block", textAlign: "center", background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 13, padding: "10px", borderRadius: 8, textDecoration: "none" }}>
                            Learn More ↗
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom note */}
          <div style={{ marginTop: 40, background: "rgba(245,184,0,0.04)", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 14, padding: "20px 28px", textAlign: "center" }}>
            <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              All partnerships are authorized and managed directly by <span style={{ color: "#ddd", fontWeight: 600 }}>TechBee IT & Designs LLC</span>. For procurement, demos, or support on any of these products, contact us at{" "}
              <a href="mailto:sales@techbee.ae" style={{ color: "#f5b800", textDecoration: "none", fontWeight: 600 }}>sales@techbee.ae</a>
            </p>
          </div>
        </div>
      </section>

      {/* ══ BECOME A PARTNER FORM ══ */}
      <section id="become-partner" style={{ padding: "80px 24px", background: "#000", scrollMarginTop: 100 }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>JOIN THE PROGRAM</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 8 }}>
            Become a <span style={{ color: "#f5b800" }}>TechBee AI Partner</span>
          </h2>
          <p style={{ textAlign: "center", color: "#666", fontSize: 14, marginBottom: 48, lineHeight: 1.7 }}>
            Fill in the form below and our partner team will get back to you within 1 business day.
          </p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
              style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.3)", borderRadius: 20, padding: "60px 40px", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🎉</div>
              <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Application Received!</h3>
              <p style={{ color: "#777", fontSize: 15, lineHeight: 1.75, maxWidth: 480, margin: "0 auto 12px" }}>
                Thank you for your interest in partnering with TechBee AI. Our partnership team will review your application and reach out within 1 business day.
              </p>
              <p style={{ color: "#555", fontSize: 13, marginBottom: 32 }}>
                A confirmation has been sent to <span style={{ color: "#f5b800" }}>{form.email}</span>
              </p>
              <button onClick={() => { setSubmitted(false); setForm(FORM_INIT) }}
                style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "13px 32px", borderRadius: 50, border: "none", cursor: "pointer" }}>
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <div style={{ background: "#080808", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "40px", boxShadow: "0 0 60px rgba(245,184,0,0.06)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                {[
                  { label: "Company Name *",   name: "company", placeholder: "Your company name"   },
                  { label: "Full Name *",       name: "name",    placeholder: "Your full name"      },
                  { label: "Business Email *",  name: "email",   placeholder: "you@company.com"     },
                  { label: "Phone Number",      name: "phone",   placeholder: "+971 XX XXX XXXX"    },
                ].map(f => (
                  <label key={f.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{f.label}</span>
                    <input name={f.name} value={form[f.name]} onChange={handleForm} placeholder={f.placeholder}
                      style={iCls}
                      onFocus={e => e.target.style.borderColor = "rgba(245,184,0,0.5)"}
                      onBlur={e => e.target.style.borderColor = "#1f1f1f"} />
                  </label>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Country *</span>
                  <select name="country" value={form.country} onChange={handleForm}
                    style={{ ...iCls, appearance: "none", cursor: "pointer", color: form.country ? "#fff" : "#4a4a4a" }}
                    onFocus={e => e.target.style.borderColor = "rgba(245,184,0,0.5)"}
                    onBlur={e => e.target.style.borderColor = "#1f1f1f"}>
                    <option value="" disabled>Select country</option>
                    {["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Other"].map(c => <option key={c} value={c} style={{ background: "#0d0d0d" }}>{c}</option>)}
                  </select>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Partnership Type *</span>
                  <select name="type" value={form.type} onChange={handleForm}
                    style={{ ...iCls, appearance: "none", cursor: "pointer", color: form.type ? "#fff" : "#4a4a4a" }}
                    onFocus={e => e.target.style.borderColor = "rgba(245,184,0,0.5)"}
                    onBlur={e => e.target.style.borderColor = "#1f1f1f"}>
                    <option value="" disabled>Select type</option>
                    {["Technology Partner", "Reseller", "Distributor", "System Integrator", "Referral Partner"].map(t => <option key={t} value={t} style={{ background: "#0d0d0d" }}>{t}</option>)}
                  </select>
                </label>
              </div>

              <div style={{ marginBottom: 20 }}>
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Products of Interest</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {PRODUCT_OPTIONS.map(prod => (
                    <label key={prod} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                      <div style={{ position: "relative", width: 18, height: 18, flexShrink: 0 }}>
                        <input type="checkbox" name="products" value={prod} checked={form.products.includes(prod)} onChange={handleForm}
                          style={{ width: 18, height: 18, appearance: "none", borderRadius: 4, border: "1px solid #2a2a2a", background: form.products.includes(prod) ? "#f5b800" : "#0d0d0d", cursor: "pointer", transition: "all 0.15s" }} />
                        {form.products.includes(prod) && (
                          <svg style={{ position: "absolute", top: 2, left: 2, pointerEvents: "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        )}
                      </div>
                      <span style={{ color: "#ccc", fontSize: 13 }}>{prod}</span>
                    </label>
                  ))}
                </div>
              </div>

              <label style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Tell us about your business</span>
                <textarea name="message" value={form.message} onChange={handleForm}
                  placeholder="Briefly describe your company, target market, and why you want to partner with TechBee AI..."
                  style={{ ...iCls, height: 120, resize: "none" }}
                  onFocus={e => e.target.style.borderColor = "rgba(245,184,0,0.5)"}
                  onBlur={e => e.target.style.borderColor = "#1f1f1f"} />
              </label>

              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: 20 }}>
                <div style={{ position: "relative", width: 18, height: 18, flexShrink: 0 }}>
                  <input type="checkbox" name="agree" checked={form.agree} onChange={handleForm}
                    style={{ width: 18, height: 18, appearance: "none", borderRadius: "50%", border: "1px solid #2a2a2a", background: form.agree ? "#f5b800" : "#0d0d0d", cursor: "pointer", transition: "all 0.15s" }} />
                  {form.agree && (
                    <svg style={{ position: "absolute", top: 2, left: 2, pointerEvents: "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                </div>
                <span style={{ color: "#888", fontSize: 13 }}>I agree to the TechBee AI partner program terms and privacy policy</span>
              </label>

              {error && (
                <div style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 20, color: "#f87171", fontSize: 13 }}>
                  ⚠️ {error}
                </div>
              )}

              <motion.button
                whileHover={{ scale: loading ? 1 : 1.015, boxShadow: loading ? "none" : "0 0 44px rgba(245,184,0,0.5)" }}
                whileTap={{ scale: loading ? 1 : 0.985 }}
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  width: "100%", background: loading ? "#a37e00" : "#f5b800",
                  color: "#000", fontWeight: 700, fontSize: 15, padding: "15px",
                  borderRadius: 12, border: "none", cursor: loading ? "not-allowed" : "pointer",
                  boxShadow: "0 0 24px rgba(245,184,0,0.22)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  transition: "background 0.2s",
                }}>
                {loading ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56">
                        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/>
                      </path>
                    </svg>
                    Sending Application...
                  </>
                ) : (
                  "Submit Partnership Application"
                )}
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* ══ FOOTER CTA ══ */}
      <section style={{ padding: "80px 24px", background: "#050505", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Already a Partner? <span style={{ color: "#f5b800" }}>Get Support</span>
          </h2>
          <p style={{ color: "#666", fontSize: 14, lineHeight: 1.75, marginBottom: 32 }}>
            Access the partner portal, training resources, and your dedicated partner success manager.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:sales@techbee.ae"
              style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "13px 32px", borderRadius: 50, textDecoration: "none", display: "inline-block" }}>
              Email Partner Team
            </a>
            <a href="tel:+97142434882"
              style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 14, padding: "12px 32px", borderRadius: 50, border: "1px solid rgba(245,184,0,0.4)", textDecoration: "none", display: "inline-block" }}>
              +971 4 243 4882
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
