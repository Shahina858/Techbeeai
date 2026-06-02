import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProductPage, { PLabel, Chip, StepCard, UseCaseCard, StatPill } from "../components/ProductPage"

// ── Images ────────────────────────────────────────────────────────────────────
const IMG_HERO      = "/tegsoft_hero.png"
const IMG_DASHBOARD = "/tegsoft_dashboard.png"
const IMG_OMNI      = "/tegsoft_omni.png"

// ── Navigate to home contact section ─────────────────────────────────────────
const goToContact = (navigate) => {
  navigate("/")
  setTimeout(() => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, 300)
}

// ── Channel card ──────────────────────────────────────────────────────────────
const ChannelCard = ({ icon, title, subtitle, bullets }) => (
  <div style={{
    background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.16)", borderRadius: 20,
    padding: "32px 28px", flex: 1, minWidth: 280, transition: "border-color 0.25s, box-shadow 0.25s",
  }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.45)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(245,184,0,0.07)" }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,184,0,0.16)"; e.currentTarget.style.boxShadow = "none" }}
  >
    <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
    <h3 style={{ color: "#f5b800", fontSize: 18, fontWeight: 800, marginBottom: 6, letterSpacing: "-0.01em" }}>{title}</h3>
    <p style={{ color: "#888", fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>{subtitle}</p>
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
      {bullets.map(b => (
        <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#ccc", fontSize: 13, lineHeight: 1.6 }}>
          <svg style={{ flexShrink: 0, marginTop: 2 }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          {b}
        </li>
      ))}
    </ul>
  </div>
)

// ── Dialer card ───────────────────────────────────────────────────────────────
const DialerCard = ({ n, title, desc }) => (
  <div style={{
    background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.14)", borderRadius: 16,
    padding: "28px 24px", flex: 1, minWidth: 200, transition: "border-color 0.25s",
  }}
    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)"}
    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.14)"}
  >
    <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(245,184,0,0.12)", border: "1px solid rgba(245,184,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
      <span style={{ color: "#f5b800", fontWeight: 800, fontSize: 14 }}>{n}</span>
    </div>
    <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{title}</h4>
    <p style={{ color: "#777", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{desc}</p>
  </div>
)

// ── Channel icon pill ─────────────────────────────────────────────────────────
const ChannelPill = ({ emoji, label }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "rgba(245,184,0,0.06)", border: "1px solid rgba(245,184,0,0.18)", borderRadius: 16, padding: "18px 20px", minWidth: 90 }}>
    <span style={{ fontSize: 26 }}>{emoji}</span>
    <span style={{ color: "#ccc", fontSize: 12, fontWeight: 600, textAlign: "center" }}>{label}</span>
  </div>
)

// ── Pricing check/cross ───────────────────────────────────────────────────────
const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const Cross = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

