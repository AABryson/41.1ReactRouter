import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Candybar from './Candybar'
import Chips from './Chips'
import Soda from './Soda'
import VendingMachine from './VendingMachine'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
                <Route path='/Candybar' element={<Candybar />}/>
                <Route path='/Chips' element={<Chips />}/>
                <Route path='/Soda' element={<Soda />}/> 
                <Route path='VendingMachine' element={<VendingMachine />}/>
                
            </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
