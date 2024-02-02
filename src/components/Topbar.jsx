import React from 'react';
import arrow from '../assets/arrow.png';
import profile from '../assets/profile.png';
import notifications from '../assets/notifications.png';
import dots from '../assets/dots.png';
import search from '../assets/search.png';
import burgermenu from '../assets/burgermenu.png';
import './topbar.css';

const Topbar = () => {
    return (
        <div className='nav'>
            <div className="left">
                <img src={burgermenu} alt="burgermenu" className='burger' />
                <input type="text" placeholder="Search.." />
                <img src={search} alt="search" />
            </div>
            <div className="right">
                <img src={notifications} alt="" className='notification' />
                <img src={dots} alt="" className='dots' />
                <img src={profile} alt="" className='profile' />
                <p className='name'>Admirra John</p>
                <img src={arrow} alt="" className='arrow' />
            </div>

        </div>
    );
};

export default Topbar;
