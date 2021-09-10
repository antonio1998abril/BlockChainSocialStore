/* import React from 'react'
import Loader from '../components/Loader/Loader'

function test() {
    return (
        <div>
            <Loader></Loader>            
        </div>
    )
}

export default test
 */


import React, { useState } from 'react'
import Home from './home'



function test() {
    const [isLogged] = useState(true)
    if(!isLogged) {return <Home/>}
    return (
        <div>
            
        </div>
    )
}

export default test
