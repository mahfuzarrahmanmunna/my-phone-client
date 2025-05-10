import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            This is Phones page
        </div>
    );
};

export default Phones;