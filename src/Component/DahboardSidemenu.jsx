import React from 'react';
import { NavLink } from 'react-router-dom';

const DahboardSidemenu = () => {
    return (
        <div className='flex flex-col gap-4 p-2 bg-gray-300 min-h-screen'>
            <NavLink to='/dashboard/addemplyee'>কর্মকত্রা যোগ করুন</NavLink>
            <NavLink to='/dashboard/addteacher'>শিক্ষক যোগ করুন</NavLink>
            <NavLink to='/dashboard/addstudent'>ছাত্র/ছাত্রী যোগ করুন</NavLink>
            <NavLink to='/dashboard/addschool'>বিদ্যালয় যোগ করুন </NavLink>
            <NavLink to='/dashboard/adddistic'>জেলা যোগ করুন </NavLink>
            <NavLink to='/dashboard/addthana'>উপজেলা যোগ করুন </NavLink>
            <NavLink to='/login'>লগইন করুন </NavLink>
            <NavLink to='/signin'>রেজিষ্টার করুন</NavLink>
        </div>
    );
};

export default DahboardSidemenu;