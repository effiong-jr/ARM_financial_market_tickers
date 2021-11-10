// https://api.marketaux.com/v1/entity/industry/list

import { put, takeEvery } from '@redux-saga/core/effects'
import axios from 'axios'
import {
  get_countries_list_failed,
  get_countries_list_requested,
  get_countries_list_successful,
} from '../slices/getCountriesListSlice'

function* getCountriesListAsync() {
  try {
    yield get_countries_list_requested()

    const { data } = yield axios({
      method: 'GET',
      url: '',
    })

    yield put(get_countries_list_successful(data.data))
  } catch (error) {
    if (error.response) {
      yield put(get_countries_list_failed(error.response.data.error.message))
      yield put(get_countries_list_failed(null))
    }
  }
}

export function* watchGetCountriesList() {
  yield takeEvery(get_countries_list_requested.type, getCountriesListAsync)
}
