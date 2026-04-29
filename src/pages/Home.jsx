import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "../components/Navbar"
import BrainBackground from "../components/BrainBackground"
import MouseGlow from "../components/MouseGlow"

// ── Scroll to contact helper ───────────────────────────────────────────────────
const goToContact = () => {
  const el = document.getElementById("contact")
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

// ── WHY TECHBEE data ──────────────────────────────────────────────────────────
const WHY_DATA = [
  {
    n: "01", title: "AI Innovation",
    desc: "Continuously retrained models built on latest AI Research",
    gradient: "linear-gradient(90deg, #f5a623 0%, #f5d020 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
  {
    n: "02", title: "Scalable Architecture",
    desc: "From 50 to 50,000 users — no re-platforming needed",
    gradient: "linear-gradient(90deg, #1a9fe0 0%, #6dd5fa 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    n: "03", title: "Enterprise Security",
    desc: "SOC2, GDPR, HIPAA compliant · AES-256 encrypted",
    gradient: "linear-gradient(90deg, #833ab4 0%, #fd1d7c 50%, #fcb045 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    n: "04", title: "Dedicated Support",
    desc: "Onboarding, CSM, and SLA-backed technical assistance",
    gradient: "linear-gradient(90deg, #00b09b 0%, #96c93d 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    n: "05", title: "Global & Multilingual",
    desc: "50+ languages · region-specific customization",
    gradient: "linear-gradient(90deg, #f7971e 0%, #ffd200 50%, #f7971e 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    n: "06", title: "Seamless Integrations",
    desc: "Salesforce, SAP, EMR, HubSpot, Zendesk & 100+ more",
    gradient: "linear-gradient(90deg, #4776e6 0%, #8e54e9 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
]

function Marquee({ text, gradient }) {
  const repeated = Array(12).fill(`${text}  ·  `)
  return (
    <div style={{ width: "100%", height: 72, background: gradient, overflow: "hidden", display: "flex", alignItems: "center" }}>
      <motion.div animate={{ x: [0, -1400] }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} style={{ display: "flex", whiteSpace: "nowrap" }}>
        {[...repeated, ...repeated].map((t, i) => (
          <span key={i} style={{ fontSize: 16, fontWeight: 600, color: "rgba(0,0,0,0.6)", paddingRight: 48 }}>{t}</span>
        ))}
      </motion.div>
    </div>
  )
}

function WhyRow({ w, isLast }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ borderBottom: !isLast ? "1px solid rgba(255,255,255,0.05)" : "none", overflow: "hidden", cursor: "default" }}>
      <AnimatePresence mode="wait">
        {hovered ? (
          <motion.div key="marquee" initial={{ opacity: 0, scaleY: 0.6 }} animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.6 }} transition={{ duration: 0.22 }} style={{ transformOrigin: "top" }}>
            <Marquee text={w.desc} gradient={w.gradient} />
          </motion.div>
        ) : (
          <motion.div key="row" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 0.18 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 28px", gap: 12, maxWidth: 820, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 120, justifyContent: "flex-start", paddingLeft: 16 }}>
              <div style={{ color: "rgba(255,255,255,0.18)", fontSize: 12, fontFamily: "monospace", letterSpacing: "0.52em", textTransform: "uppercase", textAlign: "center", lineHeight: 1, minWidth: 40 }}>{w.n}</div>
              <div style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: "rgba(255,187,0,0.26)", border: "1px solid rgb(255,187,0)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{w.icon}</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, lineHeight: 1.25, margin: 0, letterSpacing: "-0.01em" }}>{w.title}</h3>
              <p style={{ color: "#9b9b9b", fontSize: 14, lineHeight: 1.7, marginTop: 6, marginBottom: 0, letterSpacing: "0.01em" }}>{w.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function WhySection() {
  return (
    <section id="why" className="py-[112px] px-6" style={{ background: "#000" }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>
          WHY TECHBEE?
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          style={{ textAlign: "center", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 56, color: "#ffffff" }}>
          <span style={{ color: "#f5b800" }}>The AI Partner Built for </span>Enterprise Scale
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 24, overflow: "hidden", boxShadow: "0 0 120px rgba(245,184,0,0.06)" }}>
          {WHY_DATA.map((w, i) => <WhyRow key={i} w={w} isLast={i === WHY_DATA.length - 1} />)}
        </motion.div>
      </div>
    </section>
  )
}

// ── Assets ────────────────────────────────────────────────────────────────────
const LOGO_IMG      = "https://framerusercontent.com/images/lyszrRNqAQlPxY5yLXK4YieTqM.png"
const BRAIN_IMG     = "https://framerusercontent.com/images/iuqtZdxTFuhutGpJoq0zkLbFw.png"
const SOLUTIONS_IMG = "https://framerusercontent.com/images/IbtmEAV90Ebw8hTtTH4Z8Kyuc74.png"

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(end, decimals = 0, duration = 2000) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true
      obs.disconnect()
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        const cur = eased * end
        setVal(decimals ? parseFloat(cur.toFixed(decimals)) : Math.floor(cur))
        if (p < 1) requestAnimationFrame(tick)
        else setVal(end)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, decimals, duration])
  return [val, ref]
}

// ── Data ──────────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { quote: "Tegsoft AI Agent reduced our call center costs by 45% in the first quarter. The quality of conversations genuinely impresses our customers.", name: "Ahmed Al Rashid", role: "COO · Tegsoft", avatar: "A" },
  { quote: "Lyrebird AI saves me nearly 2 hours of documentation every single day. I finish my shift on time now — something that hasn't happened in years.", name: "Dr. James Okafor", role: "General Practitioner · City Medical Centre", avatar: "J" },
  { quote: "IDP cut our invoice processing time from 4 days to 4 hours. The accuracy is outstanding — genuinely better than our manual team.", name: "Priya Sharma", role: "CFO · Logistics Plus", avatar: "P" },
]

