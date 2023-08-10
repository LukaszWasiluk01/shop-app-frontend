import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  useNavigate,
  useRouteLoaderData,
  redirect,
  type ActionFunction,
  type ActionFunctionArgs
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import { type RootState } from '../store/store'
import ProductForm from '../components/ProductForm'
import {
  type NewProductResponseData,
  type ProductDetail as ProductDetailInterface
} from '../interfaces/productsInterfaces'
import { type Category } from '../interfaces/utilityInterfaces'

const EditProductPage: React.FC = () => {
  const product = useRouteLoaderData(
    'product-detail'
  ) as ProductDetailInterface
  const categories = (useRouteLoaderData('root') as Category[]) ?? []
  const navigate = useNavigate()
  const { isLoggedIn, isLoading } = useSelector(
    (state: RootState) => state.login
  )

  const [isDataLoaded, setIsDataLoaded] = useState(false)

  useEffect(() => {
    if (!isLoading && !isLoggedIn && isDataLoaded) {
      console.log('User is not logged in. Redirecting to login page.')
      navigate('/user/login')
    }
  }, [isLoggedIn, isLoading, isDataLoaded])

  useEffect(() => {
    setIsDataLoaded(true)
  }, [])

  if (!isLoggedIn && !isDataLoaded) {
    return <p>Loading...</p>
  }

  return <ProductForm categories={categories} product={product} />
}

export default EditProductPage

export const action: ActionFunction = async ({
  request,
  params
}: ActionFunctionArgs) => {
  const productId = params.id ?? ''
  const formData = await request.formData()
  const productData = {
    name: formData.get('name'),
    price: formData.get('price'),
    description: formData.get('description'),
    province: formData.get('province'),
    phone_number: formData.get('phone_number'),
    category: formData.get('category')
  }
  const image = formData.get('image')

  try {
    const createProductUrl = `http://localhost:8000/api/store/products/${productId}/`
    const response = await axios.put<NewProductResponseData>(
      createProductUrl,
      productData,
      { withCredentials: true }
    )

    if (response.data.id !== null && image != null) {
      try {
        const uploadImageUrl = `http://localhost:8000/api/store/products/${productId}/upload-image/`

        const uploadImageResponse = await axios.put(
          uploadImageUrl,
          { image },
          {
            withCredentials: true,
            headers: { 'Content-Type': 'multipart/form-data' }
          }
        )
        if (
          uploadImageResponse.status >= 200 &&
          uploadImageResponse.status < 300
        ) {
          return redirect(`/products/${productId}`)
        }
      } catch (error: any) {
        console.log(error.response.data)
        const responseData = error.response.data
        return responseData
      }
    }
  } catch (error: any) {
    console.log(error.response.data)
    const responseData = error.response.data
    return responseData
  }
}
