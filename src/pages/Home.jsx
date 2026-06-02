import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "../components/Navbar"
import BrainBackground from "../components/BrainBackground"
import MouseGlow from "../components/MouseGlow"
import emailjs from "@emailjs/browser"

// ── SEO Head Component ────────────────────────────────────────────────────────
function SEOHead() {
  useEffect(() => {
    // Title
    document.title = "TechBee AI | AI-Powered Business Solutions in Dubai, UAE"

    // Helper to set/update a meta tag
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement("meta")
        const [attrName, attrVal] = selector.replace("meta[", "").replace("]", "").split('="')
        el.setAttribute(attrName, attrVal.replace('"', ""))
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    // Primary meta
    setMeta('meta[name="description"]', "content", "TechBee AI offers cutting-edge AI solutions for businesses in Dubai and the UAE — including AI Contact Center, Medical AI Scribe, Document Processing, Contact Management, and B2B Quote Generation.")
    setMeta('meta[name="keywords"]', "content", "TechBee AI, AI solutions Dubai, AI contact center UAE, Lyrebird AI, Tegsoft, IDP document processing, CamCard AI, AI security UAE, B2B procurement UAE, Webishopi")
    setMeta('meta[name="robots"]', "content", "index, follow")
    setMeta('meta[name="author"]', "content", "TechBee IT & Designs LLC")
    setMeta('meta[name="viewport"]', "content", "width=device-width, initial-scale=1.0")

    // Open Graph
    setMeta('meta[property="og:title"]', "content", "TechBee AI | AI-Powered Business Solutions in Dubai, UAE")
    setMeta('meta[property="og:description"]', "content", "Transform your business with TechBee AI — intelligent automation, voice AI, document processing, and conversational agents built for enterprise scale.")
    setMeta('meta[property="og:type"]', "content", "website")
    setMeta('meta[property="og:url"]', "content", "https://techbeeai.vercel.app")
    setMeta('meta[property="og:image"]', "content", "https://framerusercontent.com/images/lyszrRNqAQlPxY5yLXK4YieTqM.png")
    setMeta('meta[property="og:site_name"]', "content", "TechBee AI")
    setMeta('meta[property="og:locale"]', "content", "en_AE")

    // Twitter Card
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image")
    setMeta('meta[name="twitter:title"]', "content", "TechBee AI | AI-Powered Business Solutions in Dubai, UAE")
    setMeta('meta[name="twitter:description"]', "content", "Transform your business with TechBee AI — intelligent automation, voice AI, document processing, and conversational agents built for enterprise scale.")
    setMeta('meta[name="twitter:image"]', "content", "https://framerusercontent.com/images/lyszrRNqAQlPxY5yLXK4YieTqM.png")

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", "https://techbeeai.vercel.app")

    // JSON-LD Structured Data
    const existingScript = document.querySelector('script[data-seo="techbee"]')
    if (!existingScript) {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.setAttribute("data-seo", "techbee")
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TechBee IT & Designs LLC",
        "url": "https://techbeeai.vercel.app",
        "logo": "/TechBee_AI_Logo_Modified.png",
        "description": "TechBee AI offers cutting-edge AI solutions for businesses in Dubai and the UAE.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "R-12 France Cluster, International City",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971-4-2434882",
          "contactType": "sales",
          "email": "sales@techbee.ae"
        },
        "sameAs": [
          "https://www.linkedin.com/company/techbeeuae/",
          "https://www.instagram.com/techbeeuae",
          "https://www.facebook.com/techbeeuae/",
          "https://x.com/techbeeuae"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Products",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Contact Center Solutions", "description": "Cloud-based contact center with VoiceChannel, OmniChannel, and AIChannel." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Medical Intelligence (Lyrebird AI)", "description": "AI-powered medical scribe that saves clinicians up to 3 hours daily." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intelligent Document Processing (IDP)", "description": "AI-powered document extraction, classification, and validation." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Powered Contact Management (CamCard)", "description": "Digitize and manage business cards with intelligent OCR." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Security", "description": "AI-powered security solutions for threat detection and data protection." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered Quote Generation (Webishopi)", "description": "UAE's leading B2B platform for IT product quotations." } }
          ]
        }
      })
      document.head.appendChild(script)
    }

    return () => {
      // cleanup not needed for meta tags
    }
  }, [])

  return null
}

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
    <section id="why" className="py-[112px] px-6" style={{ background: "#000" }} aria-label="Why TechBee AI">
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
const LOGO_IMG      = "/TechBee_AI_Logo_Modified.png"
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
  { quote: " The Tegsoft interface is very easy to use . Everything we need is recorded in our call center. We can access the date we want at any given time. What could be more beautiful than this?", name: "Kerem Erkmen", role: "E-commerce Manager - Lufian", avatar: "A" },
  { quote: "Lyrebird Health strikes the right balance between effeciency , security and patient - centered care. I highly recommend it to follow practitioners.", name: "Dr. Sean Stevens", role: " Principal General Practitioner · Grove Medical", avatar: "J" },
  // { quote: "IDP cut our invoice processing time from 4 days to 4 hours. The accuracy is outstanding — genuinely better than our manual team.", name: "Priya Sharma", role: "CFO · Logistics Plus", avatar: "P" },
]

