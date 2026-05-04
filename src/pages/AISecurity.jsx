import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const LOGO_IMG = "https://framerusercontent.com/images/lyszrRNqAQlPxY5yLXK4YieTqM.png"

const goToContact = (navigate) => {
  navigate("/")
  setTimeout(() => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, 300)
}

const SLabel = ({ children }) => (
  <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>{children}</p>
)

const Chip = ({ children }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,184,0,0.07)", border: "1px solid rgba(245,184,0,0.22)", borderRadius: 50, padding: "10px 20px", fontSize: 13.5, color: "#e0e0e0", fontWeight: 500, whiteSpace: "nowrap" }}>
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    {children}
  </div>
)

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "30+", label: "Years in Cybersecurity" },
  { value: "100,000+", label: "Organizations Protected" },
  { value: "165+", label: "Countries Served" },
  { value: "4.6B", label: "Attacks Blocked Annually" },
]

// ── 4 Pillars ─────────────────────────────────────────────────────────────────
const PILLARS = [
  {
    n: "01", label: "Network Security", brand: "Quantum",
    title: "Securing Data Centers, Perimeter & Branch",
    desc: "AI-powered hybrid mesh network security that secures data centers, hybrid cloud, perimeter, and branch offices through unified policy management. Rated #1 in NSS Security Effectiveness Labs with 99.59% malware block rate — above all major competitors.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  },
  {
    n: "02", label: "Workspace Security", brand: "Harmony",
    title: "Protecting Endpoints, Email, SaaS & Remote Users",
    desc: "Multi-layered protection across email, SaaS applications, web, devices, and remote users — all managed from a single pane of glass. API-based email security deploys in minutes with no MX change, no hardware, and live protection against phishing and ransomware.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    n: "03", label: "External Risk Management", brand: "ERM",
    title: "Identifying & Managing Your External Attack Surface",
    desc: "Intelligence-led, remediation-driven exposure management across the full CTEM cycle. Covers threat identification, vulnerability management, and safe remediation with smart prioritization, deep intelligence, and an open garden approach.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    n: "04", label: "Threat Exposure Management", brand: "TEM & AI Workspace",
    title: "Securing AI Tools, Copilots & User Interactions",
    desc: "Proactively identify vulnerabilities, prioritize risks, and secure AI tools, copilots, and user workflows. Defends against AI-powered threats while enabling safe AI adoption across employees, applications, and agents at enterprise scale.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  },
]

// ── Feature grid ──────────────────────────────────────────────────────────────
const FEATURE_GRID = [
  { icon: "🛡️", title: "Prevention-First Philosophy", desc: "Check Point's core ethos — stop attacks before they happen rather than just detect and respond after the damage is done." },
  { icon: "🤖", title: "50+ AI Engines", desc: "Over 50 AI engines working in parallel to achieve up to 99.8% malware block rate — the highest in independent security testing." },
  { icon: "☁️", title: "Hybrid Mesh Architecture", desc: "Unified security across on-premise, cloud, and hybrid environments with SD-WAN, SASE, and up to 10x faster user experience via on-device enforcement." },
  { icon: "📧", title: "Harmony Email & Workspace", desc: "API-based email security for Microsoft 365 — no MX change, no hardware. Deploys in minutes with complete anti-phishing and anti-ransomware coverage." },
  { icon: "🔬", title: "Exposure Management (CTEM)", desc: "Intelligence-led vulnerability management, threat identification, and safe remediation — continuously driven by smart prioritization and open garden integrations." },
  { icon: "📊", title: "Unified AI Management", desc: "Single pane of glass to manage policies and alerts across network, endpoint, email, and cloud — powered by AI-native security models." },
]

const FEATURES = [
  "99.59% security effectiveness (NSS #1)",
  "50+ AI threat prevention engines",
  "Hybrid mesh network security",
  "API-based email security (no MX change)",
  "Anti-phishing & anti-ransomware",
  "Endpoint EDR & mobile protection",
  "SASE & SD-WAN for branch offices",
  "External attack surface management",
  "CTEM vulnerability management",
  "AI copilot & workflow protection",
  "Cloud workload & container security",
  "Unified policy management console",
]

// ── Differentiators ───────────────────────────────────────────────────────────
const DIFFERENTIATORS = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
    title: "Highest Efficacy in the Industry",
    desc: "Ranked #1 in NSS Security Effectiveness Labs — 99.59% block rate vs. Fortinet 79.19%, Cisco 57.34%, and Palo Alto 46.37%. Prevention-first means the fewest incidents, not just the fastest response.",
    tag: "Proven #1",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    title: "AI-Driven Threat Prevention",
    desc: "50+ AI engines analyze 3.6 billion websites and files daily, inspect 200M+ emails, and block 4.6 billion attacks annually — adapting in real time as attackers leverage AI to move at machine speed.",
    tag: "AI-Native",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>,
    title: "Platform Consolidation",
    desc: "One unified Infinity Platform instead of a patchwork of point products — network, endpoint, email, cloud, and AI workspace security managed together, reducing complexity and total cost of ownership.",
    tag: "Consolidated",
  },
]

