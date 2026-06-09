// ── DROP-IN replacement for TestimonialsCarousel in Home.jsx ──────────────────
// Also needs this import at the top of Home.jsx:
//   import gsap from "gsap"
// And install if not present:
//   npm install gsap

import {
  Children, cloneElement, forwardRef, isValidElement,
  useEffect, useMemo, useRef, useState,
} from "react"
import gsap from "gsap"

// ── Theme ──────────────────────────────────────────────────────────────────────
const T = {
  cardBg:      "#0a0a0a",
  cardBorder:  "rgba(245,184,0,0.18)",
  gold:        "#f5b800",
  goldDim:     "rgba(245,184,0,0.10)",
  white:       "#ffffff",
  muted:       "rgba(255,255,255,0.45)",
  divider:     "rgba(255,255,255,0.06)",
}

// ── Testimonial data ───────────────────────────────────────────────────────────
const TESTIMONIALS_DATA = [
  {
    quote: "The Tegsoft interface is very easy to use. Everything we need is recorded in our call center. We can access the data we want at any given time.",
    name: "Kerem Erkmen",
    role: "E-commerce Manager",
    company: "Lufian",
    stars: 5,
    initial: "K",
  },
  {
    quote: "Lyrebird Health strikes the right balance between efficiency, security and patient-centred care. I highly recommend it to fellow practitioners.",
    name: "Dr. Sean Stevens",
    role: "Principal General Practitioner",
    company: "Grove Medical",
    stars: 5,
    initial: "S",
  },
  {
    quote: "IDP cut our invoice processing time from 4 days to 4 hours. The accuracy is outstanding — genuinely better than our manual team.",
    name: "Priya Sharma",
    role: "CFO",
    company: "Logistics Plus",
    stars: 5,
    initial: "P",
  },
]

