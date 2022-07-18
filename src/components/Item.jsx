import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext";

const Item = ({ item }) => {
    const { cart } = useContext(CartContext);

    const isInCart = cart.some((prod) => prod.id === item.id);
    return (
        <div className="item">
            <img src={item.image} alt="producto" />
            <section>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                <Link className="detalle" to={`/detail/${item.id}`}>
                    Ver detalle
                </Link>
            </section>
            {isInCart && <h2>Ya está en el carrito</h2>}
        </div>
    );
};

export default Item;
/*import React  from 'react';
import { Link } from 'react-router-dom';



const Item = ({ item }) => {
    

    return (
        <div
            style={{
                margin: '10px 20px',
                border: '2px solid black',
                width: '40%',
            }}
        >
            <img width="200px" src={item.image} alt="producto" />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <Link className='verdetalle' to={`/detail/${item.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;
*/