import { createSlice } from '@reduxjs/toolkit'

export interface ProjectModel {
  members:      Member[];
  creator:      Creator;
  id:           number;
  projectName:  string;
  description:  string;
  categoryId:   number;
  categoryName: CategoryName;
  alias:        string;
  deleted:      boolean;
}

export enum CategoryName {
  DựÁnPhầnMềm = "Dự án phần mềm",
  DựÁnWeb = "Dự án web",
}

export interface Creator {
  id:   number;
  name: string;
}

export interface Member {
  userId: number;
  name:   string;
  avatar: string;
}

export interface ProductState {
  arrProject:ProjectModel[]
}
const initialState = {
  arrProject:[]
}

const homeReducer = createSlice({
  name: 'homeReducer',
  initialState,
  reducers: {}
});

export const {} = homeReducer.actions

export default homeReducer.reducer