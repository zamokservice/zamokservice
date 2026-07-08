import { createContext, useContext, useEffect, useState } from 'react'
import { I18N } from './i18n'

const LangContext = createContext(null)

function detectInitialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'ru' || fromUrl === 'ua') return fromUrl
  const saved = localStorage.getItem('lang')
  if (saved === 'ru' || saved === 'ua') return saved
  return 'ua'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang)
  const t = (key) => I18N[lang][key] ?? I18N.ua[key] ?? key

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'ua' ? 'uk' : 'ru'
    document.title = I18N[lang]['meta.title']
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', I18N[lang]['meta.description'])
    document.querySelector('meta[property="og:title"]')
      ?.setAttribute('content', I18N[lang]['meta.ogTitle'])
    document.querySelector('meta[property="og:description"]')
      ?.setAttribute('content', I18N[lang]['meta.ogDescription'])
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
