import { useState } from 'react'
import { useLang } from '../LangContext'
import { PHONE_DISPLAY, PHONE_TEL, VIBER_LINK, TELEGRAM_LINK } from '../config'

export default function OrderForm() {
  const { t } = useLang()
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  function handleSubmit(e) {
    e.preventDefault()
    const phone = e.target.phone.value.trim()
    if (phone.length < 10) {
      setStatus('error')
      return
    }
    // TODO: подключить бэкенд/CRM (fetch POST на /api/order или сервис типа Telegram-бота)
    setStatus('success')
    e.target.reset()
  }

  return (
    <section className="section section--dark" id="order">
      <div className="container container--narrow">
        <h2>{t('order.title')}</h2>
        <p className="section__lead">{t('order.lead')}</p>
        <form className="order-form" onSubmit={handleSubmit} noValidate>
          <input type="text" name="name" placeholder={t('order.name')} autoComplete="name" />
          <input type="tel" name="phone" required placeholder={t('order.phone')} autoComplete="tel" />
          <textarea name="message" rows="3" placeholder={t('order.message')} />
          <button type="submit" className="btn btn--accent btn--full">{t('order.submit')}</button>
          {status === 'success' && <p className="order-form__success">{t('order.success')}</p>}
          {status === 'error' && <p className="order-form__error">{t('order.error')}</p>}
        </form>
        <div className="order__alt">
          <span>{t('order.or')}</span>
          <div className="order__links">
            <a href={PHONE_TEL} className="btn btn--ghost">📞 {PHONE_DISPLAY}</a>
            <a href={VIBER_LINK} className="btn btn--viber">Viber</a>
            <a href={TELEGRAM_LINK} className="btn btn--tg">Telegram</a>
          </div>
        </div>
      </div>
    </section>
  )
}
