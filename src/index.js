import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TeacherPage from './pages/TeacherPage';
import GroupPage from './pages/GroupPage';
import ErrorPage from './pages/ErrorPage';
import LidPage from './pages/LidPage';
import StudentPage from './pages/StudentPage';
import BudjetPage from './pages/BudjetPage';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import TeacherDynamik from './components/TeacherDynamik';
import Groups from './pages/Groups';
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/",
        element:<HomePage/>
      },
      
      {
        path:"/teachers",
        element:<TeacherPage/>
      },
      {
        path:"/teachersDynamik",
        element:<TeacherDynamik/>
      },
     
      {
        path:"/groups",
        element:<Groups/>
      },
      {
        path:"/groups/:groupID",
        element:<GroupPage/>
      },
      {
        path:"/budjet",
        element:<BudjetPage/>
      },
      {
        path:"/lids",
        element:<LidPage/>
      },
      {
        path:"/students",
        element:<StudentPage/>
      },
      {
        path:"/courses",
        element:<CoursePage/>
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={appRouter}/>
);


