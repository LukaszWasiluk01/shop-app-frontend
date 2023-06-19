import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import UserInfo, { type UserProps } from '../components/UserInfo'

const UserPage: React.FC = () => {
  const user = useLoaderData() as UserProps
  return <UserInfo email={user.email} username={user.username} date_joined={user.date_joined} last_login={user.last_login}/>
}

export default UserPage

export async function loader (): Promise<UserProps> {
  const { data } = await axios.get<UserProps>(
    'http://localhost:8000/api/users/me/',
    {
      headers: {
        Accept: 'application/json'
      }
    }
  )
  return data
}
