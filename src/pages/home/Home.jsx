import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { financeNewsRequested } from '../../redux/slices/financeNewsSlice'
import { get_industries_list_requested } from '../../redux/slices/getIndustriesListSlice'
import NewsCard from '../../components/newsCard/NewsCard'
import SearchFilter from '../../components/filter/Filter'
import styles from './home.module.css'
import { get_market_stats_requested } from '../../redux/slices/getMarketStatsSlice'

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    country: '',
    industry: '',
  })

  const dispatch = useDispatch()

  const financeNews = useSelector((state) => state.financeNews)
  const marketStats = useSelector((state) => state.getMarketStats)

  useEffect(() => {
    dispatch(financeNewsRequested())
  }, [dispatch])

  useEffect(() => {
    if (marketStats.error) {
      toast.error(`Market stats error: ${marketStats.error}`)
    }

    if (financeNews.error) {
      toast.error(financeNews.error)
    }
  }, [financeNews.error, marketStats.error])

  useEffect(() => {
    dispatch(get_market_stats_requested(searchParams))
  }, [dispatch, searchParams])

  const newsContent = (financeNews.data || []).map((news) => (
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
      <div className={styles.searchFilter__box}>
        <SearchFilter setSearchParams={setSearchParams} />
      </div>
      <div className={styles.latestNews}>
        <h2 className={styles.title}>Global Financial News</h2>
        <div className={styles.latestNews__preview}>{newsContent}</div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Home
