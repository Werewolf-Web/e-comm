import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './page/home/Home'
import Product from './page/products/Product'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Product/>}/>
 </Routes>
  
    </>
  )
}

export default App