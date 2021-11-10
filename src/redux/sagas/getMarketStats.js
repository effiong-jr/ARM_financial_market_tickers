import { takeEvery, put } from '@redux-saga/core/effects'
import axios from 'axios'
import {
  get_market_stats_requested,
  get_market_stats_successful,
  get_market_stats_failed,
} from '../slices/getMarketStatsSlice'

function* getMarketStatsAsync({ payload }) {
  const { industries, countries } = payload

  try {
    yield get_market_stats_requested()

    const { data } = yield axios({
      method: 'GET',
      url: `https://api.marketaux.com/v1/entity/stats/intraday?industries=${industries}&countries=${countries}&api_token=${process.env.REACT_APP_API_TOKEN}`,
      // url: `https://api.marketaux.com/v1/entity/stats/intraday?api_token=${process.env.REACT_APP_API_TOKEN}`,
    })

    console.log(data)

    yield put(get_market_stats_successful(data))
  } catch (error) {
    if (error.response) {
      yield put(get_market_stats_failed(error.response.data.error.message))
      yield put(get_market_stats_failed(null))
    }
  }
}

export function* watchGetMarketStats() {
  yield takeEvery(get_market_stats_requested.type, getMarketStatsAsync)
}
