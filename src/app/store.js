import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice'
import userReducer from '../features/Auth/userSlice'

// rootReducer include all reducers are available in source.
const rootReducer = {
  count: counterReducer,
  user: userReducer,
}

// Create store.
const store = configureStore({
  reducer: rootReducer
})

export default store