import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  data: [],
  error: null,
}

const getIndustriesListSlice = createSlice({
  name: 'getIndustriesList',
  initialState,
  reducers: {
    get_industries_list_requested: (state) => {
      state.isLoading = true
      state.data = []
      state.error = null
    },

    get_industries_list_successful: (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.error = null
    },

    get_industries_list_failed: (state, action) => {
      state.isLoading = false
      state.data = []
      state.error = action.payload
    },
  },
})

export const {
  get_industries_list_requested,
  get_industries_list_successful,
  get_industries_list_failed,
} = getIndustriesListSlice.actions

export default getIndustriesListSlice.reducer
