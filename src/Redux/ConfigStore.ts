import { configureStore } from '@reduxjs/toolkit'
import UsersReducer from './reducers/UsersReducer';
import DashBoardReducer from './reducers/DashBoardReducer';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    UsersReducer: UsersReducer,
    DashBoardReducer: DashBoardReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

///
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;