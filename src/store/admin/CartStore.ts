import { proxy } from "valtio";
import { ShoppingCartProps } from "@/types/interface";


export type CartStore = {
    addToCart: (product: ShoppingCartProps) => void;
    removeFromCart: (product: ShoppingCartProps) => void;
    cartItems: ShoppingCartProps[];
    cartTotalQuantity: number;
    cartTotalPrice: number;
}

const adminStoreCart = proxy<CartStore>({
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0,
    addToCart: (product: ShoppingCartProps) => {
        const existingProduct = adminStoreCart.cartItems.find((item) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            adminStoreCart.cartTotalQuantity += 1;
            adminStoreCart.cartTotalPrice += +existingProduct.price;
        } else {
            adminStoreCart.cartItems.push({ ...product, quantity: 1 });
            adminStoreCart.cartTotalQuantity += 1;
            adminStoreCart.cartTotalPrice += +product.price;
        }
    },
    removeFromCart: (product: ShoppingCartProps) => {
        const existingProduct = adminStoreCart.cartItems.find((item) => item.id === product.id);
        if (existingProduct) {
            if (existingProduct.quantity === 1) {
                adminStoreCart.cartItems = adminStoreCart.cartItems.filter((item) => item.id !== product.id);
            } else {
                existingProduct.quantity -= 1;
            }
            adminStoreCart.cartTotalQuantity -= 1;
            adminStoreCart.cartTotalPrice -= +existingProduct.price;
        }
    },
});
