import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  financeNewsRequested,
  financeNewsSuccess,
  financeNewsFailed,
} from '../slices/financeNewsSlice'

function* getFinanceNewsAsync() {
  try {
    const { data } = yield axios({
      method: 'GET',
      url: `https://api.marketaux.com/v1/news/all?api_token=${process.env.REACT_APP_API_TOKEN}`,
    })

    yield put(financeNewsSuccess(data.data))
  } catch (error) {
    if (error.response) {
      yield put(financeNewsFailed(error.response.data.error.message))
      yield put(financeNewsFailed(null))
    }
  }
}

export function* watchGetFinanceNews() {
  yield takeEvery(financeNewsRequested.type, getFinanceNewsAsync)
}
