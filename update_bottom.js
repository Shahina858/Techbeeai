const fs = require('fs');
const filepath = 'c:/Users/shameer/OneDrive/framerapp/techbee-ai/src/pages/Home.jsx';
let content = fs.readFileSync(filepath, 'utf8');

const replacement = `      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-[112px] px-6" style={{ background: "#080808" }}>
        <div className="max-w-[1120px] mx-auto">
          <SLabel>Testimonials</SLabel>
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1f1f1f] bg-[#0d0d0d]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f5b800]"></div>
              <span className="text-[#a1a1aa] text-[11px] font-bold uppercase tracking-wider">Client Stories</span>
            </div>
          </div>
          <h2
            className="text-center font-bold mb-[56px]"
            style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)" }}
          >
            Trusted by Teams That{" "}
            <span className="text-[#f5b800]">Demand the Best</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col rounded-2xl p-8"
                style={{
                  background: "#0d0d0d",
                  border:     "1px solid #1f1f1f",
                  transition: "border-color .3s, box-shadow .3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(245,184,0,0.28)"
                  e.currentTarget.style.boxShadow   = "0 0 45px rgba(245,184,0,0.09)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#1f1f1f"
                  e.currentTarget.style.boxShadow   = "none"
                }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#f5b800">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-[15px] leading-[1.75] flex-1 mb-6">"{t.quote}"</p>
                <hr className="border-[#1f1f1f] mb-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f5b800] text-black text-[15px] font-bold shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-bold leading-tight">{t.name}</p>
                    <p className="text-[#999999] text-[12px] mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="py-[112px] px-6" style={{ background: "#000" }}>
        <div className="max-w-[840px] mx-auto">
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
            className="rounded-[32px] p-10"
            style={{
              background: "#080808",
              border:     "1px solid rgba(245,184,0,0.3)",
              boxShadow:  "0 0 80px rgba(245,184,0,0.05)",
            }}
          >
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
                <select name="country" value={form.country} onChange={handleForm} className={iCls + " appearance-none cursor-pointer"}>
                  {["UAE","India","Saudi Arabia","Qatar","Kuwait","Oman"].map(c => (
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
                <select name="product" value={form.product} onChange={handleForm} className={iCls + " appearance-none cursor-pointer"}>
                  {["CAMCARD AI","Intelligence Document Processing IDP","Tegsoft AI Agent","Lyrebird AI","All"].map(p => (
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
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer
        className="px-6 pt-16 pb-6"
        style={{ background: "#000", borderTop: "1px solid rgba(245,184,0,0.1)" }}
      >
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <img src={LOGO_IMG} alt="TechBee" className="h-8 object-contain object-left" />
            </div>
            <div>
              <h3 className="text-white text-[14px] font-bold mb-6 pb-2 inline-block border-b-[3px] border-[#f5b800]">Products</h3>
              <div className="flex flex-col gap-4">
                {["CamCard","Tegsoft AI","Lyrebird AI","IDP"].map(p => (
                  <p key={p} className="text-[#999999] text-[14px] hover:text-[#f5b800] cursor-pointer transition-colors duration-200">{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white text-[14px] font-bold mb-6 pb-2 inline-block border-b-[3px] border-[#f5b800]">Company</h3>
              <div className="flex flex-col gap-4">
                {["About Us","Career","Blog","Partner"].map(c => (
                  <p key={c} className="text-[#999999] text-[14px] hover:text-[#f5b800] cursor-pointer transition-colors duration-200">{c}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white text-[14px] font-bold mb-6 pb-2 inline-block border-b-[3px] border-[#f5b800]">Legal</h3>
              <div className="flex flex-col gap-4">
                {["Privacy Policy","Terms of service","Cookie Policy","Security"].map(l => (
                  <p key={l} className="text-[#999999] text-[14px] hover:text-[#f5b800] cursor-pointer transition-colors duration-200">{l}</p>
                ))}
              </div>
            </div>
          </div>
          
          <hr className="border-[#1f1f1f] mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 items-center">
              <span className="text-white text-[12px] font-bold mr-2">Social:</span>
              {["LinkedIn","Twitter/X","YouTube"].map(s => (
                <a key={s} href="#"
                   className="text-[#999999] text-[12px] hover:text-[#f5b800] transition-colors duration-200">
                  {s}
                </a>
              ))}
            </div>
            <p className="text-[#555555] text-[12px]">
              © 2025 TechBee AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
\`;

const marker = '      {/* ══════════════════════════════════════';
const secondMarker = '          TESTIMONIALS';

const index1 = content.indexOf(marker);
const index2 = content.indexOf(secondMarker, index1);

if (index1 !== -1 && index2 !== -1 && index2 - index1 < 100) {
  content = content.substring(0, index1) + replacement + '\\n';
  fs.writeFileSync(filepath, content);
  console.log("Success");
} else {
  console.log("Marker not found, please check exact string.");
}`;
