import React from 'react';
import Card from './Card';

const CountBox = ({initialData, data}) => {
    console.log(data)
    const pendingData = data.filter(element => element.status == "Pending")
    const submittedData = data.filter(element => element.status == "Submitted")
    const reviewedData = data.filter(element => element.status == "Pending")
    console.log({pendingData, submittedData,reviewedData})
    return (
        <div>
             <div className='grid grid-cols-3 gap-4'>
            <div className={`flex flex-col items-center justify-center  text-white font-bold text-2xl bg-gray-600 h-62.5`}>
        <h1>Pending</h1>
        <p>{pendingData.length}</p>
      </div>
      <div className='flex flex-col items-center justify-center  text-white font-bold text-2xl bg-gray-600 h-62.5'>
        <h1>Review</h1>
        <p>{reviewedData.length}</p>
      </div>
      
      <div className='flex flex-col items-center justify-center  text-white font-bold text-2xl bg-gray-600 h-62.5'>
        <h1>Submit</h1>
        <p>{submittedData.length}</p>
      </div>
      
        {
        initialData.map((issues, ind) =>{
          return <Card key={ind} issues={issues}></Card>
        })
      }
      
      
        </div>
        </div>
    );
};

export default CountBox;