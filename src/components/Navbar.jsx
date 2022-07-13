import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/category/bebidas',
        name: 'Bebidas',
    },
    {
        id: 3,
        path: '/category/almacen',
        name: 'Almacen',
    },
    {
        id: 4,
        path: '/category/lacteos',
        name: 'Lacteos',
    },
];

const Navbar = () => {
    return (
        <nav>
            <h1>Distribuidora Malena</h1>
            <div className="categoria">
            <ul className='d-flex flex-row align-items-center display-6 justify-content-between'>
                {categories.map((category) => (
                    <Link className="categorias" to={category.path} key={category.id} >
                        {category.name}
                    </Link>
                ))}
            </ul>
            </div>
            <Link to= {"/cart"}>
            <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
