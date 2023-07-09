import React from 'react';
import './Header.css';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { IoSettingsSharp } from 'react-icons/io5';
function Header() {
    return (
        <>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topleft">
                        <span className="logo">AdminPanel</span>
                    </div>
                    <div className="topright">
                        <div className="topbarIconContainer">
                            <IoIosNotificationsOutline />
                            <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <GrLanguage />
                            <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <IoSettingsSharp />
                        </div>
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header



