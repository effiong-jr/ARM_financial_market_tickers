import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  data: {},
  error: null,
}

const getMarketStatsSlice = createSlice({
  name: 'getMarketStats',
  initialState,
  reducers: {
    get_market_stats_requested: (state) => {
      state.isLoading = true
      state.data = {}
      state.error = null
    },

    get_market_stats_successful: (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.error = null
    },

    get_market_stats_failed: (state, action) => {
      state.isLoading = false
      state.data = {}
      state.error = action.payload
    },
  },
})

export const {
  get_market_stats_requested,
  get_market_stats_successful,
  get_market_stats_failed,
} = getMarketStatsSlice.actions

export default getMarketStatsSlice.reducer
