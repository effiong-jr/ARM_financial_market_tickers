import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  data: [],
  error: null,
}

const getCountriesListSlice = createSlice({
  name: 'getCountriesList',
  initialState,
  reducers: {
    get_countries_list_requested: (state) => {
      state.isLoading = true
      state.data = []
      state.error = null
    },

    get_countries_list_successful: (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.error = null
    },

    get_countries_list_failed: (state, action) => {
      state.isLoading = false
      state.data = []
      state.error = action.payload
    },
  },
})

export const {
  get_countries_list_requested,
  get_countries_list_successful,
  get_countries_list_failed,
} = getCountriesListSlice.actions

export default getCountriesListSlice.reducer
