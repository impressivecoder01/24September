import React, { use, useState } from 'react';
import Card from './Card';
import Container from './Container';
import CountBox from './CountBox';

const Management = ({fetchPromise}) => {
    const initialData = use(fetchPromise)
    
    const [data, setData] = useState(initialData)
    console.log(data)
    return (
       <CountBox data = {data} initialData = {initialData}></CountBox>
    );
};

export default Management;