const COUNTRY_OPTIONS = ["UAE", "India", "Saudi Arabia", "Qatar", "Kuwait", "Oman"]
const PRODUCT_OPTIONS = ["AI Powered Contact Management", "AI Contact Center Solutions", "AI-Powered Medical Intelligence", "Intelligent Document Processing", "On-Premise LLM Deployment", "AI Security", "AI-Powered Quote Generation", "All"]

const PRODUCTS = [
  { route: "/camcard", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>, title: "AI Powered Contact Management", subtitle: "Smart Contact Solutions", desc: "Digitize and manage business cards effortlessly using intelligent OCR and data extraction. CamCard AI helps you organize contacts, eliminate manual entry, and streamline networking." },
  { route: "/tegsoft", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>, title: "AI Contact Center Solutions", subtitle: "Cloud Contact Center", desc: "Cloud-based contact center with VoiceChannel, OmniChannel, and AIChannel. Features IVR, predictive dialers, multi-channel support, and AI-powered agents." },
  { route: "/lyrebird", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#f5b800"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 0 1-2.05-.56v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.14A9.07 9.07 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0 0 23 3z"/></svg>, title: "AI-Powered Medical Intelligence", subtitle: "Healthcare AI Solutions", desc: "Lyrebird AI leverages advanced artificial intelligence to support healthcare professionals with data-driven insights, medical analysis, and intelligent decision support systems." },
  { route: "/idp", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, title: "Intelligent Document Processing (IDP)", subtitle: "Document Automation", desc: "Automate document processing using AI-powered data extraction, classification, and validation. Save time and eliminate errors in handling business documents." },
  { route: "/on-premise", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/></svg>, title: "On-Premise LLM Deployment", subtitle: "Private AI Infrastructure", desc: "Deploy large language models on your own infrastructure for complete data privacy, compliance control, and customized AI solutions tailored to your enterprise needs." },
  { route: "/security", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>, title: "AI Security", subtitle: "Intelligent Protection", desc: "Protect your business with AI-powered security solutions that detect threats, prevent breaches, and ensure comprehensive data protection across your digital infrastructure." },
  { route: "/quote", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>, title: "AI-Powered Quote Generation", subtitle: "Webishopi - B2B IT Procurement", desc: "UAE's leading B2B platform for IT product quotations. Features AI Product Search (upload BOQ for instant matches), quick quotes, verified suppliers, and expert support. Learn more at webishopi.com" },
]

const PARTNER_BENEFITS = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: "Co-Sell Program", desc: "Joint go-to-market strategy with dedicated partner success managers and shared revenue opportunities." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title: "Technical Integration", desc: "Full API access, sandbox environments, and dedicated technical support for seamless integration." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, title: "Partner Certification", desc: "Official TechBee AI certification program with training, exams, and verified partner badge." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: "Performance Analytics", desc: "Real-time partner dashboard tracking leads, conversions, and revenue with full attribution." },
]
const PARTNER_LOGOS = [
  { name: "Salesforce", logo: "SF" }, { name: "SAP", logo: "SAP" },
  { name: "HubSpot", logo: "HS" },   { name: "Zendesk", logo: "ZD" },
  { name: "Microsoft", logo: "MS" }, { name: "AWS", logo: "AWS" },
]

const PLANS = [
  { name: "Starter", price: "49", period: "/mo", desc: "Perfect for small teams getting started with AI automation.", features: ["Up to 5 users", "AI Powered Contact Management — 500 scans/mo", "Basic support automation", "Email support", "API access"], cta: "Get Started", featured: false },
  { name: "Professional", price: "199", period: "/mo", desc: "For growing businesses that need full AI power across teams.", features: ["Up to 50 users", "All 7 AI products included", "AI-Powered Medical Intelligence", "IDP — 5,000 docs/mo", "Priority support + CSM", "Custom integrations", "Analytics dashboard"], cta: "Start Free Trial", featured: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "Tailored solutions for large organizations with compliance needs.", features: ["Unlimited users", "All products + white-label", "SOC2 / HIPAA compliance", "Dedicated infrastructure", "SLA-backed support", "On-premise option", "Custom AI training"], cta: "Contact Sales", featured: false },
]

const FAQS = [
  { q: "What AI products does TechBee offer?", a: "TechBee AI offers seven core products: AI Powered Contact Management, AI Contact Center Solutions, AI-Powered Medical Intelligence, Intelligent Document Processing (IDP), On-Premise LLM Deployment, AI Security, and AI-Powered Quote Generation." },
  { q: "Is there a free trial available?", a: "Yes! Our Professional plan includes a 14-day free trial with full access to all features. No credit card required to get started." },
  { q: "How does Lyrebird AI handle patient data privacy?", a: "Lyrebird AI is fully HIPAA compliant. All medical data is encrypted with AES-256, stored in region-specific servers, and never used for model training without explicit consent." },
  { q: "Can I integrate TechBee AI with my existing CRM?", a: "Absolutely. TechBee AI integrates with Salesforce, HubSpot, SAP, Zendesk, and 100+ other platforms via our REST API and pre-built connectors." },
  { q: "What kind of support is included?", a: "All plans include email support. Professional plans include a dedicated Customer Success Manager. Enterprise plans include 24/7 SLA-backed support." },
  { q: "How long does onboarding take?", a: "Most customers are fully onboarded within 5-7 business days. Enterprise customers typically take 2-4 weeks including custom integration training." },
]

