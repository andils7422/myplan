import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <div>
            <ul className="right">
                <li><NavLink to='/create'>NeW Project</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/create' className="btn btn-floating pink lighten-1">NP</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks