import { useLang } from '../LangContext'

const STEPS = [
  ['how.s1t', 'how.s1d'],
  ['how.s2t', 'how.s2d'],
  ['how.s3t', 'how.s3d'],
  ['how.s4t', 'how.s4d'],
]

export default function HowWeWork() {
  const { t } = useLang()

  return (
    <section className="section" id="how">
      <div className="container">
        <h2>{t('how.title')}</h2>
        <ol className="steps">
          {STEPS.map(([titleKey, descKey], i) => (
            <li className="step" key={titleKey}>
              <span className="step__num">{i + 1}</span>
              <h3>{t(titleKey)}</h3>
              <p>{t(descKey)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
