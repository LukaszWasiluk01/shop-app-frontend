import { type ProductDetail } from './productsInterfaces'

export interface ProductFormProps {
  categories: Category[]
  product?: ProductDetail
}

export interface WelcomeProps {
  categories: Category[]
}

export interface Category {
  name: string
}
export interface PaginationProps {
  count: number
}
