import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
const Navbar = () => {
  return (
    <header className=' padding-x absolute py-8 w-full z-10'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='hidden justify-center items-center gap-16 lg:flex lg:flex-1'>
          {navLinks.map((item)=> (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden lg:flex gap-2 font-montserrat leading-normal text-lg text-slate-950 wide:mr-24'>
          <a href="/" className='font-montserrat leading-normal text-lg text-slate-950'>Sign in</a>
          <span>/</span>
          <a href="/" className='font-montserrat leading-normal text-lg text-slate-950 '>Explore now</a>
        </div>
        <div className='lg:hidden'>
          <img src={hamburger} width={25} height={25} alt="" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar