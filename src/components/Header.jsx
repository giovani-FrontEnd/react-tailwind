import React from 'react'
// import components 
import Socials from './Socials';
import Logo from '../imgs/logo.svg';
import MobileNav from './MobileNav';
// import routes 
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className='bg-primary fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">

        {/* Logo  */}
        <Link to='/'>
          <img src={Logo} alt="logo" className='max-w-[200px]' />
        </Link>

        {/* nav  */}
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to='/' className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to='/about' className='text-[#696c6d] hover:text-primary transition'>About</Link>
          <Link to='/portfolio' className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
          <Link to='/contact' className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
        </nav>

      </div>

        {/* socials  */}
        <Socials />

        {/* Mobile Nav  */}
        <MobileNav />
    </header>
  )
}

export default Header
