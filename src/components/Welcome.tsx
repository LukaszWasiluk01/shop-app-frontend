import React from 'react'
import { Link } from 'react-router-dom'

import { type WelcomeProps } from '../interfaces/utilityInterfaces'

import styles from './Welcome.module.css'

const Welcome: React.FC<WelcomeProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.welcomeMessage}>Welcome to our store!</h1>
      <Link to="/products" className={styles.categoryItem}>
        Products
      </Link>
      <div className={styles.categoryList}>
        <h2 className={styles.categoryTitle}>Categories:</h2>
        <ul className={styles.categoryItems}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                to={`/products?category__name=${category.name}`}
                className={styles.categoryItem}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Welcome
