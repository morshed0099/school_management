import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarRight from '../Component/SidebarRight';
import Sidebarleft from '../Component/Sidebarleft';

const Main = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <SidebarRight />
                </div>
                <div className='flex-1'>  <Outlet /></div>
                <div>
                    <Sidebarleft />
                </div>
            </div>
        </div>
    );
};

export default Main;