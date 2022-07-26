import React from 'react';
import { useContext } from 'react';
import { CartContext } from "../CartContext";
import { Link } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
//import { db } from '../firebase/firebase';

const Cart = () => {
    const { cart, deleteItem, calcularTotal } = useContext(CartContext);
     //const total = calcularTotal()
     //console.log(total);
     //console.log(cart);
    const pedido = {
        cliente: {
            nombre: 'Juan',
            apellido: 'Perez',
            direccion: 'Calle falsa 123',
            telefono: '123456789',
            email: 'juan@gmail.com'
        },
        productos: cart.map(product => ({ id:product.id, nombre:product.name, precio:product.price })),
        total: calcularTotal(),
    }
    const confirmarPedido =() => {
        alert("Su pedido se ha realizado con éxito");
   
      const db = getFirestore();
      const pedidosRealizados = collection( db,'pedidos');
      addDoc (pedidosRealizados, pedido)
      .then(({ id }) => {
        console.log(id,'Pedido agregado exitosamente');
      }
      )
    }
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
      <button onClick={confirmarPedido}> Confirmar Pedido!</button>
  </div>
    );
}
export default Cart;
