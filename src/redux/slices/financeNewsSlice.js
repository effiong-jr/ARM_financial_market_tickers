import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  data: [],
  error: null,
}

export const financeNewsSlice = createSlice({
  name: 'financeNews',
  initialState,
  reducers: {
    financeNewsRequested: (state) => {
      state.isLoading = true
    },

    financeNewsSuccess: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },

    financeNewsFailed: (state, action) => {
      state.isloading = false
      state.error = action.payload
    },
  },
})

export const { financeNewsRequested, financeNewsSuccess, financeNewsFailed } =
  financeNewsSlice.actions

export default financeNewsSlice.reducer
