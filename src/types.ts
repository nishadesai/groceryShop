export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface BasketItem extends Product {
  quantity: number;
}