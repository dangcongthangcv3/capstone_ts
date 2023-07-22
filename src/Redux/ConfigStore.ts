import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/userReducer';
import homeReducer from './reducers/homeReducer';

export const store = configureStore({
  reducer: {
    UserReducer:UserReducer,
    homeReducer:homeReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch