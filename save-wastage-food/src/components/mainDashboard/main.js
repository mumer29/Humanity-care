import React, { Component } from 'react'
import Navbar from './Navbar';
import Table from "./Table"
import Dashborad from './Dashboard'
import Sidebar from './Sidebar'
function Main() {

    // render() {
        return (
            <div>
                <Navbar />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">

                            <Sidebar />
                        </nav>
                    </div>

                    <div id="layoutSidenav_content">
                        <Dashborad />
                        <Table
                        />
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; Your Website 2020</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
export default Main;
