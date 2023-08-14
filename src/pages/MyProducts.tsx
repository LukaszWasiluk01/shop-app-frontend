import React from 'react'
import axios from 'axios'
import {
  redirect,
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

const MyProductsPage: React.FC = () => {
  const data = useLoaderData() as ProductsListData
  const products: ProductsListItem[] = data.results

  return (
    <>
      <FilterForm />
      <ProductsList products={products} enableEdit={true} />
      <Pagination count={data.count} />
    </>
  )
}

export default MyProductsPage

export const loader: LoaderFunction = async ({
  request
}: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const params = url.searchParams
  try {
    const { data } = await axios.get<ProductsListData>(
      'http://localhost:8000/api/store/products/my-products/',
      {
        headers: {
          Accept: 'application/json'
        },
        withCredentials: true,
        params
      }
    )
    return data
  } catch (error: any) {
    if (error.response.status === 401) {
      return redirect('/user/login')
    }
    return error.response.data
  }
}
