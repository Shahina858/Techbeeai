import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home    from "./pages/Home"
import CamCard from "./pages/CamCard"
import Tegsoft from "./pages/TegSoft"
import Lyrebird from "./pages/LyreBird"
import IDP     from "./pages/IDP"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/camcard"  element={<CamCard />} />
        <Route path="/tegsoft"  element={<Tegsoft />} />
        <Route path="/lyrebird" element={<Lyrebird />} />
        <Route path="/idp"      element={<IDP />} />
      </Routes>
    </BrowserRouter>
  )
}
