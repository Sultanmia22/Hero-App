import React, { useEffect, useState } from 'react';
import ratingImg from '../assets/icon-ratings.png'
import downloadsImg from '../assets/icon-downloads.png'
import iconImg from '../assets/icon-review.png'
import { Link,  useParams } from 'react-router';
import RatingChart from '../Components/RatingChart';
import useApps from '../Hook/useApps';
import { toast, ToastContainer} from 'react-toastify';
import noutFoundImg from '../assets/App-Error.png'






const AppDetails = () => {

    const [installedApp,setInstalledApp] = useState(false)

 

    const {appsData,loading,error} = useApps()

    const {clickId} = useParams()
  

  const detailsAppData = appsData?.find(app => app.id === parseInt(clickId))
  

    
    useEffect(()=> {
        const storedAppData = JSON.parse(localStorage.getItem('installedApps'));
        console.log(storedAppData);
        const dataAvailable = storedAppData?.find(app => app.id == clickId)
        console.log(dataAvailable);
        if(dataAvailable){
            setInstalledApp(true)
        }
    },[clickId])
   
    

    if (loading) {
         return <div className='flex  justify-center items-center md:pt-16'>
             <div className='flex items-center gap-2'>  <span class="loading loading-spinner w-[55px] h-[55px]"></span>  <h2 className='text-6xl font-bold'> Loading... </h2> </div>
        </div>
    }

    if (error) {
        return <h2 className="text-center text-2xl mt-20 text-red-500">Error: {error}</h2>
    }
   
    if(!detailsAppData){
        return <div>
            <div className='pt-12'>
              <div className='flex justify-center items-center'> <img src={noutFoundImg} alt="" /> </div>
             <div className='text-center my-5'>
                <h2 className='text-[48px] font-semibold'>Oops, App not found!</h2>
                <p>The App you are looking for is not available.</p>
              </div>
              <div className='flex justify-center py-5'>
                <Link to='/home' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'> Go Back </Link>
              </div>
        </div>
        </div>
    }
   



    const { image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings } = detailsAppData

    const handleInstall = () => {
        const storedAppData = JSON.parse(localStorage.getItem('installedApps'));
        let updateAppData = [];
        if(storedAppData){ 

            updateAppData = [...storedAppData,detailsAppData]
        }
        else{
            updateAppData.push(detailsAppData)
        }

        localStorage.setItem('installedApps',JSON.stringify(updateAppData))

        toast(`${title} App Installed Successfully!`)
       
        setInstalledApp(true)

    }

 


    return (
        <div className='mx-5 md:mx-[80px] py-20'>

            {/* Information */}
            <div className='flex gap-20 flex-col md:flex-row border-b-2 border-gray-200 pb-10'>

                <div className=' p-4  bg-white shadow rounded-lg'>
                    <figure>
                        <img src={image} alt="" className='max-w-[350px] max-h-[350px] mx-auto'/>
                    </figure>
                </div>

                <div className='w-full flex-col justify-between'>
                    <h2 className='text-[32px] font-bold'> {title} </h2>

                    <p className='text-[20px]'>Developed by <span className='text-transparent bg-clip-text font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>

                    <div className='border-b-2 border-gray-200 my-5 w-full'></div>

                    <div className='flex my-10 gap-5 md:gap-16 '>

                        <div className='flex flex-col justify-between'>
                            <img src={downloadsImg} alt="" className='w-[28px] h-[28px]' />
                            <p className='mt-4'>Downloads</p>
                            <p className='text-[40px] font-extrabold'> {downloads}M</p>
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
                    
                    <button disabled={installedApp} onClick={ handleInstall } className={`px-[20px] py-[14px] rounded-[4px] bg-[#00D390] text-xl text-white`}  >  {installedApp ? 'Installed' : 'Install Now'} ({size} MB) </button>
                    
                </div>

            </div>

            {/* Chart */}
            <div className='mt-10'>
                <h2 className='text-[24px] font-bold mb-4'>Ratings</h2>
                <div>
                    <RatingChart     detailsAppData={detailsAppData}></RatingChart>
                </div>
            </div>

            <div>
                <h2 className='text-[24px] font-semibold'>Description</h2>
                <p> {description} </p>
            </div>
            <ToastContainer />
        </div>
        
    );
};

export default AppDetails;