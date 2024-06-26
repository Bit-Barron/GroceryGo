import { ShoppingCart } from "@/types/interface";
import { ProductsProps } from "@/types/interface";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


export function shoppingCart(product: ProductsProps, cart: ShoppingCart) {
  console.log(product)
}