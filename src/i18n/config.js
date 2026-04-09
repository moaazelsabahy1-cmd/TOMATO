import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../messages/ar.json";
import en from "../messages/en.json";

const STORAGE_KEY = "i18n-lang";

const saved = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: saved || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;