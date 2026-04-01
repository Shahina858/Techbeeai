const fs = require('fs');
const filepath = 'c:/Users/shameer/OneDrive/framerapp/techbee-ai/src/pages/Home.jsx';
let content = fs.readFileSync(filepath, 'utf8');

const carouselComponent = `// ── Testimonials Carousel ───────────────────────────────────────────────────
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
              className="font-black leading-[1.05] tracking-tight uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              <div className="text-white">Trusted by</div>
              <div className="text-white">Teams</div>
              <div className="text-white">That</div>
              <div className="text-[#f5b800]">Demand</div>
              <div className="text-[#f5b800]">the Best</div>
            </h2>
          </div>

          {/* Right Box: Stacked Animated Carousel */}
          <div className="w-full lg:w-[50%] relative h-[420px] mt-12 lg:mt-0 flex justify-end items-center">
            <div className="relative w-full max-w-[480px] h-full">
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

// ══════════════════════════════════════════════════════════════════════════════`;

if (!content.includes('TestimonialsCarousel()')) {
  content = content.replace(
    /(\/\/\s*══════════════════════════════════════════════════════════════════════════════\s*export default function Home\(\)\s*\{)/,
    carouselComponent + '\\n$1'
  );
} else {
  console.log("Carousel already injected previously.");
}

const testimonialsMarker = /\{\/\*\s*══════════════════════════════════════\s*TESTIMONIALS\s*══════════════════════════════════════\s*\*\/\}/;
const contactMarker = /\{\/\*\s*══════════════════════════════════════\s*CONTACT\s*══════════════════════════════════════\s*\*\/\}/;

const startMatch = content.match(testimonialsMarker);
const endMatch = content.match(contactMarker);

if (startMatch && endMatch && startMatch.index < endMatch.index) {
  content = content.substring(0, startMatch.index) + 
            startMatch[0] + '\\n      <TestimonialsCarousel />\\n\\n      ' + 
            content.substring(endMatch.index);
  
  fs.writeFileSync(filepath, content);
  console.log("Replaced successfully!");
} else {
  console.log("Could not find boundaries with regex!");
}