// ── Comparison table data ─────────────────────────────────────────────────────
const COMPARISON = [
  { feature: "TegsoftCRM Features",                   voice: true,  omni: true,  ai: true  },
  { feature: "Basic IVR features",                    voice: true,  omni: true,  ai: true  },
  { feature: "Advanced IVR features",                 voice: true,  omni: true,  ai: true  },
  { feature: "Creating Custom Surveys / NPS Scoring", voice: true,  omni: true,  ai: true  },
  { feature: "APIs for 3rd Party Integrations",       voice: true,  omni: true,  ai: true  },
  { feature: "Inbound Management",                    voice: true,  omni: true,  ai: true  },
  { feature: "Free IP PBX User Licenses",             voice: "700", omni: "1500",ai: "—"   },
  { feature: "Call routing via time conditions",      voice: true,  omni: true,  ai: true  },
  { feature: "Conference room management",            voice: true,  omni: true,  ai: false },
  { feature: "Call Detail Reports (CDR)",             voice: true,  omni: true,  ai: true  },
  { feature: "Voice recording",                       voice: true,  omni: true,  ai: true  },
  { feature: "Voice reports and analytics",           voice: true,  omni: true,  ai: true  },
  { feature: "Voice mail",                            voice: true,  omni: true,  ai: false },
  { feature: "Integrated Webphone",                   voice: true,  omni: true,  ai: true  },
  { feature: "CTI Popup Functionality",               voice: true,  omni: true,  ai: false },
  { feature: "Creating IVR trees",                    voice: true,  omni: true,  ai: true  },
  { feature: "Queue Management",                      voice: true,  omni: true,  ai: true  },
  { feature: "Agent Management",                      voice: true,  omni: true,  ai: false },
  { feature: "Preview, Progressive & Predictive Dialer", voice: true, omni: true, ai: false },
  { feature: "Webchat",                               voice: false, omni: true,  ai: false },
  { feature: "WhatsApp Business integration",         voice: false, omni: true,  ai: true  },
  { feature: "Facebook Messenger & Instagram DM",     voice: false, omni: true,  ai: true  },
  { feature: "SMS channel",                           voice: false, omni: true,  ai: true  },
  { feature: "Email channel",                         voice: false, omni: true,  ai: true  },
  { feature: "Chat Reports",                          voice: false, omni: true,  ai: true  },
  { feature: "AI Voice Agent",                        voice: false, omni: false, ai: true  },
  { feature: "AI Text Agent",                         voice: false, omni: false, ai: true  },
  { feature: "Detailed AI Reporting",                 voice: false, omni: false, ai: true  },
]

function PricingCell({ val }) {
  if (val === true)  return <div style={{ display: "flex", justifyContent: "center" }}><Check /></div>
  if (val === false) return <div style={{ display: "flex", justifyContent: "center" }}><Cross /></div>
  return <span style={{ color: "#f5b800", fontWeight: 700, fontSize: 13 }}>{val}</span>
}

