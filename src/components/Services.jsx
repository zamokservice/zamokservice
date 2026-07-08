import { useLang } from '../LangContext'

const SERVICES = [
  ['🚪', 'services.s1t', 'services.s1d', 400],
  ['🚗', 'services.s2t', 'services.s2d', 700],
  ['🧰', 'services.s3t', 'services.s3d', 1000],
  ['🛋', 'services.s4t', 'services.s4d', 300],
  ['🔁', 'services.s5t', 'services.s5d', 500],
  ['🛠', 'services.s6t', 'services.s6d', 450],
]

export default function Services() {
  const { t } = useLang()

  return (
    <section className="section" id="services">
      <div className="container">
        <h2>{t('services.title')}</h2>
        <p className="section__lead">{t('services.lead')}</p>
        <div className="cards">
          {SERVICES.map(([icon, titleKey, descKey, price]) => (
            <article className="card" key={titleKey}>
              <div className="card__icon">{icon}</div>
              <h3>{t(titleKey)}</h3>
              <p>{t(descKey)}</p>
              <p className="card__price">{t('common.from')} {price} {t('common.uah')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
