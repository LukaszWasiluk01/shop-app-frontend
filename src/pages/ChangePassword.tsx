import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  useNavigate,
  redirect,
  type ActionFunction,
  type ActionFunctionArgs
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import { type RootState } from '../store/store'
import PasswordChangeForm from '../components/PasswordChangeForm'
import { type PasswordChangeResponseData } from '../interfaces/userInterfaces'

const UserChangePasswordPage: React.FC = () => {
  const navigate = useNavigate()
  const { isLoggedIn, isLoading } = useSelector(
    (state: RootState) => state.login
  )

  const [isDataLoaded, setIsDataLoaded] = useState(false)

  useEffect(() => {
    if (!isLoading && !isLoggedIn && isDataLoaded) {
      console.log('User is not logged in. Redirecting to login page.')
      navigate('/user/login')
    }
  }, [isLoggedIn, isLoading, isDataLoaded])

  useEffect(() => {
    setIsDataLoaded(true)
  }, [])

  if (!isLoggedIn && !isDataLoaded) {
    return <p>Loading...</p>
  }

  return <PasswordChangeForm />
}

export default UserChangePasswordPage

export const action: ActionFunction = async ({
  request
}: ActionFunctionArgs) => {
  const data = await request.formData()

  const password1 = data.get('password1')
  const password2 = data.get('password2')
  const url = 'http://localhost:8000/api/users/password/change/'
  try {
    const response = await axios.post(
      url,
      {
        new_password1: password1,
        new_password2: password2
      },
      { withCredentials: true }
    )
    if (response.status >= 200 && response.status < 300) {
      return redirect('/')
    }
  } catch (error: any) {
    const responseData = error.response.data as PasswordChangeResponseData
    return responseData
  }
}
