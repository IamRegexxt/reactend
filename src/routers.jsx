

import {
    createBrowserRouter,
    RouterProvider
  
} from 'react-router-dom';
import axios from 'axios';
import Login from './components/login';
import Register from './components/register';
  //import Dashboard from './components/dashboard';
  
const routers = createBrowserRouter([


  
  
    
  {

      path: '/login',
      element: <Login/>
  
    },

    {

      path: '/register',
      element: <Register/>

    },
  ])
export default routers;