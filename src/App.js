import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Cart from './Components/Cart';
import NavBarComp from './Components/NavBarComp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardDetails from './Components/CardDetails';

function App() {

  let [product, setProduct] = useState([])

  const handleProductCart = (cart) => {
    // console.log('App ==>', cart);
    let productExist = product.find((item) => item.id === cart.id)
    if (productExist) {
        alert('Product already exists...')
    } else {
      setProduct((item) => [...item, cart])
    }
  }
  // console.log(product);
  return (
    <div className="App">
      <Router>
        <NavBarComp product={product} />
        <h1>This is app component</h1>
        <Routes>
          <Route path='/' element={<Home handleProductCart={handleProductCart} />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart product={product} setProduct={setProduct} />} />
          <Route path='/cart/:id' element={<CardDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
