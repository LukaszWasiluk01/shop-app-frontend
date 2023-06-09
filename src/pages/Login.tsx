import React from 'react'
import axios from 'axios'
import {
  redirect,
  type ActionFunction,
  type ActionFunctionArgs
} from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { type LoginResponseData } from '../interfaces/userInterfaces'

const UserLoginPage: React.FC = () => {
  return <LoginForm />
}

export default UserLoginPage

export const action: ActionFunction = async ({
  request
}: ActionFunctionArgs) => {
  const data = await request.formData()

  const username = data.get('username')
  const password = data.get('password')
  const url = 'http://localhost:8000/api/users/obtain-token/'
  try {
    const response = await axios.post(url, {
      username,
      password
    })

    if (response.status >= 200 && response.status < 300) {
      return redirect('/')
    }
  } catch (error: any) {
    const responseData = error.response.data as LoginResponseData
    return responseData
  }
}
