// import React from 'react';
import { firestore, } from "../firebase";
import React, { useState, useEffect } from 'react';




import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list'

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

const Customers = () => {
 

    const [db, setDb] = useState([

    ]);
    

    // let users = [];
    // users.push(db)
    // useEffect(() => {
    //     postData()
    // }, []);
    // let result = Object.entries(db)
    let user;
    // console.log(user);
    window.addEventListener('load', async (event) => {
       user = []

        await firestore.collection("donor").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data()
                //    let result =  Object.values(data);
                // setDb([...db, data])
                //    console.log(data); 
                user.push(data)
            })
        })
        // console.log('page is fully loaded');
        console.log("inner",user);
    });

    





    return (
        <div>
            <h2 className="page-header">
                customers
                {/* {db.} */}
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                // limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={user}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <  Outlet/> */}
        </div>
    )
}

export default Customers
