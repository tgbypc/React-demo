// React'dan 3 onemli fonksiyonu cekiyoruz!
import { createContext, useContext, useState } from 'react';

//1. createContext = Anahtar sistemini baslat! demek.
const UserContext = createContext();

//2. UserProvider = Anahtar kutusu + cocuklar (children)= (yani odalar)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Tugba", role:"admin"});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} {/* Odalarin hepsi bu kutunun icinde */}
    </UserContext.Provider>
  );
};

// 3. useUser = Anahtari kullandir 
export const useUser = () => useContext(UserContext);

{/* 
  createContext()
“Anahtar sistemi kur!” – odalar birbirini tanısın
UserProvider
“Merkezi kutu” – çocuklara (odalar = bileşenler) bu veriyi aç
useState(...)
Kullanıcıyı yönet – Tuğba burada saklı
value={{ user, setUser }}
Tüm odalara gönderilecek anahtar bilgisi
{children}
Kim bu bilgiyi kullanmak istiyorsa, bu kutunun içine koymalısın
useUser()
O odada biri bu anahtarı isterse kolayca ulaşabilsin

  */}