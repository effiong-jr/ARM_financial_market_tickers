import styles from './newsCard.module.css'

const NewsCard = ({ imgUrl, source, desc }) => {
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
            href={`https://${source}`}
            target="_blank"
            rel="noreferrer"
            className={styles.sourceLink}
          >
            {source}
          </a>
        </div>
        <div className={styles.description}>
          {desc.length > 90 ? desc.slice(0, 90) + ' ...' : desc} {` `}
          <button className={styles.readMore}>Read more...</button>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
