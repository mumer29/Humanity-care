import React, { Component } from 'react'
const $ = require('jquery')
$.DataTable = require('datatables.net')
export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }



    }
    async getUserData() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const responce = await fetch(url);
        const data = await responce.json();
        this.setState({ users: data })
    }
    componentDidMount() {
        this.getUserData().then(() => this.sync());

    }
    sync() {
        this.$el = $(this.el);
        this.$el.DataTable({
            data: this.state.users, //option 1
            // data: this.getUsersData1(), //option 2
            columns: [
                { title: "Name", data: "name" },
                { title: "Username", data: "username" },
                { title: "Email", data: "email" },
                { title: "Phone", data: "phone" },
                { title: "Website", data: "website" }
            ]
        });
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table mr-1"></i>
                        DataTable Example
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table class="table table-bordered"
                                ref={el => this.el = el}
                                id="dataTable"
                                width="100%" cellspacing="0"></table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
