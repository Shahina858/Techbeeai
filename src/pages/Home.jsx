import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "../components/Navbar"
import BrainBackground from "../components/BrainBackground"
import MouseGlow from "../components/MouseGlow"

const WHY_DATA = [
  {
    n:        "01",
    title:    "AI Innovation",
    desc:     "Continuously retrained models built on latest AI Research",
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
    n:        "02",
    title:    "Scalable Architecture",
    desc:     "From 50 to 50,000 users — no re-platforming needed",
    gradient: "linear-gradient(90deg, #1a9fe0 0%, #6dd5fa 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    n:        "03",
    title:    "Enterprise Security",
    desc:     "SOC2, GDPR, HIPAA compliant · AES-256 encrypted",
    gradient: "linear-gradient(90deg, #833ab4 0%, #fd1d7c 50%, #fcb045 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    n:        "04",
    title:    "Dedicated Support",
    desc:     "Onboarding, CSM, and SLA-backed technical assistance",
    gradient: "linear-gradient(90deg, #00b09b 0%, #96c93d 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    n:        "05",
    title:    "Global & Multilingual",
    desc:     "50+ languages · region-specific customization",
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
    n:        "06",
    title:    "Seamless Integrations",
    desc:     "Salesforce, SAP, EMR, HubSpot, Zendesk & 100+ more",
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
    <div style={{
      width: "100%", height: 72, background: gradient,
      overflow: "hidden", display: "flex", alignItems: "center",
    }}>
      <motion.div
        animate={{ x: [0, -1400] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
        {[...repeated, ...repeated].map((t, i) => (
          <span key={i} style={{
            fontSize: 16, fontWeight: 600,
            color: "rgba(0,0,0,0.6)", paddingRight: 48,
          }}>{t}</span>
        ))}
      </motion.div>
    </div>
  )
}

function WhyRow({ w, isLast }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: !isLast ? "1px solid rgba(255,255,255,0.05)" : "none",
        overflow: "hidden", cursor: "default",
      }}
    >
      <AnimatePresence mode="wait">
        {hovered ? (
          <motion.div key="marquee"
            initial={{ opacity: 0, scaleY: 0.6 }} animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.6 }} transition={{ duration: 0.22 }}
            style={{ transformOrigin: "top" }}
          >
            <Marquee text={w.desc} gradient={w.gradient} />
          </motion.div>
        ) : (
          <motion.div key="row"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 0.18 }}
            style={{
              display: "grid", gridTemplateColumns: "52px 1fr",
              alignItems: "center", padding: "20px 28px", gap: 20,
            }}
          >
            <div style={{
              color: "rgba(255,255,255,0.15)", fontSize: 11,
              fontFamily: "monospace", letterSpacing: "0.4em", textTransform: "uppercase",
            }}>{w.n}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                backgroundColor: "rgba(255,187,0,0.26)", border: "1px solid rgb(255,187,0)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>{w.icon}</div>
              <div>
                <h3 style={{ color: "#ffffff", fontSize: 17, fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
                  {w.title}
                </h3>
                <p style={{ color: "#9b9b9b", fontSize: 13, lineHeight: 1.6, marginTop: 4, marginBottom: 0 }}>
                  {w.desc}
                </p>
              </div>
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
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{
            color: "#f5b800", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            textAlign: "center", marginBottom: 16,
          }}
        >WHY TECHBEE?</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            textAlign: "center", fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em",
            marginBottom: 56, color: "#ffffff",
          }}
        >
          <span style={{ color: "#f5b800" }}>The AI Partner Built for </span>
          Enterprise Scale
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 24, overflow: "hidden",
            boxShadow: "0 0 120px rgba(245,184,0,0.06)",
          }}
        >
          {WHY_DATA.map((w, i) => (
            <WhyRow key={i} w={w} isLast={i === WHY_DATA.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}


// ── Assets ───────────────────────────────────────────────────────────────────
const LOGO_IMG      = "https://framerusercontent.com/images/lyszrRNqAQlPxY5yLXK4YieTqM.png"
const BRAIN_IMG     = "https://framerusercontent.com/images/iuqtZdxTFuhutGpJoq0zkLbFw.png"
const SOLUTIONS_IMG = "https://framerusercontent.com/images/IbtmEAV90Ebw8hTtTH4Z8Kyuc74.png"

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(end, decimals = 0, duration = 2000) {
  const [val, setVal] = useState(0)
  const ref           = useRef(null)
  const started       = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true
      obs.disconnect()
      const t0 = performance.now()
      const tick = (now) => {
        const p     = Math.min((now - t0) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        const cur   = eased * end
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
// NOTE: PRODUCTS, SOLUTIONS, WHY_ITEMS definitions removed because they are unused.
const TESTIMONIALS = [
  {
    quote:  "Tegsoft AI Agent reduced our call center costs by 45% in the first quarter. The quality of conversations genuinely impresses our customers.",
    name:   "Ahmed Al Rashid",
    role:   "COO · Tegsoft",
    avatar: "A",
  },
  {
    quote:  "Lyrebird AI saves me nearly 2 hours of documentation every single day. I finish my shift on time now — something that hasn't happened in years.",
    name:   "Dr. James Okafor",
    role:   "General Practitioner · City Medical Centre",
    avatar: "J",
  },
  {
    quote:  "IDP cut our invoice processing time from 4 days to 4 hours. The accuracy is outstanding — genuinely better than our manual team.",
    name:   "Priya Sharma",
    role:   "CFO · Logistics Plus",
    avatar: "P",
  },
]

const COUNTRY_OPTIONS = ["UAE", "India", "Saudi Arabia", "Qatar", "Kuwait", "Oman"]
const PRODUCT_OPTIONS = [
  "CAMCARD AI",
  "Intelligence Document Processing IDP",
  "Tegsoft AI Agent",
  "Lyrebird AI",
  "All",
]

// ── Shared input style ────────────────────────────────────────────────────────
const iCls =
  "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-[#4a4a4a] " +
  "bg-[#0d0d0d] border border-[#1f1f1f] focus:outline-none " +
  "focus:border-[#f5b800]/50 transition-colors duration-200"

// ── Section label ─────────────────────────────────────────────────────────────
const SLabel = ({ children }) => (
  <p
    className="text-[#f5b800] text-[11px] font-semibold text-center mb-5 uppercase"
    style={{ letterSpacing: "0.2em" }}
  >
    {children}
  </p>
)

// ── Testimonials Carousel ───────────────────────────────────────────────────
function TestimonialsCarousel() {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurr(c => (c + 1) % TESTIMONIALS.length);
    }, 4000); // 4 seconds interval like standard Framer autoplay
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-[112px] px-6 relative overflow-hidden" style={{ background: "#080808" }}>
      <div className="max-w-[1120px] mx-auto relative z-10">
        <SLabel>TESTIMONIALS</SLabel>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 mt-20">
          
          {/* Left Box: Headers */}
          <div className="w-full lg:w-[45%] flex flex-col items-start lg:mt-[50px]">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5b800]/30 bg-[#f5b800]/5 mb-10">
              <div className="w-2 h-2 rounded-full bg-[#f5b800]"></div>
              <span className="text-[#f5b800] text-[12px] font-bold uppercase tracking-widest">Client Stories</span>
            </div>
            <h2
              className="font-black leading-[0.95] tracking-tighter"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.4rem, 4vw, 3.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginLeft: "-2px" }}
            >
              <div className="text-white">Trusted by</div>
              <div className="text-white">Teams</div>
              <div className="text-white">That</div>
              <div style={{
  background: "linear-gradient(90deg, #ff6b00 0%, #f5b800 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}}>Demand</div>

<div style={{
  background: "linear-gradient(90deg, #f5a000 0%, #f5b800 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}}>the Best</div>
            </h2>
          </div>

          {/* Right Box: Stacked Animated Carousel */}
          <div className="w-full lg:w-[50%] relative min-h-[360px] mt-12 lg:mt-0 flex justify-end items-center">
            <div className="relative w-full max-w-[480px]">
              <AnimatePresence>
                {TESTIMONIALS.map((t, i) => {
                  const offset = (i - curr + TESTIMONIALS.length) % TESTIMONIALS.length;
                  const isFront = offset === 0;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-full rounded-3xl p-8"
                      initial={false}
                      animate={{
                        top: offset * -22,
                        right: offset * -22,
                        zIndex: 30 - offset * 10,
                        scale: 1, // subtle scale down for depth if desired
                        opacity: 1 // or 1 - offset * 0.1
                      }}
                      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} // Framer-like smooth spring/ease
                      style={{
                        background: "#0a0a0a",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        boxShadow: isFront ? "0 40px 80px rgba(0,0,0,0.8)" : "0 10px 30px rgba(0,0,0,0.5)",
                      }}
                    >
                      <div className="flex gap-1.5 mb-5">
                        {[...Array(5)].map((_, idx) => (
                          <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#f5b800">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" className="mb-4">
                        <path d="M9.467 18H5.975C5.975 12.181 8.878 9.531 12.5 8L13 9.771C10.702 10.665 9.467 12 9.467 14.5V18ZM20.467 18H16.975C16.975 12.181 19.878 9.531 23.5 8L24 9.771C21.702 10.665 20.467 12 20.467 14.5V18Z" fill="#333333" />
                      </svg>
                      <p className="text-[#a1a1aa] text-[15px] leading-[1.75] font-medium mb-6">
                        {t.quote}
                      </p>
                      <hr className="border-[#1a1a1a] mb-6" />
                      <div className="flex items-center gap-4">
                        <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#f5b800] text-black text-[15px] font-bold shrink-0">
                          {t.avatar}
                        </div>
                        <div>
                          <p className="text-white text-[15px] font-bold leading-tight">{t.name}</p>
                          <p className="text-[#555555] text-[12px] mt-1">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#f5b800] opacity-[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
    </section>
  )
}

// ══════════════════════════════════════════════════════════════════════════════\n// ══════════════════════════════════════════════════════════════════════════════
export default function Home() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", address: "",
    jobTitle: "", country: "", phone: "", product: "",
    message: "", privacy: false,
  })

  const handleForm = (e) => {
    const { name, value, type, checked } = e.target
    setForm(p => ({ ...p, [name]: type === "checkbox" ? checked : value }))
  }

  const [aiProd,  aiProdRef]  = useCountUp(4,    0)
  const [clients, clientsRef] = useCountUp(20,   0)
  const [uptime,  uptimeRef]  = useCountUp(99.9, 1)

  return (
    <div
      className="bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <MouseGlow />
      <Navbar logoSrc={LOGO_IMG} />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
            {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
            {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
            {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        id="home"
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: 110, scrollMarginTop: 110 }}
      >
        {/* Layer 1 — animated canvas */}
        <BrainBackground />

        {/* Layer 2 — brain PNG */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <img
            src={BRAIN_IMG}
            alt=""
            style={{
              position:     "absolute",
              top:          "44%",
              left:         "50%",
              transform:    "translate(-50%, -50%)",
              width:        "clamp(420px, 50vw, 700px)",
              height:       "clamp(420px, 70vh, 750px)",
              opacity:      0.52,
              objectFit:    "contain",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Layer 3 — subtle yellow glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex:     2,
            background: "radial-gradient(ellipse 45% 45% at 50% 44%, rgba(245,184,0,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Layer 4 — bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            zIndex:     3,
            height:     140,
            background: "linear-gradient(to top, #000 0%, transparent 100%)",
          }}
        />

        {/* Layer 5 — hero content */}
        <div
          className="relative flex flex-col items-center px-6"
          style={{ zIndex: 10, maxWidth: 860, width: "100%", margin: "0 auto" }}
        >

          {/* ── Badge — yellow filled square icon + yellow border pill (Image 1 style) */}
           <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            10,
              border:         "1px solid #f5b800",
              borderRadius:   8,
              padding:        "8px 20px",
              color:          "#f5b800",
              fontSize:       11,
              fontWeight:     600,
              letterSpacing:  "0.18em",
              background:     "rgba(0,0,0,0.38)",
              backdropFilter: "blur(8px)",
              textTransform:  "uppercase",
              marginBottom:   20,
            }}
          >
            <span style={{ fontSize: 13, lineHeight: 1 }}>✦</span>
            NEXT - GEN AI SOLUTIONS
          </motion.div>
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.13 }}
            style={{
              fontSize:      "clamp(2.2rem, 4.4vw, 3.8rem)",
              fontWeight:    700,
              lineHeight:    1.15,
              letterSpacing: "-0.01em",
              color:         "#ffffff",
              textAlign:     "center",
              margin:        0,
            }}
          >
            Powering the Future
            <br />
            with{" "}
            <span
              style={{
                color:      "#f5b800",
                textShadow: "0 0 35px rgba(245,184,0,0.6), 0 0 70px rgba(245,184,0,0.25)",
              }}
            >
              Artificial Intelligence
            </span>
          </motion.h1>

          {/* Subtext — grey #999, narrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            style={{
              marginTop:  18,
              color:      "#eae4e4",
              fontSize:   "clamp(0.82rem, 1.3vw, 0.95rem)",
              lineHeight: 1.7,
              maxWidth:   480,
              textAlign:  "center",
            }}
          >
            We transform the way businesses operate — through intelligent automation,
            voice AI, smart document processing, and conversational agents that work
            around the clock.
          </motion.p>

          {/* ── CTA Button — yellow pill, black text, matches Image 1 */}
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.6)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginTop:      26,
              background:     "#f5b800",
              color:          "#f1f0f0",
              fontSize:       15,
              fontWeight:     700,
              borderRadius:   50,
              padding:        "14px 42px",
              border:         "none",
              cursor:         "pointer",
              boxShadow:      "0 0 28px rgba(245,184,0,0.4)",
              display:        "inline-flex",
              alignItems:     "center",
              gap:            10,
              letterSpacing:  "0.01em",
              transition:     "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
            onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}
          >
            Explore Products →
          </motion.button>

          {/* ── Stat pills — Image 1 style: evenly spread, dark pill, large yellow number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.54 }}
            style={{
              display:        "flex",
              flexWrap:       "wrap",
              justifyContent: "space-between",
              alignItems:     "center",
              gap:            "clamp(24px, 6vw, 120px)",
              marginTop:      60,
              width:          "100%",
              maxWidth:       860,
            }}
          >
            {[
              { ref: aiProdRef,  val: aiProd,  suffix: "",  label: "AI Product" },
              { ref: clientsRef, val: clients, suffix: "+", label: "Clients"    },
              { ref: uptimeRef,  val: uptime,  suffix: "%", label: "Uptime"     },
            ].map((s, i) => (
              <div
                key={i}
                ref={s.ref}
                style={{
                  display:        "flex",
                  flexDirection:  "column",
                  alignItems:     "center",
                  flex:           1,
                  minWidth:       180,
                  maxWidth:       230,
                  padding:        "7px 0",
                  borderRadius:   50,
                  /* Dark pill with very subtle yellow border — exactly Image 1 */
                  background:     "rgba(15,15,15,0.85)",
                  border:         "1px solid rgba(245,184,0,0.20)",
                  backdropFilter: "blur(16px)",
                  boxShadow:      "inset 0 0 0 1px rgba(245,184,0,0.06), 0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                {/* Large bold yellow number */}
                <span style={{
                  color:      "#f5b800",
                  fontSize:   26,
                  fontWeight: 700,
                  lineHeight: 1,
                }}>
                  {s.val}{s.suffix}
                </span>
                {/* Small grey label */}
                <span style={{
                  color:         "#f6f3f3",
                  fontSize:      12,
                  marginTop:     6,
                  fontWeight:    350,
                  letterSpacing: "0.03em",
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>




      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
           <section
        id="about"
        className="text-center"
        style={{
          background: "#2b2b2b",
          padding:    "100px 24px",
        }}
      >
        {/* ABOUT US label — bright yellow, wide tracking, medium size */}
        <p
          style={{
            color:         "#f5b800",
            fontSize:      13,
            fontWeight:    500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom:  24,
          }}
        >
          ABOUT US
        </p>

        {/* Heading — large bold, wraps exactly as screenshot */}
        <h2
          style={{
            fontSize:      "clamp(2.6rem, 5.5vw, 4.2rem)",
            fontWeight:    500,
            lineHeight:    1.1,
            letterSpacing: "-0.02em",
            color:         "#ffffff",
            maxWidth:      860,
            margin:        "0 auto",
          }}
        >
          Built for Businesses Ready
          <br />
          to{" "}
          <span style={{ color: "#f5b800" }}>Lead with AI</span>
        </h2>

        {/* Body paragraph — lighter grey, wider, larger than before */}
        <p
          style={{
            marginTop:  40,
            color:      "#aaaaaa",
            fontSize:   "clamp(0.95rem, 1.5vw, 1.05rem)",
            lineHeight: 1.8,
            maxWidth:   880,
            margin:     "40px auto 0",
            textAlign:  "center",
          }}
        >
          Techbee is a forward-thinking technology company specializing in advanced
          AI-powered solutions for modern businesses. We focus on automation,{" "}
          healthcare intelligence, voice systems, and smart communication platforms that help organizations
          operate smarter, faster, and more efficiently.
        </p>
      </section>


      {/* ══════════════════════════════════════
          PRODUCTS
      ══════════════════════════════════════ */}
                    <section id="products" className="pb-[112px] pt-[48px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* OUR PRODUCTS label */}
          <p style={{
            color:         "#f5b800",
            fontSize:      11,
            fontWeight:    700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textAlign:     "center",
            marginBottom:  16,
          }}>
            OUR PRODUCTS
          </p>

          {/* Heading */}
          <h2 style={{
            textAlign:     "center",
            fontSize:      "clamp(1.9rem, 3.8vw, 2.8rem)",
            fontWeight:    700,
            lineHeight:    1.15,
            letterSpacing: "-0.01em",
            marginBottom:  56,
            color:         "#ffffff",
          }}>
            <span style={{ color: "#f5b800" }}>AI Products</span> That Transform
          </h2>

          {/* 2×2 grid — wider cards, less gap */}
          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap:                 16,
            maxWidth:            1300,
            margin:              "0 auto",
          }}>
            {[
              {
                /* CamCard — scan/QR frame corners, exactly as reference */
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                    <rect x="7" y="7" width="10" height="10" rx="1"/>
                  </svg>
                ),
                title:    "CamCard AI",
                subtitle: "AI-Powered Contact Management",
                desc:     "Digitize and manage business cards effortlessly using intelligent OCR and data extraction. CamCard AI helps you organize contacts, eliminate manual entry, and streamline networking.",
              },
              {
                /* Tegsoft — headphones, exactly as reference */
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
                    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                  </svg>
                ),
                title:    "Tegsoft AI Agent",
                subtitle: "AI Customer Support Automation",
                desc:     "Enhance your customer service with AI-driven call handling, chat automation, and smart response systems. Reduce workload and improve customer satisfaction.",
              },
              {
                /* Lyrebird — proper bird/twitter bird silhouette matching reference */
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f5b800">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 0 1-2.05-.56v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.14A9.07 9.07 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0 0 23 3z"/>
                  </svg>
                ),
                title:    "Lyrebird AI",
                subtitle: "AI-Powered Medical Intelligence",
                desc:     "Lyrebird AI leverages advanced artificial intelligence to support healthcare professionals with data-driven insights, medical analysis, and intelligent decision support systems. It helps improve diagnostic accuracy, streamline clinical workflows, and enhance patient care outcomes.",
              },
              {
                /* IDP — document with lines, exactly as reference */
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                ),
                title:    "Intelligence Document Processing-(IDP)",
                subtitle: "Intelligent Document Automation",
                desc:     "Automate document processing using AI-powered data extraction, classification, and validation. Save time and eliminate errors in handling business documents.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  background:   "#0a0a0a",
                  border:       "1px solid rgba(255, 193, 7, 0.84)",
                  borderRadius: 14,
                  /* ── Less vertical padding = shorter height, more horizontal = wider feel ── */
                  padding:      "20px 32px 18px",
                  boxShadow:    "0 0 0px rgba(245,184,0,0)",
                  transition:   "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(255,187,0,0.65)"
                  e.currentTarget.style.boxShadow   = "0 0 30px 4px rgba(255,187,0,0.25), 0 0 60px 8px rgba(255,187,0,0.10)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(245,184,0,0.15)"
                  e.currentTarget.style.boxShadow   = "0 0 0px rgba(245,184,0,0)"
                }}
              >
                {/* Hover radial glow from top-left */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                  style={{
                    background: "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(255,187,0,0.09) 0%, transparent 70%)",
                  }}
                />

                {/* Icon box — exact Framer CSS */}
                <div style={{
                  width:           40,
                  height:          40,
                  borderRadius:    6,
                  backgroundColor: "rgba(255,187,0,0.26)",
                  border:          "1px solid rgb(255,187,0)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  marginBottom:    10,   /* ← icon to title gap */
                  position:        "relative",
                  zIndex:          10,
                  flexShrink:      0,
                }}>
                  {p.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize:     17,
                  fontWeight:   700,
                  color:        "#ffffff",
                  lineHeight:   1.2,
                  marginBottom: 4,
                  position:     "relative",
                  zIndex:       10,
                }}>
                  {p.title}
                </h3>

                {/* Subtitle */}
                <p style={{
                  color:        "#f5b800",
                  fontSize:     12,
                  fontWeight:   600,
                  marginBottom: 8,
                  position:     "relative",
                  zIndex:       10,
                }}>
                  {p.subtitle}
                </p>

                {/* Description */}
                <p style={{
                  color:        "#f6f6f6",
                  fontSize:     13,
                  lineHeight:   1.6,
                  marginBottom: 12,
                  position:     "relative",
                  zIndex:       10,
                }}>
                  {p.desc}
                </p>

                {/* Learn more */}
                <div style={{ position: "relative", zIndex: 10 }}>
                  <button
                    style={{
                      color:      "#f5b800",
                      fontSize:   13,
                      fontWeight: 600,
                      background: "none",
                      border:     "none",
                      cursor:     "pointer",
                      padding:    0,
                      display:    "inline-flex",
                      alignItems: "center",
                      gap:        6,
                      transition: "color 0.2s, gap 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#ffc929"
                      e.currentTarget.style.gap   = "10px"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#f5b800"
                      e.currentTarget.style.gap   = "6px"
                    }}
                  >
                    Learn more →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════
          SOLUTIONS
      ══════════════════════════════════════ */}
             <section id="solutions" className="py-[80px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* ── SOLUTIONS label — centered ── */}
          <p style={{
            color:         "#f5b800",
            fontSize:      11,
            fontWeight:    700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textAlign:     "center",
            marginBottom:  14,
            marginTop:     -80,
          }}>
            SOLUTIONS
          </p>

          {/* ── Heading — full width centered, large ── */}
          <h2 style={{
            fontSize:      "clamp(1.8rem,4vw,3.5rem)",
            fontWeight:    500,
            lineHeight:    1.1,
            letterSpacing: "-0.02em",
            color:         "#ffffff",
            textAlign:     "center",
            marginBottom:  72,
            marginTop:     -14,
          }}>
            <span style={{ color: "#f5b800" }}>Real-World AI.</span>{" "}
            Real Business Impact.
          </h2>

          {/* ── Wrapper: robot + cards together ── */}
          <div style={{ position: "relative" }}>

            {/* Robot */}
            <div style={{
              position:      "absolute",
              top:           -240,
              left:          -60,
              width:         "clamp(220px, 25vw, 280px)",
              zIndex:        20,
              pointerEvents: "none",
            }}>
              <img
                src={SOLUTIONS_IMG}
                alt="AI Robot"
                style={{
                  width:     "100%",
                  height:    "auto",
                  objectFit: "contain",
                  display:   "block",
                }}
              />
            </div>

            {/* 2×2 card grid */}
            <div style={{
              display:             "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap:                 16,
            }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.4 2 2 0 0 1 3.62 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  title:   "Customer Support Automation",
                  desc:    "Replace repetitive tier-1 support with AI agents that resolve queries, process requests, and escalate intelligently — reducing support costs by up to 60%.",
                  powered: "Powered by Tegsoft AI Agent",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="12" y1="11" x2="12" y2="17"/>
                      <line x1="9" y1="14" x2="15" y2="14"/>
                    </svg>
                  ),
                  title:   "AI Medical Documentation",
                  desc:    "Eliminate after-hours documentation burden. Lyrebird AI listens, transcribes, and generates clinical notes in under 20 seconds — saving clinicians 2–3 hours daily.",
                  powered: "Powered by Lyrebird AI",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <circle cx="8" cy="12" r="2"/>
                      <path d="M14 10h4M14 14h4"/>
                    </svg>
                  ),
                  title:   "Smart Business Communication",
                  desc:    "From scan to CRM in seconds. Never lose a contact, miss a follow-up, or deal with duplicate records again.",
                  powered: "Powered by CamCard AI",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                  ),
                  title:   "Document Workflow Automation",
                  desc:    "Stop manually processing invoices, contracts, and onboarding forms. IDP reads, extracts, and routes data automatically with human-level accuracy.",
                  powered: "Powered by IDP Document Processing",
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group relative overflow-hidden cursor-pointer"
                  style={{
                    background:   "#0a0a0a",
   border: "1px solid rgba(238, 184, 24, 0.93)",
                    borderRadius: 14,
                    padding:      "18px 32px 16px",
                    boxShadow:    "0 0 0px rgba(245,184,0,0)",
                    transition:   "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(255,187,0,0.75)"
                    e.currentTarget.style.boxShadow   = "0 0 30px 4px rgba(255,187,0,0.28), 0 0 60px 8px rgba(255,187,0,0.12)"
                  }}
                  onMouseLeave={e => {
                   e.currentTarget.style.borderColor = "rgba(238, 184, 24, 0.93)"
                    e.currentTarget.style.boxShadow   = "0 0 0px rgba(245,184,0,0)"
                  }}
                >
                  {/* Hover radial glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                    style={{
                      background: "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(255,187,0,0.09) 0%, transparent 70%)",
                    }}
                  />

                  {/* Icon box */}
                  <div style={{
                    width:           44,
                    height:          44,
                    borderRadius:    6,
                    backgroundColor: "rgba(255,187,0,0.26)",
                    border:          "1px solid rgb(255,187,0)",
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    marginBottom:    10,
                    position:        "relative",
                    zIndex:          10,
                    flexShrink:      0,
                  }}>
                    {s.icon}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize:     20,
                    fontWeight:   700,
                    color:        "#ffffff",
                    lineHeight:   1.2,
                    marginBottom: 8,
                    position:     "relative",
                    zIndex:       10,
                  }}>
                    {s.title}
                  </h3>

                  {/* Desc + Powered inline italic */}
                  <p style={{
                    color:      "#888888",
                    fontSize:   13,
                    lineHeight: 1.6,
                    position:   "relative",
                    zIndex:     10,
                    margin:     0,
                  }}>
                    {s.desc}{" "}
                    <em style={{ fontStyle: "italic", color: "#888888" }}>
                      {s.powered}
                    </em>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>




      {/* ══════════════════════════════════════
          WHY TECHBEE
      ══════════════════════════════════════ */}
      <WhySection />


      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}      <TestimonialsCarousel />     {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="w-full py-[112px] px-0" style={{ background: "#000" }}>
        <div className="w-full max-w-[1400px] mx-auto px-6">
          <SLabel>Get In Touch</SLabel>
          <h2
            className="text-center font-bold mb-3"
            style={{ fontSize: "clamp(1.85rem, 3.8vw, 2.75rem)", color: "#ffffff" }}
          >
            See <span className="text-[#f5b800]">TechBee AI</span> in Action
          </h2>
          <p className="text-center text-[#999999] text-[14px] mb-12">
            Book a live demo — personalized to your business and your specific product needs.
          </p>

          <div
            className="w-full rounded-[28px] p-10 relative overflow-hidden"
            style={{
              background: "#080808",
              border:     "1px solid rgba(245,184,0,0.32)",
              boxShadow:  "0 0 80px rgba(245,184,0,0.18), 0 0 0 1px rgba(245,184,0,0.12)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(circle at top left, rgba(245,184,0,0.08), transparent 24%), radial-gradient(circle at bottom right, rgba(245,184,0,0.06), transparent 28%)",
              }}
            />
            <div className="relative z-10">

            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-white text-[13px] font-semibold">Name</span>
                <input name="name" value={form.name} onChange={handleForm} placeholder="Name" className={iCls} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-[13px] font-semibold">Business Email</span>
                <input name="email" value={form.email} onChange={handleForm} placeholder="Business Email" className={iCls} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-[13px] font-semibold">Company Name</span>
                <input name="company" value={form.company} onChange={handleForm} placeholder="Company Name" className={iCls} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-[13px] font-semibold">Address</span>
                <input name="address" value={form.address} onChange={handleForm} placeholder="Address" className={iCls} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-[13px] font-semibold">Job Title</span>
                <input name="jobTitle" value={form.jobTitle} onChange={handleForm} placeholder="Job Title" className={iCls} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-[13px] font-semibold">Country</span>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleForm}
                  className={iCls + " appearance-none cursor-pointer"}
                  style={{ color: form.country ? "#ffffff" : "#9b9b9b" }}
                >
                  <option value="" disabled hidden>UAE</option>
                  {COUNTRY_OPTIONS.map(c => (
                    <option key={c} value={c} className="bg-[#0d0d0d]">{c}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-[13px] font-semibold">Phone Number</span>
                <input name="phone" value={form.phone} onChange={handleForm} placeholder="Phone Number" className={iCls} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-white text-[13px] font-semibold">Product Interest</span>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleForm}
                  className={iCls + " appearance-none cursor-pointer"}
                  style={{ color: form.product ? "#ffffff" : "#9b9b9b" }}
                >
                  <option value="" disabled hidden>CAMCARD AI</option>
                  {PRODUCT_OPTIONS.map(p => (
                    <option key={p} value={p} className="bg-[#0d0d0d]">{p}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-2 mt-6">
              <span className="text-white text-[13px] font-semibold">Message</span>
              <textarea
                name="message" value={form.message} onChange={handleForm}
                placeholder="Message"
                className={iCls + " h-[120px] resize-none"}
              />
            </label>

            <label className="flex items-center gap-3 mt-6 cursor-pointer select-none">
              <div className="relative flex items-center justify-center w-5 h-5">
                <input
                  type="checkbox" name="privacy"
                  checked={form.privacy} onChange={handleForm}
                  className="w-5 h-5 appearance-none rounded-full border border-[#1f1f1f] bg-[#0d0d0d] checked:bg-[#f5b800] checked:border-[#f5b800] transition-colors cursor-pointer"
                />
                {form.privacy && (
                  <svg className="absolute w-3 h-3 text-black pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              <span className="text-[#999999] text-[13px]">Agree to privacy policy</span>
            </label>

            <motion.button
              whileHover={{ scale: 1.015, boxShadow: "0 0 44px rgba(245,184,0,0.5)" }}
              whileTap={{ scale: 0.985 }}
              className="mt-8 w-full bg-[#f5b800] text-black py-4 rounded-[12px] font-bold text-[15px] hover:bg-[#ffc929] transition-colors duration-200"
              style={{ boxShadow: "0 0 24px rgba(245,184,0,0.22)" }}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="w-full px-6 py-16 overflow-hidden" style={{ background: "#000" }}>
        <div
          className="relative w-full max-w-[1400px] mx-auto rounded-[30px] p-10"
          style={{
            background: "rgba(10,10,10,0.96)",
            border:     "2px solid rgba(211, 162, 14, 0.54)",
boxShadow: "inset 0 0 55px rgb(207, 157, 9), inset 0 0 1px rgba(245,184,0,0.22)",          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(circle at top left, rgba(245,184,0,0.09), transparent 22%), radial-gradient(circle at bottom right, rgba(245,184,0,0.06), transparent 28%)",
          }} />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[260px_1fr] mb-16 items-start">
            <div className="space-y-4">
              <div>
                <div className="text-[28px] font-black tracking-[0.22em] text-white" style={{ letterSpacing: "0.24em" }}>
                  TECH<span className="text-[#f5b800]">BEE</span>
                </div>
                <p className="text-[#d1d1d1] text-[11px] uppercase tracking-[0.32em] mt-2">IT &amp; Designs</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-10">
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">Products</h3>
                <div className="mt-6 space-y-4">
                  {['CamCard','Tegsoft AI','Lyrebird AI','IDP'].map(p => (
                    <p key={p} className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">{p}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">Company</h3>
                <div className="mt-6 space-y-4">
                  {['About Us','Career','Blog','Partner'].map(c => (
                    <p key={c} className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">{c}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">Legal</h3>
                <div className="mt-6 space-y-4">
                  {['Privacy Policy','Terms of service','Cookie Policy','Security'].map(l => (
                    <p key={l} className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">{l}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#cccccc] text-[12px]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-white">Social:</span>
              {['LinkedIn','Twitter/X','YouTube'].map((s, index) => (
                <span key={s} className="hover:text-[#f5b800] transition-colors duration-200">{s}{index < 2 ? ' ·' : ''}</span>
              ))}
            </div>
            <div className="text-[#aaaaaa]">© 2026 TechBee AI. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
