import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { financeNewsRequested } from '../../redux/slices/financeNewsSlice'
import { get_industries_list_requested } from '../../redux/slices/getIndustriesListSlice'

import styles from './filter.module.css'

const SearchFilter = ({ setSearchParams, ...props }) => {
  const [textInput, setTextInput] = useState('')
  // const [country, setCountry] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')
  // const [marketStats, setMarketStats] = useState('')

  const dispatch = useDispatch()

  const industriesList = useSelector((state) => state.getIndustriesList)

  useEffect(() => {
    dispatch(get_industries_list_requested())
  }, [])

  useEffect(() => {
    dispatch(financeNewsRequested({ textInput, selectedIndustry }))
  }, [dispatch, textInput, selectedIndustry])

  return (
    <div className={styles.searchFilter}>
      <div className={styles.searchForm}>
        <div className={styles.selectIndustry}>
          <select
            name="industries"
            id="industriesSelect"
            className={styles.selectIndustryInput}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            <option className={styles.industryOptions}>
              -select industry-
            </option>
            <option className={styles.industryOptions} value="">
              All
            </option>
            {industriesList.data.map((industry) => (
              <option
                className={styles.industryOptions}
                key={industry}
                value={industry}
              >
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
      </div>
    </div>
  )
}

export default SearchFilter
