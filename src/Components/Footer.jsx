import React from 'react';
import logoImg from '../assets/logo.png'
import fImg from '../assets/f.png.png'
import inImg from '../assets/in.png.png'
import xImg from '../assets/x.png.png'
const Footer = () => {
    return (
        <div className='bg-[#001931] px-20 py-10'>
          <div className='flex flex-col md:flex-row justify-between'>

             <div className='flex items-center gap-1'>
                   <a className=" text-xl"> <img src={logoImg} alt="" className='max-w-10 max-h-10' /> </a>
                   <p className='text-white'>HERO.IO</p>
            </div>

            <div>
                <h2 className='text-white mb-3'>Social Links</h2>
                <div className='flex items-center gap-2'>
                    <a target='_blank' href="https://x.com/i/flow/single_sign_on"><img src={xImg} alt="" /></a>
                    <a target='_blank' href="https://www.linkedin.com/"><img src={inImg} alt="" /></a>
                    <a target='_blank' href="https://www.facebook.com/sm.emon.564"><img src={fImg} alt="" /></a>
                </div>
            </div>

          </div>
           <p className='text-white text-center'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;