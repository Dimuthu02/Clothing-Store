import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Content from './pages/Content'
import Cart from './pages/cart'


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[10vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
          <Route path='/product/:productid' element={<Product />} />
          <Route path="/cart" element={<Cart />} />
<Route path ='/login' element={<Login />} />
<Route path ='/placreorder' element={<PlaceOrder />} />
<Route path='/order' element={<Order />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App
