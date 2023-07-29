import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalCss from './Component/GlobalCss/GlobalCss';
import LogIn from './pages/Login/LogIn';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import Register from './pages/Register/Register';
import { Provider } from 'react-redux';
import { store } from './Redux/ConfigStore';
import Home from './pages/Home/Home';
import UserTemplate from './Templates/UserTemplate/UserTemplate';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import { createBrowserHistory } from 'history'
import Project from './pages/Project/Project';
import CreateProject from './pages/CreateProject/CreateProject';
import Profile from './pages/Profile/Profile';
import UserView from './pages/UserView/UserView';
import EditDrawer from './Component/Drawer/EditDrawer';
import EditProject from './pages/EditProject/EditProject';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';


export const history: any = createBrowserHistory();

// const currentURL = window.location.href;
// console.log('Current URL:', currentURL);
// if(currentURL =)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GlobalCss>
    <Provider store={store}>
      <EditDrawer />
      <HistoryRouter history={history}>
        <Routes>

          <Route path='' element={<UserTemplate />}>
            <Route index element={<LogIn />}></Route>
            <Route path='login' element={<LogIn />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>
          <Route path='admin' element={<HomeTemplate />}>
            {/* <Route index element={<Home />}></Route> */}
            <Route path='project' element={<Project />}></Route>
            
            <Route path='projectdetail/:id' element={<ProjectDetail />} ></Route>
            <Route path='createproject' element={<CreateProject />}></Route>
            <Route path='userview' element={<UserView />}></Route>
            <Route path='profile' element={<Profile />}></Route>

            <Route path='editproject/:id' element={<EditProject />}></Route>
          </Route>


        </Routes>

      </HistoryRouter>
    </Provider>
  </GlobalCss >
);