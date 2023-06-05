import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation: React.FC = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  const toggleAccountDropdown = (): void => {
    setIsUserLoggedIn((prevState) => !prevState)
  }

  const handleLogin = (): void => {
    setIsUserLoggedIn(true)
  }

  const handleLogout = (): void => {
    setIsUserLoggedIn(false)
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src="/logo192.png" alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.menuItems}>
        <div className={styles.cart}>
          <p>Cart</p>
        </div>
        <div className={styles.account}>
          {isUserLoggedIn
            ? (
            <>
              <button
                className={styles.accountButton}
                onClick={toggleAccountDropdown}
              >
                User Account
              </button>
              {isUserLoggedIn && (
                <div className={styles.accountDropdown}>
                  <Link to="#">Purchase History</Link>
                  <Link to="#">User Data</Link>
                  <Link to="#">Address Data</Link>
                  <button onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </>
              )
            : (
            <button className={styles.loginButton} onClick={handleLogin}>
              Login
            </button>
              )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
