import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer';
import homeReducer from './reducers/homeReducer';

export const store = configureStore({
  reducer: {
    userReducer:userReducer,
    homeReducer:homeReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch