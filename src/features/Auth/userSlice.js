import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const register = createAsyncThunk(
  'user/register',
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
    settings: {},
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      // Update state on store.
      state.current = action.payload;
    });
  },
})

const { reducer } = userSlice
export default reducer // default export.