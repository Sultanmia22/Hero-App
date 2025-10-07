import React from 'react';
import appImg from '../assets/App.png.png'
import playImg from '../assets/PlayStore.png.png'
import bannerImg from '../assets/hero.png'
const Banner = () => {
    return (
        <div className='py-20'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold  text-center mb-5'>We Build <br /> <span className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive </span> Apps</h1>
                <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex flex-col md:flex-row gap-5 items-center justify-center my-7'>
                    <button className='btn'> <span><img src={playImg} alt="" /></span> <a target='_blank' href="https://play.google.com/store/games?hl=en">Google Play</a></button>
                    <button className='btn'> <span><img src={appImg} alt="" /></span> <a target='_blank' href="https://www.apple.com/app-store/">App Store</a> </button>
                </div>

                <div className='mx-10 md:mx-0'>
                    <img src={bannerImg} alt=""  className=' w-[800px] mx-auto'/>
                </div>

                <div className='py-20 border bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                    <h1 className='text-3xl text-white font-bold '>Trusted by Millions, Built for You</h1>

                   <div className='flex flex-col md:flex-row justify-center items-center gap-15 mt-10'>

                     <div className='text-white'>
                        <p>Total Downloads</p>
                        <span className='text-6xl font-bold my-8'>29.6M</span>
                        <p>21% more than last month</p>
                    </div>

                    <div className='text-white'>
                        <p>Total Reviews</p>
                        <span className='text-6xl font-bold my-8'>906K</span>
                        <p>46% more than last month</p>
                    </div>

                    <div className='text-white'>
                        <p>Active Apps</p>
                        <span className='text-6xl font-bold my-8'>132+</span>
                        <p>31 more will Launch</p>
                    </div>

                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;