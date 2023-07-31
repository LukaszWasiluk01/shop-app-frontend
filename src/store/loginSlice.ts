import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface LoginState {
  isLoggedIn: boolean
  isLoading: boolean
  error: string | null
}

const initialState: LoginState = {
  isLoggedIn: false,
  isLoading: false,
  error: null
}

export const fetchUserStatus = createAsyncThunk(
  'login/fetchUserStatus',
  async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/users/user/',
        { withCredentials: true }
      )
      return response.data
    } catch (error) {
      throw new Error('User is not logged in.')
    }
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserStatus.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = true
        state.error = null
      })
      .addCase(fetchUserStatus.rejected, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = false
        state.error = action.error.message ?? 'Unknown error occurred'
      })
  }
})

export default loginSlice.reducer
