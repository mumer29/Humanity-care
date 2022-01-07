// import React from 'react'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth, db, logout } from "../../firebase";


import './topnav.css'

// import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/tuat.png'

import user_menu from '../../assets/JsonData/user_menus.json'






const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to='/dashboard' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();

    const fetchUserName = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return history.push("/");
        fetchUserName();
    }, [user, loading]);

    const curr_user = {
    display_name: name,
    image: user_image

}
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                {/* <i class="far fa-user dashborad-user"></i> */}

                  <h4 
                  style={{margin:"0"}}> {name}</h4>  
                    {/* dropdown here */}
                    {/* <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    /> */}
                    {/* <div className="dashboard"> */}
                        {/* <div className="dashboard__container"> */}
                            {/* user name */}
                            {/* <div>{name}</div> */}
                            {/* <div>{user?.email}</div> */}
                            {/* <button className="dashboard__btn" onClick={logout}>
                                Logout
                            </button> */}
                        {/* </div> */}
                    {/* </div> */}
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/dashboard'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    )
}

export default Topnav
