import './App.css';
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components//Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import React from 'react';
import CartProvider from './CartContext';


function App() {
  
  return (
    <BrowserRouter>  
    
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
        </BrowserRouter>
  );
}

export default App;

