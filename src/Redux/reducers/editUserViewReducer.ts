import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../Util/Config';
import { openNotification } from '../../Util/notification';

export interface ProductDetailModel {
  lstTask: LstTask[];
  members: any[];
  creator: Creator;
  id: number;
  projectName: string;
  description: string;
  projectCategory: Creator;
  alias: string;
}

export interface Creator {
  id: number;
  name: string;
}

export interface LstTask {
  lstTaskDeTail: any[];
  statusId: string;
  statusName: string;
  alias: string;
}

export interface editUserViewModel {
  id: number,
  projectName: string,
  creator:number,
  description: string,
  categoryId: number
}

// export interface editUserViewModel {
//   userId: '',
//   name: '',
//   avatar: '',
//   email: '',
//   phoneNumber: ''
// }

export interface EditProjectState {
  visibleDrawer: boolean;
  productDetail: ProductDetailModel;
}

const initialState: EditProjectState = {
  visibleDrawer: false,
  productDetail: {
    lstTask: [],
    members: [],
    creator: { id: -1, name: '' },
    id: 1,
    projectName: '',
    description: '',
    projectCategory: { id: -1, name: '' },
    alias: '',
  },
};
const editUserViewReducer = createSlice({
  name: 'editUserViewReducer',
  initialState,
  reducers: {
    closeOpenEditDrawerAction: (state, action) => {
      state.visibleDrawer = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // signIn
      .addCase(getProjectDetail.fulfilled, (state, { payload }) => {
        state.productDetail = payload;
      })
  },
});

export const { closeOpenEditDrawerAction } = editUserViewReducer.actions

export default editUserViewReducer.reducer

export const getProjectDetail = createAsyncThunk(
  'dashboard/getProjectDetailApi',
  async (id: number) => {
    try {
      let url = `api/Project/getProjectDetail?id=${id}`;
      const response = await http.get(url);
      return response?.data?.content;

    } catch (err) {
      console.error(err);
    }
  }
);

export const updateproject = createAsyncThunk(
  'users/updateprojectAPI',
  // function tinhtong(a:number,b:number){
  //   return a+b
  // }
  async (FormValues: editUserViewModel) => {
    try {
      let url = `api/Project/updateProject?projectId=${FormValues.id}`;
      const response = await http.put(url, FormValues);
      openNotification('success','cập nhật thành công')
      return response?.data?.content;
    } catch (err) {
      console.error(err);
    }
  }
);


export const getUserDetailId = createAsyncThunk(
  'dashboard/getUserDetailIdApi',
  // function tinhtong(a:number,b:number){
  //   return a+b
  // }
  async (id:number) => {
    try {
      let url = `/api/Users/getUser?keyword=${id}`;
      const response = await http.get(url);
      console.log('getMe',response?.data?.content)
      // return response?.data?.content;
      return 0;

    } catch (err) {
      console.error(err);
    }
  }
);
