import React, { use } from 'react';
import Card from './Card';
import Container from './Container';

const Management = ({fetchPromise}) => {
    const initialData = use(fetchPromise)
    console.log(initialData)
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col items-center justify-center text-white font-bold text-2xl bg-gray-600 h-[250px]'>
        <h1>Pending</h1>
        <p>0</p>
      </div>
      <div className='flex flex-col items-center justify-center  text-white font-bold text-2xl bg-gray-600 h-[250px]'>
        <h1>Review</h1>
        <p>0</p>
      </div>
      
      <div className='flex flex-col items-center justify-center  text-white font-bold text-2xl bg-gray-600 h-[250px]'>
        <h1>Submit</h1>
        <p>0</p>
      </div>
      
        {
        initialData.map((issues, ind) =>{
          return <Card key={ind} issues={issues}></Card>
        })
      }
      
      
        </div>
    );
};

export default Management;