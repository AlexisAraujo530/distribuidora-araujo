import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { getAuth,signOut } from "firebase/auth";
import { Button } from "react-bootstrap";
import  getFirestore  from "../firebase/firebase";

const auth = getAuth(getFirestore);
const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/category/Bebidas',
        name: 'Bebidas',
    },
    {
        id: 3,
        path: '/category/Almacen',
        name: 'Almacen',
    },
    {
        id: 4,
        path: '/category/Lacteos',
        name: 'Lacteos',
    },
];

const Navbar = () => {
    return (
        <nav>
            <h1>Distribuidora Malena</h1>
            <div className="categoria">
            <ul className="categoriass">
            
               <h2 >  {categories.map((category) => (
                    <Link className="categorias" to={category.path} key={category.id} >
                        <Button>
                        {category.name}
                        </Button>
                        </Link>
                ))}
                </h2>
            </ul>
            </div>
            <Link to= {"/cart"}>
            <CartWidget />
            </Link>
            <Button onClick={() => signOut(auth)}>Cerrar sesión</Button>
        </nav>
    );
};

export default Navbar;


// 'd-flex flex-row align-items-center display-6 justify-content-between'