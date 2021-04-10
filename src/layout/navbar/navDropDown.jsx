import React from 'react'
import { Link } from 'react-router-dom'

const NavDropDown = ({className}) => {
    return (
        <div className={`drop_down_container ${className}`}>
            <ul className='nav_drop_ul'>
                <li>
                    <Link className='nav_link'>Buy CCS/Fulls</Link>
                </li>
                <li>
                    <Link className='nav_link'>Cart CCS/Fulls</Link>
                </li>
                <li>
                    <Link className='nav_link'>Orders CCS/Fulls</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavDropDown
