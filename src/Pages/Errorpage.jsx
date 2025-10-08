import React from 'react';
import errorImg from '../assets/error-404.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const Errorpage = () => {
    return (
        <div className='flex flex-col min-h-[100vh]'>
            <Navbar></Navbar>

           <div className='flex-1  bg-[#f5f5f5]'>
            <div className='flex justify-center items-center mt-32 mx-10 md:mx-0'>
                <img src={errorImg} alt="" />
            </div>
              <div className='text-center mt-5'>
                <h2 className='text-[48px] font-semibold'>Oops, page not found!</h2>
                <p>The page you are looking for is not available.</p>
              </div>
           </div>

           <Footer></Footer>
        </div>
    );
};

export default Errorpage;