const COUNTRY_OPTIONS = ["UAE", "India", "Saudi Arabia", "Qatar", "Kuwait", "Oman"]
const PRODUCT_OPTIONS = ["Intelligent Document Processing (IDP)", "AI-Powered Medical Intelligence", "AI Contact Center Solutions", "AI Security", "AI Powered Contact Management", "AI-Powered Quote Generation", "All"]

const PRODUCTS = [
  {
    route: "/idp",
    icon: <svg width="20" height="20" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="70" rx="13" fill="#111111"/>
      <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#f5b800" fontSize="16" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif" letterSpacing="1">INTSIG</text>
    </svg>,
    title: "Intelligent Document Processing (IDP)", subtitle: "Document Automation",
    desc: "Automate document processing using AI-powered data extraction, classification, and validation. Save time and eliminate errors in handling business documents."
  },
  {
    route: "/lyrebird",
    icon: <svg width="20" height="20" viewBox="0 0 64 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M58.9533 10.5794L58.5868 9.81587C57.0547 6.62178 53.7767 4.5581 50.2379 4.5581C47.7646 4.5581 45.4381 5.52214 43.6886 7.27359C41.9392 9.02504 40.9763 11.3531 40.9763 13.8304C40.9763 17.2991 39.113 20.5308 36.1127 22.2652L23.3316 29.6527C22.9321 28.9599 22.7136 28.1668 22.7136 27.3486C22.7136 24.8063 24.7794 22.7392 27.3177 22.7392H29.5941V18.1811H27.3177C22.2685 18.1811 18.1607 22.2937 18.1607 27.3486C18.1607 28.977 18.5932 30.5541 19.3877 31.9318L15.487 34.1869C14.2919 32.1175 13.6602 29.753 13.6602 27.3475C13.6602 19.8072 19.7872 13.6732 27.3188 13.6732C33.5949 13.6732 38.701 8.56125 38.701 2.27791V0H34.1481V2.27905C34.1481 6.0486 31.084 9.1162 27.3188 9.1162C17.2774 9.1162 9.10732 17.2957 9.10732 27.3486C9.10732 30.5541 9.95074 33.7072 11.5454 36.4682C13.1173 39.1883 15.3778 41.4696 18.0833 43.0661C20.8719 44.7116 24.0658 45.581 27.3188 45.581C37.3602 45.581 45.5303 37.4015 45.5303 27.3486H40.9774C40.9774 34.8888 34.8504 41.0229 27.3188 41.0229C24.0294 41.0229 20.8901 39.8219 18.4487 37.7388L38.3891 26.2125C42.7929 23.6668 45.5291 18.9218 45.5291 13.8304C45.5291 12.5712 46.0186 11.3873 46.9087 10.4962C47.7976 9.6062 48.9813 9.11506 50.2391 9.11506C52.0386 9.11506 53.7049 10.1646 54.4835 11.7884L54.85 12.5519C55.3713 13.639 56.085 14.603 56.9352 15.4121C52.8422 17.7766 50.0809 22.2037 50.0809 27.2643V27.6267C50.0809 33.6342 47.7043 39.2863 43.3881 43.5435C38.9855 47.8863 33.1579 50.2291 26.9705 50.1357C20.9072 50.0457 15.248 47.623 11.0343 43.3134C6.82065 39.0048 4.51917 33.2878 4.55332 27.2153C4.58746 21.1553 6.97089 15.4645 11.2642 11.189C15.5587 6.91236 21.2601 4.55696 27.3177 4.55696H29.5941V0H27.3177C20.049 0 13.2072 2.82602 8.05334 7.95844C2.90176 13.0886 0.0425634 19.9189 0.000449385 27.1902C-0.0405264 34.4718 2.72193 41.3306 7.7813 46.5029C12.8407 51.6763 19.6324 54.5855 26.9034 54.6938C27.0434 54.6961 27.1834 54.6972 27.3234 54.6972C30.9133 54.6972 34.4076 54.0101 37.7175 52.6518C41.04 51.2889 44.0233 49.3175 46.5843 46.7912C51.7757 41.6713 54.6337 34.8649 54.6337 27.6278V27.2654C54.6337 22.239 58.7177 18.1504 63.7383 18.1504V13.5923C61.71 13.5923 59.832 12.4094 58.9533 10.5794Z" fill="#f5b800"/></svg>,
    title: "AI-Powered Medical Intelligence", subtitle: "Medical AI Scribe",
    desc: "Lyrebird AI listens to patient consultations and generates structured clinical notes automatically, saving clinicians up to 3 hours every day."
  },
  {
    route: "/tegsoft",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
    title: "AI Contact Center Solutions", subtitle: "Cloud Contact Center",
    desc: "Cloud-based contact center with VoiceChannel, OmniChannel, and AIChannel. Features IVR, predictive dialers, multi-channel support, and AI-powered agents."
  },
  {
    route: "/security",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <image href="/checkpoint.png" width="20" height="20" style={{ filter: "brightness(0) saturate(100%) invert(74%) sepia(98%) saturate(500%) hue-rotate(5deg) brightness(103%)" }}/>
    </svg>,
    title: "AI Security", subtitle: "Intelligent Protection",
    desc: "Protect your business with AI-powered security solutions that detect threats, prevent breaches, and ensure comprehensive data protection across your digital infrastructure."
  },
  {
    route: "/camcard",
    icon: <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="13" fill="#111111"/>
      <path d="M0 46 Q30 38 60 46 L60 60 L0 60 Z" fill="#f5b800"/>
      <text x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fill="#f5b800" fontSize="24" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif">CC</text>
      <text x="50%" y="80%" dominantBaseline="middle" textAnchor="middle" fill="#000" fontSize="8" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1.5">BUSINESS</text>
    </svg>,
    title: "AI Powered Contact Management", subtitle: "Smart Contact Solutions",
    desc: "Digitize and manage business cards effortlessly using intelligent OCR and data extraction. CamCard AI helps you organize contacts, eliminate manual entry, and streamline networking."
  },
  {
    route: "/quote",
    icon: <svg width="20" height="20" viewBox="1.707031 0.769531 15.07 15.16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M 5.648438 5.636719 C 5.8125 5.277344 6.238281 5.121094 6.59375 5.285156 C 6.953125 5.453125 7.109375 5.875 6.945312 6.234375 C 6.941406 6.242188 5.941406 8.359375 7.324219 10.113281 C 7.6875 10.574219 8.128906 10.824219 8.574219 10.914062 C 9.976562 11.195312 11.027344 10.160156 11.511719 8.964844 C 11.738281 8.402344 11.828125 7.851562 11.660156 7.523438 C 11.652344 7.503906 11.636719 7.484375 11.621094 7.460938 L 11.601562 7.433594 C 11.574219 7.402344 11.542969 7.371094 11.507812 7.347656 C 11.390625 7.261719 11.242188 7.214844 11.089844 7.214844 C 10.941406 7.210938 10.796875 7.253906 10.683594 7.335938 C 10.644531 7.367188 10.613281 7.398438 10.582031 7.4375 C 10.34375 7.757812 10.273438 8.324219 10.378906 8.914062 C 10.414062 9.109375 10.46875 9.304688 10.546875 9.492188 C 10.269531 9.9375 9.773438 10.242188 9.378906 10.363281 C 9.207031 10.007812 9.042969 9.546875 8.976562 9.167969 C 8.800781 8.203125 8.964844 7.21875 9.441406 6.582031 C 9.558594 6.429688 9.6875 6.300781 9.835938 6.191406 C 10.203125 5.917969 10.652344 5.785156 11.101562 5.789062 C 11.546875 5.792969 12 5.933594 12.363281 6.207031 C 12.5 6.308594 12.621094 6.425781 12.730469 6.5625 C 12.742188 6.574219 12.753906 6.589844 12.765625 6.605469 C 12.828125 6.6875 12.882812 6.78125 12.933594 6.878906 C 13.304688 7.605469 13.207031 8.589844 12.835938 9.5 C 12.648438 9.96875 12.382812 10.425781 12.070312 10.828125 C 12.355469 10.882812 12.675781 10.882812 13.039062 10.816406 C 13.640625 10.710938 14.105469 10.445312 14.441406 10.0625 C 14.453125 10.050781 14.460938 10.039062 14.472656 10.027344 C 14.828125 9.609375 15.050781 9.039062 15.140625 8.378906 C 15.226562 7.777344 15.191406 7.105469 14.972656 6.414062 C 14.78125 5.804688 14.453125 5.175781 13.9375 4.570312 C 12.914062 3.355469 11.625 2.679688 10.300781 2.46875 C 8.855469 2.234375 7.359375 2.546875 6.117188 3.308594 C 4.871094 4.070312 3.929688 5.246094 3.53125 6.667969 C 3.167969 7.964844 3.253906 9.476562 3.964844 11.085938 C 4.195312 11.601562 4.507812 12.066406 4.882812 12.472656 C 5.695312 13.355469 6.804688 13.964844 8.015625 14.21875 C 9.230469 14.472656 10.539062 14.371094 11.75 13.835938 C 11.925781 13.761719 12.097656 13.671875 12.269531 13.578125 C 12.492188 13.453125 12.679688 13.289062 12.949219 13.289062 C 13.34375 13.289062 13.664062 13.605469 13.664062 14 C 13.664062 14.398438 13.417969 14.558594 13.132812 14.726562 C 12.871094 14.882812 12.597656 15.023438 12.324219 15.144531 C 10.835938 15.804688 9.21875 15.929688 7.726562 15.613281 C 6.226562 15.300781 4.847656 14.542969 3.832031 13.441406 C 3.351562 12.921875 2.953125 12.324219 2.660156 11.664062 C 1.804688 9.730469 1.707031 7.882812 2.15625 6.28125 C 2.65625 4.5 3.828125 3.035156 5.375 2.089844 C 6.898438 1.152344 8.738281 0.769531 10.527344 1.058594 C 12.171875 1.324219 13.769531 2.15625 15.027344 3.648438 C 15.671875 4.410156 16.09375 5.207031 16.339844 5.988281 C 16.621094 6.894531 16.667969 7.78125 16.554688 8.574219 C 16.425781 9.503906 16.097656 10.320312 15.550781 10.960938 C 15.539062 10.976562 15.527344 10.992188 15.515625 11.007812 C 14.972656 11.625 14.234375 12.050781 13.292969 12.222656 C 12.324219 12.394531 11.515625 12.25 10.863281 11.90625 L 10.804688 11.9375 C 10.050781 12.320312 9.164062 12.488281 8.296875 12.3125 C 7.535156 12.160156 6.800781 11.746094 6.207031 10.996094 C 4.273438 8.546875 5.644531 5.644531 5.648438 5.636719 Z" fill="#f5b800"/></svg>,
    title: "AI-Powered Quote Generation", subtitle: "Webishopi - B2B IT Procurement",
    desc: "UAE's leading B2B platform for IT product quotations. Features AI Product Search (upload BOQ for instant matches), quick quotes, verified suppliers, and expert support. Learn more at webishopi.com"
  },
]