const iCls = "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-[#4a4a4a] bg-[#0d0d0d] border border-[#1f1f1f] focus:outline-none focus:border-[#f5b800]/50 transition-colors duration-200"
const SLabel = ({ children }) => (
  <p className="text-[#f5b800] text-[11px] font-semibold text-center mb-5 uppercase" style={{ letterSpacing: "0.2em" }}>{children}</p>
)

// ── Shared button styles ───────────────────────────────────────────────────────
const btnPrimary = {
  background: "#f5b800", color: "#000", fontSize: 15, fontWeight: 700,
  borderRadius: 50, padding: "14px 40px", border: "none", cursor: "pointer",
  boxShadow: "0 0 28px rgba(245,184,0,0.4)", transition: "background 0.2s",
}
const btnOutline = {
  background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600,
  borderRadius: 50, padding: "13px 32px", border: "1px solid rgba(245,184,0,0.4)",
  cursor: "pointer", transition: "all 0.2s",
}

// ── Testimonials Carousel ─────────────────────────────────────────────────────
function TestimonialsCarousel() {
  const [curr, setCurr] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => { setCurr(c => (c + 1) % TESTIMONIALS.length) }, 4000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section className="py-[112px] px-6 relative overflow-hidden" style={{ background: "#080808" }}>
      <div className="max-w-[1120px] mx-auto relative z-10">
        <SLabel>TESTIMONIALS</SLabel>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 mt-20">
          <div className="w-full lg:w-[45%] flex flex-col items-start lg:mt-[50px]">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5b800]/30 bg-[#f5b800]/5 mb-10">
              <div className="w-2 h-2 rounded-full bg-[#f5b800]"></div>
              <span className="text-[#f5b800] text-[12px] font-bold uppercase tracking-widest">Client Stories</span>
            </div>
            <h2 className="font-black leading-[0.95] tracking-tighter"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.4rem, 4vw, 3.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginLeft: "-2px" }}>
              <div className="text-white">Trusted by</div>
              <div className="text-white">Teams</div>
              <div className="text-white">That</div>
              <div style={{ background: "linear-gradient(90deg, #ff6b00 0%, #f5b800 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Demand</div>
              <div style={{ background: "linear-gradient(90deg, #f5a000 0%, #f5b800 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>the Best</div>
            </h2>
          </div>
          <div className="w-full lg:w-[50%] relative min-h-[360px] mt-12 lg:mt-0 flex justify-end items-center">
            <div className="relative w-full max-w-[480px]">
              <AnimatePresence>
                {TESTIMONIALS.map((t, i) => {
                  const offset = (i - curr + TESTIMONIALS.length) % TESTIMONIALS.length
                  const isFront = offset === 0
                  return (
                    <motion.div key={i} className="absolute w-full rounded-3xl p-8" initial={false}
                      animate={{ top: offset * -22, right: offset * -22, zIndex: 30 - offset * 10, opacity: 1 }}
                      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                      style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.05)", boxShadow: isFront ? "0 40px 80px rgba(0,0,0,0.8)" : "0 10px 30px rgba(0,0,0,0.5)" }}>
                      <div className="flex gap-1.5 mb-5">
                        {[...Array(5)].map((_, idx) => <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#f5b800"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" className="mb-4">
                        <path d="M9.467 18H5.975C5.975 12.181 8.878 9.531 12.5 8L13 9.771C10.702 10.665 9.467 12 9.467 14.5V18ZM20.467 18H16.975C16.975 12.181 19.878 9.531 23.5 8L24 9.771C21.702 10.665 20.467 12 20.467 14.5V18Z" fill="#333333"/>
                      </svg>
                      <p className="text-[#a1a1aa] text-[15px] leading-[1.75] font-medium mb-6">{t.quote}</p>
                      <hr className="border-[#1a1a1a] mb-6"/>
                      <div className="flex items-center gap-4">
                        <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#f5b800] text-black text-[15px] font-bold shrink-0">{t.avatar}</div>
                        <div>
                          <p className="text-white text-[15px] font-bold leading-tight">{t.name}</p>
                          <p className="text-[#555555] text-[12px] mt-1">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#f5b800] opacity-[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"/>
    </section>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
export default function Home() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: "", email: "", company: "", address: "", jobTitle: "", country: "", phone: "", product: "", message: "", privacy: false })
  const handleForm = (e) => { const { name, value, type, checked } = e.target; setForm(p => ({ ...p, [name]: type === "checkbox" ? checked : value })) }
  const [aiProd,  aiProdRef]  = useCountUp(7, 0)
  const [clients, clientsRef] = useCountUp(20, 0)
  const [uptime,  uptimeRef]  = useCountUp(99.9, 1)
  const [openFaq,  setOpenFaq]  = useState(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMsg,  setChatMsg]  = useState("")
  const [chatSent, setChatSent] = useState(false)

  return (
    <div className="bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <MouseGlow />
      <Navbar logoSrc={LOGO_IMG} />

      {/* ══ HERO ══ */}
      <section id="home" className="relative flex items-center justify-center text-center overflow-hidden" style={{ minHeight: "100vh", paddingTop: 110, scrollMarginTop: 110 }}>
        <BrainBackground />
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <img src={BRAIN_IMG} alt="" style={{ position: "absolute", top: "44%", left: "50%", transform: "translate(-50%, -50%)", width: "clamp(420px, 50vw, 700px)", height: "clamp(420px, 70vh, 750px)", opacity: 0.52, objectFit: "contain", mixBlendMode: "screen" }}/>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: "radial-gradient(ellipse 45% 45% at 50% 44%, rgba(245,184,0,0.08) 0%, transparent 70%)" }}/>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 3, height: 140, background: "linear-gradient(to top, #000 0%, transparent 100%)" }}/>
        <div className="relative flex flex-col items-center px-6" style={{ zIndex: 10, maxWidth: 860, width: "100%", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px solid #f5b800", borderRadius: 8, padding: "8px 20px", color: "#f5b800", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", background: "rgba(0,0,0,0.38)", backdropFilter: "blur(8px)", textTransform: "uppercase", marginBottom: 20 }}>
            <span style={{ fontSize: 13, lineHeight: 1 }}>✦</span> NEXT - GEN AI SOLUTIONS
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.13 }}
            style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.8rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", color: "#ffffff", textAlign: "center", margin: 0 }}>
            Powering the Future<br />with{" "}
            <span style={{ color: "#f5b800", textShadow: "0 0 35px rgba(245,184,0,0.6), 0 0 70px rgba(245,184,0,0.25)" }}>Artificial Intelligence</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.26 }}
            style={{ marginTop: 18, color: "#eae4e4", fontSize: "clamp(0.82rem, 1.3vw, 0.95rem)", lineHeight: 1.7, maxWidth: 480, textAlign: "center" }}>
            We transform the way businesses operate — through intelligent automation, voice AI, smart document processing, and conversational agents that work around the clock.
          </motion.p>

          {/* Hero buttons — Book a Demo + Get Started */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", gap: 14, marginTop: 26, flexWrap: "wrap", justifyContent: "center" }}>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.6)" }} whileTap={{ scale: 0.97 }}
              onClick={goToContact}
              style={{ ...btnPrimary }}>
              Book a Demo →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onClick={goToContact}
              style={{ ...btnOutline }}>
              Get Started
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.54 }}
  style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "clamp(16px, 4vw, 80px)", marginTop: 60, width: "100%", maxWidth: 860 }}>

  {[{ ref: aiProdRef, val: aiProd, suffix: "", label: "AI Product" }, { ref: clientsRef, val: clients, suffix: "+", label: "Clients" }, { ref: uptimeRef, val: uptime, suffix: "%", label: "Uptime" }].map((s, i) => (
    <div key={i} ref={s.ref} style={{ position: "relative", flex: 1, minWidth: 160, maxWidth: 220 }}>

      {/* Subtle pulsing glow behind */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
        style={{ position: "absolute", inset: -8, borderRadius: 999, background: "radial-gradient(ellipse, rgba(245,184,0,0.2) 0%, transparent 70%)", filter: "blur(6px)", zIndex: 0, pointerEvents: "none" }}
      />

      {/* Pill */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "8px 28px",          /* shorter */
        borderRadius: 999,
        background: "rgba(6, 5, 2, 0.60)",   /* lighter opacity */
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(245,184,0,0.25)",   /* thinner border */
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}>
        <span style={{ color: "#f5b800", fontSize: 24, fontWeight: 700, lineHeight: 1.2 }}>
          {s.val}{s.suffix}
        </span>
        <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, marginTop: 3, fontWeight: 400 }}>
          {s.label}
        </span>
      </div>

    </div>
  ))}

