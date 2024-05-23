import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import PageRouter from './pageRouter';


import { Bars3Icon, XIcon } from "@heroicons/react/24/outline" //'@heroicons/react/24/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)// color #0E0DAA

  return (
    <>
    <div className='w-screen h-[80px]  bg-[#0E0DAA] text-[#fff]  drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <Link  to="/" className='text-3xl font-bold mr-4 sm:text-4xl'>  <img className='h-12 w-17' /> Logo </Link>
          <ul className='hidden md:flex'>
          <li><Link className=' p-4' to="/"  >Home</Link></li>
          <li><Link className=' p-4'  to="/about-us" >About</Link></li>
          <li><Link className=' p-4' to="/consultation" >Consultation</Link></li>
          <li><Link className=' p-4' to="/platforms" >Platforms</Link></li>
          <li><Link  className=' p-4' to="/pricing" >Pricing</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <Link to="login" className='px-8 py-3'>
            Login
          </Link>
          <Link  to="/addofficer"className='px-8 py-3'>Add Officer</Link>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <Bars3Icon className='w-5' /> : <Bars3Icon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-[#0E0DAA] text-[#fff] w-full px-8'}>
          <li className='text-left'><Link className=' p-4' onClick={handleClose} to="home" >Home</Link></li>
          <li className='text-left'><Link  className=' p-4' onClick={handleClose} to="about-us" >About</Link></li>
          <li className='text-left'><Link className=' p-4' onClick={handleClose} to="support" >Support</Link></li>
          <li className='text-left'><Link className=' p-4' onClick={handleClose} to="platforms" >Platforms</Link></li>
          <li className='text-left text-'><Link className=' p-4' onClick={handleClose} to="pricing" >Pricing</Link></li>

        <div className='flex flex-col my-4'>
            <Link to="/login" className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Login</Link>
            <Link  to="/signup" className='px-8 py-3'>Sign Up</Link>
        </div>
      </ul>
  </div>

  <PageRouter/>
      
    </>
  );
};

export default Navbar;