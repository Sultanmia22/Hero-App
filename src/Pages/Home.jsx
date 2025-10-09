import React from 'react';
import Banner from '../Components/Banner';
import { Link,} from 'react-router';
import HomeAppCard from '../Components/HomeAppCard';
import useApps from '../Hook/useApps';

const Home = () => {
      const {appsData,loading,error} = useApps()

    const dataFoHome = appsData.slice(0,8)

    if(loading){
        return <div className='flex  justify-center items-center md:pt-16'>
             <div className='flex items-center gap-2'>  <span class="loading loading-spinner w-[55px] h-[55px]"></span>  <h2 className='text-6xl font-bold'> Loading... </h2> </div>
        </div>
    }
    console.log(dataFoHome);
    return (
        <div>
           <Banner/>
           <div>
            <h1 className='text-5xl font-bold text-center'>Trending Apps</h1>
            <p className='text-gray-500 text-center my-5'>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4  md:mx-[80px] gap-6 pb-10 md:pb-20'>
                {
                    dataFoHome.map(homeData => <HomeAppCard key={homeData.id} homeData={homeData} />)
                }
           </div>

           <div className='pb-20 flex justify-center'>
            <Link to='/apps' className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-[29px] py-[12px] text-white rounded-md'> Show All </Link>
           </div>
        </div>
    );
};

export default Home;