// ── Stars ──────────────────────────────────────────────────────────────────────
function Stars({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={T.gold}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

// ── Card ───────────────────────────────────────────────────────────────────────
const TestimonialCard = forwardRef(({ quote, name, role, company, stars, initial, style, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    style={{
      background: T.cardBg,
      border: `1px solid ${T.cardBorder}`,
      borderRadius: 20,
      padding: "32px 28px 28px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxSizing: "border-box",
      boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,184,0,0.06)",
      position: "absolute",
      top: "50%",
      left: "50%",
      transformStyle: "preserve-3d",
      willChange: "transform",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      ...style,
    }}
  >
    <div>
      <Stars count={stars} />
      <div style={{ fontSize: 72, lineHeight: 0.6, color: T.gold, opacity: 0.18, marginBottom: 12, userSelect: "none", fontFamily: "serif" }}>"</div>
      <p style={{ fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.82)", lineHeight: 1.65, margin: 0 }}>{quote}</p>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 28, paddingTop: 20, borderTop: `1px solid ${T.divider}` }}>
      <div style={{ width: 42, height: 42, borderRadius: "50%", background: `linear-gradient(135deg, ${T.gold}, #f97316)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16, fontWeight: 700, color: "#000" }}>
        {initial}
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: T.white }}>{name}</div>
        <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>{role} · {company}</div>
      </div>
    </div>
  </div>
))
TestimonialCard.displayName = "TestimonialCard"

// ── CardSwap engine ────────────────────────────────────────────────────────────
const makeSlot = (i, distX, distY, total) => ({
  x: i * distX, y: -i * distY, z: -i * distX * 1.5, zIndex: total - i,
})

const placeNow = (el, slot, skew) =>
  gsap.set(el, { x: slot.x, y: slot.y, z: slot.z, xPercent: -50, yPercent: -50, skewY: skew, transformOrigin: "center center", zIndex: slot.zIndex, force3D: true })

function CardSwapEngine({ width, height, cardDistance = 50, verticalDistance = 60, delay = 4500, skewAmount = 4, children }) {
  const childArr = useMemo(() => Children.toArray(children), [children])
  const refs = useMemo(() => childArr.map(() => ({ current: null })), [childArr.length])
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i))
  const tlRef = useRef(null)
  const intervalRef = useRef(null)
  const container = useRef(null)

  useEffect(() => {
    const total = refs.length
    refs.forEach((r, i) => {
      if (r.current) placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
    })

    const cfg = { ease: "elastic.out(0.6,0.9)", durDrop: 2, durMove: 2, durReturn: 2, promoteOverlap: 0.9, returnDelay: 0.05 }

    const swap = () => {
      if (order.current.length < 2) return
      const [front, ...rest] = order.current
      const elFront = refs[front].current
      const tl = gsap.timeline()
      tlRef.current = tl

      tl.to(elFront, { y: "+=500", duration: cfg.durDrop, ease: cfg.ease })
      tl.addLabel("promote", `-=${cfg.durDrop * cfg.promoteOverlap}`)

      rest.forEach((idx, i) => {
        const el = refs[idx].current
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length)
        tl.set(el, { zIndex: slot.zIndex }, "promote")
        tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: cfg.durMove, ease: cfg.ease }, `promote+=${i * 0.15}`)
      })

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length)
      tl.addLabel("return", `promote+=${cfg.durMove * cfg.returnDelay}`)
      tl.call(() => { gsap.set(elFront, { zIndex: backSlot.zIndex }) }, undefined, "return")
      tl.to(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: cfg.durReturn, ease: cfg.ease }, "return")
      tl.call(() => { order.current = [...rest, front] })
    }

    swap()
    intervalRef.current = window.setInterval(swap, delay)

    const node = container.current
    const pause  = () => { tlRef.current?.pause(); clearInterval(intervalRef.current) }
    const resume = () => { tlRef.current?.play(); intervalRef.current = window.setInterval(swap, delay) }
    node.addEventListener("mouseenter", pause)
    node.addEventListener("mouseleave", resume)

    return () => {
      node.removeEventListener("mouseenter", pause)
      node.removeEventListener("mouseleave", resume)
      clearInterval(intervalRef.current)
    }
  }, [cardDistance, verticalDistance, delay, skewAmount])

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, { key: i, ref: (el) => { refs[i].current = el }, style: { width, height, ...(child.props.style ?? {}) } })
      : child
  )

  return (
    <div ref={container} style={{ width, height, position: "absolute", bottom: 0, right: 0, perspective: 900, overflow: "visible" }}>
      {rendered}
    </div>
  )
}

// ── Main Export — drop this in place of TestimonialsCarousel in Home.jsx ───────
export function TestimonialsCarousel() {
  return (
    <section
      className="py-[112px] px-6 relative overflow-hidden"
      style={{ background: "#080808" }}
      aria-label="Client Testimonials"
    >
      {/* Gold glow */}
      <div style={{ position: "absolute", top: -120, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,184,0,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Label */}
        <p style={{ color: T.gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", marginBottom: 56 }}>
          TESTIMONIALS
        </p>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>

          {/* LEFT — text */}
          <div style={{ flex: "0 0 auto", maxWidth: 320 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.goldDim, border: "1px solid rgba(245,184,0,0.25)", borderRadius: 999, padding: "6px 14px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.gold }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: T.gold, textTransform: "uppercase" }}>Client Stories</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: T.white, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 20px" }}>
              Trusted by Teams That{" "}
              <span style={{ background: "linear-gradient(135deg, #f5b800, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Demand the Best
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              Real results from real teams across healthcare, retail, and enterprise.
            </p>
          </div>

          {/* RIGHT — card swap */}
          <div style={{ flex: 1, minWidth: 320, position: "relative", height: 420 }}>
            <CardSwapEngine
              width={440}
              height={380}
              cardDistance={50}
              verticalDistance={60}
              delay={4500}
              skewAmount={4}
            >
              {TESTIMONIALS_DATA.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </CardSwapEngine>
          </div>

        </div>
      </div>
    </section>
  )
}
