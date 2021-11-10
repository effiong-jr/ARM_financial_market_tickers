import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  financeNewsRequested,
  financeNewsSuccess,
  financeNewsFailed,
} from '../slices/financeNewsSlice'

function* getFinanceNewsAsync({ payload = {} }) {
  const { selectedIndustry: industries = '', textInput: search = '' } = payload

  try {
    const { data } = yield axios({
      method: 'GET',
      url: `https://api.marketaux.com/v1/news/all?language=en&${
        industries.length ? `industries=${industries}&` : ''
      }${search.length ? `search=${search}&` : ''}api_token=${
        process.env.REACT_APP_API_TOKEN
      }`,
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
  yield takeLatest(financeNewsRequested.type, getFinanceNewsAsync)
}
