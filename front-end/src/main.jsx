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
import { productLoader } from './api/productLoader'
import { addProductToFavouritesAction } from './api/addProductToFavouritesAction'
import { favouritesLoader } from './api/favouritesLoader'
import { deleteFavouriteAction } from './api/deleteFavouriteAction'


const router = createBrowserRouter([
  {
    path: '/add-to-favorites/:productId',
    action: addProductToFavouritesAction,
  },
  {
    path: ':productId',
    action: deleteFavouriteAction,
  },
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/ulubione',
        element: <Favourites />,
        loader: favouritesLoader,
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
        path: '/:gender/:category/:subcategory?',
        element: <ProductsList />,   
        loader: productsListLoader,   
      },
      {
        path: '/:gender/:category/:subcategory/:productId',
        element: <ProductDetails />,
        loader: productLoader,  
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
