import React from 'react'
import moment from 'moment'
import styles from './ProductsList.module.css'

export interface Product {
  id: number
  name: string
  price: number
  created: string
  province: string
  image: string
}

interface ProductsListProps {
  products: Product[]
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const formatDate = (date: string): string =>
    moment(date).format('HH:mm DD.MM.YYYY')

  return (
    <>
      {products.map((product) => (
        <div className={styles.productItem} key={product.id}>
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
        </div>
      ))}
    </>
  )
}

export default ProductsList
