import React from 'react';
import logo from '../assets/logo.png';
import { Menu, MoveRightIcon } from 'lucide-react';

function NavBar() {
  const menuItems = ['ABOUT', 'PROJECTS', 'PLAYGROUND', 'FAQ'];

  return (
    <nav className='z-[100] fixed flex h-[56px] w-[90vw] border-white rounded-lg glass-bg top-3 items-center pl-5 justify-between' >
      <div id='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='lg:flex w-[600px] justify-between hidden'>
        {menuItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div id="leftMostButton">
        <button className='hidden text-sm gap-1 font-semibold lg:inline-flex items-center pl-6 pr-6 pt-2 pb-2 bg-white text-black mr-4 rounded-xl'>
          CONTACT <MoveRightIcon />
        </button>
        <button className='lg:hidden text-sm gap-1 font-semibold sm:block items-center pl-6 pr-6 pt-2 pb-2 bg-white text-black mr-4 rounded-xl'>
          <Menu />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
