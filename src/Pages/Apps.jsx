import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import AppsCard from '../Components/AppsCard';
import useApps from '../Hook/useApps';
const Apps = () => {

    const {appsData,loading,error} = useApps()

    const [searchApp,setSearchApp] = useState('')

    const term = searchApp.trim().toLowerCase()

    const searchAppData = term ? appsData.filter(app => app.title.toLowerCase().includes(term))   : appsData
     
    return (
        <div className='max-w-[1600px] mx-auto'>
            <div className='text-center pt-20 pb-10'>
                <h2 className='text-[48px] font-bold'>Our All Applications</h2>
                <p className='text-[20px] text-[#627382]'> Explore All Apps on the Market developed by us. We code for Millions </p>
            </div>

            <div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center'>
                <p className='font-bold text-[24px]'> ({appsData.length}) Apps Found </p>
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
                    <input  value={searchApp} onChange={(e)=> setSearchApp(e.target.value)} type="search" required placeholder="Search" />
                </label>
            </div>

            <div className='text-black flex flex-col justify-center items-center mt-10'>
                <h2 className='text-5xl font-bold'> {searchAppData.length === 0 ? ' No Apps Found ' : ''} </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1600px] mx-auto gap-3 pb-10 md:pb-20'>
                {
                    searchAppData.map(app => <AppsCard  key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default Apps;