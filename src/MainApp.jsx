import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import App from './App.jsx'
import Automation from './components/Automation.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import EmailAutomation from './components/EmailAutomation.jsx'
import Nav from './components/navbar/Nav.jsx'
import BackInStock from './components/widget/backInStock/BackInStock.jsx'
import Product from '../src/components/Product'
import ProductSingle from './components/ProductSingle.jsx'
import { MyContext, MyProviders } from './context/MyContext'
import { useContext } from 'react'

const MainApp = () => {
  const {productName} = useContext(MyContext)
  return (
    <>
              <Nav />
                <Routes>
                
                  <Route path="/" element={<Dashboard/>}></Route>
                  
                    <Route path="/backInStock" element={<BackInStock />}></Route>
                  
                  <Route path="/product" element={<Product />}></Route>
                  <Route path="/automation" element={<Automation />}></Route>
                  <Route path="/emailAutomation" element={<EmailAutomation/>}></Route>

                  <Route exact path="/productSingle" element={<ProductSingle productName={productName}/>}></Route>
                 
                </Routes></>
  )
}

export default MainApp