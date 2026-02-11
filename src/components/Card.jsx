import React from 'react';

const Card = ({issues}) => {
    return (
        <div>
            <div className='cursor-pointer shadow-md rounded-md bg-gray-100'>
            <div>
              <img className='h-20 rounded-full' src={issues.userImg} alt={issues.requestedBy} />
              <h1 className='font-extrabold'>{issues.requestedBy}</h1>
              <h2>{issues.subject}</h2>
              <span className={`mr-3 font-bold px-4 py-1 rounded-md ${issues.priority == 'High' ? 'text-red-400 bg-red-300' : issues.priority == 'Medium'? "text-yellow-300 bg-amber-100" : 'bg-gray-500 text-white'}`} >{issues.priority}</span>
              <span className={`font-bold  ${issues.status == 'Pending' ? 'text-red-400 bg-red-300' : issues.status == 'Submitted'? "text-yellow-300 bg-amber-100" : 'bg-green-500 text-white'}`}>{issues.status}</span>
              <h2 className='font-bold'>{issues.description}</h2>
            </div>
          </div>
        </div>
    );
};

export default Card;