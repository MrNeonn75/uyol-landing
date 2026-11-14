import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, type LanguageCode, type TranslationSchema } from './translations';

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'az',
  setLang: () => {},
  t: TRANSLATIONS.az,
});

const STORAGE_KEY = 'uyol_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (saved && saved in TRANSLATIONS) {
        return saved;
      }
    }
    return 'az';
  });

  const setLang = (nextLang: LanguageCode) => {
    setLangState(nextLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, nextLang);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
