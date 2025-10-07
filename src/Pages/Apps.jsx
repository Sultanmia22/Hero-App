import React from 'react';
import { CiSearch } from "react-icons/ci";
const Apps = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <div className='text-center md:pt-20 md:pb-10'>
                <h2 className='text-[48px] font-bold'>Our All Applications</h2>
                <p className='text-[20px] text-[#627382]'> Explore All Apps on the Market developed by us. We code for Millions </p>
            </div>

            <div className='flex justify-between items-center'>
                <p className='font-bold text-[24px]'> (13) Apps Found </p>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>
        </div>
    );
};

export default Apps;