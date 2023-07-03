import React from 'react'
import moment from 'moment'
import styles from './Product.module.css'
import { type ProductDetailProps } from '../interfaces/productsInterfaces'

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const formatDate = (date: string): string =>
    moment(date).format('HH:mm DD.MM.YYYY')

  return (
    <div className={styles.container}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>Price: ${product.price}</p>
        <p className={styles.productCreated}>
          Created: {formatDate(product.created)}
        </p>
        <p className={styles.productProvince}>Province: {product.province}</p>
      </div>
      <div className={styles.authorInfo}>
        <p className={styles.authorUsername}>
          Author: {product.author.username}
        </p>
        <p className={styles.authorDateJoined}>
          Date Joined: {formatDate(product.author.date_joined)}
        </p>
        <p className={styles.authorLastLogin}>
          Last Login: {formatDate(product.author.last_login)}
        </p>
      </div>
    </div>
  )
}

export default ProductDetail
