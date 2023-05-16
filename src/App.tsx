import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductsPage, { loader as productsLoader } from './pages/Products'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
    loader: productsLoader
  }
])

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
