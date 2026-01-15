import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// EN
import enCommon from "./En/common.json";
import enHome from "./En/home.json";
import enAbout from "./En/about.json";
import enServices from "./En/service.json";
import enRepresentations from "./en/represantation.json";
import enDescription from "./En/description.json";

// EL (Greek)
import elCommon from "./El/common.json";
import elHome from "./El/home.json";
import elAbout from "./El/about.json";
import elServices from "./El/service.json";
import elRepresentations from "./El/represantation.json";
import elDescription from "./El/description.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        services: enServices,
        representations: enRepresentations,
        description: enDescription,
      },
      el: {
        common: elCommon,
        home: elHome,
        about: elAbout,
        services: elServices,
        representations: elRepresentations,
        description: elDescription,
      },
    },

    lng: localStorage.getItem("lang") || "en", // default language
    fallbackLng: "en",

    ns: ["common", "home", "about", "services", "representations"],
    defaultNS: "common",

    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
