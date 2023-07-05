import React from 'react'
import './Sidebar.css'
import { HiOutlineMenu } from "react-icons/hi";
import { MdTimeline, MdDynamicFeed } from "react-icons/md";
import { FiTrendingUp, FiBarChart2, FiMail, FiMessageSquare } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sideWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <HiOutlineMenu className='sidebarIcon' />Home
                        </li>
                        <li className="sidebarListItem">
                            <MdTimeline className='sidebarIcon' />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <FiTrendingUp className='sidebarIcon' />Sales
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Links</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AiOutlineUser />Users
                        </li>
                        <li className="sidebarListItem">
                            <BiStore />Product
                        </li>
                        <li className="sidebarListItem">
                            <FaDollarSign />Transactions
                        </li>
                        <li className="sidebarListItem">
                            <FiBarChart2 />Reports
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <FiMail />Mail
                        </li>
                        <li className="sidebarListItem">
                            <MdDynamicFeed />Feedback
                        </li>
                        <li className="sidebarListItem">
                            <FiMessageSquare />Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HiOutlineMenu />Manage
                        </li>
                        <li className="sidebarListItem">
                            <MdTimeline />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <FiTrendingUp />Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
