import { useLang } from '../LangContext'

const REVIEWS = [
  ['reviews.r1', 'reviews.r1a', 'reviews.r1p'],
  ['reviews.r2', 'reviews.r2a', 'reviews.r2p'],
  ['reviews.r3', 'reviews.r3a', 'reviews.r3p'],
  ['reviews.r4', 'reviews.r4a', 'reviews.r4p'],
]

export default function Reviews() {
  const { t } = useLang()

  return (
    <section className="section section--alt" id="reviews">
      <div className="container">
        <h2>{t('reviews.title')}</h2>
        <div className="reviews">
          {REVIEWS.map(([textKey, authorKey, placeKey]) => (
            <blockquote className="review" key={textKey}>
              <p>{t(textKey)}</p>
              <footer><b>{t(authorKey)}</b> · <span>{t(placeKey)}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
