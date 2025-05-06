import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const showNotification = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2000); // 2 saniyede kaybolur
  };

  return (
    <NotificationContext.Provider value={{ message, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);