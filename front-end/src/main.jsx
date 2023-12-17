import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "./styles/theme.css"
import "./styles/global.css"

import { MainPage } from './pages/MainPage/MainPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
