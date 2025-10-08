import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';


const RatingChart = ({ detailsAppData }) => {

    const ratingChartData = detailsAppData.ratings

    const reversRatingData = [...ratingChartData].reverse()

    console.log(reversRatingData);
    return (
        <div className=' w-full md:w-[600px] h-[600px]'>
         <ResponsiveContainer width='100%' height='100%'>
             <BarChart  data={reversRatingData}>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Bar dataKey='count' fill='#FF8811' barSize={70}></Bar>
          </BarChart>
         </ResponsiveContainer>
        </div>
    );
};

export default RatingChart;