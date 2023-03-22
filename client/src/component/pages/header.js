import React ,{useEffect,useState}from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import config from "../../config";

function Navigation() {

  const navigate = useNavigate();
const [role, setrole] = useState("");
const [user, setuser] = useState([]);
  const logout=()=>{
    localStorage.clear(); //for localStorage
    navigate("/login")
  }
 /*  console.log("header",window.location.href);
  if(window.location.href==`${config.front_URL}/login`){  //  http://localhost:3000/login
    return null;
  }  */  
  
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("status")) == true) {
      setrole(JSON.parse(localStorage.getItem("roletype")));
      setuser(JSON.parse(localStorage.getItem("UserData")));
      console.log("data is role home:", role);
      console.log("data is user home:", user);
      
    } else {
      navigate("/login");
    }
  }, [role]);
  return (

   

    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <Link className="navbar-brand brand-logo mr-5" to="/home">Omsons</Link>
      <Link className="navbar-brand brand-logo-mini" to="/home"><h3>Omsons</h3></Link>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span class="icon-menu"></span>
        </button>
        {/* <ul class="navbar-nav mr-lg-2">
          <li class="nav-item nav-search d-none d-lg-block">
            <div class="input-group">
              <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span class="input-group-text" id="search">
                  <i class="icon-search"></i>
                </span>
              </div>
              <input type="text" class="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search"/>
            </div>
          </li>
        </ul> */}
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item dropdown">
            {/* <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i class="icon-bell mx-0"></i>
              <span class="count"></span>
            </a> */}
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-success">
                    <i class="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Application Error</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-warning">
                    <i class="ti-settings mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Settings</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-info">
                    <i class="ti-user mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">New user registration</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
         {/*  <li class="nav-item nav-profile dropdown">
                      <div className="justify-content-end d-flex">
                        <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                          <button
                            className="btn btn-sm btn-light  dropdown-toggle class navbutn1"
                            type="button"
                            id="dropdownMenuDate2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <i className="mdi mdi-calendar"></i> Home
                          </button>
                          
                        </div>
                      </div>
          </li> */}
            {/* <li class="nav-item nav-profile dropdown">
                      <div className="justify-content-end d-flex">
                        <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                          <button
                            className="btn btn-sm btn-light  dropdown-toggle class navbutn1"
                            type="button"
                            id="dropdownMenuDate2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <i className="mdi mdi-calendar"></i> Order
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right ordercls"
                            aria-labelledby="dropdownMenuDate2"
                          >
                            <a className="dropdown-item" href="1">
                              January - March
                            </a>
                            <a className="dropdown-item" href="1">
                              March - June
                            </a>
                            <a className="dropdown-item" href="1">
                              June - August
                            </a>
                            <a className="dropdown-item" href="1">
                              August - November
                            </a>
                          </div>
                        </div>
                      </div>
          </li>
   */} { role === 3 ?
    " ":   <li class="nav-item nav-profile dropdown">
                      <div className="justify-content-end d-flex">
                        <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                          <button
                            className="btn btn-sm btn-light bg-white dropdown-toggle"
                            type="button"
                            id="dropdownMenuDate2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <i className="mdi mdi-calendar"></i>Order Management
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuDate2"
                          >
                        {role === 2 ? (
                         <>
                        <Link className="dropdown-item" to="/addorderfile">
                         Add Orders
                        </Link>
                        <Link className="dropdown-item" to="/dealerOrderlist">
                        Orders Status
                        </Link>
                        <Link className="dropdown-item" to="/dispatchsts">
                        Dispatch Status
                        </Link>
                        <Link className="dropdown-item" to="/OrderHistory">
                        {" "}
                        Order History
                        </Link></>
             
                        ) : role === 1 ?
                        <Link className="dropdown-item" to="/orderlist">
                        {" "}
                        Orders List
                        </Link>: ""}
                           
                          </div>
                        </div>
                      </div>
          </li> }

          <li class="nav-item nav-profile dropdown">
                      <div className="justify-content-end d-flex">
                      {
                      
                      role == 1 ?
                     
                     <button
                            className="btn btn-sm btn-light  dropdown-toggle class navbutn"
                            type="button"
                            id="dropdownMenuDate2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <i className="mdi mdi-calendar"></i> {user.staff_name}
                          </button>
                     :role == 2 ?
                   
                     <button
                            className="btn btn-sm btn-light  dropdown-toggle class navbutn"
                            type="button"
                            id="dropdownMenuDate2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <i className="mdi mdi-calendar"></i>{user.Dealer_Name}
                          </button>
                     :role == 3 ?
                     <button
                            className="btn btn-sm dropdown-toggle class navbutn"
                            type="button"
                            id="dropdownMenuDate2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <i className="mdi mdi-calendar"></i>{user.ADMIN_NAME}
                          </button>
                    
                     :
                    <p> login please</p>
                }
                      </div>
                 </li>
          <li class="nav-item nav-profile dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src="../../images/faces/face28.jpg" alt="profile"/>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
               <Link className="dropdown-item" to="/about">
                <i class="ti-settings text-primary"></i>
                Settings
              </Link>
              <a class="dropdown-item" onClick={()=>logout()}>
                <i class="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
          
          {/* <li class="nav-item nav-settings d-none d-lg-flex">
            <a class="nav-link" href="#">
              <i class="icon-ellipsis"></i>
            </a>
          </li> */}
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="icon-menu"></span>
        </button>
      </div>
    </nav>
    


    
    
  );
}

export  {Navigation};