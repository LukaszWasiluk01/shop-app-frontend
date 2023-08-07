import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductsPage, { loader as productsLoader } from './pages/Products'
import ProductPage, { loader as productLoader } from './pages/Product'
import NewProductPage, { action as newProductAction } from './pages/NewProduct'
import Root from './pages/Root'
import ErrorPage from './pages/Error'
import HomePage, { loader as categoriesLoader } from './pages/Home'
import UserPage, { loader as userLoader } from './pages/User'
import UserRegisterPage, {
  action as userRegisterAction
} from './pages/Register'
import UserLoginPage, { action as userLoginAction } from './pages/Login'
import LogoutPage from './pages/Logout'
import LogoutSuccessPage from './pages/LogoutSuccess'
import UserChangePasswordPage, {
  action as UserChangePasswordAction
} from './pages/ChangePassword'

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
            path: 'add-product',
            element: <NewProductPage />,
            action: newProductAction
          },
          {
            path: ':id',
            element: <ProductPage />,
            loader: productLoader
          }
        ]
      },
      {
        path: 'user',
        children: [
          { index: true, element: <UserPage />, loader: userLoader },
          {
            path: 'register',
            element: <UserRegisterPage />,
            action: userRegisterAction
          },
          {
            path: 'login',
            element: <UserLoginPage />,
            action: userLoginAction
          },
          {
            path: 'logout',
            element: <LogoutPage />
          },
          {
            path: 'logout-success',
            element: <LogoutSuccessPage />
          },
          {
            path: 'change-password',
            element: <UserChangePasswordPage />,
            action: UserChangePasswordAction
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
