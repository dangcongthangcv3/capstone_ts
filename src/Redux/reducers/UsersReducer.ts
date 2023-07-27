import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { TOKEN, TOKEN_CYBERSOFT, USER_LOGIN, getStoreJson, http, setStore, setStoreJson } from '../../Util/Config';
import { notification } from 'antd';

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

//Thông báo khi đăng ký thành công
const openNotification = () => {
  notification.open({
    type:'success',
    message: 'Đăng ký thành công',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

// Kiểu dử liệu của initialState
export interface UserState {
  arrUser: UserLoginModel | undefined;
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
        console.log(payload)
        state.arrUser = payload;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        alert('đăng ký thành công')
        openNotification()
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