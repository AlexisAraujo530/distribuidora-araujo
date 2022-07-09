import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components//Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';


function App() {
  
  return (
    <BrowserRouter>
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
        </BrowserRouter>
  );
}

export default App;

//<ItemDetailContainer />

//<Route path="/detail/:id" element={<ItemDetailContainer />} />


/*
<Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        
</Routes>

*/