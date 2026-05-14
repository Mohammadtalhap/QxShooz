import { useState, useEffect } from "react";

function useCart() {

    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (productId) => {
        const existingItem = cartItems.find((item) => item.id === productId);

        if (existingItem) {
            const updatedCart = cartItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([
                ...cartItems,
                {
                    id: productId,
                    quantity: 1,
                },
            ]);
        }
    };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
        setCartItems(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems
            .map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });

        setCartItems(updatedCart);
    };

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    return { cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart };
}

export default useCart;