// ── Industry verticals ────────────────────────────────────────────────────────
const VERTICALS = [
  {
    role: "Financial Services",
    title: "9 of 10 of the world's largest banks trust Check Point.",
    desc: "Real-time fraud detection, regulatory compliance, and zero-trust architecture protect critical financial data and transactions — with AI-driven threat prevention that stops attacks before they impact operations.",
    tags: ["Banking", "Compliance", "Zero-Trust"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    role: "Aerospace & Defense",
    title: "9 of 10 top aerospace & defense companies globally.",
    desc: "Nation-state-grade AI-powered cyber defense protects sensitive IP, supply chains, and classified environments — with hybrid mesh architecture built for complex regulated infrastructure.",
    tags: ["Nation-State Defense", "IP Protection", "Hybrid Mesh"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  },
  {
    role: "Telecom",
    title: "8 of 10 top telecom companies worldwide.",
    desc: "Protect high-volume, high-velocity network environments with AI-powered perimeter and cloud security that scales to the demands of modern telecom infrastructure.",
    tags: ["Network Security", "Cloud Protection", "Scalability"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.58 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l1.41-1.41a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
  {
    role: "Enterprise Security Teams",
    title: "Unify your security posture across network, endpoint, and cloud.",
    desc: "Replace fragmented point products with Check Point Infinity — one platform, one AI management console, and prevention-first security that scales from branch offices to global data centers.",
    tags: ["Platform Consolidation", "AI SOC", "Unified Management"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
]

// ── Harmony workspace layers (from slide 7) ───────────────────────────────────
const HARMONY_LAYERS = [
  { side: "left", items: ["Security Awareness Training", "Mobile Protection", "Endpoint / EDR", "Browser Security"] },
  { side: "right", items: ["Email Protection", "Apps Security", "SSE (Security Service Edge)", "SaaS Application Protection"] },
]

// ── Firewall NSS full table (from slide 12) ───────────────────────────────────
const FIREWALL_TABLE = [
  { vendor: "Check Point CP-CGS-9300", rating: "Recommended", effectiveness: "99.59%", fp: "99.36%", highlight: true },
  { vendor: "Forcepoint 2210", rating: "Neutral", effectiveness: "99.53%", fp: "92.11%", highlight: false },
  { vendor: "Juniper Networks SRX4300", rating: "Recommended", effectiveness: "99.16%", fp: "98.46%", highlight: false },
  { vendor: "Versa Networks CSG5200", rating: "Recommended", effectiveness: "99.43%", fp: "99.64%", highlight: false },
  { vendor: "Fortinet FortiGate-200G", rating: "Caution", effectiveness: "79.19%", fp: "99.42%", highlight: false },
  { vendor: "Cisco Firepower 2130", rating: "Caution", effectiveness: "57.34%", fp: "80.31%", highlight: false },
  { vendor: "Palo Alto Networks PA-1410", rating: "Caution", effectiveness: "46.37%", fp: "99.67%", highlight: false },
]

// ── Hybrid architecture nodes (from slide 5) ──────────────────────────────────
const HYBRID_NODES = [
  { label: "Roaming Users", icon: "👤", desc: "On-device enforcement for remote workers — up to 10x faster experience with local security processing." },
  { label: "Remote Site / Branch", icon: "🏢", desc: "SD-WAN connectivity with full security stack — branch offices protected without backhauling traffic to HQ." },
  { label: "Unmanaged Devices / Contractors", icon: "💻", desc: "Agentless access control and inspection for BYOD, contractors, and third-party devices." },
  { label: "Multi Cloud", icon: "☁️", desc: "Consistent policy enforcement across AWS, Azure, GCP — no security gaps between cloud providers." },
  { label: "Data Center", icon: "🗄️", desc: "High-performance gateway protection for data centers with AI-powered threat prevention at line speed." },
  { label: "SaaS & Gen AI", icon: "🤖", desc: "Inline inspection of SaaS traffic and generative AI prompts — preventing data leakage and AI-driven attacks." },
]

// ── CTEM 3 elements (from slide 13 & 14) ─────────────────────────────────────
const CTEM_ELEMENTS = [
  {
    n: "01",
    title: "Threats Identification",
    subtitle: "External Attack Surface & Digital Footprint",
    desc: "Continuously discover and map your external attack surface — exposed assets, shadow IT, and digital footprint — before attackers do. Identify what is visible from the outside and what is at risk.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    n: "02",
    title: "Vulnerability Management",
    subtitle: "Intelligence Depth & Smart Prioritization",
    desc: "Not all vulnerabilities are equal. Deep intelligence and context-aware prioritization focus your team on the risks that matter most — cutting through noise with actionable, ranked exposure data.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  },
  {
    n: "03",
    title: "Safe Remediation",
    subtitle: "Open Garden — Drive Action with Confidence",
    desc: "Remediation that is safe, validated, and guided. Open garden integrations with your existing tools — ticketing, SIEM, SOAR — so fixes actually get deployed without introducing new risks.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  },
]

// ── Check Point Advantage 4 pillars (from slide 18) ───────────────────────────
const CP_ADVANTAGE = [
  {
    title: "Prevention First",
    desc: "Block threats before they breach — not after. Check Point's philosophy has always been to prevent the attack, not just detect and respond once damage is already done.",
    icon: "🛡️",
  },
  {
    title: "Scalability",
    desc: "From single-site businesses to Fortune 500 enterprises, Check Point scales security without compromising performance — supporting complex, multimodal enterprise workloads.",
    icon: "📈",
  },
  {
    title: "Hybrid Architecture",
    desc: "Secure every environment — on-premise, multi-cloud, branch, and remote — through one unified hybrid mesh with a single management plane.",
    icon: "🌐",
  },
  {
    title: "AI-Powered Management",
    desc: "One console powered by AI to manage, triage, and enforce policies across every security layer — reducing analyst workload and response times dramatically.",
    icon: "🤖",
  },
]

// ── End-to-End AI Security Stack (from slide 19 & 20) ────────────────────────
const AI_STACK = [
  {
    layer: "WAF",
    title: "Web Application Firewall",
    desc: "AI-powered web application protection blocks OWASP Top 10, zero-day exploits, and automated bot attacks — with inline inspection for all web-facing assets.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    layer: "AI Data Center",
    title: "AI Data Center Protection",
    desc: "Securing AI infrastructure, LLM workloads, and GPU clusters — protecting the new data center layer where AI models are trained and served at enterprise scale.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  },
  {
    layer: "SASE",
    title: "Secure Access Service Edge",
    desc: "Cloud-delivered security combining SD-WAN, ZTNA, SWG, and CASB — enforcing consistent policy for every user, device, and application from any location.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    layer: "Perimeter Gateway",
    title: "Perimeter Gateway Security",
    desc: "Next-generation firewalls with 50+ AI engines at the network perimeter — inspecting all traffic, enforcing zero-trust policies, and blocking sophisticated multi-vector attacks.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    layer: "Email Protection",
    title: "Email & Collaboration Security",
    desc: "API-native email security for Microsoft 365 and Google Workspace — no MX record change, live protection against phishing, BEC, ransomware, and malicious attachments.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    layer: "Endpoint Protection",
    title: "Endpoint / EDR Protection",
    desc: "AI-powered EDR that prevents, detects, and responds to endpoint threats — covering laptops, desktops, mobile, and IoT devices with behavioral analysis and automated remediation.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  },
]

// ── The AI threat landscape (from slide 15 & 17) ──────────────────────────────
const AI_THREATS = [
  {
    side: "ATTACKERS",
    label: "AI-Driven Attacks",
    color: "#ff4757",
    points: [
      "Attacks now move at machine speed — faster than human analysts can respond",
      "Generative AI enables highly personalized phishing and social engineering at scale",
      "Encrypted and automated attack traffic reduces window for detection and reaction",
      "AI amplifies attacker mistakes — and also amplifies their successes when defenses are weak",
    ],
  },
  {
    side: "ORGANIZATIONS",
    label: "AI Adoption",
    color: "#f5b800",
    points: [
      "Employees and developers rapidly adopt AI copilots, LLMs, and GenAI tools",
      "AI systems can amplify mistakes or be abused to leak sensitive data",
      "New AI attack surfaces emerge faster than traditional security tools can cover",
      "Organizations need security that enables AI adoption — not blocks it",
    ],
  },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "What is the Check Point Infinity Platform?", a: "The Infinity Platform is Check Point's unified, prevention-first security architecture that consolidates network security (Quantum), workspace security (Harmony), external risk management, and AI workspace protection into one integrated platform — managed through a single AI-powered console." },
  { q: "How does Check Point compare to Fortinet, Cisco, and Palo Alto?", a: "In independent NSS Security Effectiveness Labs testing, Check Point scored 99.59% — #1 among all competitors. Fortinet scored 79.19%, Cisco 57.34%, and Palo Alto Networks 46.37%. Check Point's prevention-first approach means fewer incidents reach your environment in the first place." },
  { q: "How does Check Point secure AI adoption for organizations?", a: "Check Point secures AI tools, copilots, and user interactions through its TEM & AI Workspace Security pillar — protecting AI workflows and data while defending against AI-powered threats that move at machine speed. The platform also uses 50+ AI engines internally to continuously improve threat prevention." },
  { q: "What is Harmony Email and how quickly can it be deployed?", a: "Harmony Email is an API-based email security solution for Microsoft 365 that requires no MX record change and no hardware. It can be deployed and delivering live protection within minutes, with a new hybrid API + Inline model that provides complete anti-phishing and anti-ransomware coverage across any location or device." },
  { q: "What is Continuous Threat Exposure Management (CTEM)?", a: "CTEM is Check Point's intelligence-led, remediation-driven approach to exposure management. It covers three elements: threat identification (external attack surface and digital footprint), vulnerability management (prioritization using deep intelligence), and safe remediation — all continuously driven through an open garden architecture." },
  { q: "Does Check Point work in hybrid and multi-cloud environments?", a: "Yes. Check Point's hybrid mesh architecture is purpose-built for on-premise, multi-cloud (AWS, Azure, GCP), and hybrid environments. The SASE and SD-WAN capabilities extend security to remote sites and branch offices, with up to 10x faster user experience through on-device enforcement." },
  { q: "What financial metrics back up Check Point's scale?", a: "Check Point reports $2.7B in LTM revenue with a 42% operating income margin and a 45% adjusted free cash flow margin — reflecting the financial strength of a company that has been profitable and growing in cybersecurity for over 30 years." },
]

function FAQItem({ i, q, a, isOpen, toggle }) {
  return (
    <div onClick={() => toggle(i)} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0" }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#fff", paddingRight: 24 }}>{q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}>
            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.75, paddingBottom: 24, margin: 0 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
export default function AISecurity() {
  const navigate = useNavigate()
  const [activeCase, setActiveCase] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar logoSrc={LOGO_IMG} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "160px 24px 120px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,184,0,0.13), transparent)" }} />
        <div style={{ position: "absolute", top: "15%", right: "-5%", width: 700, height: 700, background: "radial-gradient(circle, rgba(245,184,0,0.06) 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(245,184,0,0.08)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "10px 22px", marginBottom: 32 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span style={{ color: "#f5b800", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em" }}>CHECK POINT INFINITY PLATFORM</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: 24, color: "#fff" }}>
            We Secure Your<br />
            <span style={{ background: "linear-gradient(90deg, #f5a623 0%, #f5b800 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI Transformation</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "#888", maxWidth: 620, margin: "0 auto 44px", lineHeight: 1.75 }}>
            Check Point's unified, prevention-first Infinity Platform secures users, data, applications, and AI workflows — defending against AI-powered threats while enabling safe AI adoption across your organization.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => goToContact(navigate)}
              style={{ background: "#f5b800", color: "#000", fontSize: 15, fontWeight: 700, borderRadius: 50, padding: "16px 44px", border: "none", cursor: "pointer", boxShadow: "0 0 40px rgba(245,184,0,0.3)" }}>
              Get a Demo
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => goToContact(navigate)}
              style={{ background: "transparent", color: "#fff", fontSize: 15, fontWeight: 600, borderRadius: 50, padding: "16px 40px", border: "1px solid rgba(255,255,255,0.18)", cursor: "pointer" }}>
              Talk to an Expert
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#555", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 48 }}>CHECK POINT AT A GLANCE</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ textAlign: "center", background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.1)", borderRadius: 16, padding: "28px 16px" }}>
                <div style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#f5b800", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#777", letterSpacing: "0.03em" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 16 }}>
            {[
              { v: "$2.7B", l: "LTM Revenue" },
              { v: "42%", l: "LTM Operating Income Margin" },
              { v: "45%", l: "LTM Adj. FCF Margin" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                style={{ textAlign: "center", background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.07)", borderRadius: 16, padding: "24px 16px" }}>
                <div style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: 8 }}>{s.v}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4 PILLARS ═════════════════════════════════════════════════════════ */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>CHECK POINT INFINITY ARCHITECTURE</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Four Pillars of <span style={{ color: "#f5b800" }}>Complete Protection</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 560, margin: "0 auto 64px", lineHeight: 1.7 }}>
            A unified prevention-first platform that secures every layer of your organization — from data centers to AI workspaces.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {PILLARS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.12)", borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(245,184,0,0.07)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.12)"; e.currentTarget.style.boxShadow = "none" }}>
                <div style={{ position: "absolute", top: 14, right: 20, color: "rgba(245,184,0,0.06)", fontSize: 72, fontWeight: 900, fontFamily: "monospace", lineHeight: 1, pointerEvents: "none" }}>{p.n}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <span style={{ display: "inline-block", background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "3px 10px", color: "#f5b800", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{p.brand}</span>
                    <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>{p.label}</p>
                  </div>
                </div>
                <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, lineHeight: 1.35, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: "#777", fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HYBRID MESH ARCHITECTURE (slide 5) ════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>HYBRID MESH ARCHITECTURE</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Secure Every Environment, <span style={{ color: "#f5b800" }}>Every User, Every Device</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 600, margin: "0 auto 56px", lineHeight: 1.7 }}>
            The Check Point hybrid mesh architecture delivers consistent, AI-powered security across your entire infrastructure — from remote users to data centers — with up to 10x faster user experience through on-device security enforcement.
          </p>
          {/* 10x callout */}
          <div style={{ background: "rgba(245,184,0,0.05)", border: "1px solid rgba(245,184,0,0.25)", borderRadius: 16, padding: "24px 32px", marginBottom: 40, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <div style={{ fontSize: 52, fontWeight: 900, color: "#f5b800", lineHeight: 1, flexShrink: 0 }}>10x</div>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: "0 0 4px" }}>Faster User Experience with On-Device Security</p>
              <p style={{ color: "#777", fontSize: 13, lineHeight: 1.6, margin: 0 }}>By enforcing security on-device rather than backhauling traffic to a central gateway, Check Point delivers dramatically faster connectivity while maintaining full protection for remote users.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {HYBRID_NODES.map((node, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.1)", borderRadius: 16, padding: "24px 22px", transition: "border-color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.35)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.1)"}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{node.icon}</div>
                <h3 style={{ color: "#f5b800", fontSize: 13, fontWeight: 700, letterSpacing: "0.05em", marginBottom: 8 }}>{node.label}</h3>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{node.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HARMONY WORKSPACE SECURITY (slide 7) ══════════════════════════════ */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>HARMONY — WORKSPACE SECURITY</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Securing Humans. <span style={{ color: "#f5b800" }}>Protecting Your Workspace.</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 580, margin: "0 auto 56px", lineHeight: 1.7 }}>
            Layered security for users, devices, apps, and access — a single pane of glass manages complete anti-phishing and anti-ransomware coverage across any location, any device, and any application.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
            {/* Left stack */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Security Awareness Training", desc: "Continuous phishing simulations and employee security training — turning your workforce into a human firewall." },
                { label: "Mobile Protection", desc: "Mobile threat defense (MTD) for iOS and Android — detecting malicious apps, network attacks, and OS exploits." },
                { label: "Endpoint / EDR", desc: "AI-powered endpoint detection and response — preventing, detecting, and remediating threats across all managed devices." },
                { label: "Browser Security", desc: "Secure browser and browser extension protection — blocking web-based threats, credential theft, and malicious scripts in real time." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.1)", borderRadius: 12, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start", transition: "border-color 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.35)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.1)"}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f5b800", flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <p style={{ color: "#f5b800", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", margin: "0 0 4px" }}>{item.label}</p>
                    <p style={{ color: "#666", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Right stack */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Email Protection", desc: "API-based email security for Microsoft 365 — no MX change, no hardware. Live protection from the moment it is deployed." },
                { label: "Apps Security", desc: "SaaS application protection for Microsoft 365, Google Workspace, Slack, Salesforce, and 60+ additional SaaS platforms." },
                { label: "SSE — Security Service Edge", desc: "Secure web gateway, CASB, and ZTNA delivered as a cloud service — replacing legacy VPN and on-premise proxies." },
                { label: "SaaS Application Protection", desc: "Continuous monitoring and protection of SaaS apps against misconfigurations, data leakage, and third-party threats." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.1)", borderRadius: 12, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start", transition: "border-color 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.35)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.1)"}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f5b800", flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <p style={{ color: "#f5b800", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", margin: "0 0 4px" }}>{item.label}</p>
                    <p style={{ color: "#666", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>KEY CAPABILITIES</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Comprehensive <span style={{ color: "#f5b800" }}>Security Suite</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.7 }}>
            Everything you need to protect your organization from modern threats — unified under one AI-powered management console.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
            {FEATURE_GRID.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.1)", borderRadius: 16, padding: "28px 24px", transition: "border-color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.35)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.1)"}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {FEATURES.map((f, i) => <Chip key={i}>{f}</Chip>)}
          </div>
        </div>
      </section>

      {/* ══ CTEM — 3 ELEMENTS (slides 13 & 14) ════════════════════════════════ */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>EXPOSURE MANAGEMENT</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Intelligence-led, <span style={{ color: "#f5b800" }}>Remediation-driven</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 580, margin: "0 auto 56px", lineHeight: 1.7 }}>
            A unified capability across the full CTEM cycle — continuously identifying your external attack surface, prioritizing what matters, and driving safe remediation through an open garden architecture.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
            {CTEM_ELEMENTS.map((el, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.12)", borderRadius: 20, padding: "36px 28px", position: "relative", overflow: "hidden", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(245,184,0,0.07)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.12)"; e.currentTarget.style.boxShadow = "none" }}>
                <div style={{ position: "absolute", top: 12, right: 18, color: "rgba(245,184,0,0.06)", fontSize: 64, fontWeight: 900, fontFamily: "monospace", lineHeight: 1 }}>{el.n}</div>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>{el.icon}</div>
                <p style={{ color: "#f5b800", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 6 }}>Element {el.n}</p>
                <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, lineHeight: 1.3, marginBottom: 6 }}>{el.title}</h3>
                <p style={{ color: "#f5b800", fontSize: 12, fontWeight: 600, marginBottom: 12 }}>{el.subtitle}</p>
                <p style={{ color: "#777", fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{el.desc}</p>
              </motion.div>
            ))}
          </div>
          {/* open garden callout */}
          <div style={{ background: "rgba(245,184,0,0.04)", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 16, padding: "24px 32px", display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div>
              <p style={{ color: "#f5b800", fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>Open Garden Architecture</p>
              <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6, margin: 0 }}>Check Point's CTEM integrates with your existing SIEM, SOAR, ticketing systems, and third-party tools — no rip-and-replace. Security data and actions flow freely across your entire toolchain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AI THREAT LANDSCAPE (slides 15 & 17) ══════════════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>THE AI ERA THREAT LANDSCAPE</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            The Renaissance of Prevention —<br /><span style={{ color: "#f5b800" }}>A Must Have in the AI Era</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 600, margin: "0 auto 56px", lineHeight: 1.7 }}>
            Attacks now move at machine speed. As organizations adopt AI, attackers do too — creating a race that only prevention-first security can win.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }}>
            {AI_THREATS.map((side, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ background: "#0d0d0d", border: `1px solid ${side.color}22`, borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: side.color }} />
                  <div>
                    <p style={{ color: side.color, fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>{side.side}</p>
                    <p style={{ color: "#555", fontSize: 11, margin: 0 }}>{side.label}</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {side.points.map((pt, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={side.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="9 18 15 12 9 6"/></svg>
                      <span style={{ color: "#888", fontSize: 13, lineHeight: 1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          {/* #1 ranked callout */}
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 16, padding: "28px 32px", textAlign: "center" }}>
            <p style={{ color: "#555", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>#1 IN NSS SECURITY EFFECTIVENESS LABS TEST — Among Firewall Competitors</p>
            <div style={{ display: "flex", gap: 32, justifyContent: "center", alignItems: "flex-end", flexWrap: "wrap" }}>
              {[
                { label: "Check Point", val: "99.59%", color: "#f5b800", tall: true },
                { label: "Fortinet", val: "79.19%", color: "#ff6b35", tall: false },
                { label: "Cisco", val: "57.34%", color: "#00bceb", tall: false },
                { label: "Palo Alto", val: "46.37%", color: "#fa582d", tall: false },
              ].map((b, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <p style={{ color: b.color, fontWeight: 800, fontSize: b.tall ? 28 : 20, margin: "0 0 4px" }}>{b.val}</p>
                  <p style={{ color: "#555", fontSize: 11, margin: 0 }}>{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ KEY DIFFERENTIATORS ═══════════════════════════════════════════════ */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>THE CHECK POINT ADVANTAGE</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Why Organizations Choose <span style={{ color: "#f5b800" }}>Check Point</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.7 }}>
            Prevention-first, AI-driven, and consolidated — three pillars that set Check Point apart in every customer conversation.
          </p>

          {/* Full NSS firewall table */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ border: "1px solid #1a1a1a", borderRadius: 16, overflow: "hidden", marginBottom: 32 }}>
            <div style={{ background: "#0d0d0d", borderBottom: "1px solid #1a1a1a", padding: "14px 20px" }}>
              <p style={{ color: "#555", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>NSS Security Effectiveness Labs — Enterprise Firewall Results</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", background: "#0d0d0d", borderBottom: "1px solid #111" }}>
              {["Vendor", "NSS Rating", "Security Effectiveness"].map(h => (
                <div key={h} style={{ padding: "10px 20px", color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{h}</div>
              ))}
            </div>
            {FIREWALL_TABLE.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", borderBottom: i < FIREWALL_TABLE.length - 1 ? "1px solid #0e0e0e" : "none", background: row.highlight ? "rgba(245,184,0,0.04)" : "transparent" }}>
                <div style={{ padding: "14px 20px", color: row.highlight ? "#f5b800" : "#aaa", fontSize: 13, fontWeight: row.highlight ? 700 : 400 }}>{row.vendor}</div>
                <div style={{ padding: "14px 20px" }}>
                  <span style={{ background: row.rating === "Recommended" ? "rgba(74,222,128,0.1)" : row.rating === "Neutral" ? "rgba(255,255,255,0.06)" : "rgba(255,80,80,0.1)", color: row.rating === "Recommended" ? "#4ade80" : row.rating === "Neutral" ? "#888" : "#ff6060", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50 }}>{row.rating}</span>
                </div>
                <div style={{ padding: "14px 20px", color: row.highlight ? "#f5b800" : "#888", fontSize: 13, fontWeight: row.highlight ? 800 : 400 }}>{row.effectiveness}</div>
              </div>
            ))}
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.12)", borderRadius: 20, padding: "32px 28px", transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(245,184,0,0.07)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.12)"; e.currentTarget.style.boxShadow = "none" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>{d.icon}</div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#f5b800", letterSpacing: "0.12em", background: "rgba(245,184,0,0.1)", padding: "5px 12px", borderRadius: 20 }}>{d.tag}</span>
                </div>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.35 }}>{d.title}</h3>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ END-TO-END AI SECURITY STACK (slides 19 & 20) ═════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>END-TO-END AI SECURITY STACK</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            AI Security Embedded <span style={{ color: "#f5b800" }}>Across Every Layer</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 600, margin: "0 auto 20px", lineHeight: 1.7 }}>
            Check Point embeds AI-native security models at every layer of your infrastructure — from WAF to endpoint — through one unified protection engine.
          </p>
          {/* 3 pillars from slide 19 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
            {[
              { title: "AI-native Security Models", desc: "Purpose-built AI models trained on Check Point's global threat intelligence — not bolt-on AI added to legacy products." },
              { title: "Scalability", desc: "Scales to serve complex, multimodal enterprise workloads — from startup branches to Fortune 500 data centers." },
              { title: "Full AI Stack", desc: "Covers employees, applications, and agents — the complete AI adoption surface of a modern enterprise." },
            ].map((p, i) => (
              <div key={i} style={{ background: "rgba(245,184,0,0.04)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 14, padding: "22px 20px", textAlign: "center" }}>
                <p style={{ color: "#f5b800", fontSize: 14, fontWeight: 700, margin: "0 0 8px" }}>{p.title}</p>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          {/* 6 product layers from slide 20 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {AI_STACK.map((layer, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.1)", borderRadius: 16, padding: "26px 22px", transition: "border-color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.35)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.1)"}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{layer.icon}</div>
                  <span style={{ color: "#f5b800", fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>{layer.layer}</span>
                </div>
                <h3 style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{layer.title}</h3>
                <p style={{ color: "#666", fontSize: 12.5, lineHeight: 1.65, margin: 0 }}>{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CHECK POINT ADVANTAGE 4 PILLARS (slide 18) ════════════════════════ */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>PLATFORM STRENGTH</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.01em" }}>
            Four Reasons the Platform <span style={{ color: "#f5b800" }}>Wins Every Time</span>
          </h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.7 }}>
            Prevention First. Scalable. Hybrid. AI-managed. The four pillars of the Check Point Advantage — built to win in the AI era.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {CP_ADVANTAGE.map((adv, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{ background: "rgba(245,184,0,0.03)", border: "1px solid rgba(245,184,0,0.12)", borderRadius: 20, padding: "32px 24px", textAlign: "center", transition: "border-color 0.3s, background 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"; e.currentTarget.style.background = "rgba(245,184,0,0.06)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.12)"; e.currentTarget.style.background = "rgba(245,184,0,0.03)" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{adv.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 10 }}>{adv.title}</h3>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRY VERTICALS ════════════════════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>TRUSTED ACROSS INDUSTRIES</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: "-0.01em" }}>Recognized Across</h2>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#f5b800", marginBottom: 14, letterSpacing: "-0.01em" }}>5 Key Verticals</h2>
          <p style={{ textAlign: "center", color: "#888", fontSize: 15, maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}>
            From financial services to aerospace — industry leaders worldwide trust Check Point to protect their most critical environments.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
            {VERTICALS.map((v, i) => (
              <button key={i} onClick={() => setActiveCase(i)}
                style={{ background: activeCase === i ? "#f5b800" : "transparent", color: activeCase === i ? "#000" : "#888", border: activeCase === i ? "none" : "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "9px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { if (activeCase !== i) { e.currentTarget.style.borderColor = "#f5b800"; e.currentTarget.style.color = "#f5b800" } }}
                onMouseLeave={e => { if (activeCase !== i) { e.currentTarget.style.borderColor = "rgba(245,184,0,0.2)"; e.currentTarget.style.color = "#888" } }}>
                {v.role}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeCase} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }}
              style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 24, padding: "48px", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ width: 72, height: 72, borderRadius: 18, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>{VERTICALS[activeCase].icon}</div>
                <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>{VERTICALS[activeCase].role}</p>
              </div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <h3 style={{ color: "#fff", fontSize: "clamp(1.1rem, 2vw, 1.45rem)", fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}>{VERTICALS[activeCase].title}</h3>
                <p style={{ color: "#888", fontSize: 14.5, lineHeight: 1.8, marginBottom: 24 }}>{VERTICALS[activeCase].desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {VERTICALS[activeCase].tags.map(tag => (
                    <span key={tag} style={{ background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", borderRadius: 50, padding: "5px 14px", color: "#f5b800", fontSize: 12, fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══ AI MISSION ════════════════════════════════════════════════════════ */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SLabel>OUR MISSION</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 56, letterSpacing: "-0.01em" }}>
            Securing <span style={{ color: "#f5b800" }}>What's Next</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { emoji: "🔄", title: "Continuously Update Security", desc: "Threat intelligence that evolves in real time — 50+ AI engines keep your defenses ahead of the attackers, not behind them." },
              { emoji: "🤖", title: "Secure the New AI Attack Surfaces", desc: "As organizations adopt AI tools and copilots, Check Point secures those workflows — protecting AI-driven interactions and data across every layer." },
              { emoji: "⚙️", title: "Leverage AI to Simplify Security", desc: "AI-powered management that automates policy enforcement, triage, and incident response — reducing complexity without compromising coverage." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{ background: "rgba(245,184,0,0.03)", border: "1px solid rgba(245,184,0,0.12)", borderRadius: 20, padding: "36px 28px", transition: "border-color 0.3s, background 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"; e.currentTarget.style.background = "rgba(245,184,0,0.06)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.12)"; e.currentTarget.style.background = "rgba(245,184,0,0.03)" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{item.emoji}</div>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "#666", fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#050505", padding: "100px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SLabel>FREQUENTLY ASKED QUESTIONS</SLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", marginBottom: 48 }}>Common Questions</h2>
          {FAQS.map((f, i) => (
            <FAQItem key={i} i={i} {...f} isOpen={openFaq === i} toggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)} />
          ))}
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.22)", borderRadius: 28, padding: "64px 56px", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 0 80px rgba(245,184,0,0.05)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,184,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
            <SLabel>GET STARTED TODAY</SLabel>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.01em" }}>
              Ready to Secure Your<br />
              <span style={{ color: "#f5b800" }}>AI Transformation?</span>
            </h2>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 40px" }}>
              Join 100,000+ organizations in 165+ countries that trust Check Point to protect their most critical environments.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <button onClick={() => goToContact(navigate)}
                style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "14px 40px", border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.35)", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                Request a Demo →
              </button>
              <button onClick={() => navigate("/")}
                style={{ background: "none", border: "none", color: "#888", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, transition: "color 0.2s", padding: "14px 0" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f5b800"}
                onMouseLeave={e => e.currentTarget.style.color = "#888"}>
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
