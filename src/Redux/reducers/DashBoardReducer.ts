import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../Util/Config';
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
export interface ProductState {
  arrProject: ProjectModel[],
  CategoryName:categoryModel[]
}
const initialState: ProductState = {
  arrProject: [],
  CategoryName:[]
}

const DashBoardReducer = createSlice({
  name: 'DashBoardReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // signIn
      .addCase(getAllProject.fulfilled, (state, { payload }) => {
        state.arrProject = payload;
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.CategoryName = payload;
      })
  },
});

export const { } = DashBoardReducer.actions

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
      console.log(response?.data?.content)
      return response?.data?.content;

    } catch (err) {
      console.error(err);
    }
  }
);

// export const deleteProject = createAsyncThunk(
//   'users/deleteProjectAPI',
//   // function tinhtong(a:number,b:number){
//   //   return a+b
//   // }
//   async (signInFormValues: UserJiraLoginModel) => {
//     try {
//       let url = '/api/Project/deleteProject';
//       const response = await http.post(url, signInFormValues);
//       console.log(response)
//       return response?.data?.content as UserLoginModel;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// );