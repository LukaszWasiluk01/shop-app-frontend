import React from 'react'
import axios from 'axios'

import {
  useLoaderData,
  type LoaderFunction,
  type LoaderFunctionArgs
} from 'react-router-dom'
import ProductsList, { type Product } from '../components/ProductsList'
import FilterForm from '../components/Filter'
import Pagination from '../components/Pagination'

interface Data {
  count: number
  next: string | null
  previous: string | null
  results: Product[]
}

const ProductsPage: React.FC = () => {
  const data = useLoaderData() as Data
  const products: Product[] = data.results

  return (
    <>
      <FilterForm />
      <ProductsList products={products} />
      <Pagination count={data.count}/>
    </>
  )
}

export default ProductsPage

export const loader: LoaderFunction = async ({
  request
}: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const params = url.searchParams
  const { data } = await axios.get<Data>(
    'http://localhost:8000/api/store/products/',
    {
      headers: {
        Accept: 'application/json'
      },
      params
    }
  )
  return data
}
