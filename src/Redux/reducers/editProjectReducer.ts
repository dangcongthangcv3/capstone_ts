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

export interface EditProjectModel {
  id: number
  projectName: string,
  creator:number,
  description: string,
  categoryId: number
}

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
const editProjectReducer = createSlice({
  name: 'editProjectReducer',
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

export const { closeOpenEditDrawerAction } = editProjectReducer.actions

export default editProjectReducer.reducer

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
  async (FormValues: EditProjectModel) => {
    try {
      let url = `api/Project/updateProject?projectId=${FormValues.id}`;
      const response = await http.put(url, FormValues);
      console.log(response?.data?.content)
      console.log(response)
      openNotification('success','cập nhật thành công')
      return response?.data?.content;
    } catch (err) {
      console.error(err);
    }
  }
);