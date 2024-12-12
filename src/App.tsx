import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter >
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="/update/:id" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
