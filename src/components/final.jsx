// Import statements for your components
import React from 'react';
import './final.css';
import Topbar from './Topbar.jsx';
import Sidebar from './Sidebar.jsx';
import Content from './content.jsx';  // Ensure that the file name and component name match

function Final() {
    return (
        <div className='main'>
            <Sidebar />
            <div className="sub">
                <Topbar />
                <div className="helo"><Content /></div>

            </div>
        </div>
    );
}

export default Final;
