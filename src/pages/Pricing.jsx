import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const PLANS = [
  { name: "Starter", price: "49", period: "/mo", desc: "Perfect for small teams getting started with AI automation.", features: ["Up to 5 users", "AI Powered Contact Management — 500 scans/mo", "Basic support automation", "Email support", "API access"], cta: "Get Started", featured: false },
  { name: "Professional", price: "199", period: "/mo", desc: "For growing businesses that need full AI power across teams.", features: ["Up to 50 users", "All 7 AI products included", "AI-Powered Medical Intelligence", "IDP — 5,000 docs/mo", "Priority support + CSM", "Custom integrations", "Analytics dashboard"], cta: "Start Free Trial", featured: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "Tailored solutions for large organizations with compliance needs.", features: ["Unlimited users", "All products + white-label", "SOC2 / HIPAA compliance", "Dedicated infrastructure", "SLA-backed support", "On-premise option", "Custom AI training"], cta: "Contact Sales", featured: false },
]

const goToContact = (navigate) => {
  navigate("/")
  setTimeout(() => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, 300)
}

export default function Pricing() {
  const navigate = useNavigate()

  return (
    <div className="bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "80vh", paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 780, zIndex: 10 }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20 }}>
            PRICING
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ffffff", margin: 0, marginBottom: 24 }}>
            Clear AI Pricing for Every Stage of Growth
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: "#aaa", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 36px" }}>
            Choose the plan that fits your team, from early-stage pilots to enterprise-scale deployments. No hidden fees, no surprises — just transparent AI pricing built for business outcomes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 44px rgba(245,184,0,0.6)" }} whileTap={{ scale: 0.97 }}
              onClick={() => goToContact(navigate)}
              style={{ background: "#f5b800", color: "#000", fontSize: 14, fontWeight: 700, borderRadius: 50, padding: "13px 36px", border: "none", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#ffc929"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5b800"}>
              Contact Sales
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/")}
              style={{ background: "transparent", color: "#f5b800", fontSize: 14, fontWeight: 600, borderRadius: 50, padding: "13px 36px", border: "1px solid rgba(245,184,0,0.4)", cursor: "pointer" }}>
              Back to Home
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-[80px] px-6" style={{ background: "#000" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <p style={{ color: "#f5b800", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", margin: 0 }}>PRICING</p>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(2rem, 3.2vw, 3rem)", fontWeight: 700, lineHeight: 1.1, textAlign: "center", margin: 0 }}>
              Transparent plans with enterprise-ready AI capabilities.
            </h2>
            <p style={{ color: "#888", fontSize: 15, maxWidth: 640, textAlign: "center", margin: 0 }}>
              Everything you need to deploy AI across your business with confidence — from contact management to full-scale document automation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-20">
            {PLANS.map((plan, index) => (
              <motion.div key={index} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                style={{ background: plan.featured ? "rgba(245,184,0,0.06)" : "#0a0a0a", border: plan.featured ? "1px solid rgba(245,184,0,0.55)" : "1px solid rgba(245,184,0,0.12)", borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden", boxShadow: plan.featured ? "0 0 60px rgba(245,184,0,0.12)" : "none" }}>
                {plan.featured && <div style={{ position: "absolute", top: 20, right: 20, background: "#f5b800", color: "#000", fontSize: 11, fontWeight: 700, borderRadius: 50, padding: "4px 12px", letterSpacing: "0.1em" }}>POPULAR</div>}
                <p style={{ color: plan.featured ? "#f5b800" : "#888", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>{plan.name}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                  {plan.price !== "Custom" && <span style={{ color: "#f5b800", fontSize: 14, fontWeight: 600 }}>$</span>}
                  <span style={{ color: "#ffffff", fontSize: plan.price === "Custom" ? 28 : 44, fontWeight: 800, lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ color: "#555", fontSize: 14 }}>{plan.period}</span>
                </div>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.65, marginBottom: 24 }}>{plan.desc}</p>
                <div style={{ height: 1, background: "rgba(245,184,0,0.12)", marginBottom: 24 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ color: "#ccc", fontSize: 13 }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => goToContact(navigate)}
                  style={{ width: "100%", background: plan.featured ? "#f5b800" : "transparent", color: plan.featured ? "#000" : "#f5b800", border: plan.featured ? "none" : "1px solid rgba(245,184,0,0.4)", borderRadius: 50, padding: "13px 0", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}>
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
