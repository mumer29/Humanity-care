import React from 'react';

function MainNavbar() {
  return (
    <navbar>
      <div className="container-fluid" style={{ backgroundColor: "#0895a4" }}>
        <div style={{ margin: 'auto', maxWidth: '1000px', height: "87px" }}>

          <div className="d-flex justify-content-between align-items-center pt-3 ">
            <div className="logo">
              <h1>LOGO</h1>
            </div>
            <div className="data">
              <nav className="navbar navbar-expand-lg navbar-light text-uppercase  "  >
                <ul className="navbar-nav align-items-center" >
                  <li className="nav-item ">
                    <a className="nav-link border-end " href="#" style={{ color: "white", fontSize: "13px", fontWeight: 500, padding: "0 20px" }} >home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link border-end" href="#" style={{ color: "white", fontSize: "13px", fontWeight: 500, padding: "0 20px" }}>discover <i class="fas fa-angle-down"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link border-end" href="#" style={{ color: "white", fontSize: "13px", fontWeight: 500, padding: "0 20px" }}>donate</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#" style={{ color: "white", fontSize: "13px", fontWeight: 500, padding: "0 20px" }}>get involved</a>
                  </li>
                  <li className="nav-item ">
                    <button className='btn btn-danger  text-uppercase btn-sm mx-2' style={{ fontWeight: 500, fontSize: '13px' }} >donate</button>
                  </li>
                  <div className='d-flex align-items-center' style={{ color: 'white' }}>
                    <li className="nav-item mx-3">
                      <i class="fas fa-search"></i>
                    </li>
                    <li className="nav-item mx-3">
                      <i class="fas fa-user"></i>
                    </li>
                    <li className="nav-item mx-3">
                      <i class="fas fa-shopping-bag"></i>
                    </li>
                  </div>


                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </navbar>


  )
}

export default MainNavbar
