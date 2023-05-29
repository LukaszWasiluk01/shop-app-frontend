import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductsPage, { loader as productsLoader } from './pages/Products'
import ProductPage, { loader as productLoader } from './pages/Product'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'products',
        children: [
          { index: true, element: <ProductsPage />, loader: productsLoader },
          {
            path: ':id',
            element: <ProductPage />,
            loader: productLoader
          }
        ]
      }
    ]
  }
])

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
