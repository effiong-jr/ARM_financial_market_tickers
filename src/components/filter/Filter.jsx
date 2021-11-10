import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_industries_list_requested } from '../../redux/slices/getIndustriesListSlice'

import styles from './filter.module.css'

const SearchFilter = ({ setSearchParams, ...props }) => {
  const [textInput, setTextInput] = useState('')
  const [country, setCountry] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')
  // const [marketStats, setMarketStats] = useState('')

  const dispatch = useDispatch()

  const industriesList = useSelector((state) => state.getIndustriesList)

  useEffect(() => {
    dispatch(get_industries_list_requested())
  }, [dispatch])

  const handleSearch = (e) => {
    e.preventDefault()

    setSearchParams({
      country,
      industry: selectedIndustry,
    })
  }

  return (
    <div className={styles.searchFilter}>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="industriesSelect"></label>
          <select
            name="industries"
            id="industriesSelect"
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            <option value="">All</option>
            {industriesList.data.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input
            className={styles.searchInput}
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Search"
          />
        </div>

        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchFilter
