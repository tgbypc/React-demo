// Bu oda, bizim “giriş holümüz” gibi — kullanıcıyı selamlıyor, tema ve dil seçeneklerini gösteriyor.

//🎯 Amacımız: UserContext içindeki user.name verisini çekmek ve Navbar’da göstermek.

import React from 'react';
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useUser(); //Anahatari burada kullaniyoruz! demek 
  const { isDark, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  return (
    <div className='navbar'>
      <button onClick={toggleTheme}>
        {isDark ? "🌞 Light" : "🌙 Dark"}
      </button>
      <span>{user.name}</span> {/* Tuğba burada! */}
      <select value={lang} onChange={toggleLang}>
        <option value="tr">Türkçe</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
export default Navbar;

{/* 
  useUser()
Bu odaya (Navbar) merkezi anahtarı getiriyoruz
{user.name}
Kullanıcının adını gösteriyoruz (Tuğba)
<select>
Dil seçimi için yer hazırlıyoruz (ileride LanguageContext ile bağlayacağız)

	UserProvider → Anahtar kutusu kuruldu
	•	useUser → Anahtarı kullandık
	•	Navbar → Kapıyı açtı ve Tuğba’yı gördü 🎉
  */}