import React from 'react'
import axios from 'axios'
import {
  redirect,
  useLoaderData,
  type LoaderFunction
} from 'react-router-dom'

import UserInfo from '../components/UserInfo'
import { type UserProps } from '../interfaces/userInterfaces'

const UserPage: React.FC = () => {
  const user = useLoaderData() as UserProps
  return (
    <UserInfo
      email={user.email}
      username={user.username}
      date_joined={user.date_joined}
      last_login={user.last_login}
    />
  )
}

export default UserPage

export const loader: LoaderFunction = async () => {
  try {
    const response = await axios.get<UserProps>(
      'http://localhost:8000/api/users/user/',
      {
        headers: {
          Accept: 'application/json'
        },
        withCredentials: true
      }
    )
    return response.data
  } catch (error: any) {
    if (error.response.status === 401) {
      return redirect('/user/login')
    }
    return error.response.data
  }
}
