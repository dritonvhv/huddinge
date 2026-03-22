/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingChat } from "./components/FloatingChat";
import { ScrollToTop } from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-black selection:bg-gold-500 selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/om-oss" element={<AboutPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/tjanster/:slug" element={<ServicePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingChat />
      </div>
    </BrowserRouter>
  );
}
