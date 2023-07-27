import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { TOKEN, TOKEN_CYBERSOFT, USER_LOGIN, getStoreJson, http, setStore, setStoreJson } from '../../Util/Config';
import { notification } from 'antd';
import { openNotification } from '../../Util/notification';

export interface UserModel {
  email: string;
  passWord: string;
  name: string;
  phoneNumber: string;
}

export type UserLoginModel = {
  id: number;
  email: string;
  avatar: string;
  phoneNumber: string;
  name: string;
  accessToken: string;
};
//register
export interface RegisterJiraModel {
  email: string,
  passWord: string,
  name: string,
  phoneNumber: string
}
//sign In
export interface UserJiraLoginModel {
  email: string,
  password: string
}


export interface UserViewModel{
  userId: number;
  email: string;
  avatar: string;
  phoneNumber: string;
  name: string;
};
// Kiểu dử liệu của initialState
export interface UserState {
  arrUser: UserLoginModel | undefined;
  ArrUserView: UserViewModel[]
}

// Dữ liệu mặc định của  reducer
const initialState: UserState = {
  // arrUser: getStoreJson(USER_LOGIN),
  arrUser: {
    id: -1,
    email: '',
    avatar: '',
    phoneNumber: '',
    name: '',
    accessToken: '',
  },
  ArrUserView: []
}

const UsersReducer = createSlice({
  name: 'UsersReducer',
  initialState,
  reducers: {logoutUser: (state) => {
    state.arrUser = {
      id: -1,
      email: '',
      avatar: '',
      phoneNumber: '',
      name: '',
      accessToken: '',
    }
  },},
  extraReducers: (builder) => {
    builder
      // signIn
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.arrUser = payload;
        setStoreJson(USER_LOGIN, state.arrUser)
        setStore(TOKEN, state?.arrUser?.accessToken)
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        openNotification('success','đăng ký','thành công')
      })
      .addCase(getUserView.fulfilled, (state, { payload }) => {
        state.ArrUserView = payload
      })
  },
});

export const { logoutUser } = UsersReducer.actions

export default UsersReducer.reducer


//------------------
export const signIn = createAsyncThunk(
  'users/signInAPI',
  // function tinhtong(a:number,b:number){
  //   return a+b
  // }
  async (signInFormValues: UserJiraLoginModel) => {
    try {
      let url = '/api/Users/signin';
      const response = await http.post(url, signInFormValues);
      console.log('respn', response)
      return response?.data?.content as UserLoginModel;
    } catch (err) {
      console.error(err);
    }
  }
);

export const register = createAsyncThunk(
  'users/registerAPI',
  // function tinhtong(a:number,b:number){
  //   return a+b
  // }
  async (registerFormValues: RegisterJiraModel) => {
    try {
      let url = '/api/Users/signup';
      const response = await http.post(url, registerFormValues);
      console.log(response)
      return response?.data?.content as UserLoginModel;
    } catch (err) {
      console.error(err);
    }
  }
);

export const getUserView = createAsyncThunk(
  'dashboard/getUserViewApi',
  // function tinhtong(a:number,b:number){
  //   return a+b
  // }
  async () => {
    try {
      let url = '/api/Users/getUser';
      const response = await http.get(url);
      return response?.data?.content;

    } catch (err) {
      console.error(err);
    }
  }
);
