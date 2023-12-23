export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
  };
};

export interface Product {
  id: string;
  slug: string;
  subcategory: Subcategory;
  category: Category;
  name: string;
  description: string;
  actualPrice: number;
  discountPrice: number;
  isFeatured: boolean;
  size: Size;
  quantity: Quantity;
  images: Image[];
  timeFrame: number;
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
  slug: string;
  subcategory: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  categoryId: string;
  products: Product[];
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Quantity {
  id: string;
  name: string;
  value: string;
}

export interface Orders {
  id: string;
  storeId: string;
  isPaid: boolean;
  phone: string;
  address: string;

  orderItems: OrderItems[];
}

export interface OrderItems {
  id: string;
  orderId: string;
  productId: string;
  product: Product;
}
