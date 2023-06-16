import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductsPage, { loader as productsLoader } from './pages/Products'
import ProductPage, { loader as productLoader } from './pages/Product'
import Root from './pages/Root'
import ErrorPage from './pages/Error'
import HomePage, { loader as categoriesLoader } from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: categoriesLoader,
    children: [
      { index: true, element: <HomePage /> },
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
