import './App.css';
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components//Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import React, { useState, useEffect } from 'react';
import CartProvider from './CartContext';
import Logueo from './components/Logueo';

import  getFirestore  from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(getFirestore);



function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //código en caso de que haya sesión inciiada
      setUsuarioGlobal(usuarioFirebase);
    } else {
      //código en caso de que no haya sesión iniciada
      setUsuarioGlobal(null);
    }
  });


  return (
    <>{usuarioGlobal ?
    (<BrowserRouter> 
          <CartProvider>
          <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/category/:categoryId"
                    element={<ItemListContainer />}
                />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />  
            </Routes>
          </CartProvider>
        </BrowserRouter>) : (<Logueo />)
        }</>
  );
}

export default App;

