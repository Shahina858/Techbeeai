// src/components/GoogleTranslate.jsx
import { useState, useEffect } from "react"

// Brand names Google skips — we manually replace them after translation
const BRAND_TRANSLATIONS = {
 "Lyrebird AI":   "ليربيرد",
"Lyrebird":      "ليربيرد",
  "CamCard":       "كام كارد",
  "Tegsoft":       "تيغسوفت",
  "Webishopi":     "ويبيشوبي",
  "TechBee AI":    "تيك بي للذكاء الاصطناعي",
  "TechBee":       "تيك بي",
  "Check Point":   "تشيك بوينت",
}

// After Google Translate runs, force-replace brand names in the DOM
function forceBrandTranslations() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  )
  const nodes = []
  let node
  while ((node = walker.nextNode())) nodes.push(node)

  nodes.forEach(textNode => {
    // Skip script/style/our own navbar elements
    const parent = textNode.parentElement
    if (!parent) return
    if (["SCRIPT","STYLE","NOSCRIPT"].includes(parent.tagName)) return

    let text = textNode.nodeValue
    let changed = false
    Object.entries(BRAND_TRANSLATIONS).forEach(([en, ar]) => {
      if (text.includes(en)) {
        text = text.replaceAll(en, ar)
        changed = true
      }
    })
    if (changed) textNode.nodeValue = text
  })
}

export default function GoogleTranslate() {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("site_lang")
    if (saved === "ar") {
      setIsArabic(true)
      document.documentElement.dir = "rtl"
      document.body.classList.add("arabic-active")
      // Re-apply translation after React mounts
      setTimeout(() => {
        doTranslate("ar")
        setTimeout(forceBrandTranslations, 2000)
      }, 800)
    }
  }, [])

  function doTranslate(langCode) {
    const select = document.querySelector(".goog-te-combo")
    if (select) {
      select.value = langCode
      select.dispatchEvent(new Event("change"))
      return true
    }
    return false
  }

  function switchToArabic() {
    setIsArabic(true)
    localStorage.setItem("site_lang", "ar")
    document.documentElement.dir = "rtl"
    document.body.classList.add("arabic-active")

    // Try now, retry until widget is ready
    if (!doTranslate("ar")) {
      let tries = 0
      const interval = setInterval(() => {
        tries++
        if (doTranslate("ar") || tries > 10) {
          clearInterval(interval)
          // After translation completes, fix brand names
          setTimeout(forceBrandTranslations, 2500)
        }
      }, 500)
    } else {
      setTimeout(forceBrandTranslations, 2500)
    }
  }

  function switchToEnglish() {
    setIsArabic(false)
    localStorage.setItem("site_lang", "en")
    document.documentElement.dir = "ltr"
    document.body.classList.remove("arabic-active")
    // Clear translation cookies and reload
    document.cookie = "googtrans=/en/en; path=/"
    document.cookie = "googtrans=/en/en; path=/; domain=." + window.location.hostname
    window.location.reload()
  }

  return (
    <div style={{
      display:      "flex",
      alignItems:   "center",
      background:   "rgba(255,255,255,0.07)",
      border:       "1px solid rgba(255,255,255,0.15)",
      borderRadius: 50,
      padding:      "4px",
      gap:          2,
      flexShrink:   0,
    }}>
      <button
        onClick={isArabic ? switchToEnglish : undefined}
        style={{
          background:   !isArabic ? "#f5b800" : "transparent",
          color:        !isArabic ? "#000" : "#888",
          border:       "none",
          borderRadius: 50,
          padding:      "5px 14px",
          fontSize:     13,
          fontWeight:   700,
          cursor:       isArabic ? "pointer" : "default",
          transition:   "all 0.2s",
          lineHeight:   1,
        }}
      >
        EN
      </button>

      <button
        onClick={!isArabic ? switchToArabic : undefined}
        style={{
          background:   isArabic ? "#f5b800" : "transparent",
          color:        isArabic ? "#000" : "#888",
          border:       "none",
          borderRadius: 50,
          padding:      "5px 14px",
          fontSize:     13,
          fontWeight:   700,
          cursor:       !isArabic ? "pointer" : "default",
          transition:   "all 0.2s",
          lineHeight:   1,
          fontFamily:   "'Cairo', sans-serif",
        }}
      >
        ع
      </button>
    </div>
  )
}
