import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Details';
import Statictics from './Components/Statictics';
import AppliedJobs from './Components/AppliedJobs';
import Blog from './Components/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Jobdetails.json')
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('/Jobdetails.json')
      },
      {
        path: '/statictics',
        element: <Statictics></Statictics>,
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/Jobdetails.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: () => fetch('/Jobdetails.json')
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
