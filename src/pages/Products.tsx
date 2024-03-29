import React from 'react'
import axios from 'axios'
import {
  useLoaderData,
  type LoaderFunction,
  type LoaderFunctionArgs
} from 'react-router-dom'

import ProductsList from '../components/ProductsList'
import FilterForm from '../components/Filter'
import Pagination from '../components/Pagination'
import {
  type ProductsListData,
  type ProductsListItem
} from '../interfaces/productsInterfaces'

const ProductsPage: React.FC = () => {
  const data = useLoaderData() as ProductsListData
  const products: ProductsListItem[] = data.results

  return (
    <>
      <FilterForm />
      <ProductsList products={products} enableEdit={false} />
      <Pagination count={data.count} />
    </>
  )
}

export default ProductsPage

export const loader: LoaderFunction = async ({
  request
}: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const params = url.searchParams
  const { data } = await axios.get<ProductsListData>(
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
