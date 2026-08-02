import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
/**import all components */
import Username from './conponents/Username';
import Password from './conponents/Password';
import Register from './conponents/Register';
import Profile from './conponents/Profile';
import Recovery from './conponents/Recovery';
import Reset from './conponents/Reset';
import PageNotFound from './conponents/PageNotFound';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root router */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: 
      <ProtectRoute>
        <Password />
      </ProtectRoute>
    ,
  },
  {
    path: "/profile",
    element: 
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
export default function App() {
  return( <main>
    <RouterProvider router = {router}></RouterProvider>
  </main>
  )
}


