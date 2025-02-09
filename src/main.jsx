// import { StrictMode } from 'react'
import React, { StrictMode } from 'react'
 import { createRoot, ReactDOM } from 'react-dom/client'
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 
 
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Users from './components/Users.jsx'
import Error from './components/Error.jsx'
// import Homepage from './components/Homepage.jsx'
import NotFound from './components/NotFound.jsx'
import UserDetails, { UserDetailLoader} from './components/UserDetails.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/', element: <App />,
      children: [
        {
          path: '/', element: <Home />
        },
        {
            path: '/About', element: <About />
        },
        {
            path: '/Users', element: <Users />
        },
        {
          path:  '/Users/:id', element : <UserDetails /> ,
          loader: UserDetailLoader
       },
      ]
    },
    {
       path: '/error' ,element: <Error/>
    },
    {
      path: '*' ,element: <NotFound/>
   }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} ></RouterProvider>
//   </React.StrictMode>
// )
