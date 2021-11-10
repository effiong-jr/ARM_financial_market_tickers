import { all } from '@redux-saga/core/effects'
import { watchGetFinanceNews } from './getFinanceNews'
import { watchGetCountriesList } from './getCountriesList'
import { watchGetIndustriesList } from './getIndustriesList'
import { watchGetMarketStats } from './getMarketStats'

export default function* rootSaga() {
  yield all([
    watchGetFinanceNews(),
    watchGetCountriesList(),
    watchGetIndustriesList(),
    watchGetMarketStats(),
  ])
}
