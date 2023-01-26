export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
