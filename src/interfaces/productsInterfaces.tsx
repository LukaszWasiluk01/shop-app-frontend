export interface ProductDetailProps {
  product: ProductDetail
}

export interface ProductDetail {
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

export interface Author {
  id: number
  username: string
  date_joined: string
  last_login: string
}

export interface ProductsListProps {
  enableEdit: boolean
  products: ProductsListItem[]
}

export interface ProductsListData {
  count: number
  next: string | null
  previous: string | null
  results: ProductsListItem[]
}

export interface ProductsListItem {
  id: number
  name: string
  price: number
  created: string
  province: string
  image: string
}

export interface NewProductResponseData {
  id: number
  author: Author
  name: string
  price: number
  description: string
  created: string
  province: string
  phone_number: string
  image: File
  category: string
}

export interface NewProductErrorResponseData {
  detail?: string
  name?: string[]
  price?: string[]
  description?: string[]
  created?: string[]
  province?: string[]
  phone_number?: string[]
  image?: string[]
  category?: string[]
}
