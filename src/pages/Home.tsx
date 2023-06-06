import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import Welcome, { type Category } from '../components/Welcome'

const HomePage: React.FC = () => {
  const categories = useLoaderData() as Category[]
  return <Welcome categories={categories} />
}

export default HomePage

export async function loader (): Promise<Category[]> {
  const { data } = await axios.get<Category[]>(
    'http://localhost:8000/api/store/categories/',
    {
      headers: {
        Accept: 'application/json'
      }
    }
  )
  return data
}
