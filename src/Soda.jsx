
import React from 'react'
import {Link} from 'react-router-dom'

function Soda() {

    return (
        <>
        <h1>You have chosen soda.  Enjoy!</h1>
        <img src='https://cdn.vox-cdn.com/thumbor/m-jbOFvaW2r8NZ0Fu5dPGPmHESk=/245x0:3266x2266/1400x1050/filters:focal(245x0:3266x2266):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/48794543/soda-breakfast-g.0.0.jpg'/>


        <h2><Link to='/'>Vending Machine</Link></h2>
        </>
    )
}

export default Soda