const FAQS = [
  { q: "What AI products does TechBee offer?", a: "TechBee AI offers seven core products: On-Premise LLM Deployment, Intelligent Document Processing (IDP), AI-Powered Medical Intelligence, AI Contact Center Solutions, AI Security, AI Powered Contact Management, and AI-Powered Quote Generation." },
  { q: "Is there a free trial available?", a: "Yes! Our Professional plan includes a 14-day free trial with full access to all features. No credit card required to get started." },
  { q: "How does Lyrebird AI handle patient data privacy?", a: "Lyrebird AI is fully HIPAA compliant. All medical data is encrypted with AES-256, stored in region-specific servers, and never used for model training without explicit consent." },
  { q: "Can I integrate TechBee AI Products with my existing CRM?", a: "Absolutely. TechBee AI integrates with Salesforce, HubSpot, SAP, Zendesk, and 100+ other platforms via our REST API and pre-built connectors." },
  { q: "What kind of support is included?", a: "All plans include email support. Professional plans include a dedicated Customer Success Manager. Enterprise plans include 24/7 SLA-backed support." },
  { q: "How long does onboarding take?", a: "Most customers are fully onboarded within 5-7 business days. Enterprise customers typically take 2-4 weeks including custom integration training." },
]

const iCls = "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-[#4a4a4a] bg-[#0d0d0d] border border-[#1f1f1f] focus:outline-none focus:border-[#f5b800]/50 transition-colors duration-200"
const SLabel = ({ children }) => (
  <p className="text-[#f5b800] text-[11px] font-semibold text-center mb-5 uppercase" style={{ letterSpacing: "0.2em" }}>{children}</p>
)

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

