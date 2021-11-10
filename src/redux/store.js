import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas/rootSaga'
import financeNewsReducer from './slices/financeNewsSlice'
import getMarketStatsReducer from './slices/getMarketStatsSlice'
import getCountriesListReducer from './slices/getCountriesListSlice'
import getIndustriesListReducer from './slices/getIndustriesListSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    financeNews: financeNewsReducer,
    getMarketStats: getMarketStatsReducer,
    getCountriesList: getCountriesListReducer,
    getIndustriesList: getIndustriesListReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
