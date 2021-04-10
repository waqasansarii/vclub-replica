import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='main_footer_div'>
              <div className='label_div'>
                  <Link className='seler_link'>SELLER? 
                  <strong style={{color:'#66FF33'}}> SELL YOUR STUFF WITH US</strong> </Link>
              </div>
              <div className='balnc_footer'>
                  <p>Balance: 0$</p>
                  <img className='add_img' src="https://vclub.tel/images/icons/add.png" alt=""/>
              </div>
            </div>
        </div>
    )
}

export default Footer
