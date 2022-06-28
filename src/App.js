import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components//Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const greeting= "Distribuidora Malena"
  return (
    <>
     <Navbar/>
     <ItemListContainer greeting={greeting}/>
     
    </>
  );
}

export default App;
