import { Product } from "@prisma/client";
import { createContext } from "react";

interface CartProduct extends Product {
  quantity: number
}

export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  toogleCart: () => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toogleCart: () => {},
})

export const CartProvider = () => {
  
}