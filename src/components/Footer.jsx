import { useNavigate } from "react-router-dom"

const LOGO_IMG = "/TechBee_AI_Logo_Modified-removebg-preview.png"

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="w-full px-6 py-16 overflow-hidden" style={{ background: "#000" }} aria-label="Footer">
      <div
        className="relative w-full max-w-[1400px] mx-auto rounded-[30px] p-10"
        style={{
          background: "rgba(10,10,10,0.96)",
          border: "2px solid rgba(211,162,14,0.54)",
          boxShadow: "inset 0 0 30px rgb(142, 115, 36), inset 0 0 1px rgba(245,184,0,0.22)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(245,184,0,0.09), transparent 22%), radial-gradient(circle at bottom right, rgba(245,184,0,0.06), transparent 28%)",
          }}
        />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[240px_1fr] mb-16 items-start">

          {/* Brand */}
          <div className="space-y-4">
            <img
              src={LOGO_IMG}
              alt="TechBee AI"
              style={{ height: 56, width: "auto", maxWidth: 200, objectFit: "contain" }}
            />
            <p style={{ color: "#ececec", fontSize: 13, lineHeight: 1.7, maxWidth: 200, marginTop: 12 }}>
              AI-powered solutions for businesses across the UAE and GCC.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
              <a href="mailto:sales@techbee.ae" style={{ color: "#ececec", fontSize: 13, textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f5b800"}
                onMouseLeave={e => e.currentTarget.style.color = "#ececec"}>
                sales@techbee.ae
              </a>
              <a href="tel:+971564116174" style={{ color: "#ececec", fontSize: 13, textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f5b800"}
                onMouseLeave={e => e.currentTarget.style.color = "#ececec"}>
                +971 56 411 6174
              </a>
            </div>
          </div>

          {/* Links — 4 columns */}
          <div className="grid sm:grid-cols-4 gap-10">

            {/* Products */}
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">
                Products
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  { label: "CamCard",     route: "/camcard"  },
                  { label: "Tegsoft AI",  route: "/tegsoft"  },
                  { label: "Webishopi",   route: "/quote"    },
                  { label: "Check Point", route: "/security" },
                  { label: "Lyrebird AI", route: "/lyrebird" },
                  { label: "IDP",         route: "/idp"      },
                ].map(p => (
                  <p key={p.label} onClick={() => navigate(p.route)}
                    className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">
                    {p.label}
                  </p>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">
                Company
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  { label: "About Us",    route: "/about"       },
                  { label: "Partnership", route: "/partnership" },
                ].map(c => (
                  <p key={c.label} onClick={() => navigate(c.route)}
                    className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">
                    {c.label}
                  </p>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">
                Follow Us
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  { label: "LinkedIn",   url: "https://www.linkedin.com/company/techbeeuae/"               },
                  { label: "Instagram",  url: "https://www.instagram.com/techbeeuae?igsh=dnF5ZnppNzNnZzRu" },
                  { label: "Facebook",   url: "https://www.facebook.com/techbeeuae/"                       },
                  { label: "Twitter/X",  url: "https://x.com/techbeeuae"                                   },
                  { label: "Medium",     url: "https://medium.com/@techbeeuae"                              },
                ].map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200"
                    style={{ display: "block", textDecoration: "none" }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-6 pb-2 border-b border-[#f5b800] inline-block">
                Legal
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Privacy Policy",   route: "/privacy" },
                  { label: "Terms of Service", route: "/terms"   },
                  { label: "Cookie Policy",    route: "/cookies" },
                ].map(l => (
                  <p key={l.label} onClick={() => navigate(l.route)}
                    className="text-[#f2f2f2] text-[14px] hover:text-[#f5b800] transition-colors duration-200 cursor-pointer">
                    {l.label}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#cccccc] text-[12px]"
          style={{ borderTop: "1px solid rgba(245,184,0,0.15)", paddingTop: 24 }}
        >
          <p style={{ color: "#494949", fontSize: 12, margin: 0 }}>
            📍 R-12, France Cluster, International City, Dubai, UAE
          </p>
          <div style={{ color: "#aaaaaa", fontSize: 12 }}>© 2026 TechBee AI. All rights reserved.</div>
        </div>

      </div>
    </footer>
  )
}
