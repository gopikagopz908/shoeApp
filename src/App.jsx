import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from './components/Home'

import LoginForm from './components/Loginpage'
import RegistrationForm from './components/Regiteration'
import Layout from './pages/Layout.jsx/Layout'
import Products from './components/Products'
import Cart from './pages/cart'
import OrderDetails from './pages/Orderform'
import Order from './pages/modal/order'

function App() {
  

  return (
    <>
    <Router>
      {/* <Link to="/login">login</Link> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path=":category" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<OrderDetails/>}/>
          <Route path="/orders" element={<Order/>}/>   
        </Route>
          <Route path="/register" element={<RegistrationForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </Router>
    
      
          
    </>
  )
}

export default App
