import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { financeNewsRequested } from '../../redux/slices/financeNewsSlice'
import NewsCard from '../../components/newsCard/NewsCard'
import styles from './home.module.css'

const Home = () => {
  const disptach = useDispatch()

  const { error, data } = useSelector((state) => state.financeNews)

  console.log(error)
  console.log(data)

  useEffect(() => {
    disptach(financeNewsRequested())
  }, [disptach])

  const newsContent = (data || []).map((news) => (
    <React.Fragment key={news.uuid}>
      <NewsCard
        imgUrl={news.image_url}
        source={news.source}
        desc={news.description}
      />
    </React.Fragment>
  ))

  return (
    <div className={styles.homePage}>
      <div className={styles.latestNews}>
        <h2 className={styles.title}>Latest Global Financial News</h2>
        <div className={styles.latestNews__preview}>{newsContent}</div>
      </div>
    </div>
  )
}

export default Home