</motion.div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="text-center" style={{ background: "#2b2b2b", padding: "100px 24px" }}>
        <p style={{ color: "#f5b800", fontSize: 13, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 24 }}>ABOUT US</p>
        <h2 style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ffffff", maxWidth: 860, margin: "0 auto" }}>
          Built for Businesses Ready<br />to <span style={{ color: "#f5b800" }}>Lead with AI</span>
        </h2>
        <p style={{ marginTop: 40, color: "#aaaaaa", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.8, maxWidth: 880, margin: "40px auto 0", textAlign: "center" }}>
          Techbee is a forward-thinking technology company specializing in advanced AI-powered solutions for modern businesses. We focus on automation, healthcare intelligence, voice systems, and smart communication platforms that help organizations operate smarter, faster, and more efficiently.
        </p>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section id="products" className="pb-[112px] pt-[48px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>OUR PRODUCTS</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(2.0rem, 4.0vw, 4.0rem)", fontWeight: 600, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 68, color: "#ffffff" }}>
            <span style={{ color: "#f5b800", display: "inline-block" }}>AI Products</span>
            <span style={{ display: "block" }}>That Transform</span>
          </h2>
          <div className="product-grid">
            {PRODUCTS.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="group relative overflow-hidden cursor-pointer"
                style={{ background: "rgba(10,10,10,0.95)", border: "1px solid rgba(245,184,0,0.45)", borderRadius: 30, padding: "20px 28px", minHeight: 200, boxShadow: "0 0 0 1px rgba(245,184,0,0.18), 0 26px 72px rgba(255,187,0,0.14)", transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,187,0,0.85)"; e.currentTarget.style.boxShadow = "0 0 0 1px rgba(255,187,0,0.25), 0 30px 90px rgba(255,187,0,0.22)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.45)"; e.currentTarget.style.boxShadow = "0 0 0 1px rgba(245,184,0,0.18), 0 30px 90px rgba(255,187,0,0.14)" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(255,187,0,0.09) 0%, transparent 70%)" }}/>
                <div style={{ width: 56, height: 56, borderRadius: 18, backgroundColor: "rgba(255,187,0,0.18)", border: "1px solid rgba(255,187,0,0.78)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, position: "relative", zIndex: 10, flexShrink: 0, boxShadow: "0 16px 46px rgba(255,187,0,0.12)" }}>{p.icon}</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: 10, position: "relative", zIndex: 10 }}>{p.title}</h3>
                <p style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, marginBottom: 12, position: "relative", zIndex: 10 }}>{p.subtitle}</p>
                <p style={{ color: "#f3f3f3", fontSize: 14, lineHeight: 1.75, marginBottom: 16, position: "relative", zIndex: 10 }}>{p.desc}</p>
                <div style={{ position: "relative", zIndex: 10, display: "flex", gap: 12 }}>
                  {/* Learn more → product page */}
                  <button onClick={() => navigate(p.route)}
                    style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center", gap: 6, transition: "color 0.2s, gap 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#ffc929"; e.currentTarget.style.gap = "10px" }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#f5b800"; e.currentTarget.style.gap = "6px" }}>
                    Learn more →
                  </button>
                  {/* Get Started → contact */}
                  <button onClick={goToContact}
                    style={{ color: "#888", fontSize: 13, fontWeight: 600, background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center", gap: 6, transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#f5b800"}
                    onMouseLeave={e => e.currentTarget.style.color = "#888"}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOLUTIONS ══ */}
      <section id="solutions" className="py-[80px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", textAlign: "center", marginBottom: 18 }}>SOLUTIONS</p>
          <h2 style={{ fontSize: "clamp(3.0rem,4vw,5.0rem)", fontWeight: 500, lineHeight: 1.00, letterSpacing: "-0.02em", color: "#ffffff", textAlign: "center", marginBottom: 42, marginTop: -10 }}>
            <span style={{ color: "#f5b800", display: "inline-block" }}>Real-World AI.</span>
            <span style={{ display: "block" }}>Real Business Impact.</span>
          </h2>
          <div style={{ position: "relative", paddingTop: 28 }}>
            <div className="solutions-robot">
              <img src={SOLUTIONS_IMG} alt="AI Robot" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}/>
            </div>
            <div className="solution-grid">
              {[
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.4 2 2 0 0 1 3.62 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, title: "Customer Support Automation", desc: "Replace repetitive tier-1 support with AI agents that resolve queries, process requests, and escalate intelligently — reducing support costs by up to 60%.", powered: "Powered by Tegsoft AI Agent" },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>, title: "AI Medical Documentation", desc: "Eliminate after-hours documentation burden. Lyrebird AI listens, transcribes, and generates clinical notes in under 20 seconds — saving clinicians 2–3 hours daily.", powered: "Powered by Lyrebird AI" },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 10h4M14 14h4"/></svg>, title: "Smart Business Communication", desc: "From scan to CRM in seconds. Never lose a contact, miss a follow-up, or deal with duplicate records again.", powered: "Powered by CamCard AI" },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>, title: "Document Workflow Automation", desc: "Stop manually processing invoices, contracts, and onboarding forms. IDP reads, extracts, and routes data automatically with human-level accuracy.", powered: "Powered by IDP Document Processing" },
              ].map((s, i) => (
                <motion.div key={i} whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="group relative overflow-hidden cursor-pointer"
                  style={{ background: "rgba(6,6,6,0.96)", border: "1px solid rgba(245,184,0,0.62)", borderRadius: 34, padding: "28px 32px", minHeight: 260, boxShadow: "0 0 0 1px rgba(245,184,0,0.28), 0 24px 68px rgba(245,184,0,0.18)", transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(255,187,0,0.85)"; e.currentTarget.style.boxShadow = "0 0 0 1px rgba(255,187,0,0.25), 0 30px 78px rgba(255,187,0,0.22)" }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.62)"; e.currentTarget.style.boxShadow = "0 0 0 1px rgba(245,184,0,0.28), 0 24px 68px rgba(245,184,0,0.18)" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(255,187,0,0.09) 0%, transparent 70%)" }}/>
                  <div style={{ width: 52, height: 52, borderRadius: 18, backgroundColor: "rgba(245,184,0,0.16)", border: "1px solid rgba(245,184,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, position: "relative", zIndex: 10, flexShrink: 0, boxShadow: "0 10px 24px rgba(245,184,0,0.18)" }}>{s.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: 8, position: "relative", zIndex: 10 }}>{s.title}</h3>
                  <p style={{ color: "#c7c7c7", fontSize: 14, lineHeight: 1.7, position: "relative", zIndex: 10, margin: 0 }}>{s.desc}{" "}<em style={{ fontStyle: "italic", color: "#c7c7c7" }}>{s.powered}</em></p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Solutions CTA */}
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.55)" }} whileTap={{ scale: 0.97 }}
              onClick={goToContact}
              style={{ ...btnPrimary }}>
              Book a Demo →
            </motion.button>
          </div>
        </div>
      </section>

      {/* ══ WHY TECHBEE ══ */}
      <WhySection />

      {/* ══ PARTNERSHIP ══
      <section id="partner" className="py-[112px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>PARTNERSHIP</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.9rem, 3.8vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 16, color: "#ffffff" }}>
            Grow Together with <span style={{ color: "#f5b800" }}>TechBee AI</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 560, margin: "0 auto 64px" }}>
            Join our global partner ecosystem and unlock new revenue streams, technical resources, and co-marketing opportunities.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 64 }}>
            {PARTNER_BENEFITS.map((b, i) => (
              <motion.div key={i} whileHover={{ y: -3 }} transition={{ duration: 0.2 }} className="group relative overflow-hidden cursor-pointer"
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.15)", borderRadius: 14, padding: "28px 32px", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.45)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(245,184,0,0.08)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.15)"; e.currentTarget.style.boxShadow = "none" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(245,184,0,0.07) 0%, transparent 70%)" }}/>
                <div style={{ width: 44, height: 44, borderRadius: 6, backgroundColor: "rgba(255,187,0,0.26)", border: "1px solid rgb(255,187,0)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, position: "relative", zIndex: 10 }}>{b.icon}</div>
                <h3 style={{ color: "#ffffff", fontSize: 17, fontWeight: 700, marginBottom: 8, position: "relative", zIndex: 10 }}>{b.title}</h3>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0, position: "relative", zIndex: 10 }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "#555", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28 }}>TRUSTED BY LEADING PLATFORMS</p>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(90deg, #0a0a0a, transparent)", zIndex: 10 }}/>
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(-90deg, #0a0a0a, transparent)", zIndex: 10 }}/>
            <motion.div animate={{ x: [0, -700] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ display: "flex", gap: 20, width: "max-content" }}>
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 160, height: 56, borderRadius: 12, background: "#111", border: "1px solid rgba(245,184,0,0.12)", padding: "0 24px", flexShrink: 0 }}>
                  <span style={{ color: "#f5b800", fontSize: 14, fontWeight: 700 }}>{p.logo}</span>
                  <span style={{ color: "#a3a1a1", fontSize: 13, marginLeft: 8 }}>{p.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Become a Partner → contact */}
          {/* <div style={{ textAlign: "center", marginTop: 64, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.55)" }} whileTap={{ scale: 0.97 }}
              onClick={goToContact}
              style={{ ...btnPrimary }}>
              Become a Partner →
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={goToContact}
              style={{ ...btnOutline }}>
              Get Started
            </motion.button>
          </div>
        </div>
      </section> */} 

      {/* ══ PRICING ══ */}
      <section id="pricing" className="py-[112px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>PRICING</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.9rem, 3.8vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 16, color: "#ffffff" }}>
            Simple, <span style={{ color: "#f5b800" }}>Transparent Pricing</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 500, margin: "0 auto 64px" }}>Start free, scale as you grow. No hidden fees. Cancel anytime.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" }}>
            {PLANS.map((plan, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                style={{ background: plan.featured ? "rgba(245,184,0,0.06)" : "#0a0a0a", border: plan.featured ? "1px solid rgba(245,184,0,0.55)" : "1px solid rgba(245,184,0,0.12)", borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden", boxShadow: plan.featured ? "0 0 60px rgba(245,184,0,0.12)" : "none" }}>
                {plan.featured && <div style={{ position: "absolute", top: 20, right: 20, background: "#f5b800", color: "#000", fontSize: 11, fontWeight: 700, borderRadius: 50, padding: "4px 12px", letterSpacing: "0.1em" }}>POPULAR</div>}
                <p style={{ color: plan.featured ? "#f5b800" : "#888", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>{plan.name}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                  {plan.price !== "Custom" && <span style={{ color: "#f5b800", fontSize: 14, fontWeight: 600 }}>$</span>}
                  <span style={{ color: "#ffffff", fontSize: plan.price === "Custom" ? 28 : 44, fontWeight: 800, lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ color: "#555", fontSize: 14 }}>{plan.period}</span>
                </div>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, marginBottom: 28 }}>{plan.desc}</p>
                <div style={{ height: 1, background: "rgba(245,184,0,0.12)", marginBottom: 24 }}/>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ color: "#ccc", fontSize: 13 }}>{f}</span>
                    </div>
                  ))}
                </div>
                {/* All pricing CTAs → contact */}
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={goToContact}
                  style={{ width: "100%", background: plan.featured ? "#f5b800" : "transparent", color: plan.featured ? "#000" : "#f5b800", border: plan.featured ? "none" : "1px solid rgba(245,184,0,0.4)", borderRadius: 50, padding: "13px 0", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={e => { if (!plan.featured) { e.currentTarget.style.background = "rgba(245,184,0,0.08)"; e.currentTarget.style.borderColor = "#f5b800" } }}
                  onMouseLeave={e => { if (!plan.featured) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)" } }}>
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" className="py-[112px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>FAQ</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.9rem, 3.8vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 56, color: "#ffffff" }}>
            Frequently Asked <span style={{ color: "#f5b800" }}>Questions</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((faq, i) => (
              <motion.div key={i} layout
                style={{ background: openFaq === i ? "rgba(245,184,0,0.05)" : "#0d0d0d", border: openFaq === i ? "1px solid rgba(245,184,0,0.35)" : "1px solid rgba(245,184,0,0.10)", borderRadius: 14, overflow: "hidden", transition: "border-color 0.3s, background 0.3s", cursor: "pointer" }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px" }}>
                  <span style={{ color: "#ffffff", fontSize: 15, fontWeight: 600, paddingRight: 16 }}>{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
                      <p style={{ color: "#888", fontSize: 14, lineHeight: 1.75, padding: "0 24px 20px" }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          {/* FAQ CTA */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(245,184,0,0.5)" }} whileTap={{ scale: 0.97 }}
              onClick={goToContact}
              style={{ ...btnPrimary }}>
              Still have questions? Book a Demo →
            </motion.button>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <TestimonialsCarousel />

      {/* ══ CONTACT ══ */}
      <section id="contact" className="w-full py-[112px] px-0" style={{ background: "#000" }}>
        <div className="w-full max-w-[1400px] mx-auto px-6">
          <SLabel>Get In Touch</SLabel>
          <h2 className="text-center font-bold mb-3" style={{ fontSize: "clamp(1.85rem, 3.8vw, 2.75rem)", color: "#ffffff" }}>
            See <span className="text-[#f5b800]">TechBee AI</span> in Action
          </h2>
          <p className="text-center text-[#999999] text-[14px] mb-12">Book a live demo — personalized to your business and your specific product needs.</p>
          <div className="w-full rounded-[28px] p-10 relative overflow-hidden" style={{ background: "#080808", border: "1px solid rgba(245,184,0,0.32)", boxShadow: "0 0 80px rgba(245,184,0,0.18), 0 0 0 1px rgba(245,184,0,0.12)" }}>
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at top left, rgba(245,184,0,0.08), transparent 24%), radial-gradient(circle at bottom right, rgba(245,184,0,0.06), transparent 28%)" }}/>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2"><span className="text-white text-[13px] font-semibold">Name</span><input name="name" value={form.name} onChange={handleForm} placeholder="Name" className={iCls}/></label>
                <label className="flex flex-col gap-2"><span className="text-white text-[13px] font-semibold">Business Email</span><input name="email" value={form.email} onChange={handleForm} placeholder="Business Email" className={iCls}/></label>
                <label className="flex flex-col gap-2"><span className="text-white text-[13px] font-semibold">Company Name</span><input name="company" value={form.company} onChange={handleForm} placeholder="Company Name" className={iCls}/></label>
                <label className="flex flex-col gap-2"><span className="text-white text-[13px] font-semibold">Address</span><input name="address" value={form.address} onChange={handleForm} placeholder="Address" className={iCls}/></label>
                <label className="flex flex-col gap-2"><span className="text-white text-[13px] font-semibold">Job Title</span><input name="jobTitle" value={form.jobTitle} onChange={handleForm} placeholder="Job Title" className={iCls}/></label>
                <label className="flex flex-col gap-2"><span className="text-white text-[13px] font-semibold">Country</span>
                  <select name="country" value={form.country} onChange={handleForm} className={iCls + " appearance-none cursor-pointer"} style={{ color: form.country ? "#ffffff" : "#9b9b9b" }}>
                    <option value="" disabled hidden>UAE</option>
                    {COUNTRY_OPTIONS.map(c => <option key={c} value={c} className="bg-[#0d0d0d]">{c}</option>)}
                  </select>
                </label>
                <label className="flex flex-col gap-2"><span className="text-white text-[13px] font-semibold">Phone Number</span><input name="phone" value={form.phone} onChange={handleForm} placeholder="Phone Number" className={iCls}/></label>
                <label className="flex flex-col gap-2"><span className="text-white text-[13px] font-semibold">Product Interest</span>
                  <select name="product" value={form.product} onChange={handleForm} className={iCls + " appearance-none cursor-pointer"} style={{ color: form.product ? "#ffffff" : "#9b9b9b" }}>
                    <option value="" disabled hidden>CAMCARD AI</option>
                    {PRODUCT_OPTIONS.map(p => <option key={p} value={p} className="bg-[#0d0d0d]">{p}</option>)}
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2 mt-6"><span className="text-white text-[13px] font-semibold">Message</span><textarea name="message" value={form.message} onChange={handleForm} placeholder="Message" className={iCls + " h-[120px] resize-none"}/></label>
              <label className="flex items-center gap-3 mt-6 cursor-pointer select-none">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleForm} className="w-5 h-5 appearance-none rounded-full border border-[#1f1f1f] bg-[#0d0d0d] checked:bg-[#f5b800] checked:border-[#f5b800] transition-colors cursor-pointer"/>
                  {form.privacy && <svg className="absolute w-3 h-3 text-black pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                </div>
                <span className="text-[#999999] text-[13px]">Agree to privacy policy</span>
              </label>
              <motion.button whileHover={{ scale: 1.015, boxShadow: "0 0 44px rgba(245,184,0,0.5)" }} whileTap={{ scale: 0.985 }}
                className="mt-8 w-full bg-[#f5b800] text-black py-4 rounded-[12px] font-bold text-[15px] hover:bg-[#ffc929] transition-colors duration-200"
                style={{ boxShadow: "0 0 24px rgba(245,184,0,0.22)" }}>Submit</motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="w-full px-6 py-16 overflow-hidden" style={{ background: "#000" }}>
        <div className="relative w-full max-w-[1400px] mx-auto rounded-[30px] p-10"
          style={{ background: "rgba(10,10,10,0.96)", border: "2px solid rgba(211,162,14,0.54)", boxShadow: "inset 0 0 55px rgb(207,157,9), inset 0 0 1px rgba(245,184,0,0.22)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(245,184,0,0.09), transparent 22%), radial-gradient(circle at bottom right, rgba(245,184,0,0.06), transparent 28%)" }}/>
          <div className="relative z-10 grid gap-12 lg:grid-cols-[260px_1fr] mb-16 items-start">
            <div className="space-y-4">
              <div>
                <div className="text-[28px] font-black tracking-[0.22em] text-white" style={{ letterSpacing: "0.24em" }}>TECH<span className="text-[#f5b800]">BEE</span></div>
                <p className="text-[#d1d1d1] text-[11px] uppercase tracking-[0.32em] mt-2">IT &amp; Designs LLC</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-10">
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">Products</h3>
                <div className="mt-6 space-y-4">
                  {[{label:'CamCard', route:'/camcard'},{label:'Tegsoft AI', route:'/tegsoft'},{label:'Lyrebird AI', route:'/lyrebird'},{label:'IDP', route:'/idp'}].map(p => (
                    <p key={p.label} onClick={() => navigate(p.route)} className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">{p.label}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">Company</h3>
                <div className="mt-6 space-y-4">{['About Us','Career','Blog','Partner'].map(c => <p key={c} className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">{c}</p>)}</div>
              </div>
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">Legal</h3>
                <div className="mt-6 space-y-4">{['Privacy Policy','Terms of service','Cookie Policy','Security'].map(l => <p key={l} className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">{l}</p>)}</div>
              </div>
            </div>
          </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#cccccc] text-[12px]">
  <div className="flex flex-wrap items-center gap-3">
    <span className="font-semibold text-white">Social:</span>
    {[
      { label: "LinkedIn",  url: "https://www.linkedin.com/company/techbeeuae/" },
      { label: "Instagram", url: "https://www.instagram.com/techbeeuae?igsh=dnF5ZnppNzNnZzRu" },
      { label: "Facebook",  url: "https://www.facebook.com/techbeeuae/" },
      { label: "Twitter/X", url: "https://x.com/techbeeuae" },
      { label: "Medium",    url: "https://medium.com/@techbeeuae" },
    ].map((s, index, arr) => (
      <a
        key={s.label}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#f5b800] transition-colors duration-200"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {s.label}{index < arr.length - 1 ? " ·" : ""}
      </a>
    ))}
  </div>
  <div className="text-[#aaaaaa]">© 2026 TechBee AI. All rights reserved.</div>
</div>
        </div>
      </footer>

      {/* ══ LIVE CHAT WIDGET ══ */}
      <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
        <AnimatePresence>
          {chatOpen && (
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.25 }}
              style={{ width: 320, borderRadius: 20, overflow: "hidden", background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.3)", boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(245,184,0,0.1)" }}>
              <div style={{ background: "#f5b800", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ color: "#000", fontWeight: 700, fontSize: 14, margin: 0 }}>TechBee AI Support</p>
                  <p style={{ color: "rgba(0,0,0,0.6)", fontSize: 11, margin: 0 }}>● Online — typically replies instantly</p>
                </div>
                <button onClick={() => setChatOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#000", fontSize: 18, lineHeight: 1 }}>✕</button>
              </div>
              <div style={{ padding: "20px 20px 16px" }}>
                <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(245,184,0,0.2)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 14 }}>🐝</div>
                  <div style={{ background: "#1a1a1a", borderRadius: "0 12px 12px 12px", padding: "12px 14px", maxWidth: 220 }}>
                    <p style={{ color: "#ddd", fontSize: 13, lineHeight: 1.65, margin: 0 }}>Hi! 👋 Welcome to TechBee AI. How can I help you today?</p>
                  </div>
                </div>
                {!chatSent && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    {["Request a Demo", "Product Info", "Pricing", "Support"].map(opt => (
                      <button key={opt}
                        onClick={() => {
                          setChatMsg(opt); setChatSent(true)
                          if (opt === "Request a Demo" || opt === "Pricing") goToContact()
                        }}
                        style={{ background: "transparent", border: "1px solid rgba(245,184,0,0.35)", borderRadius: 50, padding: "6px 14px", color: "#f5b800", fontSize: 12, cursor: "pointer", transition: "all 0.2s" }}
                        onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,184,0,0.1)"; e.currentTarget.style.borderColor = "#f5b800" }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.35)" }}>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
                {chatSent && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ alignSelf: "flex-end", background: "#f5b800", borderRadius: "12px 0 12px 12px", padding: "10px 14px" }}>
                      <p style={{ color: "#000", fontSize: 13, margin: 0, fontWeight: 600 }}>{chatMsg}</p>
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(245,184,0,0.2)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 14 }}>🐝</div>
                      <div style={{ background: "#1a1a1a", borderRadius: "0 12px 12px 12px", padding: "12px 14px" }}>
                        <p style={{ color: "#ddd", fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                          Thanks! Our team will get back to you shortly.{" "}
                          <span style={{ color: "#f5b800", cursor: "pointer", textDecoration: "underline" }} onClick={goToContact}>
                            Fill out the contact form
                          </span>{" "}for faster response.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ padding: "0 16px 16px", display: "flex", gap: 8 }}>
                <input placeholder="Type a message..." value={chatMsg} onChange={e => setChatMsg(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && chatMsg.trim()) setChatSent(true) }}
                  style={{ flex: 1, background: "#1a1a1a", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "10px 16px", color: "#fff", fontSize: 13, outline: "none" }}/>
                <button onClick={() => { if (chatMsg.trim()) setChatSent(true) }}
                  style={{ width: 38, height: 38, borderRadius: "50%", background: "#f5b800", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button onClick={() => { setChatOpen(o => !o); setChatSent(false); setChatMsg("") }}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }}
          style={{ width: 58, height: 58, borderRadius: "50%", background: "#f5b800", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(245,184,0,0.5), 0 4px 20px rgba(0,0,0,0.4)", position: "relative" }}>
          <AnimatePresence mode="wait">
            {chatOpen
              ? <motion.span key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }} style={{ color: "#000", fontSize: 20, fontWeight: 700, lineHeight: 1 }}>✕</motion.span>
              : <motion.span key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }} style={{ fontSize: 24 }}>💬</motion.span>
            }
          </AnimatePresence>
          {!chatOpen && <div style={{ position: "absolute", top: 6, right: 6, width: 10, height: 10, borderRadius: "50%", background: "#22c55e", border: "2px solid #000" }}/>}
        </motion.button>
      </div>

    </div>
  )
}
