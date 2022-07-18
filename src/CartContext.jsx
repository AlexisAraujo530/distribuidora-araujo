import { useState, createContext } from 'react';

export const CartContext = createContext();


const CartProvider = (props) => {
    //console.log(props);
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item.id, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (id, cantidad) => {
        const newCart = cart.map((prod) =>
            prod.id === id
                ? { ...prod, cantidad: prod.cantidad + cantidad }
                : prod
        );

        setCart(newCart);
    };

    const deleteItem = (id) => {
        const itemsFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(itemsFiltrados);
    };

    const calcularTotal = () => {
        return cart.reduce(
            (acum, actual) => acum + actual.price * actual.cantidad,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, deleteItem, calcularTotal }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;







/*import React, {useState, useContext} from "react";





export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = (props) => {
    console.log(props);
    const [cart, setCart] = useState([]);
    


    const addProduct = (product, quantity) => {
        const productToAdd = {
            ...product,
            quantity
        }
        setCart([...cart, productToAdd]);
    }

   
    
   
    console.log('carrito: ',cart);

    const totalPrice = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }
    const totalProducts = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;   
    }
    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }    


    return (
        <CartContext.Provider value ={{
                clearCart,
                isInCart,
                removeProduct,
                addProduct,
                totalPrice,
                totalProducts,
                cart
            }} >{props.children}
        </CartContext.Provider>
    )
}


export default CartProvider;
/*
const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
        setCart(cart.map(product => {
            return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product;
        }));
    } else {
        setCart([...cart, {...item, quantity}]);
    }
}*/
