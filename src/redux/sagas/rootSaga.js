import { all } from '@redux-saga/core/effects'
import { watchGetFinanceNews } from './getFinanceNews'

export default function* rootSaga() {
  yield all([watchGetFinanceNews()])
}
