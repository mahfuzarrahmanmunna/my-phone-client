import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div>
            <h2>Total Phones {data.length}</h2>
            {
                data.map((phone, ind) => <li key={ind} >
                    <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                </li>)
            }
        </div>
    );
};

export default Phones;