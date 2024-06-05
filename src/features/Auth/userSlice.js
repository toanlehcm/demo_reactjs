import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";

export const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    // Call API to register.
    const data = await userApi.register(payload);

    // Save sata to local storage.
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

    // Return user data.
    return data.user;
  },
)

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    // Call API to login.
    const data = await userApi.login(payload);

    // Save sata to local storage.
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

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

    builder.addCase(login.fulfilled, (state, action) => {
      // Update state on store.
      state.current = action.payload;
    });
  },
})

const { reducer } = userSlice
export default reducer // default export.