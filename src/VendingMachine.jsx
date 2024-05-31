import React from 'react'

import Chips from './Chips'
import Candybar from './Candybar'
import Soda from './Soda'
import {Routes, Route, Link} from 'react-router-dom'

function VendingMachine () {
    console.log('rendered vending machine component')



    return (
        <>
            <h1>Choose your snack</h1>
            <img src='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3ZlbmRpbmctbWFjaGluZS1waWN0dXJlcy0xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwfSwidG9Gb3JtYXQiOiJhdmlmIn19' style={{marginLeft: 20}}/>

            <ul>
                <li><Link to='/Candybar'>Candybar</Link></li>

                <li><Link to='/Chips'>Chips</Link></li>

                <li><Link to='/Soda'>Soda</Link></li>
            </ul>
            <Routes>
                <Route path='/Candybar' element={<Candybar />}/>
                <Route path='/Chips' element={<Chips />}/>
                <Route path='/Soda' element={<Soda />}/> 
            </Routes>
            
        </>
    )

}

export default VendingMachine