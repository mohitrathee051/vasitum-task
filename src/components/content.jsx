import React from 'react';
import './content.css';
import linegraph1 from '../assets/linegraph1.png';
import linegraph2 from '../assets/linegraph2.png';
import menu from '../assets/menu.png';
import arrow from '../assets/arrow.png';
import options from '../assets/options.png';


const Content = () => {
    return (

        <div className='Full'>
            <div className="mainleft">
                <h3>Dashboard</h3>
                <div className='topleft'>
                    <div className="position">
                        <p>Available Position</p>
                        <h4>24</h4>
                        <h5>4 Urgently needed</h5>
                    </div>
                    <div className="job">
                        <p>Job Open</p>
                        <h4>10</h4>
                        <h5>4 Active hiring</h5>
                    </div>
                    <div className="employee">
                        <p>New Employees</p>
                        <h4>24</h4>
                        <h5>4 Department</h5>
                    </div>
                </div>

                <div className="mid">
                    <div className="first">
                        <div className="leftpart">
                            <p>Total Employees</p>
                            <p>216</p>
                            <p>120 Men</p>
                            <p>96 Women</p>
                        </div>
                        <img src={linegraph1} alt="" />
                    </div>
                    <div className="second">
                        <div className="leftpart">
                            <p>Talent Request</p>
                            <p>16</p>
                            <p>6 Men</p>
                            <p>10 Women</p>
                        </div>
                        <img src={linegraph2} alt="" />
                    </div>
                </div>
                <div className="bottomleft">

                    <div className="boxes">
                        <div className="midbot">
                            <p>Announcement</p>
                            <div className="dateicon">
                                <p>Today, 13 Sep 2021</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className="box1">
                            <div className="twoboxfirst">
                                <p>Outing schedule for every departement</p>
                                <p>5 minutes ago</p>
                            </div>
                            <img src={options} alt="" />
                        </div>
                        <div className="box2">
                            <div className="twoboxfirst">
                                <p>Meeting HR Department</p>
                                <p>Yesterday, 12:30 PM</p>
                            </div>
                            <img src={options} alt="" />
                        </div>
                        <div className="box3">
                            <div className="twoboxfirst">
                                <p>IT Department need two more talents for UX/UI Designer position</p>
                                <p>Yesterday, 09:15 AM</p>
                            </div>
                            <img src={options} alt="" />
                        </div>
                        <button>See All Announcement</button>
                    </div>
                </div>
            </div>

            <div className="rightside">
                <div className="topright">
                    <div className="one">
                        <p>Recently Activity</p>
                    </div>
                    <div className="two">
                        <p>10.40 AM, Fri 10 Sept 2021</p>
                        <h5>You Posted a New Job</h5>
                        <p>Kindly check the requirements and terms of work and make sure everything is right.</p>

                    </div>
                    <div className="three">
                        <p>Today you makes 12 Activity</p>
                        <button>See All Activity</button>
                    </div>
                </div>
                <div className="bottomright">
                    <div className="oneright">
                        <p>Upcoming Schedule</p>
                        <div className="dateicon">
                            <p>Today, 13 Sep 2021</p>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="tworight">
                        <p>Priority</p>
                        <div className="twobox">
                            <div className="twoboxfirst">
                                <p>Review candidate applications</p>
                                <p>Today - 11.30 AM</p>
                            </div>
                            <img src={menu} alt="" />
                        </div>
                    </div>
                    <div className="threeright">
                        <p>Other</p>
                        <div className="threebox">
                            <div className="threebox1">
                                <div className="boxitem1">
                                    <p>Interview with candidates</p>
                                    <p>Today - 11.30 AM</p>
                                </div>
                                <img src={menu} alt="" />
                            </div>
                            <div className="threebox2">
                                <div className="boxitem2">
                                    <p>Short meeting with product designer from IT Departement</p>
                                    <p>Today - 11.30 AM</p>
                                </div>
                                <img src={menu} alt="" />
                            </div>
                        </div>
                    </div>
                    <button>Create a New Schedule</button>
                </div>
            </div>
        </div>
    );
};

export default Content;
