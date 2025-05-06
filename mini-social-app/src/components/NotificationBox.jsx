import React from "react";
import { useNotification } from "../contexts/NotificationContext";
import { useLanguage } from "../contexts/LanguageContext";
import "./NotificationBox.css";

const NotificationBox = () => {
  const { message } = useNotification();
  const { t } = useLanguage();

  if (!message) return null;

  return <div className="notification">{t(message)}</div>;
};

export default NotificationBox;