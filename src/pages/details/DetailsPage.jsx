import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './detailsPage.module.css'

const DetailsPage = () => {
  const { id } = useParams()

  const { data } = useSelector((state) => state.financeNews)

  const news = data.find((news) => news.uuid === id)

  const entities =
    news?.entities.map((entity, index) => (
      <ul key={index} className={styles.entity}>
        <li>Name: {entity.name}</li>
        <li>Industry: {entity.industry}</li>
        <li>
          Exchange: {entity.exchange_long} ({entity.exchange})
        </li>
        <li>Country: {entity.country.toUpperCase()}</li>
        <li>Symbol: {entity.symbol}</li>
        <li>Type: {entity.type}</li>
      </ul>
    )) ?? []

  if (!news) {
    return (
      <div className={styles.onError}>
        <h1>404! News Not found</h1>
      </div>
    )
  }

  return (
    <div className={styles.newsDetails}>
      <h1 className={styles.title}>{news.title}</h1>
      <div className={styles.imageBox}>
        <img src={news.image_url} alt="news_image" className={styles.image} />
        <p className={styles.publishedDate}>
          Published: {new Date(news.published_at).toDateString()}
        </p>
        <p className={styles.source}>
          <small>Source: </small>
          <a href={news.url}>{news.source}</a>
        </p>
      </div>

      <p className={news.description}>{news.description}</p>
      <p className={news.description}>{news.snippet}</p>

      <div className={styles.entities}>
        {entities.length > 0 && (
          <>
            <h3 className={styles.entityHeading}>Entities</h3>
            {entities}
          </>
        )}
      </div>
    </div>
  )
}

export default DetailsPage
