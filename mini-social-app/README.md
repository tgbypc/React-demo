# 🌈 Trendy Gradyanlı Mini Sosyal Uygulama

Bu proje, `useContext` konusunu sade, görsel ve öğretici bir şekilde anlamak için oluşturulmuştur.  
Slack grubumuzda yaşadığımız öğrenme zorluklarını aşmak ve birlikte gelişmek adına ortaya çıkmıştır. ✨

---

## 🎯 Amaç

- `useContext`, `createContext`, `useState` gibi temel React yapılarıyla sezgisel öğrenim
- TR/EN dil desteği
- Tema geçişi (🌞 / 🌙)
- Mesaj gönderme ve bildirim sistemi
- Props karmaşasından kurtulma — tek anahtarla tüm evi yönet!

---

## 🧩 Kullanılan Context'ler

| Context               | Görevi                                  |
| --------------------- | --------------------------------------- |
| `UserContext`         | Kullanıcı bilgisi (isim + rol)          |
| `ThemeContext`        | Tema yönetimi (light / dark)            |
| `LanguageContext`     | TR / EN dil seçimi                      |
| `FormContext`         | Mesaj input ve paylaşım işlemi          |
| `NotificationContext` | İşlem sonrası bildirim kutusu gösterimi |

---

## 🧠 useContext Anlatımı: "Ev ve Anahtar" Metaforu

🔒 **Problem:**

Diyelim ki büyük bir evin var.  
Evde onlarca oda var:

- Salon (Navbar)
- Yatak odası (Dashboard)
- Ofis (AdminBox)
- Mutfak (MessageInput)

Her odanın bir kapısı var.  
Ve her kapıdan geçebilmek için bir anahtara ihtiyacın var.

Her odanın kendi anahtarı olursa…  
👉 Sürekli anahtar taşırsın.  
👉 Yanlış anahtarı takarsın.  
👉 Kapıda kalırsın.  
😫 Yani props zinciri = karmaşa!

✅ **Çözüm:**  
“Tüm evi tek anahtarla açabileceğim bir sistem kurmak istiyorum!”

Yani:

- Her odada aynı kilit olsun
- Tek bir anahtar her kapıyı açsın  
  → `useContext` tam olarak bunu yapar! 🔑

---

## 🖼️ Uygulama Ekranı

![Ekran görüntüsü](./path-to-screenshot.png)

---

## 🛠️ Kurulum

```bash
git clone https://github.com/tugbacelik/mini-social-app.git
cd mini-social-app
npm install
npm run dev
```
