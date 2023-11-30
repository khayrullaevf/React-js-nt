import React from 'react'

import { useLocation } from 'react-router-dom'

const Footer = () => {
    const{pathname}=useLocation();
    
    const isLoginPage=pathname==='/login'
    const isRegister=pathname==='/register'
  return (
    <div>
        {
            (!isLoginPage&&!isRegister) && <div className='container'>
                <h1 className="text-center">Footer</h1>
                
            </div>
        }
    </div>
  )
}

export default Footer