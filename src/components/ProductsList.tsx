import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { type ProductsListProps } from '../interfaces/productsInterfaces'

import styles from './ProductsList.module.css'

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  enableEdit
}) => {
  const formatDate = (date: string): string =>
    moment(date).format('HH:mm DD.MM.YYYY')

  return (
    <>
      {products.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className={styles.productLink}
        >
          <div className={styles.productItem}>
            <div className={styles.productImage}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product.name}</p>
              <p className={styles.productPrice}>Price: {product.price}</p>
              <p className={styles.productCreated}>
                Created: {formatDate(product.created)}
              </p>
              <p className={styles.productProvince}>
                Province: {product.province}
              </p>
            </div>
            {enableEdit && (
              <Link
                to={`/products/${product.id}/edit`}
                className={styles.editButton}
              >
                Edit
              </Link>
            )}
          </div>
        </Link>
      ))}
    </>
  )
}

export default ProductsList
