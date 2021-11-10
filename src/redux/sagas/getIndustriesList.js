// https://api.marketaux.com/v1/entity/industry/list

import { put, takeEvery } from '@redux-saga/core/effects'
import axios from 'axios'
import {
  get_industries_list_failed,
  get_industries_list_requested,
  get_industries_list_successful,
} from '../slices/getIndustriesListSlice'

function* getIndustriesListAsync() {
  try {
    yield get_industries_list_requested()

    const { data } = yield axios({
      method: 'GET',
      url: `https://api.marketaux.com/v1/entity/industry/list?api_token=${process.env.REACT_APP_API_TOKEN}`,
    })

    yield put(get_industries_list_successful(data.data))
  } catch (error) {
    if (error.response) {
      yield put(get_industries_list_failed(error.response.data.error.message))
      yield put(get_industries_list_failed(null))
    }
  }
}

export function* watchGetIndustriesList() {
  yield takeEvery(get_industries_list_requested.type, getIndustriesListAsync)
}
