import React, { use } from 'react';

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
      {
        initialData.map(issues =>{
          return <div className='cursor-pointer shadow-md rounded-md bg-gray-100'>
            <div>
              <img className='h-20 rounded-full' src={issues.userImg} alt={issues.requestedBy} />
              <h1 className='font-extrabold'>{issues.requestedBy}</h1>
              <h2>{issues.subject}</h2>
              <span className={`mr-3 font-bold px-4 py-1 rounded-md ${issues.priority == 'High' ? 'text-red-400 bg-red-300' : issues.priority == 'Medium'? "text-yellow-300 bg-amber-100" : 'bg-gray-500 text-white'}`} >{issues.priority}</span>
              <span className={`font-bold  ${issues.status == 'Pending' ? 'text-red-400 bg-red-300' : issues.status == 'Submitted'? "text-yellow-300 bg-amber-100" : 'bg-green-500 text-white'}`}>{issues.status}</span>
              <h2 className='font-bold'>{issues.description}</h2>
            </div>
          </div>
        })
      }
      <div className='flex flex-col items-center justify-center  text-white font-bold text-2xl bg-gray-600 h-[250px]'>
        <h1>Submit</h1>
        <p>0</p>
      </div>
        </div>
    );
};

export default Management;