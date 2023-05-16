import React from 'react'

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
  return (
      <>
        {products.map((product) =>
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.created}</p>
          <p>{product.province}</p>
          <br></br>
        </div>)}
      </>
  )
}

export default ProductsList
