import { useLang } from '../LangContext'
import { PHONE_DISPLAY, PHONE_TEL } from '../config'

export default function About() {
  const { t } = useLang()

  return (
    <section className="section section--alt" id="about">
      <div className="container container--narrow">
        <h2>{t('about.title')}</h2>
        <p className="about__text">
          {t('about.text')}{' '}
          ☎ <a href={PHONE_TEL} className="about__phone">{PHONE_DISPLAY}</a>
        </p>
      </div>
    </section>
  )
}
