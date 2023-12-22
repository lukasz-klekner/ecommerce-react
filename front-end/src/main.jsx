import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "./styles/theme.css"
import "./styles/global.css"

import { MainPage } from './pages/MainPage/MainPage'
import { Favourites } from './pages/Favourites/Favourites'
import { Cart } from './pages/Cart/Cart'
import { ProductsList } from './pages/ProductsList/ProductsList'
import { ProductDetails } from './pages/ProductDetails/ProductDetails'
import { Layout } from './components/Layout/Layout'
import { mainPageLoader } from './api/mainPageLoader'
import { productsListLoader } from './api/productsListLoader'


const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/ulubione',
        element: <Favourites />
      },
      {
        path: '/koszyk',
        element: <Cart />
      },
      {
        path: '/:gender?',
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: '/:gender/:category',
        element: <ProductsList />,   
        loader: productsListLoader,   
      },
    ]
  },
  {
    path: '/szczegoly-produktu',
    element: <ProductDetails />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
