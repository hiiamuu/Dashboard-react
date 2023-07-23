import React from 'react';
import './User.css';
import { MdPermIdentity, MdCalendarToday, MdMailOutline, MdLocationSearching, MdPublish } from 'react-icons/md';
import { FcPhoneAndroid } from 'react-icons/fc';
import { Link } from 'react-router-dom';


export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Annu Singh</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <MdPermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">annu99</span>
                        </div>
                        <div className="userShowInfo">
                            <MdCalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <FcPhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">+91 9874561230</span>
                        </div>
                        <div className="userShowInfo">
                            <MdMailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">annu99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <MdLocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">Kolkata | India</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder="annu99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder="Annu Singh" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder="annu99@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >phone</label>
                                <input type="text" placeholder="+91 9874561230" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" placeholder="Kolkata | India" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUpdateImg" />
                                <label htmlFor="file">
                                    <MdPublish className="userUpdateIcon" />
                                </label>
                                <input type="file" name="" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userupdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
