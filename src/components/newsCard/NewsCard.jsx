import { Link } from 'react-router-dom'
import styles from './newsCard.module.css'

const NewsCard = ({ id, url, imgUrl, source, desc }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.imgBox}>
        <img src={imgUrl} alt="news pix" className={styles.newsImage} />
      </div>
      <div className={styles.text}>
        <div className={styles.source}>
          <small>Source:</small>
          {` `}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={styles.sourceLink}
          >
            {source}
          </a>
        </div>
        <div className={styles.description}>
          {desc.length > 90 ? desc.slice(0, 90) + '...' : desc} {` `}
          <Link to={`/market-news/${id}`} className={styles.readMore}>
            Read more...
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
