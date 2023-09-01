// import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './compones/navbar';
import '../src/App.css'
import './compones/navbar.css'
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import './pages/shop/shop.css'
import {ShopcontextProvider} from './context/shop_context';


function App() {
  return (

    <ShopcontextProvider>

    <div className="App">
  

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
  
       
    </div>
    </ShopcontextProvider>
  );
}

export default App;
