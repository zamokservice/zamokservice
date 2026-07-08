import { useLang } from '../LangContext'

// Райони без ключа однакові в обох мовах
const DISTRICTS = [
  'Оболонь', 'Позняки', 'geo.d3', 'geo.d4',
  'geo.d5', 'geo.d6', 'geo.d7', 'geo.d8',
  'geo.d9', 'geo.d10', 'geo.d11', 'geo.d12',
  'Осокорки', 'geo.d14', 'geo.d15', 'geo.d16',
]

export default function Geo() {
  const { t } = useLang()

  return (
    <section className="section" id="geo">
      <div className="container">
        <h2>{t('geo.title')}</h2>
        <p className="section__lead">{t('geo.lead')}</p>
        <ul className="districts">
          {DISTRICTS.map((d) => (
            <li key={d}>{d.startsWith('geo.') ? t(d) : d}</li>
          ))}
        </ul>
        <p className="geo__suburbs">{t('geo.suburbs')}</p>
      </div>
    </section>
  )
}
