import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const LOGO_IMG = "/TechBee_AI_Logo_Modified.png"

const PARTNER_DATA = [
  { name: "Check Point",     country: "UAE",          city: "Dubai",        region: "Middle East",   tier: "Gold",     specialization: "Cybersecurity & Firewall",        website: "https://techbee.ae/checkpoint-partner-in-dubai/",                        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=360&fit=crop" },
  { name: "Cisco",           country: "UAE",          city: "Dubai",        region: "Middle East",   tier: "Gold",     specialization: "Networking & Switching",           website: "https://techbee.ae/cisco-switches-in-dubai/",                            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&fit=crop" },
  { name: "Fortinet",        country: "UAE",          city: "Dubai",        region: "Middle East",   tier: "Gold",     specialization: "Network Security & Firewall",      website: "https://techbee.ae/fortinet-firewall-in-dubai/",                         image: "https://images.unsplash.com/photo-1550751827-4bd374c1f58b?w=600&h=360&fit=crop" },
  { name: "Microsoft",       country: "USA",          city: "Redmond",      region: "North America", tier: "Platinum", specialization: "Cloud, M365 & Azure",             website: "https://techbee.ae/microsoft-solution-partner-dubai",                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=360&fit=crop" },
  { name: "Dell",            country: "USA",          city: "Round Rock",   region: "North America", tier: "Gold",     specialization: "Servers & Storage Solutions",     website: "https://techbee.ae/dell-partner-in-dubai/",                              image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=360&fit=crop" },
  { name: "CrowdStrike",     country: "USA",          city: "Austin",       region: "North America", tier: "Gold",     specialization: "Endpoint Security & EDR",         website: "https://techbee.ae/crowdstrike-endpoint-security-partner-in-dubai/",     image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=360&fit=crop" },
  { name: "Veeam",           country: "Switzerland",  city: "Baar",         region: "Europe",        tier: "Silver",   specialization: "Backup & Data Recovery",          website: "https://techbee.ae/veeam-backup-replication-in-dubai/",                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop" },
  { name: "Acronis",         country: "Switzerland",  city: "Schaffhausen", region: "Europe",        tier: "Silver",   specialization: "Backup & Cyber Protection",       website: "https://techbee.ae/acronis-backup-solution-in-dubai/",                   image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=360&fit=crop" },
  { name: "Tegsoft",         country: "Turkey",       city: "Istanbul",     region: "Europe",        tier: "Gold",     specialization: "AI Contact Center",               website: "https://techbee.ae/tegsoft-partner-in-dubai/",                           image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=360&fit=crop" },
  { name: "ManageEngine",    country: "India",        city: "Chennai",      region: "Asia Pacific",  tier: "Silver",   specialization: "IT Management Solutions",         website: "https://techbee.ae/manageengine-it-solutions-in-dubai/",                 image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=360&fit=crop" },
  { name: "Cisco Africa",    country: "South Africa", city: "Johannesburg", region: "Africa",        tier: "Silver",   specialization: "Networking & Infrastructure",     website: "https://techbee.ae/cisco-switches-in-dubai/",                            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=360&fit=crop" },
  { name: "Dell LATAM",      country: "Brazil",       city: "São Paulo",    region: "Latin America", tier: "Silver",   specialization: "Servers & Storage Solutions",     website: "https://techbee.ae/dell-partner-in-dubai/",                              image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=360&fit=crop" },
  { name: "Check Point GCC", country: "Saudi Arabia", city: "Riyadh",       region: "Middle East",   tier: "Gold",     specialization: "AI Security & Threat Prevention", website: "https://techbee.ae/checkpoint-partner-in-dubai/",                        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=360&fit=crop" },
]

const REGIONS   = ["All Regions", "Middle East", "North America", "Europe", "Asia Pacific", "Africa", "Latin America"]
const COUNTRIES = ["All Countries","Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","DR Congo","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","UAE","Uganda","Ukraine","United Kingdom","USA","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]
const TIERS     = ["All Tiers", "Platinum", "Gold", "Silver"]

const TIER_COLORS = {
  Platinum: { bg: "rgba(229,229,229,0.15)", border: "rgba(200,200,200,0.6)", text: "#d0d0d0" },
  Gold:     { bg: "rgba(245,184,0,0.12)",   border: "rgba(245,184,0,0.5)",   text: "#f5b800" },
  Silver:   { bg: "rgba(160,160,160,0.12)", border: "rgba(160,160,160,0.4)", text: "#aaa"    },
}

const PARTNER_BENEFITS = [
  { icon: "💰", title: "Revenue Share",           desc: "Earn competitive margins on every deal you close with TechBee AI products." },
  { icon: "🎓", title: "Training & Certification", desc: "Access dedicated training programs and earn official TechBee AI partner certifications." },
  { icon: "🤝", title: "Sales Support",            desc: "Joint sales motions, deal registration, and dedicated partner success managers." },
  { icon: "📣", title: "Co-Marketing",             desc: "Co-branded campaigns, leads sharing, and inclusion in our partner directory." },
  { icon: "🛠️", title: "Technical Resources",     desc: "Priority technical support, sandbox environments, and early access to new features." },
  { icon: "🌍", title: "Regional Coverage",        desc: "Expand your footprint across the UAE and GCC with TechBee's established market presence." },
]

const FORM_INIT = { company: "", name: "", email: "", phone: "", country: "", type: "", products: [], message: "", agree: false }
const PRODUCT_OPTIONS = ["AI Contact Center (Tegsoft)", "AI Medical Scribe (Lyrebird)", "Intelligent Document Processing", "AI Security (Check Point)", "Contact Management (CamCard)", "B2B Quote Generation (Webishopi)"]

const VENDOR_FORM_INIT = { company: "", name: "", email: "", phone: "", country: "", productName: "", productCategory: "", website: "", description: "", agree: false }
const VENDOR_CATEGORIES = ["Cybersecurity", "Cloud & Infrastructure", "Networking", "AI & Machine Learning", "Data & Analytics", "Communication & Collaboration", "ERP & Business Software", "IoT & Hardware", "Other"]

// ── shared input style ────────────────────────────────────────────────────────
const iCls = {
  width: "100%", borderRadius: 10, padding: "11px 14px", fontSize: 14,
  color: "#fff", background: "#0d0d0d", border: "1px solid #1f1f1f",
  outline: "none", transition: "border-color 0.2s", boxSizing: "border-box",
}
const iFocus = e => { e.target.style.borderColor = "rgba(245,184,0,0.5)" }
const iBlur  = e => { e.target.style.borderColor = "#1f1f1f" }

// ── VendorForm ────────────────────────────────────────────────────────────────
function VendorForm() {
  const [form, setForm]           = useState(VENDOR_FORM_INIT)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState("")

  const handleForm = e => {
    const { name, value, type: t, checked } = e.target
    setForm(p => ({ ...p, [name]: t === "checkbox" ? checked : value }))
  }

  const handleSubmit = () => {
    setError("")
    if (!form.company || !form.name || !form.email || !form.productName || !form.productCategory || !form.agree) {
      setError("Please fill in all required fields and agree to the terms.")
      return
    }
    setLoading(true)
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE_PARTNER,
      {
        from_name:    form.name,
        company:      form.company,
        email:        form.email,
        phone:        form.phone || "Not provided",
        country:      form.country || "Not specified",
        partner_type: "Vendor Application",
        products:     `${form.productName} (${form.productCategory})`,
        message:      `Website: ${form.website || "N/A"}\n\n${form.description || "No description"}`,
        subject:      `New Vendor Application — ${form.company}`,
        to_email:     "sales@techbee.ae",
      },
      process.env.REACT_APP_EMAILJS_KEY
    )
    .then(() => { setSubmitted(true); setLoading(false) })
    .catch(err => {
      console.error(err)
      setError("Something went wrong. Please try again or email sales@techbee.ae")
      setLoading(false)
    })
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
        style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.3)", borderRadius: 20, padding: "60px 40px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 20 }}>🎉</div>
        <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Vendor Application Received!</h3>
        <p style={{ color: "#777", fontSize: 14, lineHeight: 1.75, maxWidth: 420, margin: "0 auto 12px" }}>
          Our team will review your product and get back to you within 2 business days.
        </p>
        <p style={{ color: "#555", fontSize: 13, marginBottom: 32 }}>
          Confirmation sent to <span style={{ color: "#f5b800" }}>{form.email}</span>
        </p>
        <button onClick={() => { setSubmitted(false); setForm(VENDOR_FORM_INIT) }}
          style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          Submit Another
        </button>
      </motion.div>
    )
  }

  return (
    <div style={{ background: "#080808", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "36px", boxShadow: "0 0 60px rgba(245,184,0,0.06)" }}>
      <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 24 }}>Vendor Application Form</h3>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        {[
          { label: "Company Name *",   name: "company", placeholder: "Your company name"  },
          { label: "Full Name *",      name: "name",    placeholder: "Your full name"      },
          { label: "Business Email *", name: "email",   placeholder: "you@company.com"     },
          { label: "Phone Number",     name: "phone",   placeholder: "+971 XX XXX XXXX"    },
        ].map(f => (
          <label key={f.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{f.label}</span>
            <input name={f.name} value={form[f.name]} onChange={handleForm} placeholder={f.placeholder}
              style={iCls} onFocus={iFocus} onBlur={iBlur} />
          </label>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Product / Solution Name *</span>
          <input name="productName" value={form.productName} onChange={handleForm} placeholder="e.g. CloudGuard AI"
            style={iCls} onFocus={iFocus} onBlur={iBlur} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Product Category *</span>
          <select name="productCategory" value={form.productCategory} onChange={handleForm}
            style={{ ...iCls, appearance: "none", cursor: "pointer", color: form.productCategory ? "#fff" : "#4a4a4a" }}
            onFocus={iFocus} onBlur={iBlur}>
            <option value="" disabled>Select category</option>
            {VENDOR_CATEGORIES.map(c => <option key={c} value={c} style={{ background: "#0d0d0d" }}>{c}</option>)}
          </select>
        </label>
      </div>

      <label style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Product Website</span>
        <input name="website" value={form.website} onChange={handleForm} placeholder="https://yourproduct.com"
          style={iCls} onFocus={iFocus} onBlur={iBlur} />
      </label>

      <label style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Product Description</span>
        <textarea name="description" value={form.description} onChange={handleForm}
          placeholder="Briefly describe your product, target market, and why TechBee should carry it..."
          style={{ ...iCls, height: 100, resize: "none" }} onFocus={iFocus} onBlur={iBlur} />
      </label>

      <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: 20 }}>
        <div style={{ position: "relative", width: 18, height: 18, flexShrink: 0 }}>
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleForm}
            style={{ width: 18, height: 18, appearance: "none", borderRadius: "50%", border: "1px solid #2a2a2a", background: form.agree ? "#f5b800" : "#0d0d0d", cursor: "pointer", transition: "all 0.15s" }} />
          {form.agree && <svg style={{ position: "absolute", top: 2, left: 2, pointerEvents: "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
        </div>
        <span style={{ color: "#888", fontSize: 13 }}>I agree to the TechBee vendor program terms and privacy policy</span>
      </label>

      {error && (
        <div style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 16, color: "#f87171", fontSize: 13 }}>
          ⚠️ {error}
        </div>
      )}

      <motion.button
        whileHover={{ scale: loading ? 1 : 1.015, boxShadow: loading ? "none" : "0 0 40px rgba(245,184,0,0.45)" }}
        whileTap={{ scale: loading ? 1 : 0.985 }}
        onClick={handleSubmit} disabled={loading}
        style={{ width: "100%", background: loading ? "#a37e00" : "#f5b800", color: "#000", fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 12, border: "none", cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "background 0.2s" }}>
        {loading
          ? <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/></path></svg>Sending...</>
          : "Submit Vendor Application →"
        }
      </motion.button>
    </div>
  )
}

// ── PartnerCard ───────────────────────────────────────────────────────────────
function PartnerCard({ partner }) {
  const tc = TIER_COLORS[partner.tier]
  return (
    <motion.article whileHover={{ y: -5 }} transition={{ duration: 0.2 }}
      style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 18, overflow: "hidden", display: "flex", flexDirection: "column" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.45)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(245,184,0,0.1)" }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.18)"; e.currentTarget.style.boxShadow = "none" }}>
      <div style={{ position: "relative", height: 168, overflow: "hidden", background: "#111" }}>
        <img src={partner.image} alt={partner.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
        <span style={{ position: "absolute", top: 12, right: 12, background: tc.bg, border: `1px solid ${tc.border}`, color: tc.text, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 20 }}>
          {partner.tier}
        </span>
      </div>
      <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ color: "#f5b800", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>{partner.region}</p>
        <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 6, letterSpacing: "-0.02em" }}>{partner.name}</h3>
        <p style={{ color: "#888", fontSize: 13, marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {partner.city}, {partner.country}
        </p>
        <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, marginBottom: 18, flex: 1 }}>{partner.specialization}</p>
        <a href={partner.website} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#f5b800", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
          View partner
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </motion.article>
  )
}

// ── WorldMap ──────────────────────────────────────────────────────────────────
function WorldMap({ partners, activeRegion }) {
  const regionDots = [
    { region: "Middle East",   x: "56%", y: "42%" },
    { region: "North America", x: "17%", y: "30%" },
    { region: "Europe",        x: "47%", y: "25%" },
    { region: "Asia Pacific",  x: "75%", y: "38%" },
    { region: "Africa",        x: "48%", y: "58%" },
    { region: "Latin America", x: "22%", y: "60%" },
  ]
  const cityDots = [
    {x:"12%",y:"26%"},{x:"19%",y:"24%"},{x:"23%",y:"31%"},{x:"15%",y:"33%"},{x:"26%",y:"27%"},{x:"9%",y:"21%"},{x:"28%",y:"34%"},{x:"21%",y:"37%"},{x:"14%",y:"29%"},{x:"24%",y:"22%"},
    {x:"43%",y:"19%"},{x:"47%",y:"21%"},{x:"50%",y:"23%"},{x:"45%",y:"27%"},{x:"41%",y:"23%"},{x:"49%",y:"29%"},{x:"52%",y:"21%"},{x:"54%",y:"25%"},{x:"44%",y:"30%"},{x:"51%",y:"27%"},
    {x:"53%",y:"38%"},{x:"57%",y:"40%"},{x:"59%",y:"44%"},{x:"56%",y:"46%"},{x:"51%",y:"43%"},{x:"61%",y:"39%"},{x:"55%",y:"48%"},{x:"58%",y:"36%"},
    {x:"45%",y:"48%"},{x:"49%",y:"52%"},{x:"51%",y:"60%"},{x:"43%",y:"62%"},{x:"47%",y:"66%"},{x:"53%",y:"54%"},{x:"46%",y:"70%"},{x:"50%",y:"44%"},
    {x:"69%",y:"29%"},{x:"73%",y:"33%"},{x:"77%",y:"35%"},{x:"79%",y:"31%"},{x:"75%",y:"42%"},{x:"81%",y:"39%"},{x:"84%",y:"33%"},{x:"71%",y:"43%"},{x:"78%",y:"46%"},{x:"82%",y:"44%"},{x:"86%",y:"37%"},{x:"70%",y:"36%"},
    {x:"59%",y:"17%"},{x:"65%",y:"15%"},{x:"71%",y:"17%"},{x:"77%",y:"19%"},{x:"63%",y:"20%"},{x:"69%",y:"22%"},
    {x:"23%",y:"54%"},{x:"25%",y:"64%"},{x:"21%",y:"69%"},{x:"27%",y:"59%"},{x:"29%",y:"68%"},{x:"20%",y:"56%"},
    {x:"79%",y:"67%"},{x:"83%",y:"64%"},{x:"81%",y:"71%"},{x:"77%",y:"72%"},
  ]
  return (
    <div style={{ position: "relative", width: "100%", background: "#050505", borderRadius: 20, border: "1px solid rgba(245,184,0,0.15)", overflow: "hidden", padding: "32px 28px" }}>
      <div style={{ position: "absolute", top: "30%", left: "60%", width: 300, height: 200, background: "radial-gradient(ellipse, rgba(245,184,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>GLOBAL REACH</p>
      <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 24 }}>
        <span style={{ color: "#f5b800" }}>Worldwide</span> Partners
      </h3>
      <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", lineHeight: 0 }}>
        <img src="/world_map.png" alt="World Map" style={{ width: "100%", display: "block", borderRadius: 12 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,15,0.15)", borderRadius: 12, pointerEvents: "none" }} />
        {cityDots.map((dot, i) => (
          <div key={`c${i}`} style={{ position: "absolute", left: dot.x, top: dot.y, transform: "translate(-50%,-50%)", zIndex: 5 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(245,184,0,0.65)", boxShadow: "0 0 5px rgba(245,184,0,0.5)" }} />
          </div>
        ))}
        {regionDots.map((dot, i) => {
          const isActive = activeRegion === "All Regions" || activeRegion === dot.region
          return (
            <div key={`r${i}`} style={{ position: "absolute", left: dot.x, top: dot.y, transform: "translate(-50%,-50%)", zIndex: 10 }}>
              {isActive && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(245,184,0,0.45)", animation: "mapPulse 2s ease-out infinite" }} />}
              <div style={{ width: 13, height: 13, borderRadius: "50%", background: isActive ? "#f5b800" : "rgba(245,184,0,0.3)", border: `2px solid ${isActive ? "#fff" : "rgba(245,184,0,0.2)"}`, boxShadow: isActive ? "0 0 16px rgba(245,184,0,0.9)" : "none", position: "relative", zIndex: 1, transition: "all 0.3s" }} />
            </div>
          )
        })}
      </div>
      <style>{`@keyframes mapPulse { 0% { transform:translate(-50%,-50%) scale(1); opacity:0.8; } 100% { transform:translate(-50%,-50%) scale(3.5); opacity:0; } }`}</style>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Partnership() {
  const [search, setSearch]       = useState("")
  const [region, setRegion]       = useState("All Regions")
  const [country, setCountry]     = useState("All Countries")
  const [tier, setTier]           = useState("All Tiers")
  const [form, setForm]           = useState(FORM_INIT)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState("")

  const handleForm = e => {
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
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE_PARTNER,
      {
        from_name:    form.name,
        company:      form.company,
        email:        form.email,
        phone:        form.phone || "Not provided",
        country:      form.country,
        partner_type: form.type,
        products:     form.products.length > 0 ? form.products.join(", ") : "Not specified",
        message:      form.message || "No message provided",
        subject:      `New Partner Application — ${form.company}`,
        to_email:     "sales@techbee.ae",
      },
      process.env.REACT_APP_EMAILJS_KEY
    )
    .then(() => { setSubmitted(true); setLoading(false) })
    .catch(err => {
      console.error("EmailJS error:", err)
      setError("Something went wrong. Please try again or email sales@techbee.ae")
      setLoading(false)
    })
  }

  const isFiltering = search.trim().length > 0 || country !== "All Countries" || tier !== "All Tiers"

  const filtered = PARTNER_DATA.filter(p => {
    const q = search.trim().toLowerCase()
    return (
      (country === "All Countries" || p.country === country) &&
      (tier    === "All Tiers"     || p.tier    === tier)    &&
      (!q || p.region.toLowerCase().includes(q) || p.country.toLowerCase().includes(q) || p.city.toLowerCase().includes(q) || p.name.toLowerCase().includes(q))
    )
  })

  const mapActiveRegion = (() => {
    const q = search.trim().toLowerCase()
    return REGIONS.find(r => r !== "All Regions" && q.includes(r.toLowerCase())) || region
  })()

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

            {/* Find a Partner — gold filled */}
            <motion.a whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.6)" }} whileTap={{ scale: 0.97 }}
              href="#our-partners"
              style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "13px 36px", textDecoration: "none", display: "inline-block", boxShadow: "0 0 28px rgba(245,184,0,0.4)" }}>
              Find a Partner →
            </motion.a>

            {/* Become a Partner — gold outline */}
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="#become-partner"
              style={{ background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 36px", border: "1px solid rgba(245,184,0,0.4)", textDecoration: "none", display: "inline-block" }}>
              Become a Partner
            </motion.a>

            {/* Become a Vendor — subtle gold */}
            <motion.a
              whileHover={{ scale: 1.04, background: "rgba(245,184,0,0.15)", borderColor: "#f5b800" }}
              whileTap={{ scale: 0.97 }}
              href="#become-vendor"
              style={{ background: "rgba(245,184,0,0.08)", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 36px", border: "1px solid rgba(245,184,0,0.35)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Become a Vendor
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ══ CERTIFIED PARTNERS ══ */}
      <section id="our-partners" style={{ padding: "80px 24px", background: "#000", scrollMarginTop: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>PARTNERS</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 48 }}>
            Our <span style={{ color: "#f5b800" }}>Certified Partners</span>
          </h2>

          {/* Filters */}
          <div style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 16, padding: "24px", marginBottom: 32 }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 12, alignItems: "end" }}>
              <div>
                <p style={{ color: "#888", fontSize: 12, marginBottom: 8, fontWeight: 600 }}>Search by Region</p>
                <div style={{ position: "relative" }}>
                  <svg style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input value={search} onChange={e => setSearch(e.target.value)} placeholder="e.g. Middle East, Europe, Asia..."
                    style={{ ...iCls, paddingLeft: 38 }} onFocus={iFocus} onBlur={iBlur} />
                </div>
              </div>
              <div>
                <p style={{ color: "#888", fontSize: 12, marginBottom: 8, fontWeight: 600 }}>Country</p>
                <select value={country} onChange={e => setCountry(e.target.value)}
                  style={{ ...iCls, appearance: "none", cursor: "pointer" }} onFocus={iFocus} onBlur={iBlur}>
                  {COUNTRIES.map(c => <option key={c} value={c} style={{ background: "#0d0d0d" }}>{c}</option>)}
                </select>
              </div>
              <div>
                <p style={{ color: "#888", fontSize: 12, marginBottom: 8, fontWeight: 600 }}>Partner Level</p>
                <select value={tier} onChange={e => setTier(e.target.value)}
                  style={{ ...iCls, appearance: "none", cursor: "pointer" }} onFocus={iFocus} onBlur={iBlur}>
                  {TIERS.map(t => <option key={t} value={t} style={{ background: "#0d0d0d" }}>{t}</option>)}
                </select>
              </div>
            </div>
            <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {isFiltering && <p style={{ color: "#555", fontSize: 13, margin: 0 }}>{filtered.length} partner{filtered.length !== 1 ? "s" : ""} found</p>}
              <button onClick={() => { setSearch(""); setRegion("All Regions"); setCountry("All Countries"); setTier("All Tiers") }}
                style={{ background: "none", border: "none", color: "#f5b800", fontSize: 13, cursor: "pointer", fontWeight: 600, marginLeft: "auto" }}>
                Clear filters
              </button>
            </div>
          </div>

          {/* Partner cards — show only when filtering */}
          <AnimatePresence mode="wait">
            {!isFiltering ? (
              <motion.div key="hint" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                style={{ background: "#0a0a0a", border: "1px dashed rgba(245,184,0,0.25)", borderRadius: 16, padding: "36px 28px", textAlign: "center", marginBottom: 8 }}>
                <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>Find partners near you</p>
                <p style={{ color: "#777", fontSize: 14, lineHeight: 1.75, margin: "0 auto", maxWidth: 480 }}>
                  Search by region (e.g. Middle East, Europe) or pick a country from the list to see certified partners in that area.
                </p>
              </motion.div>
            ) : filtered.length > 0 ? (
              <motion.div key="results" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} style={{ marginBottom: 8 }}>
                <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>Partners in your search</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                  {filtered.map((p, i) => (
                    <motion.div key={`${p.name}-${p.country}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                      <PartnerCard partner={p} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 16, padding: "40px 28px", textAlign: "center", marginBottom: 8 }}>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>No partners found</p>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: 0 }}>Try another region name or country — we cover 195 countries through our global partner network.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* World Map */}
          <div style={{ marginTop: 40, marginBottom: 40 }}>
            <WorldMap partners={PARTNER_DATA} activeRegion={mapActiveRegion} />
          </div>

          <div style={{ background: "rgba(245,184,0,0.04)", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 14, padding: "20px 28px", textAlign: "center" }}>
            <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              All partnerships are authorized and managed directly by <span style={{ color: "#ddd", fontWeight: 600 }}>TechBee IT & Designs LLC</span>. For procurement, demos, or support contact{" "}
              <a href="mailto:sales@techbee.ae" style={{ color: "#f5b800", textDecoration: "none", fontWeight: 600 }}>sales@techbee.ae</a>
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHY PARTNER ══ */}
      <section style={{ padding: "80px 24px", background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>WHY PARTNER WITH US</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 48 }}>
            Everything You Need to <span style={{ color: "#f5b800" }}>Succeed</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {PARTNER_BENEFITS.map((b, i) => (
              <motion.div key={i} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
                style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "28px 24px" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{b.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </motion.div>
            ))}
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
              <p style={{ color: "#777", fontSize: 15, lineHeight: 1.75, maxWidth: 480, margin: "0 auto 12px" }}>Our partnership team will review your application and reach out within 1 business day.</p>
              <p style={{ color: "#555", fontSize: 13, marginBottom: 32 }}>A confirmation has been sent to <span style={{ color: "#f5b800" }}>{form.email}</span></p>
              <button onClick={() => { setSubmitted(false); setForm(FORM_INIT) }}
                style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "13px 32px", borderRadius: 50, border: "none", cursor: "pointer" }}>
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <div style={{ background: "#080808", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "40px", boxShadow: "0 0 60px rgba(245,184,0,0.06)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                {[
                  { label: "Company Name *",   name: "company", placeholder: "Your company name"  },
                  { label: "Full Name *",       name: "name",    placeholder: "Your full name"     },
                  { label: "Business Email *",  name: "email",   placeholder: "you@company.com"    },
                  { label: "Phone Number",      name: "phone",   placeholder: "+971 XX XXX XXXX"   },
                ].map(f => (
                  <label key={f.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{f.label}</span>
                    <input name={f.name} value={form[f.name]} onChange={handleForm} placeholder={f.placeholder}
                      style={iCls} onFocus={iFocus} onBlur={iBlur} />
                  </label>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Country *</span>
                  <select name="country" value={form.country} onChange={handleForm}
                    style={{ ...iCls, appearance: "none", cursor: "pointer", color: form.country ? "#fff" : "#4a4a4a" }}
                    onFocus={iFocus} onBlur={iBlur}>
                    <option value="" disabled>Select country</option>
                    {["UAE","Saudi Arabia","Qatar","Kuwait","Oman","Bahrain","Other"].map(c => <option key={c} value={c} style={{ background: "#0d0d0d" }}>{c}</option>)}
                  </select>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Partnership Type *</span>
                  <select name="type" value={form.type} onChange={handleForm}
                    style={{ ...iCls, appearance: "none", cursor: "pointer", color: form.type ? "#fff" : "#4a4a4a" }}
                    onFocus={iFocus} onBlur={iBlur}>
                    <option value="" disabled>Select type</option>
                    {["Technology Partner","Reseller","Distributor","System Integrator","Referral Partner"].map(t => <option key={t} value={t} style={{ background: "#0d0d0d" }}>{t}</option>)}
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
                        {form.products.includes(prod) && <svg style={{ position: "absolute", top: 2, left: 2, pointerEvents: "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
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
                  style={{ ...iCls, height: 120, resize: "none" }} onFocus={iFocus} onBlur={iBlur} />
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: 20 }}>
                <div style={{ position: "relative", width: 18, height: 18, flexShrink: 0 }}>
                  <input type="checkbox" name="agree" checked={form.agree} onChange={handleForm}
                    style={{ width: 18, height: 18, appearance: "none", borderRadius: "50%", border: "1px solid #2a2a2a", background: form.agree ? "#f5b800" : "#0d0d0d", cursor: "pointer", transition: "all 0.15s" }} />
                  {form.agree && <svg style={{ position: "absolute", top: 2, left: 2, pointerEvents: "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                </div>
                <span style={{ color: "#888", fontSize: 13 }}>I agree to the TechBee AI partner program terms and privacy policy</span>
              </label>
              {error && <div style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 20, color: "#f87171", fontSize: 13 }}>⚠️ {error}</div>}
              <motion.button
                whileHover={{ scale: loading ? 1 : 1.015, boxShadow: loading ? "none" : "0 0 44px rgba(245,184,0,0.5)" }}
                whileTap={{ scale: loading ? 1 : 0.985 }}
                onClick={handleSubmit} disabled={loading}
                style={{ width: "100%", background: loading ? "#a37e00" : "#f5b800", color: "#000", fontWeight: 700, fontSize: 15, padding: "15px", borderRadius: 12, border: "none", cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 0 24px rgba(245,184,0,0.22)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "background 0.2s" }}>
                {loading ? (<><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/></path></svg>Sending...</>) : "Submit Partnership Application"}
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* ══ BECOME A VENDOR ══ */}
      <section id="become-vendor" style={{ padding: "80px 24px", background: "#050505", scrollMarginTop: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>VENDOR PROGRAM</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 8 }}>
            List Your Product as a <span style={{ color: "#f5b800" }}>TechBee Vendor</span>
          </h2>
          <p style={{ textAlign: "center", color: "#666", fontSize: 14, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 56px" }}>
            Are you a vendor looking to reach enterprise customers across the UAE and GCC? Get listed in our certified vendor directory and start generating qualified leads.
          </p>

          {/* Vendor benefits */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 56 }}>
            {[
              { icon: "🏪", title: "Get Listed",     desc: "Appear in our certified partner directory seen by enterprise buyers across UAE & GCC." },
              { icon: "📢", title: "Co-Marketing",    desc: "Featured in TechBee campaigns, newsletters, and events to maximize your brand reach." },
              { icon: "🤝", title: "Joint Sales",     desc: "TechBee's sales team actively promotes and resells your products to their client base." },
              { icon: "📊", title: "Lead Generation", desc: "Receive qualified inbound leads from TechBee's network of 500+ enterprise customers." },
            ].map((b, i) => (
              <motion.div key={i} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
                style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.14)", borderRadius: 16, padding: "24px 20px", textAlign: "center" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.14)"}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{b.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Two column — requirements + form */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 40, alignItems: "start" }}>
            <div style={{ background: "#0a0a0a", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 20, padding: "32px 28px" }}>
              <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Vendor Requirements</h3>
              {[
                "Registered technology company",
                "Valid product or SaaS solution",
                "UAE or GCC market presence preferred",
                "Willing to co-market with TechBee",
                "Technical documentation available",
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6 }}>{r}</span>
                </div>
              ))}
              <div style={{ marginTop: 28, padding: "18px", background: "rgba(245,184,0,0.05)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 12 }}>
                <p style={{ color: "#f5b800", fontSize: 12, fontWeight: 700, marginBottom: 6 }}>📧 Direct Contact</p>
                <p style={{ color: "#888", fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                  Prefer to email directly?{" "}
                  <a href="mailto:sales@techbee.ae" style={{ color: "#f5b800", textDecoration: "none", fontWeight: 600 }}>sales@techbee.ae</a>
                </p>
              </div>
            </div>
            <VendorForm />
          </div>
        </div>
      </section>

      {/* ══ FOOTER CTA ══ */}
      <section style={{ padding: "80px 24px", background: "#000", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Already a Partner? <span style={{ color: "#f5b800" }}>Get Support</span>
          </h2>
          <p style={{ color: "#666", fontSize: 14, lineHeight: 1.75, marginBottom: 32 }}>Access the partner portal, training resources, and your dedicated partner success manager.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:sales@techbee.ae" style={{ background: "#f5b800", color: "#000", fontWeight: 700, fontSize: 14, padding: "13px 32px", borderRadius: 50, textDecoration: "none", display: "inline-block" }}>Email Partner Team</a>
            <a href="tel:+97142434882" style={{ background: "transparent", color: "#f5b800", fontWeight: 600, fontSize: 14, padding: "12px 32px", borderRadius: 50, border: "1px solid rgba(245,184,0,0.4)", textDecoration: "none", display: "inline-block" }}>+971 4 243 4882</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
