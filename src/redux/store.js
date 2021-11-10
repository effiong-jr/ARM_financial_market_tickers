import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas/rootSaga'
import financeNewsReducer from './slices/financeNewsSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { financeNews: financeNewsReducer },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
