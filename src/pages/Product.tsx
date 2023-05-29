import React from 'react'
import axios from 'axios'
import { useLoaderData, type LoaderFunction, type LoaderFunctionArgs } from 'react-router-dom'
import ProductDetail, { type Product } from '../components/ProductDetail'

const ProductPage: React.FC = () => {
  const product = useLoaderData() as Product

  return <ProductDetail product={product} />
}

export default ProductPage

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id ?? ''
  const url = `http://localhost:8000/api/store/products/${id}`
  const { data } = await axios.get<Product>(
    url,
    {
      headers: {
        Accept: 'application/json'
      }
    }
  )
  return data
}
