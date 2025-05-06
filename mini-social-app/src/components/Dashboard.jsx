import React from "react";
import { useUser } from "../contexts/UserContext";
import { useLanguage } from "../contexts/LanguageContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useUser(); // UserContext'ten kullanıcıyı al
  const { t } = useLanguage();
  return (
    <div className="dashboard">
      <h2>{t("welcome")}, {user.name}!</h2>
    </div>
  );
};

export default Dashboard;

{/*
  useUser()
Merkezi anahtar kutusundan “Tuğba”yı çekiyoruz
{user.name}
Kullanıcıyı doğrudan gösteriyoruz
Dashboard
Artık bu oda kişiye özel hale geldi 🎉

  */}

  {/*
    [UserProvider] ← Ana veriyi veriyor
     ├── Navbar.jsx ← kullanıcı adı gösteriyor
     └── Dashboard.jsx ← kişisel selam mesajı gösteriyor
    
    */}