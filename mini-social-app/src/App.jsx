import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { FormProvider } from "./contexts/FormContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import MessageInput from "./components/MessageInput";
import { NotificationProvider } from "./contexts/NotificationContext.jsx";
import NotificationBox from "./components/NotificationBox";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <NotificationProvider>
            <FormProvider>
              <Navbar />
              <Dashboard />
              <MessageInput />
              <NotificationBox />
            </FormProvider>
          </NotificationProvider>
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
