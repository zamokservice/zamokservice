import { useLang } from '../LangContext'
import { PHONE_TEL } from '../config'

const TRUST_ITEMS = [
  ['⏱', 'trust.1t', 'trust.1d'],
  ['🔒', 'trust.2t', 'trust.2d'],
  ['📄', 'trust.3t', 'trust.3d'],
  ['⭐', 'trust.4t', 'trust.4d'],
]

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__badge">{t('hero.badge')}</p>
          <h1>{t('hero.title')}</h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
          <div className="hero__actions">
            <a href="#order" className="btn btn--accent">{t('hero.ctaOrder')}</a>
            <a href={PHONE_TEL} className="btn btn--ghost">{t('hero.ctaCall')}</a>
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="trust">
          {TRUST_ITEMS.map(([icon, titleKey, descKey]) => (
            <li key={titleKey}>
              <span className="trust__icon">{icon}</span>
              <b>{t(titleKey)}</b>
              <span>{t(descKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