function TestimonialsCarousel() {
  const [curr, setCurr] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => { setCurr(c => (c + 1) % TESTIMONIALS.length) }, 4000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section className="py-[112px] px-6 relative overflow-hidden" style={{ background: "#080808" }} aria-label="Client Testimonials">
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

const [submitting, setSubmitting] = useState(false)
const [submitted, setSubmitted] = useState(false)

const handleSubmit = async () => {
  if (!form.privacy) { alert("Please agree to the privacy policy."); return }
  if (!form.name || !form.email) { alert("Name and email are required."); return }
  setSubmitting(true)
  try {
    await emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE,
  process.env.REACT_APP_EMAILJS_TEMPLATE,
  {
    from_name:  form.name,
    from_email: form.email,
    company:    form.company,
    address:    form.address,
    job_title:  form.jobTitle,
    country:    form.country,
    phone:      form.phone,
    product:    form.product,
    message:    form.message,
    to_email:   "sales@techbee.ae",
  },
  process.env.REACT_APP_EMAILJS_KEY
)
    setSubmitted(true)
  } catch (err) {
    alert("Something went wrong. Please email us directly at sales@techbee.ae")
  } finally {
    setSubmitting(false)
  }
}
  const [aiProd,  aiProdRef]  = useCountUp(6, 0)
  const [clients, clientsRef] = useCountUp(100, 0)
  const [uptime,  uptimeRef]  = useCountUp(99.9, 1)
  const [openFaq,  setOpenFaq]  = useState(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMsg,  setChatMsg]  = useState("")
  const [chatSent, setChatSent] = useState(false)

  return (
    <div className="bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SEOHead />
      <MouseGlow />
      <Navbar logoSrc={LOGO_IMG} />

      {/* ══ HERO ══ */}
      <section id="home" className="relative flex items-center justify-center text-center overflow-hidden" style={{ minHeight: "100vh", paddingTop: 110, scrollMarginTop: 110 }} aria-label="TechBee AI Hero">
        <BrainBackground />
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <img src={BRAIN_IMG} alt="TechBee AI Brain Visualization" loading="eager" style={{ position: "absolute", top: "44%", left: "50%", transform: "translate(-50%, -50%)", width: "clamp(420px, 50vw, 700px)", height: "clamp(420px, 70vh, 750px)", opacity: 0.52, objectFit: "contain", mixBlendMode: "screen" }}/>
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
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", gap: 14, marginTop: 26, flexWrap: "wrap", justifyContent: "center" }}>
            <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.6)" }} whileTap={{ scale: 0.97 }} onClick={goToContact} style={{ ...btnPrimary }} aria-label="Book a Demo">
              Book a Demo →
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={goToContact} style={{ ...btnOutline }} aria-label="Get Started">
              Get Started
            </motion.button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.54 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "clamp(16px, 4vw, 80px)", marginTop: 60, width: "100%", maxWidth: 860 }}>
            {[{ ref: aiProdRef, val: aiProd, suffix: "", label: "AI Product" }, { ref: clientsRef, val: clients, suffix: "+", label: "Clients" }, { ref: uptimeRef, val: uptime, suffix: "%", label: "Uptime" }].map((s, i) => (
              <div key={i} ref={s.ref} style={{ position: "relative", flex: 1, minWidth: 160, maxWidth: 220 }}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.28, 0.15] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                  style={{ position: "absolute", inset: -8, borderRadius: 999, background: "radial-gradient(ellipse, rgba(245,184,0,0.2) 0%, transparent 70%)", filter: "blur(6px)", zIndex: 0, pointerEvents: "none" }}
                />
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px 28px", borderRadius: 999, background: "rgba(6, 5, 2, 0.60)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(245,184,0,0.25)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                  <span style={{ color: "#f5b800", fontSize: 24, fontWeight: 700, lineHeight: 1.2 }}>{s.val}{s.suffix}</span>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, marginTop: 3, fontWeight: 400 }}>{s.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="text-center" style={{ background: "#2b2b2b", padding: "100px 24px" }} aria-label="About TechBee AI">
        <p style={{ color: "#f5b800", fontSize: 13, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 24 }}>ABOUT US</p>
        <h2 style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ffffff", maxWidth: 860, margin: "0 auto" }}>
          Built for Businesses Ready<br />to <span style={{ color: "#f5b800" }}>Lead with AI</span>
        </h2>
        <p style={{ marginTop: 40, color: "#aaaaaa", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.8, maxWidth: 880, margin: "40px auto 0", textAlign: "center" }}>
          Techbee is a forward-thinking technology company specializing in advanced AI-powered solutions for modern businesses. We focus on automation, healthcare intelligence, voice systems, and smart communication platforms that help organizations operate smarter, faster, and more efficiently.
        </p>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section id="products" className="pb-[112px] pt-[48px] px-6" style={{ background: "#000" }} aria-label="TechBee AI Products">
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
                  <button onClick={() => navigate(p.route)}
                    style={{ color: "#f5b800", fontSize: 13, fontWeight: 600, background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center", gap: 6, transition: "color 0.2s, gap 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#ffc929"; e.currentTarget.style.gap = "10px" }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#f5b800"; e.currentTarget.style.gap = "6px" }}>
                    Learn more →
                  </button>
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
      <section id="solutions" className="py-[80px] px-6" style={{ background: "#000" }} aria-label="TechBee AI Solutions">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", textAlign: "center", marginBottom: 18 }}>SOLUTIONS</p>
          <h2 style={{ fontSize: "clamp(3.0rem,4vw,5.0rem)", fontWeight: 500, lineHeight: 1.00, letterSpacing: "-0.02em", color: "#ffffff", textAlign: "center", marginBottom: 42, marginTop: -10 }}>
            <span style={{ color: "#f5b800", display: "inline-block" }}>Real-World AI.</span>
            <span style={{ display: "block" }}>Real Business Impact.</span>
          </h2>
          <div style={{ position: "relative", paddingTop: 28 }}>
            <div className="solutions-robot">
              <img src={SOLUTIONS_IMG} alt="TechBee AI Robot" loading="lazy" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}/>
            </div>
            <div className="solution-grid">
              {[
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.4 2 2 0 0 1 3.62 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                  title: "Customer Support Automation",
                  desc: "Replace repetitive tier-1 support with AI agents that resolve queries, process requests, and escalate intelligently — reducing support costs by up to 60%.",
                  powered: "Powered by Tegsoft AI Agent"
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>,
                  title: "AI Medical Documentation",
                  desc: "Eliminate after-hours documentation burden. Lyrebird AI listens, transcribes, and generates clinical notes in under 20 seconds — saving clinicians 2–3 hours daily.",
                  powered: "Powered by Lyrebird AI"
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    <text x="50%" y="44%" dominantBaseline="middle" textAnchor="middle" fill="#f5b800" fontSize="30" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif">CC</text>
                    <text x="50%" y="82%" dominantBaseline="middle" textAnchor="middle" fill="#f5b800" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1">BUSINESS</text>
                  </svg>,
                  title: "Smart Business Communication",
                  desc: "Unify calls, messages, and team collaboration in one intelligent platform. Stay connected across every channel with AI-powered routing and real-time insights.",
                  powered: "Powered by CC Business"
                },
                {
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
                  title: "Document Workflow Automation",
                  desc: "Stop manually processing invoices, contracts, and onboarding forms. IDP reads, extracts, and routes data automatically with human-level accuracy.",
                  powered: "Powered by IDP Document Processing"
                },
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
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.55)" }} whileTap={{ scale: 0.97 }} onClick={goToContact} style={{ ...btnPrimary }}>
              Book a Demo →
            </motion.button>
          </div>
        </div>
      </section>

      {/* ══ WHY TECHBEE ══ */}
      <WhySection />

      {/* ══ PRICING PAGE CTA ══ */}
      {/* <section className="py-[112px] px-6" style={{ background: "#000" }} aria-label="Pricing">
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16 }}>PRICING</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.9rem, 3.8vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 16, color: "#ffffff" }}>
            Pricing is now on a dedicated page for clearer comparisons.
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 600, margin: "0 auto 40px" }}>
            Explore transparent AI plans, enterprise options, and custom packages on the new pricing page.
          </p>
          <motion.button whileHover={{ scale: 1.03, boxShadow: "0 0 44px rgba(245,184,0,0.45)" }} whileTap={{ scale: 0.97 }} onClick={() => navigate("/pricing")} style={{ ...btnPrimary }}>
            View Pricing Page →
          </motion.button> */}
        {/* </div>
      </section> */}

      {/* ══ FAQ ══ */}
      <section id="faq" className="py-[112px] px-6" style={{ background: "#0a0a0a" }} aria-label="Frequently Asked Questions">
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
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(245,184,0,0.5)" }} whileTap={{ scale: 0.97 }} onClick={goToContact} style={{ ...btnPrimary }}>
              Still have questions? Book a Demo →
            </motion.button>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <TestimonialsCarousel />

      {/* ══ CONTACT ══ */}
      <section id="contact" className="w-full py-[112px] px-0" style={{ background: "#000" }} aria-label="Contact TechBee AI">
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
             <motion.button
  onClick={handleSubmit}
  disabled={submitting || submitted}
  whileHover={{ scale: 1.015, boxShadow: "0 0 44px rgba(245,184,0,0.5)" }}
  whileTap={{ scale: 0.985 }}
  className="mt-8 w-full bg-[#f5b800] text-black py-4 rounded-[12px] font-bold text-[15px] hover:bg-[#ffc929] transition-colors duration-200"
  style={{ boxShadow: "0 0 24px rgba(245,184,0,0.22)", opacity: submitting ? 0.7 : 1 }}
>
  {submitted ? "✓ Message Sent!" : submitting ? "Sending..." : "Submit"}
</motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="w-full px-6 py-16 overflow-hidden" style={{ background: "#000" }} aria-label="Footer">
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
                  {[{label:"CamCard", route:"/camcard"},{label:"Tegsoft AI", route:"/tegsoft"},{label:"Webishopi", route:"/quote"},{label:"Check Point", route:"/security"},{label:"Lyrebird AI", route:"/lyrebird"},{label:"IDP", route:"/idp"}].map(p => (
                    <p key={p.label} onClick={() => navigate(p.route)} className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">{p.label}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">Company</h3>
                <div className="mt-6 space-y-4">{[{"label": "About Us", "route": "/about"}, {"label": "Career", "route": "/career"}, {"label": "Blog", "route": "/blog"}, {"label": "Partner", "route": "/partner"}].map(c => (
                  <p key={c.label} onClick={() => navigate(c.route)} className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">
                    {c.label}
                  </p>
                ))}</div>
              </div>
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">Legal</h3>
                <div className="mt-6 space-y-4">{["Privacy Policy","Terms of service","Cookie Policy","Security"].map(l => <p key={l} className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">{l}</p>)}</div>
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
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#f5b800] transition-colors duration-200"
                  style={{ textDecoration: "none", color: "inherit" }}>
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
                        onClick={() => { setChatMsg(opt); setChatSent(true); if (opt === "Request a Demo") goToContact(); else if (opt === "Pricing") navigate("/pricing") }}
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
                          <span style={{ color: "#f5b800", cursor: "pointer", textDecoration: "underline" }} onClick={goToContact}>Fill out the contact form</span>{" "}for faster response.
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
          style={{ width: 58, height: 58, borderRadius: "50%", background: "#f5b800", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(245,184,0,0.5), 0 4px 20px rgba(0,0,0,0.4)", position: "relative" }}
          aria-label="Open chat">
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
