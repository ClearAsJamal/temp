// src/App.js
import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import CookiesPopUp from './components/CookiesPopUp';

import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import deTranslations from './translations/de.json';
import frTranslations from './translations/fr.json';
import trTranslations from './translations/tr.json';

// Create Translation Context
export const TranslationContext = createContext();

// Map language code -> translations
const translationMap = {
  en: enTranslations,
  es: esTranslations,
  de: deTranslations,
  fr: frTranslations,
  tr: trTranslations,
};

// Map country (from IP) -> language code
const countryToLanguage = {
  DE: 'de',
  AT: 'de',
  CH: 'de', // you could later branch by region if you want
  FR: 'fr',
  ES: 'es',
  TR: 'tr',
  // everything else will fall back to 'en'
};

function App() {
  // 1) Initialise language from localStorage if present
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const stored = window.localStorage.getItem('preferredLanguage');
    return stored || 'en';
  });

  const [translations, setTranslations] = useState(
    translationMap[currentLanguage] || enTranslations
  );

  // 2) Centralised language change handler (used by selector + IP detection)
  const handleLanguageChange = (languageCode) => {
    const lang = translationMap[languageCode] ? languageCode : 'en';

    setCurrentLanguage(lang);
    setTranslations(translationMap[lang] || enTranslations);

    // persist user choice so we don't re-detect via IP
    window.localStorage.setItem('preferredLanguage', lang);
  };

  // 3) On first load (no stored preference) -> detect by IP
  useEffect(() => {
    const stored = window.localStorage.getItem('preferredLanguage');
    if (stored) return; // user already chose, don't override

    const fetchLanguageFromIP = async () => {
      try {
        // Example free endpoint – in production, better to do this on backend
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) return;

        const data = await res.json();
        const countryCode = data?.country_code; // e.g. "DE"
        if (!countryCode) return;

        const langFromCountry = countryToLanguage[countryCode];
        if (langFromCountry && langFromCountry !== currentLanguage) {
          handleLanguageChange(langFromCountry);
        }
      } catch (err) {
        console.error('GeoIP language detection failed:', err);
      }
    };

    fetchLanguageFromIP();
  }, [currentLanguage]); // depends on currentLanguage so we can switch from default 'en'

  return (
    <TranslationContext.Provider
      value={{ translations, currentLanguage, handleLanguageChange }}
    >
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/services"
                element={
                  <>
                    <Services />
                    <Testimonials />
                  </>
                }
              />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>

        <CookiesPopUp />
      </Router>
    </TranslationContext.Provider>
  );
}

export default App;
