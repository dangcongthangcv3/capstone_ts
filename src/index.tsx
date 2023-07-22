import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalCss from './Component/GlobalCss/GlobalCss';
import LogIn from './pages/Login/LogIn';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import { Provider } from 'react-redux';
import { store } from './Redux/ConfigStore';
import Home from './pages/Home/Home';
import UserTemplate from './Templates/UserTemplate/UserTemplate';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import {createBrowserHistory} from 'history'


export const history:any = createBrowserHistory();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GlobalCss>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
        {/* <Route path='' element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>
            <Route path='home' element={<Home />}></Route>
          </Route> */}
          <Route path='' element={<UserTemplate />}>
            <Route index element={<LogIn />}></Route>
            <Route path='login' element={<LogIn />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>

          
        </Routes>

      </HistoryRouter>
    </Provider>
  </GlobalCss>
);