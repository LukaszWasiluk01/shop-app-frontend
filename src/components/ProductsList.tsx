import React from 'react'
import moment from 'moment'

export interface Product {
  id: number
  name: string
  price: number
  created: string
  province: string
}

interface ProductsListProps {
  products: Product[]
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const formatDate = (date: string): string => moment(date).format('HH:mm DD.MM.YYYY')
  return (
      <>
        {products.map((product) =>
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{formatDate(product.created)}</p>
          <p>{product.province}</p>
          <br></br>
        </div>)}
      </>
  )
}

export default ProductsList
