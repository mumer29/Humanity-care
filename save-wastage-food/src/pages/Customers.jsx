// import React from 'react';
import { firestore } from "../firebase";
import React, { useState, useEffect } from 'react';




import Table from '../components/table/Table'

// import customerList from '../assets/JsonData/customers-list.json'

const customerTableHead = [
    'amount',
    'authProvider',
    'donationType',
    'donorEmail',
    'donorName',
    'donorPhone',
    'payment '

]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.amount}</td>
        <td>{item.authProvider}</td>
        <td>{item.donationType}</td>
        <td>{item.phdonorEmailone}</td>
        <td>{item.donorName}</td>
        <td>{item.donorPhone}</td>
        <td>{item.payment}</td>
    </tr>
)

const Customers = () => {


    // const [db, setDb] = useState([]);
    const [tableData, settableData] = useState("")
    // console.log(tableData);
    useEffect(() => {
        getdata();
    }, []);
    console.log("table data", tableData);


    async function getdata() {

        let users = [];
        await firestore.collection("donor").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data()
                // console.log("database data", data.amount);
                //    let result =  Object.values(data);
                // setDb([...db, data])
                // settableData({ ...tableData, data })


                //    console.log(data); 
                users.push(data)
            })
        })
        settableData(users)
        // console.log(users);

        // const ref = firestore().collection("donor").doc();
        // ref.get().then((doc) => {
        //   const donordata = doc.data();
        //   console.log(donordata);
        //   if (doc.exists) {
        //     settableData({
        //       id: donordata.id,
        //       name: donordata.name,
        //       email: donordata.email,
        //       phone: donordata.phone,
        //       total_orders: donordata.total_orders,
        //       total_spend: donordata.total_spend,
        //       location: donordata.location,
        //       createdAt: donordata.createdAt
        //     });
        //   } else {
        //     console.log("No doc found!");
        //   }
        // });

    }
    // console.log(users);
    // let users = [];
    // users.push(db)
    // useEffect(() => {
    //     postData()
    // }, []);
    // let result = Object.entries(db)
    // let user;
    // console.log(user);
    // window.addEventListener('load', async (event) => {
    //    user = []

    //     await firestore.collection("donor").get().then((querySnapshot) => {
    //         querySnapshot.forEach(element => {
    //             var data = element.data()
    //             //    let result =  Object.values(data);
    //             // setDb([...db, data])
    //             //    console.log(data); 
    //             user.push(data)
    //         })
    //     })
    // console.log('page is fully loaded');
    // console.log("inner",user);
    // });



    // const tableCol = [
    //     {
    //         title: " ID",
    //         field: "id"
    //     },
    //     {
    //         title: "Name",
    //         field: "name"
    //     },
    //     ,
    //     {
    //         title: "Email",
    //         field: "email"
    //     },
    //     {
    //         title: "Phone",
    //         field: "phone"
    //     },
    //     {
    //         title: " Total Order ",
    //         field: "total_orders"
    //     },
    //     {
    //         title: "Spend Order",
    //         field: "total_spend",

    //     },
    //     {
    //         title: " Location ",
    //         field: "location"
    //     },

    //     {
    //         title: "Submitted at",
    //         field: "createdAt"
    //     }
    // ];


console.log(tableData);

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
                            {/* <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            /> */}

                            <div>
                                {tableData.map((item, index) => (
                                    <div>
                                        <span>{item.donorName}</span>
                                    </div>
                                ))}
                            </div>
                            {/* <Table
                                title={"Student's Feedback"}
                                data={tableData}
                                columns={tableCol}

                                options={{
                                    headerStyle: {
                                        backgroundColor: "#01579b",
                                        color: "#FFF"
                                    },
                                    exportButton: true,
                                    selection: false,
                                    search: true
                                }}

                            /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <  Outlet/> */}
        </div>
    )
}

export default Customers
