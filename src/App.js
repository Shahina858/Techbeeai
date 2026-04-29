import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home    from "./pages/Home"
import CamCard from "./pages/CamCard"
import Tegsoft from "./pages/TegSoft"
import Lyrebird from "./pages/LyreBird"
import IDP     from "./pages/IDP"
import Quote   from "./pages/Quote"
import ProductPage from "./components/ProductPage"

// Placeholder components for new products
const OnPremiseLLM = () => <ProductPage badge="NEW" headline="On-Premise LLM Deployment" sub="Deploy large language models on your own infrastructure for complete data privacy, compliance control, and customized AI solutions tailored to your enterprise needs." cta="Book a Demo →" bgImage={null} />
const AISecurity = () => <ProductPage badge="NEW" headline="AI Security" sub="Protect your business with AI-powered security solutions that detect threats, prevent breaches, and ensure comprehensive data protection across your digital infrastructure." cta="Book a Demo →" bgImage={null} />


// Contact Center Solutions Page with more content
const ContactCenter = () => {
  const content = (
    <section className="py-[80px] px-6" style={{ background: "#0a0a0a" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {/* VoiceChannel */}
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.4 2 2 0 0 1 3.62 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>VoiceChannel</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Advanced IVR, predictive dialers, real-time monitoring, and integrated CRM for customer services and tele-sales teams.</p>
          </div>
          {/* OmniChannel */}
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>OmniChannel</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>360-degree customer experience across Voice, Webchat, WhatsApp, Facebook Messenger, Instagram DM, SMS, and Email.</p>
          </div>
          {/* AIChannel */}
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10H12V2z"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>AIChannel</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>AI-powered communication for both Voice and Text channels with detailed reporting and intelligent automation.</p>
          </div>
          {/* Services */}
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(245,184,0,0.2)", borderRadius: 20, padding: "32px 28px" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,184,0,0.15)", border: "1px solid rgba(245,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>24/7 Support</h3>
            <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7 }}>Always available intelligent routing, cloud hosting, analytics & reporting, and AI assistance for automated responses.</p>
          </div>
        </div>
      </div>
    </section>
  )
  return <ProductPage badge="NEW" headline="AI Contact Center Solutions" sub="Transform your customer service with cloud-based contact center solutions. Powered by Tegsoft - the leading Cloud Contact Center in UAE." cta="Book a Demo →" bgImage={null}>{content}</ProductPage>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/camcard"  element={<CamCard />} />
        <Route path="/tegsoft"  element={<ContactCenter />} />
        <Route path="/lyrebird" element={<Lyrebird />} />
        <Route path="/idp"      element={<IDP />} />
        <Route path="/on-premise" element={<OnPremiseLLM />} />
        <Route path="/security"   element={<AISecurity />} />
        <Route path="/quote"      element={<Quote />} />
      </Routes>
    </BrowserRouter>
  )
}
