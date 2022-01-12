
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {useHistory } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import './topnav.css'
import ThemeMenu from '../thememenu/ThemeMenu'




const Topnav = () => {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();

    const fetchUserName = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setName(data.name)
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

    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">

                    <h4 style={{ margin: "0" }}> {name}</h4>
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu />
                </div>
                <button className="btn btn-primary topnav__right-item"
                    style={{ fontSize: "20px" }}
                    onClick={logout}
                > Log out</button>

            </div>
        </div>
    )
}

export default Topnav
