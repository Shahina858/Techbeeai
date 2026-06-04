import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const LOGO_IMG = "/TechBee_AI_Logo_Modified.png"

const PRODUCT_ROUTES = ["/idp", "/lyrebird", "/tegsoft", "/security", "/camcard", "/quote"]

export default function Navbar({ logoSrc }) {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const [active,   setActive]   = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Static route active states
    if (PRODUCT_ROUTES.includes(location.pathname)) {
      setActive("products")
      setScrolled(true)
      return
    }
    if (location.pathname === "/partnership") {
      setActive("partnership")
      setScrolled(true)
      return
    }
    if (location.pathname === "/about") {
      setActive("about")
      setScrolled(true)
      return
    }
    if (["/terms", "/privacy", "/cookies"].includes(location.pathname)) {
      setActive("")
      setScrolled(true)
      return
    }

    // Home page — use scroll to detect active section
    const sections = document.querySelectorAll("section[id]")
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      let current = "home"
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120)
          current = sec.getAttribute("id")
      })
      setActive(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [location.pathname])

  // If page loads with a hash (e.g. /#products from another page), scroll to it
  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.replace("#", "")
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [isHome, location.hash])

  const handleNavClick = (e, section, href) => {
    e.preventDefault()
    setMenuOpen(false)

    // External routes — just navigate
    if (!section) {
      window.location.href = href
      return
    }

    // Scroll section links
    if (!isHome) {
      // On a different page — go to home with hash, useEffect above will scroll
      window.location.href = "/#" + section
      return
    }

    // Already on home — scroll directly, don't change URL hash
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const NAV_LINKS = [
    { id: "home",        label: "Home",        href: "/",              section: "home"      },
    { id: "about",       label: "About Us",    href: "/about",         section: null        },
    { id: "products",    label: "Products",    href: "/#products",     section: "products"  },
    { id: "solutions",   label: "Solutions",   href: "/#solutions",    section: "solutions" },
    { id: "partnership", label: "Partnership", href: "/partnership",   section: null        },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:           scrolled ? "rgba(0,0,0,0.90)" : "rgba(0,0,0,0.10)",
        backdropFilter:       "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom:         scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition:           "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      <div
        className="w-full flex items-center justify-between"
        style={{ padding: "0 40px", height: 96 }}
      >
        {/* Logo */}
        <a href="/" onClick={e => { e.preventDefault(); window.location.href = "/" }}>
          <img
            src={logoSrc || LOGO_IMG}
            alt="TechBee AI"
            style={{ height: 64, width: "auto", maxWidth: 240, objectFit: "contain" }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center" style={{ gap: 36 }}>
          {NAV_LINKS.map(({ id, label, href, section }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={href}
                onClick={(e) => handleNavClick(e, section, href)}
                className="relative flex flex-col items-center"
                style={{
                  color:          isActive ? "#f5b800" : "#cccccc",
                  fontSize:       15,
                  fontWeight:     isActive ? 500 : 400,
                  textDecoration: "none",
                  paddingBottom:  6,
                  transition:     "color 0.2s",
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#ffffff" }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "#cccccc" }}
              >
                {label}
                {isActive && (
                  <span style={{
                    position:     "absolute",
                    bottom:       0,
                    left:         "50%",
                    transform:    "translateX(-50%)",
                    width:        4,
                    height:       4,
                    borderRadius: "50%",
                    background:   "#f5b800",
                  }} />
                )}
              </a>
            )
          })}

          {/* Contact Us button */}
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "contact", "/#contact")}
            style={{
              background:     "#f5b800",
              color:          "#000000",
              fontSize:       14,
              fontWeight:     700,
              borderRadius:   50,
              padding:        "11px 26px",
              textDecoration: "none",
              whiteSpace:     "nowrap",
              transition:     "background 0.2s, box-shadow 0.2s, transform 0.15s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#ffc929"
              e.currentTarget.style.boxShadow  = "0 0 28px rgba(245,184,0,0.55)"
              e.currentTarget.style.transform  = "scale(1.03)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#f5b800"
              e.currentTarget.style.boxShadow  = "none"
              e.currentTarget.style.transform  = "scale(1)"
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display:      "block",
              width:        22,
              height:       1.5,
              background:   "#ffffff",
              borderRadius: 2,
              transition:   "transform 0.25s, opacity 0.25s",
              transform:
                menuOpen && i === 0 ? "translateY(6.5px) rotate(45deg)"   :
                menuOpen && i === 2 ? "translateY(-6.5px) rotate(-45deg)" : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div style={{
        maxHeight:  menuOpen ? 360 : 0,
        overflow:   "hidden",
        transition: "max-height 0.3s ease",
        background: "rgba(0,0,0,0.96)",
        borderTop:  menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}>
        <div style={{ display: "flex", flexDirection: "column", padding: "16px 24px", gap: 20 }}>
          {NAV_LINKS.map(({ id, label, href, section }) => (
            <a
              key={id}
              href={href}
              onClick={(e) => handleNavClick(e, section, href)}
              style={{
                color:          active === id ? "#f5b800" : "#aaaaaa",
                fontSize:       14,
                fontWeight:     active === id ? 600 : 400,
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "contact", "/#contact")}
            style={{
              background:     "#f5b800",
              color:          "#000",
              fontSize:       13,
              fontWeight:     700,
              borderRadius:   50,
              padding:        "10px 20px",
              textAlign:      "center",
              textDecoration: "none",
              marginTop:      4,
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}
