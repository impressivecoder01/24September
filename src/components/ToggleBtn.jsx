// import React, { useState } from 'react';
import Container from './Container';

const ToggleBtn = ({setToggleStatus, toggleStatus}) => {
   
    return (
        <>
        <Container>
<div className='flex'>
        <button onClick={() =>setToggleStatus('All') } className={`toggle-btn rounded-l-md ${toggleStatus== 'All' && 'bg-purple-400! text-white' }`}>All</button>
        <button onClick={() =>setToggleStatus('Pending') } className={`toggle-btn ${toggleStatus == 'Pending' && 'bg-purple-400! text-white'}`}>Pending</button>
        <button onClick={() =>setToggleStatus('Submitted') } className={`toggle-btn ${toggleStatus == 'Submitted' && 'bg-purple-400! text-white'}`}>Submitted</button>
        <button onClick={() =>setToggleStatus('Reviewed') } className={`toggle-btn rounded-r-md ${toggleStatus == 'Reviewed' && 'bg-purple-400! text-white'}`}>Reviewed</button>
      </div>
        </Container>
            
        </>
    );
};

export default ToggleBtn;