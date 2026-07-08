import { useLang } from '../LangContext'

const QUESTIONS = [1, 2, 3, 4, 5, 6]

export default function Faq() {
  const { t } = useLang()

  return (
    <section className="section" id="faq">
      <div className="container container--narrow">
        <h2>{t('faq.title')}</h2>
        <div className="faq">
          {QUESTIONS.map((n) => (
            <details className="faq__item" key={n}>
              <summary>{t(`faq.q${n}`)}</summary>
              <p>{t(`faq.a${n}`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
