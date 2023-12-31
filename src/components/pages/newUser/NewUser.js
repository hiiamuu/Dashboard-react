import React from 'react';
import './NewUser.css';

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label >Username</label>
                    <input type="text" placeholder='hiiamuu' />
                </div>
                <div className="newUserItem">
                    <label >Full Name</label>
                    <input type="text" placeholder='Aman Kumar' />
                </div>
                <div className="newUserItem">
                    <label >Email</label>
                    <input type="email" placeholder='aman16@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label >Password</label>
                    <input type="password" placeholder='aman@1620' />
                </div>
                <div className="newUserItem">
                    <label >Phone</label>
                    <input type="number" placeholder='+91 9632587410' />
                </div>
                <div className="newUserItem">
                    <label >Address</label>
                    <input type="text" placeholder='Bokaro | India' />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                        <button className="newUserButton">Create</button>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                {/* <div className="">
                    <button className="newUserButton">Create</button>
                </div> */}
            </form>
        </div>
    )
}
