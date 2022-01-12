

import { Link, Outlet, useNavigate, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { NonRegisterDonor, auth, db, logout, RegisterDonor, firestore, RegistredSeeker } from '../../firebase'
import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import './sidebar.css'





const Sidebar = props => {
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    const fetchUserData = async () => {
    

        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
    
    
            if (data.userType === "Admin") {
    
                document.getElementById("sidebarAdmin").style.display = "block"
                document.getElementById("sidebarSeeker").style.display = "none"
                document.getElementById("sidebardDonor").style.display = "none"
    
    
            } else if (data.userType === "Donor") {
    
                document.getElementById("sidebarAdmin").style.display = "none"
                document.getElementById("sidebarSeeker").style.display = "none"
                document.getElementById("sidebardDonor").style.display = "block"
    
            } else {
    
                document.getElementById("sidebarAdmin").style.display = "none"
                document.getElementById("sidebarSeeker").style.display = "inline-table"
                document.getElementById("sidebardDonor").style.display = "none"
            }
        } catch (err) {
            toast.error("An error occured while fetching user data")
        }
    
    
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return history.push("/dashboard");
        // fetchUserEmail();
        fetchUserData();
    
    }, [user, loading]);


    return (
        <div>
            <div className='sidebar'
                id='sidebarAdmin'
                style={{ display: "none" }}
            >
                <div className="sidebar__logo">
                    <img src='/logo/blueLogo.png' alt="company logo" />
                </div>
                <Link to="/dashboard">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner active`}>
                            <i className="bx bx-category-alt"></i>
                            <span>
                                Dashboard
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="/dashboard/customers">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner `}>
                            <i className="bx bx-user-pin"></i>
                            <span>
                                Users
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="/dashboard/orders">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner `}>
                            <i className="bx bx-cart"></i>
                            <span>
                                Donation History
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="/dashboard/categories">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner `}>
                            <i className="bx bx-list-ol"></i>
                            <span>
                                Categories
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='sidebar'
                id='sidebardDonor'
                style={{ display: "none" }}
            >
                <div className="sidebar__logo">
                    <img src='/logo/blueLogo.png' alt="company logo" />
                </div>
                <Link to="/dashboard">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner active`}>
                            <i className="bx bx-category-alt"></i>
                            <span>
                                Dashboard
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="/dashboard/customers">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner `}>
                            <i className="bx bx-user-pin"></i>
                            <span>
                              Donation History
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="/dashboard/orders">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner `}>
                            <i className="bx bx-cart"></i>
                            <span>
                               Donate
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="/dashboard/categories">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner `}>
                            <i className="bx bx-list-ol"></i>
                            <span>
                                Categories
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='sidebar'
                id='sidebarSeeker'
                style={{ display: "none" }}
            >
                <div className="sidebar__logo">
                    <img src='/logo/blueLogo.png' alt="company logo" />
                </div>
                <Link to="/dashboard">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner active`}>
                            <i className="bx bx-category-alt"></i>
                            <span>
                                Dashboard
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="/dashboard/customers">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner `}>
                            <i className="bx bx-user-pin"></i>
                            <span>
                               Donor
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="/dashboard/orders">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner `}>
                            <i className="bx bx-cart"></i>
                            <span>
                               Request
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="/dashboard/categories">
                    <div className="sidebar__item">
                        <div className={`sidebar__item-inner `}>
                            <i className="bx bx-list-ol"></i>
                            <span>
                                Categories
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
