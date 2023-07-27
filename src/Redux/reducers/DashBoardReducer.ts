import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../Util/Config';
import { error } from 'console';
import { openNotification } from '../../Util/notification';
export interface ProjectModel {
  members: Member[];
  creator: Creator;
  id: number;
  projectName: string;
  description: string;
  categoryId: number;
  categoryName: CategoryName;
  alias: string;
  deleted: boolean;
}


export enum CategoryName {
  DựÁnDiĐộng = "Dự án di động",
  DựÁnPhầnMềm = "Dự án phần mềm",
  DựÁnWeb = "Dự án web",
}

export interface Creator {
  id: number;
  name: string;
}

export interface Member {
  userId: number;
  name: string;
  avatar: string;
}


export interface categoryModel{
  id:string,
  projectCategoryName: string
}

export interface CreateProjectModel {
  projectName: string,
  description: string,
  categoryId: number,
  alias: string
}

export interface ProductState {
  arrProject: ProjectModel[],
  CategoryName:categoryModel[],
}

const initialState: ProductState = {
  arrProject: [],
  CategoryName:[],
}

const DashBoardReducer = createSlice({
  name: 'DashBoardReducer',
  initialState,
  reducers: {
    logoutProject: (state) => {
      state.arrProject = [];
      state.CategoryName = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // signIn
      .addCase(getAllProject.fulfilled, (state, { payload }) => {
        state.arrProject = payload;
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.CategoryName = payload;
      })
      // .addCase(deleteProject.fulfilled, (state, { payload }) => {
      //   const index = state.arrProject.findIndex((project) => project.id === payload);
      //   if (index !== -1) {
      //     state.arrProject.splice(index, 1);
      //   }
      // })
  },
});

export const { logoutProject  } = DashBoardReducer.actions

export default DashBoardReducer.reducer

/////////$RECYCLE.BIN

export const getAllProject = createAsyncThunk(
  'dashboard/getAllProjectApi',
  // function tinhtong(a:number,b:number){
  //   return a+b
  // }
  async () => {
    try {
      let url = '/api/Project/getAllProject';
      const response = await http.get(url);
      return response?.data?.content;

    } catch (err) {
      console.error(err);
    }
  }
);


export const getCategory = createAsyncThunk(
  'dashboard/getCategoryApi',
  // function tinhtong(a:number,b:number){
  //   return a+b
  // }
  async () => {
    try {
      let url = '/api/ProjectCategory';
      const response = await http.get(url);
      // console.log(response?.data?.content)
      return response?.data?.content;

    } catch (err) {
      console.error(err);
    }
  }
);

export const deleteProject = createAsyncThunk(
  'dashboard/deleteProjectAPI',
  async (projectId: number) => {
    try {
      let url = `/api/Project/deleteProject?projectId=${projectId}`;
      const response = await http.delete(url);
      if(!!response?.data?.content){
        openNotification('success',"Success",response?.data?.message)
      }
      return response?.data?.content;
      
    } catch (err) {
      console.log(err)
    }

  }
);

// CreateProject

export const createproject = createAsyncThunk(
  'users/registerAPI',
  // function tinhtong(a:number,b:number){
  //   return a+b
  // }
  async (FormValues: CreateProjectModel) => {
    try {
      let url = '/api/Project/createProjectAuthorize';
      const response = await http.post(url, FormValues);
      
      return response?.data?.content;
    } catch (err) {
      console.error(err);
    }
  }
);