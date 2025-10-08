import React from 'react';
import logoImg from '../assets/logo.png'
import fImg from '../assets/f.png.png'
import inImg from '../assets/in.png.png'
import xImg from '../assets/x.png.png'
const Footer = () => {
    return (
        <footer className='bg-[#001931] px-20 py-10'>
          <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-10'>

             <div className='flex items-center gap-1 justify-center mb-5 md:mb-0 text-center'>
                   <a className=" text-xl"> <img src={logoImg} alt="" className='max-w-10 max-h-10' /> </a>
                   <p className='text-white'>HERO.IO</p>
            </div>

            <div className='text-white'>
                <h2 className='text-xl mb-3'> Company </h2>
                <ul className='space-y-4'>
                    <li> About us </li>
                    <li> Contact </li>
                    <li> Privacy Policy </li>
                    <li> Service </li>
                </ul>
            </div>

            <div>
                <h2 className='text-white mb-3 text-xl'>Social Links</h2>
                <div className='flex flex-col justify-between space-y-4 items-center gap-2'>

                    <div className='flex items-center gap-2 flex-start'>
                    <img src={xImg} alt="" />
                    <a target='_blank' href="https://x.com/i/flow/single_sign_on" className='text-white'> Twitter </a>
                    </div>

                    <div className='flex items-center gap-2 flex-start'>
                    <img src={inImg} alt="" />
                    <a target='_blank' href="https://x.com/i/flow/single_sign_on" className='text-white'> LinkedIn </a>
                    </div>

                      <div className='flex items-center gap-2 flex-start'>
                    <img src={fImg} alt="" />
                    <a target='_blank' href="https://x.com/i/flow/single_sign_on" className='text-white'> Facebook </a>
                    </div>
                   
                </div>
            </div>

          </div>
           <p className='text-white text-center'>Copyright © 2025 - All right reserved</p>
        </footer>
    );
};

export default Footer;