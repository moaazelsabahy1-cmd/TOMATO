import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

function applyDocumentLang(lng) {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
}

const saved = typeof localStorage !== "undefined" ? localStorage.getItem("lang") : null;
const initialLng = saved === "ar" || saved === "en" ? saved : "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: initialLng,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

applyDocumentLang(i18n.language);
i18n.on("languageChanged", (lng) => {
  applyDocumentLang(lng);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("lang", lng);
  }
});

export default i18n;
