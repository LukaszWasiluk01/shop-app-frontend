import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import store from '../store/store'
import { fetchUserStatus } from '../store/loginSlice'

const LogoutPage: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const logoutUser = async (): Promise<void> => {
      const url = 'http://localhost:8000/api/users/logout/'
      try {
        const response = await axios.post(url, null, { withCredentials: true })
        if (response.status >= 200 && response.status < 300) {
          await store.dispatch(fetchUserStatus())
          navigate('/user/logout-success')
        }
      } catch (error) {
        console.error('Logout error:', error)
      }
    }

    logoutUser().catch(console.error)
  }, [])

  return <div>Logging out...</div>
}

export default LogoutPage
