import React from 'react'
import { Link } from 'react-router-dom'

const Header=()=>{
  return (
    <nav className='navbar bg-dark navbar-dark navbar-expand-sm'>
        <div className='container'>
            <Link to='/' className='navbar-brand' >Online Shoping</Link>
            <ul className='navbar-nav'>
            <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/Counter'>Counter</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/Register'>Register</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/Login'>Login</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/Users'>Users</Link></li>    
            <li className='nav-item'><Link className='nav-link' to='/Calculater'>Calculater</Link></li>    
            </ul> 
        </div>
    </nav>
  )
}

export default Header