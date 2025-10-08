import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';


const RatingChart = ({ detailsAppData }) => {

    const ratingChartData = detailsAppData.ratings

    const reversRatingData = [...ratingChartData].reverse()

    console.log(reversRatingData);
    return (
        <div className='w-[600px] h-[400px] '>
          <BarChart width={600} height={400} data={reversRatingData}>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Bar dataKey='count' fill='#FF8811'></Bar>
          </BarChart>
        </div>
    );
};

export default RatingChart;