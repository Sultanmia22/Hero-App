import React from 'react';
import ratingImg from '../assets/icon-ratings.png'
import downloadsImg from '../assets/icon-downloads.png'
import iconImg from '../assets/icon-review.png'

import { Link, useLoaderData, useParams } from 'react-router';

const AppDetails = () => {

    const appData = useLoaderData()

    const {clickId} = useParams()

    const detailsAppData = appData.find(app => app.id === parseInt(clickId))

    const { image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings } = detailsAppData
    return (
        <div className='px-[80px] py-20'>

            {/* Information */}
            <div className='flex gap-20 flex-col md:flex-row border-b-2 border-gray-200 pb-10'>

                <div className='border-2 border-gray-200'>
                    <figure>
                        <img src={image} alt="" className='max-w-[350px] max-h-[350px] mx-auto'/>
                    </figure>
                </div>

                <div className='w-full flex-col justify-between'>
                    <h2 className='text-[32px] font-bold'> {title} </h2>

                    <p className='text-[20px]'>Developed by <span className='text-transparent bg-clip-text font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>

                    <div className='border-b-2 border-gray-200 my-5 w-full'></div>

                    <div className='flex my-10 gap-16 '>

                        <div className='flex flex-col justify-between'>
                            <img src={downloadsImg} alt="" className='w-[28px] h-[28px]' />
                            <p className='mt-4'>Downloads</p>
                            <p className='text-[40px] font-extrabold'> {downloads} </p>
                        </div>

                        <div className='flex flex-col justify-between'>
                            <img src={ratingImg} alt="" className='w-[28px] h-[28px]' />
                            <p className='mt-4'>Average Ratings</p>
                            <p className='text-[40px] font-extrabold'> {ratingAvg} </p>
                        </div>

                        <div className='flex flex-col justify-between'>
                            <img src={iconImg} alt="" className='w-[28px] h-[28px]' />
                            <p className='mt-4'>Total Reviews</p>
                            <p className='text-[40px] font-extrabold'> {reviews} </p>
                        </div>

                    </div>
                    
                    <Link className='px-[20px] py-[14px] rounded-[4px] bg-[#00D390] text-xl text-white'> Install Now {size} </Link>
                    
                </div>

            </div>

            {/* Chart */}
            <div className='max-h-[400px]'>
                <h2 className='text-[24px] font-bold'>Ratings</h2>
            </div>

        </div>
    );
};

export default AppDetails;