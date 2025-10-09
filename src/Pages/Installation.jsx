import React, { useEffect, useState } from 'react';
import InstallationCard from '../Components/InstallationCard';

const Installation = () => {

  const [loading,setLoading] = useState(true)

  

  const [installedApp,setInstalledApp] = useState([])

  useEffect(()=> {
     const storedApp = JSON.parse(localStorage.getItem('installedApps'))
    setInstalledApp(storedApp);

     const timerId = setTimeout(()=> {
        setLoading(false)
    },500)

  },[]) 



  const [sortedApp,setSortedApp] = useState(null)

 const handleSorted = (() => {
     if(sortedApp === 'size-asc'){
         return [...installedApp].sort((a,b) => a.downloads - b.downloads)
     }

     else if(sortedApp === 'size-dsc'){
         return [...installedApp].sort((a,b) => b.downloads - a.downloads)
     }

     else{
        return installedApp
     }
 })()

 const handleRemove = (id) => {

    const storedAppData = JSON.parse(localStorage.getItem('installedApps'));

    const filteredApp = storedAppData.filter(appData => appData.id !== id) 
   
    setInstalledApp(app => app.filter( data => data.id !== id))
   
    localStorage.setItem('installedApps',JSON.stringify(filteredApp))

 }

if(loading){
        return <div className='flex  justify-center items-center md:pt-16'>
             <div className='flex items-center gap-2'>  <span class="loading loading-spinner w-[55px] h-[55px]"></span>  <h2 className='text-6xl font-bold'> Loading... </h2> </div>
        </div>
    }

    return (
        <div className=' mx-5 md:mx-[80px] py-20'>
            
            <div className='py-15 text-center space-y-4'>
                <h2 className='text-5xl font-bold'>Your Installed Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-semibold'> ({(installedApp.length)}) Apps Found </h2>
                <label>
                    <select className='select'  value={sortedApp} onChange={(e) => setSortedApp(e.target.value)}>
                        <option value="none"> Sort By Download </option>
                        <option value="size-asc">Low To High</option>
                        <option value="size-dsc"> High To Low </option>
                    </select>
                </label>
            </div>

            <div className='py-10'>
                {
                  handleSorted.map(istalldata => <InstallationCard istalldata={istalldata}  handleRemove={handleRemove} />)  
                }
            </div>
        </div>
    );
};

export default Installation;