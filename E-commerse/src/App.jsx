import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './page/home/Home'
import Product from './page/products/Product'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/login/Login'

const App = () => {
  
  return (
    <>
       <Navbar/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Product/>}/>
       <Route path='/auth/login/' element={<Login/>}/>
 </Routes>
  
    </>
  )
}

export default App