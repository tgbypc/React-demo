import React from "react";
import { useForm } from "../contexts/FormContext";
import { useLanguage } from "../contexts/LanguageContext";
import "./MessageInput.css";

const MessageInput = () => {
  const { message, handleChange, handleSend } = useForm();
  const { t } = useLanguage();

  return (
    <div className="message-container">
      <div className="message-box"> 
        <input
          type="text"
          placeholder={t("placeholder")}
          value={message}
          onChange={handleChange}
        />
        <button onClick={handleSend}>{t("send")}</button>
      </div>
    </div>
  );
};

export default MessageInput;