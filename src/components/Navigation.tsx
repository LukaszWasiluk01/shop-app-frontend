import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Navigation.module.css'

const Navigation: React.FC = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const [searchQuery, setSearchQuery] = useState('')

  const path = '/products'
  const combinedSearchParams = new URLSearchParams(queryParams.toString())
  combinedSearchParams.set('search', searchQuery)

  const checkUserLoggedIn = async (): Promise<void> => {
    await axios.get('http://localhost:8000/api/users/user/', { withCredentials: true })
  }

  useEffect(() => {
    checkUserLoggedIn()
      .then(() => {
        setIsUserLoggedIn(true)
      })
      .catch((error: any) => {
        setIsUserLoggedIn(false)
        void error
      })
  }, [])

  const toggleDropdown = (): void => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src="/logo192.png" alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          value={searchQuery}
          className={styles.searchInput}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
          placeholder="Search..."
          name="search"
        />
        <Link to={{ pathname: path, search: combinedSearchParams.toString() }}>
          <button className={styles.searchButton} disabled={searchQuery === ''}>
            Search
          </button>
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
                onClick={toggleDropdown}
              >
                User Account
              </button>
              {isDropdownOpen && (
                <div className={styles.accountDropdown}>
                  <Link to="#">Purchase History</Link>
                  <Link to="/user">User Data</Link>
                  <Link to="#">Address Data</Link>
                  <Link to="#">Logout</Link>
                </div>
              )}
            </>
              )
            : (
            <>
              <Link to="/user/register" className={styles.authLink}>
                Register
              </Link>
              <Link to="/user/login" className={styles.authLink}>
                Login
              </Link>
            </>
              )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
