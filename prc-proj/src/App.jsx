import { Home } from 'lucide-react'
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Marketplace from './pages/Marketplace.jsx'
import Messages from './pages/Messages.jsx'
import MyListing from './pages/MyListing.jsx'
import MyOrders from './pages/MyOrders.jsx'
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/my-listing' element={<MyListing />} />
        <Route path='/my-orders' element={<MyOrders />} />
      </Routes>
    </div>
  )
}

export default App
