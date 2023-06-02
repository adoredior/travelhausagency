import React, { useState } from 'react';
import { BsPersonFill, BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const closeNav = () => {
    setNav(false);
    
  };
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>TravelHaus</h1>
      </div>
      <ul className='hidden md:flex md:gap-x-12'>
      {/* <div className="hidden md:flex md:gap-x-12"> */}
        <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Home</Link>
        <Link to ="/Destinations" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Destinations</Link>
        <Link to="/Book" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Book</Link>
        <Link to="/About" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">About</Link>
        <Link to="/Contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Contact</Link>
      {/* </div> */}

      </ul>
    <nav>
      <ul>
        <div className="hidden md:flex ml-2">
          <li>
            <Link to="/SearchResults">
              <BsSearch size={20} />
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/SignIn">
              <BsPersonFill size={20} />
            </Link>
          </li>
        </div>
      </ul>
    </nav>

      {/* Menu */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt1 size={20} />}
      </div>

      {/* Mobile menu dropdown
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>TavelHaus.</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>About</li>
          <li className='border-b'>Contact</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div> */}
        {/* </ul> */}
      </div>
    // </div>
  );
};

export default Navbar;
