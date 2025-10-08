import React, { useEffect, useState } from 'react';
import InstallationCard from '../Components/InstallationCard';

const Installation = () => {

  const [installedApp,setInstalledApp] = useState([])

  useEffect(()=> {
     const storedApp = JSON.parse(localStorage.getItem('installedApps'))
    setInstalledApp(storedApp);
  },[]) 

  const [sortedApp,setSortedApp] = useState(null)

 const handleSorted = (() => {
     if(sortedApp === 'size-asc'){
         return [...installedApp].sort((a,b) => a.size - b.size)
     }

     else if(sortedApp === 'size-dsc'){
         return [...installedApp].sort((a,b) => b.size - a.size)
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

    return (
        <div className='max-w-[1600px] mx-auto'>
            <div className='py-15 text-center space-y-4'>
                <h2 className='text-5xl font-bold'>Your Installed Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-semibold'> ({(installedApp.length)}) Apps Found </h2>
                <label>
                    <select className='select'  value={sortedApp} onChange={(e) => setSortedApp(e.target.value)}>
                        <option value="none"> Sort By Size </option>
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