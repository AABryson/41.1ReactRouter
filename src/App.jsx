// import React from 'react'
import {Route, Routes} from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Candybar from './Candybar'
import Soda from './Soda'
import Chips from './Chips'
// import './App.css'

function App() {


  return (
    <>
  
  <Routes>
                {/* <Route path='/Candybar' element={<Candybar />}/>
                <Route path='/Chips' element={<Chips />}/>
                <Route path='/Soda' element={<Soda />}/>  */}
                <Route path='/' element={<VendingMachine />}/>
                
  </Routes>
    </>
  )
}

export default App
