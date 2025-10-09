import React from 'react';
import ratingImg from '../assets/icon-ratings.png'
import downloadsImg from '../assets/icon-downloads.png'
import { Link } from 'react-router';
const InstallationCard = ({istalldata , handleRemove}) => {

    const { image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings } = istalldata

   const  handleRemoveApp = (id) => {
       handleRemove(id)
    }

    return (
        <div className='mb-5'>
            <div className='flex items-center justify-between bg-white shadow-sm p-3 rounded-lg '>

                <div className='flex  gap-4'>
                    <div className='border-2 border-gray-200 rounded-lg'> <img src={image} alt="" className='w-20 h-20' /> </div>
                    <div>
                        <h2 className='text-[20px] font-medium my-2'>{title}</h2>
                        <div className='flex gap-4'>

                            <div className='flex items-center gap-1'>
                                <img src={downloadsImg} alt="" className='w-5 h-5' />
                                <span>{downloads}M</span>
                            </div>

                             <div className='flex items-center gap-1'>
                                <img src={ratingImg} alt="" className='w-5 h-5' />
                                <span>{ratingAvg}</span>
                            </div>

                            <div className=''>
                                <span>{size} MB </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Link onClick={()=> handleRemoveApp(id)} className='btn bg-[#00D390] text-white ' > Uninstall </Link>
                </div>
            </div>
        </div>
    );
};

export default InstallationCard;