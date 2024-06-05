import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "api/userApi";

const register = createAsyncThunk(
  'users/register',
  async (payload) => {
    // Call API to register.
    const data = await userApi.register(payload);

    // Save sata to local storage.
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user))

    // Return user data.
    return data.user;
  },
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducer: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    }
  }
})

const { reducer } = userSlice
export default reducer // default export.