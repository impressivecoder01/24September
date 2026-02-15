import React, { use, useState } from 'react';
import Card from './Card';
import Container from './Container';
import CountBox from './CountBox';

const Management = ({fetchPromise, toggleStatus}) => {
    // console.log(toggleStatus)
    const initialData = use(fetchPromise)
    const [data, setData] = useState(initialData)
    const filteredData =toggleStatus == "All"? data : data.filter(element=> element.status == toggleStatus)
    console.log(filteredData)
    // console.log(data)
    return (
       <CountBox   data = {data} initialData = {initialData}></CountBox>
    );
};

export default Management;