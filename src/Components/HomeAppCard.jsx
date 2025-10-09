import React from 'react';
import ratingImg from '../assets/icon-ratings.png'
import downloadsImg from '../assets/icon-downloads.png'
const HomeAppCard = ({ homeData }) => {

    const { image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings } = homeData

    return (
        <div>
            <div className='rounded-lg md:mx-0 '>
                <div className="card bg-base-100 p-5 shadow-sm">

                    <figure className='border-2 border-gray-200'>
                        <img
                            src={image}
                            alt="Shoes" className='w-[200px] h-[300px] rounded-lg object-contain ' />
                    </figure>

                    <div className="">
                        <h2 className="card-title my-4 "> {title} </h2>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center bg-[#F1F5E8] px-[10px] py-[6px] gap-2'>
                                <span><img src={downloadsImg} alt="" className='w-4' /></span>
                                <p className='font-semibold text-[#00D390]'>{downloads}M</p>
                            </div>
                            <div className='flex items-center bg-[#FFF0E1] px-[10px] py-[6px] gap-2'>
                                <p className='font-semibold text-[#FF8811]'> {ratingAvg} </p>
                                <span><img src={ratingImg} alt="" className='w-4' /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAppCard;