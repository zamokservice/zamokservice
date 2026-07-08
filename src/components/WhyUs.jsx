import { useLang } from '../LangContext'

const FEATURES = [
  ['why.f1t', 'why.f1d'],
  ['why.f2t', 'why.f2d'],
  ['why.f3t', 'why.f3d'],
  ['why.f4t', 'why.f4d'],
  ['why.f5t', 'why.f5d'],
  ['why.f6t', 'why.f6d'],
]

export default function WhyUs() {
  const { t } = useLang()

  return (
    <section className="section section--dark" id="why">
      <div className="container">
        <h2>{t('why.title')}</h2>
        <ul className="features">
          {FEATURES.map(([titleKey, descKey]) => (
            <li key={titleKey}>
              <b>{t(titleKey)}</b>
              <span>{t(descKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
