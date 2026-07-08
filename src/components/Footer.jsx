import { useLang } from '../LangContext'
import { PHONE_DISPLAY, PHONE_TEL, VIBER_LINK, TELEGRAM_LINK, EMAIL } from '../config'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer" id="contacts">
      <div className="container footer__inner">
        <div className="footer__col">
          <a href="#top" className="logo logo--footer">
            <span className="logo__icon">🔐</span> Zamok<b>Service</b>
          </a>
          <p>{t('footer.about')}</p>
        </div>
        <div className="footer__col">
          <h4>{t('footer.navTitle')}</h4>
          <a href="#services">{t('nav.services')}</a>
          <a href="#prices">{t('nav.prices')}</a>
          <a href="#how">{t('nav.how')}</a>
          <a href="#reviews">{t('nav.reviews')}</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="footer__col">
          <h4>{t('footer.contactsTitle')}</h4>
          <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <p>{t('footer.schedule')}</p>
          <div className="footer__social">
            <a href={VIBER_LINK}>Viber</a>
            <a href={TELEGRAM_LINK}>Telegram</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© 2026 ZamokService · zamokservices.com · {t('footer.rights')}</p>
      </div>
    </footer>
  )
}
