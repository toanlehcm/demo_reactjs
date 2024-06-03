import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice'

// rootReducer include all reducers are available in source.
const rootReducer = {
  count: counterReducer
}

// Create store.
const store = configureStore({
  reducer: rootReducer
})

export default store