export default function Tegsoft() {
  const navigate = useNavigate()
  const [billing, setBilling] = useState("monthly")
  const [showAll, setShowAll] = useState(false)

  const visibleRows = showAll ? COMPARISON : COMPARISON.slice(0, 10)

  return (
  
  <ProductPage
    badge="TEGSOFT AI AGENT — CONTACT CENTER"
    headline={<>Automate Customer Support.<br /><span style={{ color: "#f5b800" }}>Delight Every Customer.</span></>}
    sub="Tegsoft is the leading cloud contact center solution in the UAE — empowering businesses to reach their customers from anywhere via a single unified interface that drives smarter, more valuable conversations."
    cta="Request a Demo"
    heroImg={IMG_HERO}
    demoVideoSrc="/tegsoft_demo.mp4"
    pricingCta={() => {
      const el = document.getElementById("pricing")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }}
  >
    

      {/* ── 3 PRODUCTS OVERVIEW ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CONTACT CENTER PRODUCTS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
            Three Channels. <span style={{ color: "#f5b800" }}>One Unified Platform.</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, lineHeight: 1.75, maxWidth: 560, margin: "0 auto 56px" }}>
            Whether you need voice, full omnichannel, or AI-powered automation — Tegsoft has a purpose-built product for every need.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <ChannelCard icon="📞" title="VoiceChannel" subtitle="Customer Services & Tele-Sales Teams"
              bullets={["Manage inbound & outbound calls from one screen","Advanced IVR to streamline call flows","Predictive, Progressive & Preview Dialers","Real-time call monitoring & analytics dashboard","Call recording & click-to-call","Integrated CRM with caller identification","Scalable from 1 agent to 100+",]} />
            <ChannelCard icon="🌐" title="OmniChannel" subtitle="360° Customer Experience — All Channels, One Platform"
              bullets={["Voice, Webchat, WhatsApp Business","Facebook Messenger & Instagram DM","SMS, Email & Social Media — unified","Seamless channel-switching mid-conversation","Full customer journey history across all channels","Manage social media comments via contact center","Agents handle everything from one screen",]} />
            <ChannelCard icon="🤖" title="AIChannel" subtitle="AI-Powered Communication — Smarter, Faster, Automated"
              bullets={["AI Voice Agent for inbound & outbound calls","AI Text Agent for chat, WhatsApp, SMS & email","Natural Language Processing for intent detection","24/7 availability — no breaks, no queues","Seamless human handoff with full context","Handle unlimited simultaneous conversations","Deep reporting & interaction analytics",]} />
          </div>
        </div>
      </section>

      {/* ── DASHBOARD SHOWCASE ── */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <PLabel>AGENT DESKTOP</PLabel>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", margin: "0 0 20px", lineHeight: 1.2 }}>
                One Screen for <span style={{ color: "#f5b800" }}>Every Conversation</span>
              </h2>
              <p style={{ color: "#777", fontSize: 15, lineHeight: 1.8, margin: "0 0 28px" }}>
                Tegsoft's Agent Desktop puts everything your team needs in a single unified view — customer profile, full conversation history, live chat, CRM data, and real-time call controls — all without switching tabs.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "💬", text: "Live chat, call & CRM on one screen" },
                  { icon: "📋", text: "Full customer history & activity timeline" },
                  { icon: "⚡", text: "Real-time call monitoring & status tracking" },
                  { icon: "🔗", text: "Click-to-call, notes & activity creation" },
                ].map(item => (
                  <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(245,184,0,0.1)", border: "1px solid rgba(245,184,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16 }}>
                      {item.icon}
                    </div>
                    <span style={{ color: "#ccc", fontSize: 14 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -20, borderRadius: 24, background: "radial-gradient(ellipse at center, rgba(245,184,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
              <img src={IMG_DASHBOARD} alt="Tegsoft Agent Desktop" style={{ width: "100%", borderRadius: 16, display: "block", position: "relative", zIndex: 1, boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>HOW IT WORKS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Intelligent Support <span style={{ color: "#f5b800" }}>Automation</span>
          </h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <StepCard n="1" title="Customer Contacts" desc="Customer reaches out via call, chat, email, WhatsApp, or social media. Tegsoft AI Agent picks up instantly — 24/7, zero wait time." />
            <StepCard n="2" title="AI Understands" desc="AI processes the request using Natural Language Processing to accurately identify customer intent and retrieve the right answer from your knowledge base." />
            <StepCard n="3" title="AI Responds or Acts" desc="The agent resolves the query autonomously — answering questions, processing requests, or taking action — in under a second." />
            <StepCard n="4" title="Smart Escalation" desc="Complex issues are handed off to the right human agent with full conversation context. No repeating. No frustration. Seamless handoff every time." />
          </div>
        </div>
      </section>

      {/* ── OMNICHANNEL ── */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -24, borderRadius: 28, background: "radial-gradient(ellipse at center, rgba(245,184,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
              <img src={IMG_OMNI} alt="Unified Omnichannel Experience" style={{ width: "100%", borderRadius: 16, display: "block", position: "relative", zIndex: 1, boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }} />
            </div>
            <div>
              <PLabel>SUPPORTED CHANNELS</PLabel>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", margin: "0 0 20px", lineHeight: 1.2 }}>
                Meet Customers <span style={{ color: "#f5b800" }}>Everywhere They Are</span>
              </h2>
              <p style={{ color: "#777", fontSize: 15, lineHeight: 1.8, margin: "0 0 32px" }}>
                Customers switch channels constantly. Tegsoft keeps the full conversation history intact — no matter where they reach out from. One agent, every channel, zero repetition.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <ChannelPill emoji="📞" label="Voice Calls" />
                <ChannelPill emoji="💬" label="Webchat" />
                <ChannelPill emoji="📱" label="WhatsApp" />
                <ChannelPill emoji="📘" label="Facebook" />
                <ChannelPill emoji="📸" label="Instagram" />
                <ChannelPill emoji="📩" label="SMS" />
                <ChannelPill emoji="📧" label="Email" />
                <ChannelPill emoji="🐦" label="Social Media" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIALER TYPES ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>OUTBOUND CAMPAIGNS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
            Automated Dialer <span style={{ color: "#f5b800" }}>Methods</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, lineHeight: 1.75, maxWidth: 520, margin: "0 auto 48px" }}>
            Maximise agent productivity and contact rates with three powerful outbound dialling modes.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <DialerCard n="01" title="Preview Dialer" desc="Contact data is automatically selected from campaign data and shown on the agent's screen before the call — giving agents time to prepare context." />
            <DialerCard n="02" title="Progressive Dialer" desc="Automatically dials the next contact as soon as the agent becomes available, eliminating idle time and reducing wait time between calls." />
            <DialerCard n="03" title="Predictive Dialer" desc="Uses algorithms to predict agent availability and dial multiple numbers simultaneously — maximising efficiency during high-volume campaigns." />
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>CAPABILITIES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 48 }}>
            Built for <span style={{ color: "#f5b800" }}>Enterprise Scale</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["HD Inbound & Outbound Calling","Interactive Voice Response (IVR)","Real-Time Call Monitoring & Analytics","Call Recording & Click-to-Call","Customisable SLAs & Queue Management","AI-Powered Workflows & Chatbot","Omnichannel: Voice, WhatsApp, Email, Chat","CRM Integration (Salesforce, Zoho, HubSpot)","Cloud & On-Premise Deployment","Secure & Compliant Communications","50+ Language Support","Real-Time Sentiment Analysis","Caller Identification & Call History","Agent Activity Management & Reporting","Scale from 1 to 100+ Agents Instantly"].map(f => <Chip key={f}>{f}</Chip>)}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20 }}>
            <StatPill value="60%" label="Reduction in Support Costs" />
            <StatPill value="24/7" label="Always-On AI Coverage" />
            <StatPill value="< 1s" label="AI Response Time" />
            <StatPill value="45%" label="Call Center Cost Savings (avg)" />
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>USE CASES</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Powering Contact Centres <span style={{ color: "#f5b800" }}>Across Every Industry</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <UseCaseCard role="Call Centers & BPOs" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>} title="Reduce agent workload by 60% — handle more with less." desc="Automate repetitive tier-1 queries so your agents spend time on complex, high-value interactions. AI handles the volume — humans handle the nuance." />
            <UseCaseCard role="E-Commerce & Retail" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>} title="Order, return & refund queries resolved instantly." desc="Customers get real-time order status, return initiation, and refund processing — fully automated across chat, WhatsApp, and voice simultaneously." />
            <UseCaseCard role="Banking & Finance" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>} title="Secure, compliant customer service — at scale." desc="Answer balance inquiries, transaction history, and account updates securely — with full compliance, audit trails, and intelligent escalation to human agents." />
            <UseCaseCard role="Real Estate & Property" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>} title="Qualify leads, book viewings, follow up — 24/7." desc="AI handles inbound property enquiries, qualifies prospects, schedules viewings, and sends follow-up reminders — without adding any headcount." />
            <UseCaseCard role="Healthcare & Clinics" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>} title="Appointment booking, reminders & triage automated." desc="Reduce no-shows, free clinical staff from admin calls, and give patients instant responses any hour — boosting satisfaction while cutting operational costs." />
            <UseCaseCard role="Telecom & ISPs" icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6l5 5"/><path d="M6 6L1 11"/><path d="M17 6l5 5"/><path d="M22 6l-5 5"/><circle cx="12" cy="12" r="3"/></svg>} title="Troubleshoot & support thousands of calls per month." desc="AI handles network diagnostics, plan upgrades, billing queries, and technical support — deflecting high call volumes while improving first-call resolution rates." />
          </div>
        </div>
      </section>

      {/* ── WHY TEGSOFT ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>WHY TEGSOFT</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
            The Leading Contact Centre Solution <span style={{ color: "#f5b800" }}>in the UAE</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, lineHeight: 1.75, maxWidth: 600, margin: "0 auto 56px" }}>
            From small businesses to large enterprises — Tegsoft offers scalable deployment, seamless CRM integrations, and a user-friendly interface your team will actually use.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { icon: "🎙️", title: "Crystal-Clear HD Voice", desc: "Noise reduction, HD audio, and seamless call connectivity for every customer interaction." },
              { icon: "☁️", title: "Cloud or On-Premise", desc: "Flexible deployment — cloud-hosted or on-premise — to match your compliance and infrastructure needs." },
              { icon: "⚡", title: "Quick Installation", desc: "Go live in days, not months. Remote access and fast setup for any team size from 1 to 100+." },
              { icon: "📊", title: "Real-Time Analytics", desc: "Live dashboards tracking KPIs, call volumes, agent performance, and customer satisfaction scores." },
              { icon: "🔒", title: "Secure & Compliant", desc: "Built for regulated industries with encryption, access controls, and full audit trails." },
              { icon: "🔗", title: "Deep Integrations", desc: "Works with Salesforce, HubSpot, Zoho, SAP, Zendesk, and 100+ business tools out of the box." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#111", border: "1px solid rgba(245,184,0,0.12)", borderRadius: 16, padding: "28px 24px", transition: "border-color 0.25s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.38)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(245,184,0,0.12)"}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ═══════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-[96px] px-6" style={{ background: "#050505" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>PRICING</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 14 }}>
            Simple, Transparent <span style={{ color: "#f5b800" }}>Pricing</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, maxWidth: 560, margin: "0 auto 14px", lineHeight: 1.7 }}>
            All plans start from 3 licenses. Pay monthly or annually. For ownership options, contact us.
          </p>

          {/* Billing toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 0, background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 10, padding: 4 }}>
              {["monthly", "annually"].map(b => (
                <button key={b} onClick={() => setBilling(b)}
                  style={{
                    background: billing === b ? "#f5b800" : "transparent",
                    color: billing === b ? "#000" : "#666",
                    border: "none", fontWeight: 700, fontSize: 13,
                    padding: "9px 22px", borderRadius: 7, cursor: "pointer",
                    transition: "all 0.18s", display: "flex", alignItems: "center", gap: 8,
                  }}>
                  {b === "monthly" ? "Monthly" : "Annually"}
                  {b === "annually" && (
                    <span style={{
                      background: billing === "annually" ? "#00000025" : "#f5b80015",
                      color: billing === "annually" ? "#000" : "#f5b800",
                      fontSize: 10, fontWeight: 800, padding: "2px 7px", borderRadius: 20,
                    }}>SAVE</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Plan cards — 3 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 32 }}>

            {/* VOICECHANNEL */}
            <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 16, padding: "32px 26px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>📞</div>
              <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>VoiceChannel</p>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Voice</h3>
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 40 }}>Customer Services & Tele-Sales Teams</p>
              <div style={{ marginBottom: 4 }}>
                <span style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 800 }}>$69</span>
                <span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>/ agent / month</span>
              </div>
              <p style={{ color: "#555", fontSize: 12, marginBottom: 22 }}>
                {billing === "annually" ? "Billed annually" : "Billed monthly"}
              </p>
              <a href="https://www.tegsoftcloud.com/Tobe/app/ApplicationServlet?login=cup_signUp&" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", textAlign: "center", background: "transparent", color: "#ccc", border: "1px solid #2a2a2a", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, textDecoration: "none", marginBottom: 24, transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#ccc" }}>
                Get Started
              </a>
              <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", marginBottom: 16 }} />
              <p style={{ color: "#555", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Includes</p>
              {["Inbound Call Management","Advanced IVR","Preview, Progressive & Predictive Dialer","Real-time monitoring panel","Embedded Webphone & Integrated CRM","Voice Recording & Voicemail","VPOS – Credit Card Payment"].map(f => (
                <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                  <Check />
                  <span style={{ color: "#999", fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* OMNICHANNEL — FEATURED */}
            <div style={{ background: "#0f0f0f", border: "2px solid #f5b800", borderRadius: 16, padding: "32px 26px", display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#f5b800", color: "#000", fontSize: 11, fontWeight: 800, padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
                MOST POPULAR
              </div>
              <div style={{ fontSize: 28, marginBottom: 12 }}>🌐</div>
              <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>OmniChannel</p>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Omni</h3>
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 40 }}>360° Customer Experience — All Channels</p>
              <div style={{ marginBottom: 4 }}>
                <span style={{ color: "#f5b800", fontSize: "2.2rem", fontWeight: 800 }}>$99</span>
                <span style={{ color: "#555", fontSize: 13, marginLeft: 6 }}>/ agent / month</span>
              </div>
              <p style={{ color: "#555", fontSize: 12, marginBottom: 22 }}>
                {billing === "annually" ? "Billed annually" : "Billed monthly"}
              </p>
              <a href="https://www.tegsoftcloud.com/Tobe/app/ApplicationServlet?login=cup_signUp&" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", textAlign: "center", background: "#f5b800", color: "#000", border: "none", fontWeight: 800, fontSize: 14, padding: "13px", borderRadius: 8, textDecoration: "none", marginBottom: 24, transition: "background 0.18s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
                Get Started
              </a>
              <hr style={{ border: "none", borderTop: "1px solid #2a2a2a", marginBottom: 16 }} />
              <p style={{ color: "#555", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Everything in Voice, plus</p>
              {["Webchat","WhatsApp Business integration","Facebook Messenger & Instagram DM","SMS channel","Email channel","Chat Reports"].map(f => (
                <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                  <Check />
                  <span style={{ color: "#999", fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* AICHANNEL */}
            <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 16, padding: "32px 26px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>🤖</div>
              <p style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>AIChannel</p>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>AI</h3>
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 20, minHeight: 40 }}>AI-Powered Communication Experience</p>
              <div style={{ marginBottom: 4 }}>
                <span style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 800 }}>Contact Sales</span>
              </div>
              <p style={{ color: "#555", fontSize: 12, marginBottom: 22 }}>Custom pricing per agent</p>
              <button onClick={() => goToContact(navigate)}
                style={{ display: "block", textAlign: "center", background: "transparent", color: "#f5b800", border: "1px solid rgba(245,184,0,0.4)", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, cursor: "pointer", marginBottom: 24, transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,184,0,0.08)"; e.currentTarget.style.borderColor = "#f5b800" }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)" }}>
                Contact Us
              </button>
              <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", marginBottom: 16 }} />
              <p style={{ color: "#555", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Includes</p>
              {["AI Voice Agent (inbound & outbound)","AI Text Agent (chat, WhatsApp, SMS, email)","Natural Language Processing","24/7 availability — no queues","Seamless human handoff with context","Detailed AI Reporting"].map(f => (
                <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                  <Check />
                  <span style={{ color: "#999", fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Min license note */}
          <div style={{ background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 12, padding: "18px 24px", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, flex: 1, minWidth: 240 }}>
              All plans start from <span style={{ color: "#ddd" }}>3 licenses minimum</span>. For ownership / on-premise options, contact Techbee — your authorized Tegsoft partner for the UAE and GCC.
            </p>
            <a href="https://tegsoft.com/pricing/" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#f5b800", fontSize: 13, fontWeight: 700, textDecoration: "none", border: "1px solid #f5b80040", padding: "10px 20px", borderRadius: 8, flexShrink: 0, whiteSpace: "nowrap" }}>
              Official pricing page
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          {/* Comparison table */}
          <PLabel>PLAN COMPARISON</PLabel>
          <h3 style={{ textAlign: "center", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, color: "#fff", marginBottom: 32 }}>
            Feature <span style={{ color: "#f5b800" }}>Breakdown</span>
          </h3>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <div style={{ border: "1px solid #1a1a1a", borderRadius: 14, overflow: "hidden", minWidth: 560 }}>
              {/* Header */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: "#0d0d0d", borderBottom: "1px solid #1a1a1a" }}>
                <div style={{ padding: "14px 20px", color: "#444", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Feature</div>
                <div style={{ padding: "14px 16px", color: "#888", fontSize: 11, fontWeight: 700, textAlign: "center", borderLeft: "1px solid #1a1a1a" }}>📞 Voice</div>
                <div style={{ padding: "14px 16px", color: "#f5b800", fontSize: 11, fontWeight: 700, textAlign: "center", borderLeft: "1px solid #1a1a1a" }}>🌐 Omni</div>
                <div style={{ padding: "14px 16px", color: "#888", fontSize: 11, fontWeight: 700, textAlign: "center", borderLeft: "1px solid #1a1a1a" }}>🤖 AI</div>
              </div>
              {visibleRows.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderBottom: i < visibleRows.length - 1 ? "1px solid #111" : "none", background: i % 2 === 0 ? "#000" : "#060606" }}>
                  <div style={{ padding: "13px 20px", color: "#aaa", fontSize: 13 }}>{row.feature}</div>
                  <div style={{ padding: "13px 16px", borderLeft: "1px solid #111", display: "flex", justifyContent: "center", alignItems: "center" }}><PricingCell val={row.voice} /></div>
                  <div style={{ padding: "13px 16px", borderLeft: "1px solid #111", display: "flex", justifyContent: "center", alignItems: "center" }}><PricingCell val={row.omni} /></div>
                  <div style={{ padding: "13px 16px", borderLeft: "1px solid #111", display: "flex", justifyContent: "center", alignItems: "center" }}><PricingCell val={row.ai} /></div>
                </div>
              ))}
            </div>
          </div>
          {/* Show more/less */}
          {!showAll && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <button onClick={() => setShowAll(true)}
                style={{ background: "transparent", color: "#f5b800", border: "1px solid rgba(245,184,0,0.35)", fontWeight: 600, fontSize: 13, padding: "10px 24px", borderRadius: 50, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(245,184,0,0.08)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                Show all {COMPARISON.length} features ↓
              </button>
            </div>
          )}
          {showAll && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <button onClick={() => setShowAll(false)}
                style={{ background: "transparent", color: "#666", border: "1px solid #222", fontWeight: 600, fontSize: 13, padding: "10px 24px", borderRadius: 50, cursor: "pointer" }}>
                Show less ↑
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── DEPLOYMENT OPTIONS ── */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>DEPLOYMENT</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Flexible <span style={{ color: "#f5b800" }}>Deployment Options</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "40px 32px", textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, background: "rgba(245,184,0,0.12)", border: "1px solid rgba(245,184,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
              </div>
              <h3 style={{ color: "#ffffff", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Cloud Deployment</h3>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>Access your contact center from anywhere, anytime. No infrastructure investment required. Pay as you go with flexible pricing.</p>
              <ul style={{ textAlign: "left", color: "#888", fontSize: 13, lineHeight: 2, listStyle: "none", padding: 0 }}>
                <li>✓ Quick setup and deployment</li><li>✓ Automatic updates</li><li>✓ Scalable on-demand</li><li>✓ 99.9% uptime SLA</li>
              </ul>
            </div>
            <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "40px 32px", textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, background: "rgba(245,184,0,0.12)", border: "1px solid rgba(245,184,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/></svg>
              </div>
              <h3 style={{ color: "#ffffff", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>On-Premise Deployment</h3>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>Full control over your data and infrastructure. Ideal for organizations with strict compliance requirements.</p>
              <ul style={{ textAlign: "left", color: "#888", fontSize: 13, lineHeight: 2, listStyle: "none", padding: 0 }}>
                <li>✓ Complete data control</li><li>✓ Custom security policies</li><li>✓ Integration with existing systems</li><li>✓ One-time licensing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <PLabel>FAQ</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 56 }}>
            Frequently Asked <span style={{ color: "#f5b800" }}>Questions</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
            {[
              { q: "What is the difference between purchasing and cloud payment?", a: "Purchasing gives you full ownership of the software with a one-time license fee, while cloud payment is a monthly subscription model with no upfront costs." },
              { q: "What is the difference between on-site rental and cloud?", a: "On-site rental involves hosting the system on your own servers, giving you full control. Cloud means we host the system and you access it via the internet." },
              { q: "Will I have to pay any additional fees after making a purchase?", a: "The initial quote includes all major costs. Optional add-ons like additional training, custom integrations, or extra storage may incur additional fees." },
              { q: "How does the update system work?", a: "Cloud customers receive automatic updates at no extra cost. On-premise customers can choose when to apply updates based on their release schedule." },
              { q: "Can we use Tegsoft with our own software?", a: "Yes! Tegsoft offers deep integrations with Salesforce, HubSpot, Zoho, SAP, Zendesk, and 100+ other business tools." },
              { q: "Is your system web-based?", a: "Yes, Tegsoft is fully web-based with no software installation required. Access it from any browser." },
              { q: "Do you provide user training?", a: "Yes, we provide comprehensive training for all users during implementation. Additional training sessions can be arranged as needed." },
              { q: "How do you provide WhatsApp service?", a: "Tegsoft includes native WhatsApp Business integration, allowing you to manage all WhatsApp conversations from the same dashboard." },
            ].map((faq, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "24px" }}>
                <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 12 }}>{faq.q}</h4>
                <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE REGIONS ── */}
      <section className="py-[96px] px-6" style={{ background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <PLabel>SERVICE AREAS</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 40 }}>
            Serving Businesses Across the <span style={{ color: "#f5b800" }}>UAE</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].map((city, i) => (
              <div key={i} style={{ background: "rgba(245,184,0,0.08)", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 50, padding: "12px 24px", color: "#f5b800", fontSize: 14, fontWeight: 600 }}>{city}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-[96px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <PLabel>GET STARTED</PLabel>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", marginBottom: 20 }}>
            Transform Your Customer Service <span style={{ color: "#f5b800" }}>Today</span>
          </h2>
          <p style={{ textAlign: "center", color: "#777", fontSize: 15, lineHeight: 1.75, marginBottom: 40 }}>
            Join leading businesses in the UAE that trust Tegsoft for their contact center needs. Get a personalized demo from our team.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => goToContact(navigate)}
              style={{ background: "#f5b800", color: "#000", fontSize: 15, fontWeight: 700, padding: "14px 40px", borderRadius: 50, border: "none", cursor: "pointer", boxShadow: "0 0 28px rgba(245,184,0,0.4)", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
              Request a Demo
            </button>
            <button
              onClick={() => { const el = document.getElementById("pricing"); if (el) el.scrollIntoView({ behavior: "smooth" }) }}
              style={{ background: "transparent", color: "#f5b800", fontSize: 15, fontWeight: 700, padding: "13px 32px", borderRadius: 50, border: "1px solid rgba(245,184,0,0.4)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,184,0,0.08)"; e.currentTarget.style.borderColor = "#f5b800" }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,184,0,0.4)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              View Pricing
            </button>
          </div>
          <div style={{ marginTop: 48, color: "#666", fontSize: 13 }}>
            <p>📍 R12 France Cluster, International City, Dubai, UAE</p>
            <p>📞 +971 56 411 6174 | 📧 info@techbee.ae</p>
            <p>🕐 Mon-Sat: 8:30AM-6:00PM</p>
          </div>
        </div>
      </section>

    </ProductPage>
  )
}
