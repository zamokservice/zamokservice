import { useState } from 'react'
import { useLang } from '../LangContext'
import { PHONE_DISPLAY, PHONE_TEL } from '../config'

const NAV_LINKS = [
  ['#services', 'nav.services'],
  ['#prices', 'nav.prices'],
  ['#how', 'nav.how'],
  ['#reviews', 'nav.reviews'],
  ['#contacts', 'nav.contacts'],
]

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header" id="top">
      <div className="container header__inner">
        <a href="#top" className="logo">
          <span className="logo__icon">🔐</span>
          <span className="logo__text">Zamok<b>Service</b></span>
        </a>

        <nav className={`nav${menuOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map(([href, key]) => (
            <a key={key} href={href} onClick={() => setMenuOpen(false)}>{t(key)}</a>
          ))}
        </nav>

        <div className="header__right">
          <div className="header__phone">
            <a href={PHONE_TEL} className="phone-link">{PHONE_DISPLAY}</a>
            <span className="phone-note">{t('header.note')}</span>
          </div>
          <div className="lang-switch" role="group" aria-label="Language">
            {['ua', 'ru'].map((code) => (
              <button
                key={code}
                className={`lang-switch__btn${lang === code ? ' is-active' : ''}`}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className={`burger${menuOpen ? ' is-open' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
