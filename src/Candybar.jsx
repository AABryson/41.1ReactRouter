import React from 'react'
import {Link} from 'react-router-dom'

function Candybar() {


    return (
        <>
        <h1>You have chosen a candybar!  Enjoy</h1>
        <img src='https://reviewed-com-res.cloudinary.com/image/fetch/s--IJjTTTGq--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1540839062301/bars.png'/>

        <h2><Link to='/'>Vending Machine</Link></h2>
        </>
    )
}

export default Candybar