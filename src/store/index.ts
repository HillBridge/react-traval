import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'


console.log('counterReducer', counterReducer)

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
