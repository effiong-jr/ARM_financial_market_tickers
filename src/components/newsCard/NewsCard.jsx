import styles from './newsCard.module.css'

const NewsCard = ({ imgUrl, source, desc }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.imgBox}>
        <img src={imgUrl} alt="news pix" />
      </div>
      <div className={styles.text}>
        <div className={styles.source}>
          <small>Source:</small>
          {` `}
          {source}
        </div>
        <div className={styles.description}>{desc}</div>
      </div>
    </div>
  )
}

export default NewsCard
