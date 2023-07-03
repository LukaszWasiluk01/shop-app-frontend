import React from 'react'
import moment from 'moment'
import { Link, useLocation } from 'react-router-dom'
import styles from './UserInfo.module.css'
import { type UserProps } from '../interfaces/userInterfaces'

const UserInfo: React.FC<UserProps> = ({
  email,
  username,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  date_joined,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  last_login
}) => {
  const location = useLocation()
  const formatDate = (date: string): string =>
    moment(date).format('HH:mm DD.MM.YYYY')

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div>
          <Link
            to="/personal-info"
            className={
              location.pathname === '/personal-info' ? styles.disabledLink : ''
            }
          >
            Personal info
          </Link>
        </div>
        <div>
          <Link to="/change-data">Change data</Link>
        </div>
        <div>
          <Link to="/delete-account">Delete account</Link>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Username:</strong> {username}
        </div>
        <div>
          <strong>Date Joined:</strong> {formatDate(date_joined)}
        </div>
        <div>
          <strong>Last Login:</strong> {formatDate(last_login)}
        </div>
      </div>
    </div>
  )
}

export default UserInfo
