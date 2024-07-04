import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './Root/Root';
import App from './App';
import Form from './Form/Form';
import UserDetails from './UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/form',
        element:<Form/>
      },
      {
        path:'/userdetail',
        element:<UserDetails/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='min-h-screen bg-white'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
