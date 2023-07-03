import React from 'react'
import axios from 'axios'
import {
  redirect,
  type ActionFunction,
  type ActionFunctionArgs
} from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'

interface RegisterResponseData {
  email?: string[]
  username?: string[]
  password?: string[]
  password2?: string[]
}

const UserRegisterPage: React.FC = () => {
  return <RegisterForm />
}

export default UserRegisterPage

export const action: ActionFunction = async ({
  request
}: ActionFunctionArgs) => {
  const data = await request.formData()

  const username = data.get('username')
  const email = data.get('email')
  const password1 = data.get('password1')
  const passwordLength = password1?.toString().length
  const password2 = data.get('password2')

  const customResponse: RegisterResponseData = {}
  if (passwordLength !== undefined && passwordLength < 5) {
    customResponse.password = [
      'The password must contain at least 5 characters'
    ]
  }
  if (password1 !== password2) {
    customResponse.password2 = ['Passwords do not match']
  }
  if (Object.keys(customResponse).length !== 0) {
    return customResponse
  }

  const url = 'http://localhost:8000/api/users/register/'
  try {
    const response = await axios.post(url, {
      username,
      email,
      password: password1
    })

    if (response.status >= 200 && response.status < 300) {
      return redirect('/')
    }
  } catch (error: any) {
    const responseData = error.response.data as RegisterResponseData
    return responseData
  }
}
