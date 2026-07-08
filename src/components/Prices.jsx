import { useLang } from '../LangContext'
import { PHONE_TEL, VIBER_LINK, TELEGRAM_LINK } from '../config'

const ROWS = [
  ['prices.r1', '400 ₴', '600 ₴', '900 ₴'],
  ['prices.r2', '700 ₴', '900 ₴', '1300 ₴'],
  ['prices.r3', '1000 ₴', '1500 ₴', '2500 ₴'],
  ['prices.r4', '300 ₴', '400 ₴', '—'],
  ['prices.r5', '500 ₴', '650 ₴', '900 ₴'],
  ['prices.r6', '600 ₴', '800 ₴', '1100 ₴'],
]

export default function Prices() {
  const { t } = useLang()

  return (
    <section className="section section--alt" id="prices">
      <div className="container">
        <h2>{t('prices.title')}</h2>
        <p className="section__lead">{t('prices.lead')}</p>
        <div className="table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                {['prices.h1', 'prices.h2', 'prices.h3', 'prices.h4'].map((key) => (
                  <th key={key}>{t(key)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([labelKey, ...cells]) => (
                <tr key={labelKey}>
                  <td>{t(labelKey)}</td>
                  {cells.map((cell, i) => <td key={i}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prices__note">{t('prices.note')}</p>
        <div className="prices__actions">
          <a href={VIBER_LINK} className="btn btn--viber">Viber</a>
          <a href={TELEGRAM_LINK} className="btn btn--tg">Telegram</a>
          <a href={PHONE_TEL} className="btn btn--accent">{t('prices.cta')}</a>
        </div>
      </div>
    </section>
  )
}
