import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SigninPage from './auth/sign-in/index.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>
  },
  {
    path: '/auth/sign-in',
    element: <SigninPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
