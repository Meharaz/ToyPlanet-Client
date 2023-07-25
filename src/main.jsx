import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home/Home.jsx';
import Main from './Main/Main.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp'
import AddToys from './Pages/AddToys/AddToys';
import AuthProvider from './Providers/AuthProvider';
import AllToys from './Pages/AllToys/AllToys';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ToyDetails from './Pages/AllToys/ToyDetails';
import MyToys from './Pages/MyToys/MyToys';
import Error from './Components/Error/Error';
import Blogs from './Pages/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/addToy',
        element: <AddToys />
      },
      {
        path: '/allToys',
        element: <AllToys />
      },
      {
        path: '/myToys',
        element: <MyToys/>
      },
      
      {
        path: '/allToys/:id',
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/singleToy/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);