import React from 'react'
import moment from 'moment'

interface Author {
  id: number
  username: string
  date_joined: string
  last_login: string
}

export interface Product {
  id: number
  author: Author
  name: string
  price: number
  description: string
  created: string
  province: string
  phone_number: string
  image: string
  category: string
}

interface ProductDetailProps {
  product: Product
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const formatDate = (date: string): string =>
    moment(date).format('HH:mm DD.MM.YYYY')
  return (
    <>
    <div>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{formatDate(product.created)}</p>
      <p>{product.province}</p>
      <br></br>
    </div>
    <div>
        <p>{product.author.username}</p>
        <p>{formatDate(product.author.date_joined)}</p>
        <p>{formatDate(product.author.last_login)}</p>
    </div>
    </>
  )
}

export default ProductDetail
