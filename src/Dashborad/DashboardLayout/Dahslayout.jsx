import React from 'react';
import { Outlet } from 'react-router-dom';
import DahboardSidemenu from '../../Component/DahboardSidemenu';

const Dahslayout = () => {
    return (
        <div className='flex '>
            <div>
                <DahboardSidemenu />
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dahslayout;