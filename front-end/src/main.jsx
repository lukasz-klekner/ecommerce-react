import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "./styles/theme.css"
import "./styles/global.css"

import { MainPage } from './pages/MainPage/MainPage'
import { Favourites } from './pages/Favourites/Favourites'
import { Cart } from './pages/Cart/Cart'
import { ProductsList } from './pages/ProductsList/ProductsList'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/ulubione',
    element: <Favourites />
  },
  {
    path: '/koszyk',
    element: <Cart />
  },
  {
    path: '/lista-produktow',
    element: <ProductsList />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
