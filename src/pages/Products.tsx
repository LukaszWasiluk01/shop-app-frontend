import React from 'react'
import axios from 'axios'

import { useLoaderData } from 'react-router-dom'
import ProductsList, { type Product } from '../components/ProductsList'

interface Data {
  count: number
  next: string | null
  previous: string | null
  results: Product[]
}

const ProductsPage: React.FC = () => {
  const data = useLoaderData() as Data
  const products: Product[] = data.results

  return <ProductsList products={products} />
}

export default ProductsPage

export async function loader (): Promise<Data> {
  const { data } = await axios.get<Data>(
    'http://localhost:8000/api/store/products/',
    {
      headers: {
        Accept: 'application/json'
      }
    }
  )
  return data
}
