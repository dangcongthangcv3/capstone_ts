import { configureStore } from '@reduxjs/toolkit'
import UsersReducer from './reducers/UsersReducer';
import DashBoardReducer from './reducers/DashBoardReducer';
import { useDispatch } from 'react-redux';
import editUserViewReducer from './reducers/editUserViewReducer';

export const store = configureStore({
  reducer: {
    UsersReducer: UsersReducer,
    DashBoardReducer: DashBoardReducer,
    editUserViewReducer:editUserViewReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

///
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;