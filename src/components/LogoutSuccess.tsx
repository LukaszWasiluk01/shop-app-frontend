import React from 'react'
import { Link } from 'react-router-dom'

import styles from './LogoutSuccess.module.css'

const LogoutSuccess: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>Logout successful!</div>
      <Link to="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  )
}

export default LogoutSuccess
