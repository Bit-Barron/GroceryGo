import { proxy } from "valtio";
import { ShoppingCartProps } from "@/types/interface";
import { ProductsProps } from "@/types/interface";

export type CartStore = {
    addToCart: (product: ProductsProps) => void;
    removeFromCart: (product: ShoppingCartProps) => void;
    cartItems: ShoppingCartProps[];
    cartTotalQuantity: number;
    cartTotalPrice: number;
    saveCart: () => void;
    loadCart: () => void;
}

const saveCartToLocalStorage = () => {
    const cartData = JSON.stringify({
        cartItems: adminCartStore.cartItems,
        cartTotalQuantity: adminCartStore.cartTotalQuantity,
        cartTotalPrice: adminCartStore.cartTotalPrice,
    });
    localStorage.setItem('cart', cartData);
};

const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        const parsedCart = JSON.parse(cartData);
        adminCartStore.cartItems = parsedCart.cartItems;
        adminCartStore.cartTotalQuantity = parsedCart.cartTotalQuantity;
        adminCartStore.cartTotalPrice = parsedCart.cartTotalPrice;
    }
};

export const adminCartStore = proxy<CartStore>({
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0,
    addToCart: (product: ProductsProps) => {
        const existingProduct = adminCartStore.cartItems.find((item) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            adminCartStore.cartTotalQuantity += 1;
            adminCartStore.cartTotalPrice += +existingProduct.price;
        } else {
            adminCartStore.cartItems.push({
                ...product, quantity: 1,
                productId: 0,
                paymentMethod: "",
                tableNumber: ""
            } as ShoppingCartProps);
            adminCartStore.cartTotalQuantity += 1;
            adminCartStore.cartTotalPrice += +product.price;
        }
        saveCartToLocalStorage();
    },
    removeFromCart: (product: ShoppingCartProps) => {
        const existingProduct = adminCartStore.cartItems.find((item) => item.id === product.id);
        if (existingProduct) {
            if (existingProduct.quantity === 1) {
                adminCartStore.cartItems = adminCartStore.cartItems.filter((item) => item.id !== product.id);
            } else {
                existingProduct.quantity -= 1;
            }
            adminCartStore.cartTotalQuantity -= 1;
            adminCartStore.cartTotalPrice -= +existingProduct.price;
        }
        saveCartToLocalStorage();
    },

    saveCart: saveCartToLocalStorage,
    loadCart: loadCartFromLocalStorage,
});

// Lade den Warenkorb beim Initialisieren
adminCartStore.loadCart();
