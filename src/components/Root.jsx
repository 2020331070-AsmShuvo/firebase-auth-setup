import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Root = () => {
    return (
        <div className='m-2'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;