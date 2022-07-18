import React from 'react';
import { useContext } from 'react';
import { CartContext } from "../CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, deleteItem, calcularTotal } = useContext(CartContext);
     //const total = calcularTotal()
     //console.log(total);
     //console.log(cart);

    if (cart.length === 0) {
      return (
        <>
          <h1>No hay productos en el carrito!</h1>
          <Link to="/"><h2>Volver a la tienda</h2></Link>
        </>
      )
    }

    return (
        <div>
            <div>
                {cart.map((prod) => (
                    <div
                        key={prod.id}
                        style={{
                            display: 'flex',
                            border: '2px solid black',
                            margin: '10px',
                            padding: '10px',
                        }}
                    >
                        <div>
                            <img src={prod.image} width="70px" height="80px" alt="product" />
                        </div>
                        <h2>Producto: {prod.name}</h2>
                        <h2>$ {prod.price}</h2>
                        <h2>Cantidad: {prod.cantidad}</h2>
                        <button className='borrar btn-danger' onClick={() => deleteItem(prod.id)}>
                            Borrar
                        </button>
                    </div>
                ))}
                <h3>Total: $ {calcularTotal()} </h3>
            </div>
        </div>
    );
};

export default Cart;
/*import React from "react";
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";



const Cart = () => {
  const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
      return (
        <>
          <p>No hay productos en el carrito</p>
          <Link to="/">Volver a la tienda</Link>
        </>
      )
    }
  return (
   <>
    <h1 className='d-flex align-items-center display-2 justify-content-center' >
    Pedido Realizado:
    </h1>
    {
      cart.map(product => (
        <ItemCart key={product.id} product={product} />
      ))

    }
    <p>
      total: ${totalPrice}
    </p>
    </>
  );
}

export default Cart;

//cart.map((product) => (<ItemCart key={product.id} product={product} />))
*/