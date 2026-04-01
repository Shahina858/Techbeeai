import { useEffect, useRef } from "react"

export default function BrainBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")

        let animId
        let W, H
        let nodes = [],
            streams = [],
            circuits = []
        let scanY = 0,
            tick = 0

        const NODE_COLOR = "#f5b800"
        const ACCENT_COLOR = "#00e5ff"

        function hexRGB(hex, a) {
            const r = parseInt(hex.slice(1, 3), 16)
            const g = parseInt(hex.slice(3, 5), 16)
            const b = parseInt(hex.slice(5, 7), 16)
            return "rgba(" + r + "," + g + "," + b + "," + a + ")"
        }

        function resize() {
            const parent = canvas.parentElement
            W = canvas.width = parent ? parent.offsetWidth : window.innerWidth
            H = canvas.height = parent
                ? parent.offsetHeight
                : window.innerHeight
        }

        function buildNodes() {
            nodes = []
            const count = Math.max(40, Math.floor((W * H) / 18000))
            for (let i = 0; i < count; i++) {
                nodes.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.28,
                    vy: (Math.random() - 0.5) * 0.28,
                    r: 1.5 + Math.random() * 2,
                    pulse: Math.random() * Math.PI * 2,
                })
            }
        }

        const CHARS = "01アイ∑∇⊕⊗≡≠∞λψ∂∫"

        function makeStream() {
            return {
                x: Math.random() * W,
                y: -40 - Math.random() * H,
                speed: 0.6 + Math.random() * 1.4,
                chars: Array.from(
                    { length: 8 + Math.floor(Math.random() * 10) },
                    () => CHARS[Math.floor(Math.random() * CHARS.length)]
                ),
                opacity: 0.18 + Math.random() * 0.32,
                size: 11 + Math.floor(Math.random() * 6),
            }
        }

        function buildStreams() {
            streams = []
            for (let i = 0; i < 28; i++) {
                const s = makeStream()
                s.y = Math.random() * H
                streams.push(s)
            }
        }

        function buildCircuits() {
            circuits = []
            for (let i = 0; i < 10; i++) {
                const pts = []
                let x = Math.random() * W
                let y = Math.random() * H
                pts.push({ x, y })
                for (let s = 0; s < 4 + Math.floor(Math.random() * 4); s++) {
                    if (Math.random() < 0.5) x += (Math.random() - 0.5) * 200
                    else y += (Math.random() - 0.5) * 200
                    x = Math.max(20, Math.min(W - 20, x))
                    y = Math.max(20, Math.min(H - 20, y))
                    pts.push({ x, y })
                }
                let len = 0
                for (let k = 1; k < pts.length; k++) {
                    const dx = pts[k].x - pts[k - 1].x
                    const dy = pts[k].y - pts[k - 1].y
                    len += Math.sqrt(dx * dx + dy * dy)
                }
                circuits.push({
                    pts,
                    t: Math.random(),
                    speed: 0.0015 + Math.random() * 0.003,
                    len,
                    color: Math.random() < 0.6 ? NODE_COLOR : ACCENT_COLOR,
                })
            }
        }

        const rings = [0, 1, 2, 3].map((i) => ({
            phase: i * (Math.PI / 2),
            maxR: 80 + i * 55,
            speed: 0.008 + i * 0.003,
        }))

        function drawHex(cx, cy, r, color, lw, alpha) {
            ctx.save()
            ctx.globalAlpha = alpha
            ctx.strokeStyle = color
            ctx.lineWidth = lw
            ctx.beginPath()
            for (let i = 0; i < 6; i++) {
                const a = (Math.PI / 3) * i - Math.PI / 6
                if (i === 0)
                    ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
                else ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
            }
            ctx.closePath()
            ctx.stroke()
            ctx.restore()
        }

        function circuitPt(c, t) {
            let target = t * c.len
            let acc = 0
            for (let i = 1; i < c.pts.length; i++) {
                const dx = c.pts[i].x - c.pts[i - 1].x
                const dy = c.pts[i].y - c.pts[i - 1].y
                const seg = Math.sqrt(dx * dx + dy * dy)
                if (acc + seg >= target) {
                    const f = (target - acc) / seg
                    return {
                        x: c.pts[i - 1].x + dx * f,
                        y: c.pts[i - 1].y + dy * f,
                    }
                }
                acc += seg
            }
            return c.pts[c.pts.length - 1]
        }

        function draw() {
            animId = requestAnimationFrame(draw)
            tick += 0.012

            // Pure black background
            ctx.fillStyle = "#000000"
            ctx.fillRect(0, 0, W, H)

            // NODES - move
            nodes.forEach((n) => {
                n.x += n.vx
                n.y += n.vy
                n.pulse += 0.04
                if (n.x < 0 || n.x > W) n.vx *= -1
                if (n.y < 0 || n.y > H) n.vy *= -1
            })

            // NODES - edges
            ctx.lineWidth = 0.7
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const d = Math.sqrt(dx * dx + dy * dy)
                    if (d < 145) {
                        ctx.strokeStyle = hexRGB(
                            NODE_COLOR,
                            (1 - d / 145) * 0.22
                        )
                        ctx.beginPath()
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.stroke()
                    }
                }
            }

            // NODES - dots
            nodes.forEach((n) => {
                const p = 0.6 + 0.4 * Math.sin(n.pulse)
                ctx.save()
                const g = ctx.createRadialGradient(
                    n.x,
                    n.y,
                    0,
                    n.x,
                    n.y,
                    n.r * 4
                )
                g.addColorStop(0, hexRGB(NODE_COLOR, 0.8 * p))
                g.addColorStop(1, "rgba(0,0,0,0)")
                ctx.fillStyle = g
                ctx.globalAlpha = p
                ctx.beginPath()
                ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2)
                ctx.fill()
                ctx.fillStyle = "#fff"
                ctx.beginPath()
                ctx.arc(n.x, n.y, n.r * 0.8, 0, Math.PI * 2)
                ctx.fill()
                ctx.restore()
            })

            // DATA STREAMS
            ctx.font = '16px "Courier New", monospace'
            streams.forEach((s) => {
                s.y += s.speed
                if (s.y > H + 200) Object.assign(s, makeStream())
                s.chars.forEach((ch, i) => {
                    const a = s.opacity * (1 - i / s.chars.length) * 0.9
                    ctx.fillStyle =
                        i === 0
                            ? "rgba(255,255,255," + a * 1.3 + ")"
                            : hexRGB(NODE_COLOR, a)
                    ctx.fillText(ch, s.x, s.y - i * (s.size + 4))
                })
            })

            // HEX RINGS
            const hcx = W * 0.5
            const hcy = H * 0.5
            rings.forEach((ring) => {
                ring.phase += ring.speed
                for (let k = 0; k < 3; k++) {
                    const t =
                        ((ring.phase + k * 0.5) % (Math.PI * 2)) / (Math.PI * 2)
                    drawHex(
                        hcx,
                        hcy,
                        t * ring.maxR,
                        NODE_COLOR,
                        1.2,
                        (1 - t) * 0.35
                    )
                }
            })

            // SCAN LINE
            scanY = (scanY + 0.5) % H
            const sg = ctx.createLinearGradient(0, scanY - 6, 0, scanY + 6)
            sg.addColorStop(0, "rgba(0,229,255,0)")
            sg.addColorStop(0.5, "rgba(0,229,255,0.06)")
            sg.addColorStop(1, "rgba(0,229,255,0)")
            ctx.fillStyle = sg
            ctx.fillRect(0, scanY - 6, W, 12)

            // CIRCUITS
            circuits.forEach((c) => {
                c.t = (c.t + c.speed) % 1
                ctx.save()
                ctx.globalAlpha = 0.08
                ctx.strokeStyle = c.color
                ctx.lineWidth = 1
                ctx.setLineDash([4, 8])
                ctx.beginPath()
                c.pts.forEach((p, i) => {
                    if (i === 0) ctx.moveTo(p.x, p.y)
                    else ctx.lineTo(p.x, p.y)
                })
                ctx.stroke()
                ctx.setLineDash([])
                const pt = circuitPt(c, c.t)
                ctx.globalAlpha = 0.9
                const g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 8)
                g.addColorStop(
                    0,
                    c.color === NODE_COLOR
                        ? hexRGB(NODE_COLOR, 1)
                        : "rgba(0,229,255,1)"
                )
                g.addColorStop(1, "rgba(0,0,0,0)")
                ctx.fillStyle = g
                ctx.beginPath()
                ctx.arc(pt.x, pt.y, 8, 0, Math.PI * 2)
                ctx.fill()
                ctx.restore()
            })
        }

        resize()
        buildNodes()
        buildStreams()
        buildCircuits()
        draw()

        const ro = new ResizeObserver(() => {
            resize()
            buildNodes()
            buildCircuits()
            buildStreams()
        })
        ro.observe(canvas.parentElement || canvas)

        return () => {
            cancelAnimationFrame(animId)
            ro.disconnect()
        }
    }, [])

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                background: "#000000",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    pointerEvents: "none",
                }}
            />
        </div>
    )
}