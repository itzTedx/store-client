export interface Product {
  id: string
  slug: string
  subcategory: Subcategory
  category: Category
  name: string
  description: string
  price: string
  isFeatured: boolean
  size: Size
  quantity: string
  color: Color
  images: Image[]
}

export interface Image {
  id: string
  url: string
}

export interface Billboard {
  id: string
  label: string
  imageUrl: string
  description: string
}

export interface Category {
  id: string
  name: string
  billboard: Billboard
  slug: string
  subcategory: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  description: string
  slug: string
  products: Product[]
}

export interface Size {
  id: string
  name: string
  value: string
}

export interface Color {
  id: string
  name: string
  value: string
}
