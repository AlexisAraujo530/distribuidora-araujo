import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext";

const Item = ({ product }) => {
    const { cart } = useContext(CartContext);

    const isInCart = cart.some((prod) => prod.id === product.id);
    return (
        <div className="item">
            <img src={product.image} alt="producto" />
            <section>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <Link className="detalle" to={`/detail/${product.id}`}>
                    Ver detalle
                </Link>
            </section>
            {isInCart && <h2 className='agregado'>Ya está en el carrito</h2>}
        </div>
    );
};

export default Item;
