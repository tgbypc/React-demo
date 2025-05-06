import {  createContext, useContext, useState } from 'react';
import { useNotification } from "./NotificationContext";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [message, setMessage] = useState(""); 
  const { showNotification } = useNotification();

  const handleChange = (e) => setMessage(e.target.value);
  const handleSend = () => {
    if (message.trim() !== "") {
      console.log("📨 Mesaj gönderildi:", message);
      showNotification("success");
      setMessage("");
    }
  };
  return (
    <FormContext.Provider value={{ message, handleChange, handleSend }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);