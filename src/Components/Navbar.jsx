import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../assets/logo.png'
import githubImg from '../assets/github.png.png'
const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm md:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink  to='/home'> Home </NavLink>
        <NavLink to='/apps'> Apps </NavLink>
        <NavLink to='/installaion'> Installation </NavLink>
      </ul>
    </div>
    <div className='flex items-center gap-1'>
        <a className=" text-xl"> <img src={logoImg} alt="" className='max-w-10 max-h-10' /> </a>
        <p className='text-transparent bg-clip-text font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2'>HERO.IO</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
       <NavLink className='text-lg'  to='/home'> Home </NavLink>
        <NavLink className='text-lg' to='/apps'> Apps </NavLink>
        <NavLink className='text-lg' to='/installaion'> Installation </NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a target='_blank' href='https://github.com/Sultanmia22' className="btn text-white  font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"> <span> <img src={githubImg} alt="" /> </span> Contribute</a>
  </div>
</div>
    );
};

export default Navbar;