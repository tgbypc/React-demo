import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  tr: {
    welcome: "👋 Merhaba",
    send: "Paylaş",
    success: "✅ Mesaj başarıyla gönderildi.",
    placeholder: "Bir mesaj yaz..."
  },
  en: {
    welcome: "👋 Hello",
    send: "Share",
    success: "✅ Message sent successfully.",
    placeholder: "Type a message..."
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("tr");

  const toggleLang = (e) => setLang(e.target.value);

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);