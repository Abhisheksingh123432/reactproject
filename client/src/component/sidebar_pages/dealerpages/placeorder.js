import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Sidebar } from "../sidebar";
import config from "../../../config";
import { Navigation } from "../../pages/header";
import ClipLoader from "react-spinners/ClipLoader";
import moment from "moment";
function AddOrderfile() {
  const navigate = useNavigate();
  const [dropdownCount, setDropdownCount] = useState(false);
  let   [loadingInProgress, setLoading] = useState(false);
  
  
	const [quantity, setQuantity] = useState(1); //number of item
  


  const [name, setName] = useState("");
  const [Date, setDate] = useState(moment().format("MMMM Do YYYY"));
  const [amount, setamount] = useState("");
 
  const [location, setlocation] = useState("");
  const [prdctqyt, setprdctqyt] = useState("S");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [dealercode, setDealercode] = useState("");
  const [dealer, setdealer] = useState("");
  const [number, setNumber] = useState("");
  const [role, setrole] = useState("");
  const [file, setFile] = useState("");
  const [staterender, setstaterender] = useState();
  const [status, setStatus] = useState(0);
  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem("UserData"))
  );
  console.log('test staff:',user.assignedstaff)
 
  console.log("data is user order:", user.Dealer_Address);

  console.log("DEALER", dealer);
  const [staffname, setstaffname] = useState([]);
  const fetchDatastaffname =async () => {
    return  setLoading(true) , await fetch(`${config.backend_URL}/api/staffname?id=${user.assignedstaff}`)
      .then((response) => response.json())
      .then((data) => setstaffname(data.data.staff_name)),setLoading(false);
  };
  console.log("staffname",staffname);
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  let handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    let formData = new FormData(); //formdata object
    formData.append("order_dealer", user.Dealer_Id);
    formData.append("orderdata_productquantity",quantitysate);
    formData.append("orderdata_productid", name);
    //api call starts using axios
    axios
      .post(`${config.backend_URL}/api/PlaceOrder`, formData)
      .then(async (data) => {
        console.log(data.data);
        if (data.status) {
          setLoading(false)
          toast(data.data.msg);
        } else {
          toast(data.data.msg);
          e.target.reset();
        }
      })

      .catch((err) => {
        console.log("error", err);
      });
    // second api call starts using axios
  };
  let handleSubmitproductarray = async () => {
    
    alert("buttonclicked")
    setLoading(true);
    let formData = new FormData(); //formdata object
    // formData.append("order_dealer", user.Dealer_Id);
    formData.append("productorder",JSON.stringify(arr1));
    
    //api call starts using axios
    axios
      .post(`${config.backend_URL}/api/PlaceOrderarray?id=${user.Dealer_Id}`,formData)
      .then(async (data) => {
        console.log(data.data);
        if (data.status) {
          setLoading(false)
          toast(data.data.msg);
          setarr([{ productname: "", producQuanity: "1", price: 0,key:1 }])
        } else {
          setLoading(false)
          toast(data.data.msg);
          
        }
       
      })

      .catch((err) => {
        console.log("error", err);
      });
    // second api call starts using axios
  };
  let handleSubmitfile = async (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData(); //formdata object
    formData.append("order_dealer", user.Dealer_Id);
    formData.append("exelefile", file);

    //api call starts using axios
    axios
      .post(`${config.backend_URL}/api/importdata`, formData)
      .then(async (data) => {
        console.log(data.data);
        if (data.status) {
          setLoading(false)
          console.log("file", file);
          toast(data.data.msg);
        } else {
          toast(data.data.msg);
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
    // second api call starts using axios
  };
  
  const [products, setproduct] = useState([]);
  const fetchData = () => {
    return  setLoading(true), fetch(`${config.backend_URL}/api/productname`)
      .then((response) => response.json())
      .then((data) => setproduct(data.data)), setLoading(true);
  };
  const [staff, setStaff] = useState("");
  const fetchData2 = () => {
    return fetch(`${config.backend_URL}/api/test`)
      .then((response) => response.json())
      .then((data) => setStaff(data.data));
  };


// arrya of product start
const [arr1, setarr] = useState([{ productname: "", producQuanity: "1", price: 0,key:1 }]);
const [prodctsate, setprodctsate] = useState([name]);
const [quantitysate, setquantitysate] = useState([quantity]);
const [priceselect, setpriceselect] = useState(0);
const addUrl = (e) => {
  alert('manish',quantitysate);
  let arr = arr1;
  arr.push({
    productname: "",
    producQuanity: "1",
    price: 0,
    key: arr.length+1,
  })
  setarr(arr);
  let arrpname = prodctsate;
  let arrpquantity = quantitysate;
  arrpname.push(name);
  arrpquantity.push(quantity);
  setprodctsate(arrpname);
  setquantitysate(arrpquantity);
  setStatus(status+1)
  
  console.log('test arr',prodctsate,arrpquantity)
};
const   handleChangeselect=(e,i,pr)=>{
 
  
  setpriceselect(pr);
  
  const nextCounters = prodctsate.map((c, index) => {
    if (index === i) {
      // Increment the clicked counter
      return  e.target.value;
    } else {
      // The rest haven't changed
      return c;
    }
  });
  setprodctsate(nextCounters);
  setStatus(status+1)
 
  // alert(e.target.getAttibute('value'))
 // console.log("price is e.target.dataprice",e.target.getAttribute("data-price"))
  
    var newData = [...arr1];
    
    newData[i].productname = e.target.value
    newData[i].price =pr;
    console.log('test arrtest',newData[i].productname) 
    console.log("priceselect%%%%%",priceselect)
    //this.props.sendData("arrUrl", newData);
   console.log("newdata",newData)
  
}
const updateQuantity = ( i) => {
  const nextCounters = quantitysate.map((c, index) => {
    if (index === i) {
      // Increment the clicked counter
      return  c+1;
    } else {
      // The rest haven't changed
      return c;
    }
  });

  setquantitysate(nextCounters);
  setStatus(status+1)
  var newData = [...arr1];
    
    newData[i].producQuanity = quantitysate[i] + 1;
    

  
};
const DecQuantity = (i) => {
 
  const nextCounters = quantitysate.map((c, index) => {
    console.log("c is:::::::",c)
    if (c>1) {
    if (index === i) {
      // Increment the clicked counter
      return  c-1;
    } else {
      // The rest haven't changed
      return c;
    } } else {
      // The rest haven't changed
      return c;
    }
  });
  setquantitysate(nextCounters);
  setStatus(status+1)
  var newData = [...arr1];
    
    newData[i].producQuanity = quantitysate[i] - 1;
};
const removeUrl = (id) => {
  setarr((current) =>
  current.filter((productarr) => productarr.key !== id)
 );
};
useEffect(() => {
    //setarr(arr1);
    
    if (JSON.parse(localStorage.getItem("status")) == true) {
      setrole(JSON.parse(localStorage.getItem("roletype")));
      setuser(JSON.parse(localStorage.getItem("UserData")));
      console.log("data is role home:", role);
      console.log("data is user home:", user);
      console.log("product in array to upload",arr1);
      fetchData();
      fetchData2();
      fetchDatastaffname();
      
    } else {
      navigate("/login");
    }
  }, [role]);
  console.log("price is",priceselect)
  console.log("name", name);
  console.log("name in state", prodctsate);
  console.log("quantitysate###########", quantitysate);
  console.warn("auantity%%%$$$%%$$%%",quantitysate[1]);
  return (
    <>
      <Navigation />
      <ToastContainer />
      <div class="container-fluid page-body-wrapper">
        <div class="theme-setting-wrapper">
          <div id="settings-trigger">
            <i class="ti-settings"></i>
          </div>
          <div id="theme-settings" class="settings-panel">
            <i class="settings-close ti-close"></i>
            <p class="settings-heading">SIDEBAR SKINS</p>
            <div class="sidebar-bg-options selected" id="sidebar-light-theme">
              <div class="img-ss rounded-circle bg-light border mr-3"></div>
              Light
            </div>
            <div class="sidebar-bg-options" id="sidebar-dark-theme">
              <div class="img-ss rounded-circle bg-dark border mr-3"></div>Dark
            </div>
            <p class="settings-heading mt-2">HEADER SKINS</p>
            <div class="color-tiles mx-0 px-4">
              <div class="tiles success"></div>
              <div class="tiles warning"></div>
              <div class="tiles danger"></div>
              <div class="tiles info"></div>
              <div class="tiles dark"></div>
              <div class="tiles default"></div>
            </div>
          </div>
        </div>
        <div id="right-sidebar" class="settings-panel">
          <i class="settings-close ti-close"></i>
          <ul class="nav nav-tabs border-top" id="setting-panel" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="todo-tab"
                data-toggle="tab"
                href="#todo-section"
                role="tab"
                aria-controls="todo-section"
                aria-expanded="true"
              >
                TO DO LIST
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="chats-tab"
                data-toggle="tab"
                href="#chats-section"
                role="tab"
                aria-controls="chats-section"
              >
                CHATS
              </a>
            </li>
          </ul>
          <div class="tab-content" id="setting-content">
            <div
              class="tab-pane fade show active scroll-wrapper"
              id="todo-section"
              role="tabpanel"
              aria-labelledby="todo-section"
            >
              <div class="add-items d-flex px-3 mb-0">
                <form class="form w-100">
                  <div class="form-group d-flex">
                    <input
                      type="text"
                      class="form-control todo-list-input"
                      placeholder="Add To-do"
                    />
                    <button
                      type="submit"
                      class="add btn btn-primary todo-list-add-btn"
                      id="add-task"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div class="list-wrapper px-3">
                <ul class="d-flex flex-column-reverse todo-list">
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Team review meeting at 3.00 PM
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Prepare for presentation
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Resolve all the low priority tickets due today
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li class="completed">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" checked />
                        Schedule meeting for next week
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li class="completed">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" checked />
                        Project review
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                </ul>
              </div>
              <h4 class="px-3 text-muted mt-5 font-weight-light mb-0">
                Events
              </h4>
              <div class="events pt-4 px-3">
                <div class="wrapper d-flex mb-2">
                  <i class="ti-control-record text-primary mr-2"></i>
                  <span>Feb 11 2018</span>
                </div>
                <p class="mb-0 font-weight-thin text-gray">
                  Creating component page build a js
                </p>
                <p class="text-gray mb-0">The total number of sessions</p>
              </div>
              <div class="events pt-4 px-3">
                <div class="wrapper d-flex mb-2">
                  <i class="ti-control-record text-primary mr-2"></i>
                  <span>Feb 7 2018</span>
                </div>
                <p class="mb-0 font-weight-thin text-gray">
                  Meeting with Alisa
                </p>
                <p class="text-gray mb-0 ">Call Sarah Graves</p>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="chats-section"
              role="tabpanel"
              aria-labelledby="chats-section"
            >
              <div class="d-flex align-items-center justify-content-between border-bottom">
                <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                  Friends
                </p>
                <small class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">
                  See All
                </small>
              </div>
              <ul class="chat-list">
                <li class="list active">
                  <div class="profile">
                    <img src="../../images/faces/face1.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Thomas Douglas</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">19 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face2.jpg" alt="image" />
                    <span class="offline"></span>
                  </div>
                  <div class="info">
                    <div class="wrapper d-flex">
                      <p>Catherine</p>
                    </div>
                    <p>Away</p>
                  </div>
                  <div class="badge badge-success badge-pill my-auto mx-2">
                    4
                  </div>
                  <small class="text-muted my-auto">23 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face3.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Daniel Russell</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">14 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face4.jpg" alt="image" />
                    <span class="offline"></span>
                  </div>
                  <div class="info">
                    <p>James Richardson</p>
                    <p>Away</p>
                  </div>
                  <small class="text-muted my-auto">2 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face5.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Madeline Kennedy</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">5 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face6.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Sarah Graves</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">47 min</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {loadingInProgress ? <div className="parentdiv"><div className="loaderclsdiv"><ClipLoader className="loadercls" text-align="center" color={'#000'} loading={loadingInProgress}  size={35} /></div></div>: ""}

        <Sidebar />

        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title"> </h4>
                    {/*   <button class="btn btn-danger" style={{ float: "right" }}>
                      Add
                    </button>
                    <p class="card-description"></p> */}
                    <form
                      class="forms-sample"
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      <div class="row">
                        {/* <div class="col-3">
                          <div class="form-group">
                            <label for="exampleInputName1">Product Name</label>

                            <select
                              class="form-control"
                              id="options"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                            >
                              <option value="" disabled selected>
                                Select a Product
                              </option>
                              {products.map((userdata, index) => {
                                return (
                                  <option value={userdata.product_id}>
                                    {" "}
                                    {userdata.product_name}
                                    {"(Product code:"}
                                    {userdata.product_id}
                                    {")"}
                                  </option>
                                );
                              })}
                            </select>
                          </div><label for="exampleInputName1">Dispatch Date</label>
                        </div> */}
                        <div class="col-5">
                          <div class="row">
                            <div class="col-6">
                              <div class="form-group">
                                <label for="exampleInputName1">
                                  *Dispatch Date
                                </label>

                                <input
                                  class="form-control form-control1"
                                  id="exampleInputName1"
                                  placeholder="Product quantity"
                                  value={Date}
                                  readOnly
                                  onChange={(e) => setprdctqyt(e.target.value)}
                                />
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="form-group">
                                <label for="exampleInputName1">
                                  *Document Date
                                </label>

                                <input
                                  class="form-control form-control1"
                                  id="exampleInputName1"
                                  placeholder="Product quantity"
                                  value={Date}
                                  readOnly
                                  onChange={(e) => setprdctqyt(e.target.value)}
                                />
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="form-group">
                                <label for="exampleInputName1">
                                  *Customer ref no.
                                </label>

                                <input
                                  type="number"
                                  class="form-control form-control1"
                                  id="exampleInputName1"
                                  placeholder="ref no"
                                  value={prdctqyt}
                                  onChange={(e) => setprdctqyt(e.target.value)}
                                />
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="form-group">
                                <label for="exampleInputName1">
                                  Warehouse Name
                                </label>

                                <input
                                  type="text"
                                  class="form-control form-control1"
                                  id="exampleInputName1"
                                  placeholder="warehouse"
                                  /* value={} */
                                  onChange={(e) => setprdctqyt(e.target.value)}
                                />
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="form-group">
                                <label for="exampleInputName1">
                                  *Contact Person
                                </label>
                                
                                <input
                                  class="form-control form-control1"
                                  id="exampleInputName1"
                                  placeholder="Product quantity"
                                  value={staffname}
                                  readOnly
                                 
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="row">
                            <div class="col-6">
                              <div class="row">
                                <div class="col-12">
                                  <div class="form-group">
                                    <label for="exampleInputName1">
                                      *bill to
                                    </label>
                                    <textarea
                                      type="text"
                                      class="form-control form-control1"
                                      rows="4"
                                      readOnly
                                      id="exampleInputName1"
                                      placeholder="bill to"
                                      value={user.Dealer_Address}
                                      onChange={(e) =>
                                        setprdctqyt(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="row">
                                <div class="col-12">
                                  <div class="form-group">
                                    <label for="exampleInputName1">
                                      Ship to
                                    </label>
                                    <textarea
                                      type="text"
                                      class="form-control form-control1"
                                      rows="4"
                                      readOnly
                                      id="exampleInputName1"
                                      placeholder="Ship to"
                                      value={user.Dealer_Address}
                                      onChange={(e) =>
                                        setprdctqyt(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*  <div class="form-group">
                        <label for="exampleInputEmail3">Total Amount</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail3"
                          placeholder="Total Amount"
                          value={amount}
                          onChange={(e) => setamount(e.target.value)
                             }
                        />
                      </div> */}

                      {/*<div class="form-group">
                        <label for="exampleInputPassword4">Username</label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          id="exampleInputUsername"
                          placeholder="Username"
                        />
                      </div> */}
                      {/*   <div class="form-group">
                      <label for="exampleInputPassword4">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control"
                        id="exampleInputPassword4"
                        placeholder="Password"
                      />
                    </div> */}
                      {/*  <div class="form-group">
                     <label for="exampleSelectGender">location</label>
                      
                    <input
                        type="password"
                        value={location}
                        onChange={(e) =>  setlocation (e.target.value)}
                        class="form-control"
                        id="exampleInputPassword4"
                        placeholder="Password"
                      />
                    </div> */}
                      {/* <div class="form-group">
                      <label for="exampleSelectGender">Role type</label>
                      <select class="form-control" id="options"  onChange={(e) =>   setRole(e.target.value)} value={role}>
                       <option value="" disabled selected>Select a role</option>
                       
                       <option value="1"> Executive</option>
                       <option value="2">Field Executive </option>
                      </select>
                      
                    </div> */}

                      {/* <div class="form-group">
                        <label>File upload</label>

                        <div class="input-group col-xs-12">
                          <input
                            required
                            type="file"
                            onChange={(e) => onFileChange(e)}
                            class="form-control file-upload-info"
                            placeholder="Upload Image"
                          />
                        </div> </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 grid-margin stretch-card">
                <div class="card">
                 
                  <div class="card-body">
                  <div class="row">
                    <div class="col-6 ">
                    <h4 class="card-title">Place Order Via excel</h4> </div><div class="col-6 ">
                    <div className="download"><a href='images/Order Format.xlsx' download> Download</a></div>
                    </div>
                    </div>
                    <p class="card-description"></p>
                    <form
                      class="forms-sample"
                      onSubmit={(e) => handleSubmitfile(e)}
                    >
                      <div class="row">
                        <div class="col-6">
                          <div class="row">
                            <div class="col-12">
                            <div class="form-group">
                                    <label for="exampleInputName1">
                                      Ship to
                                    </label>
                                    <textarea
                                      type="text"
                                      class="form-control form-control1"
                                      rows="1"
                                      readOnly
                                      id="exampleInputName1"
                                      placeholder="Ship to"
                                      value={user.Dealer_Address}
                                      onChange=
                                      {(e) =>
                                        setprdctqyt(e.target.value)
                                      }
                                    />
                                  </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="form-group">
                            <label>File upload</label>
                            <div class="input-group col-12">
                              <input
                                required
                                type="file"
                                onChange={(e) => onFileChange(e)}
                                class="form-control form-control1 file-upload-info"
                                placeholder="Upload File"
                              />
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary mr-2">
                        Submit
                      </button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            

            <div class="row">
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">product List</h4>

                    <div class="table-responsive">
                   
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>List Price</th>

                            <th>Operations</th>
                          </tr>
                        </thead>
                        <tbody>
                        {arr1.map((dta,idx) => {
                              return (
                                <tr key={idx} id={idx} className={idx}>
                                  {/*  <td class="py-1">
                                <img
                                  src={userdata.Dealer_Image  ? `${config.backend_URL}/${userdata.Dealer_Image}`: "https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg"}
                                  alt="image"
                                />
                              </td> */}
                               {console.log('test arr in return',arr1)}
                         
                            
                                  <td>
                                    <select
                                      class="form-control"
                                      id="options"
                                      onChange={(e) =>handleChangeselect(e,idx,e.target[e.target.selectedIndex].getAttribute('data-price'))}
                                      value={prodctsate[idx]}
                
                                      name='productname'
                                    >
                                      <option value="" disabled selected>
                                        Select Product Name
                                      </option>
                                      {products.map((userdata, index) => {
                                        return (
                                          <option value={userdata.product_cat} data-price={userdata.product_price}>
                                            {" "}
                                            {userdata.product_name}
                                            {"(Product code:"}
                                            {userdata.product_cat}
                                            {")"}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </td>

                                  <td>
                                    {" "}
                                    <div className="counter">
                                      <button
                                        onClick={() => DecQuantity(idx)}
                                      >
                                      -
                                      </button>
                                      <p>{quantitysate[idx]}</p>
                                      <button
                                        onClick={() => updateQuantity(idx)}
                                      >
                                      +
                                      </button> 
                                    </div>
                                  </td>
                                  <td> {quantitysate[idx]*dta.price}</td>
                                  <td>
                                   
                                  
                                    
                                    {
                                     
                                      
                                     idx==0?
                                     <button
                                     type="button"
                                     className="buttonedit"
                                     onClick={(e)=>addUrl(e)} 
                                   >
                                     add
                                   </button>
                                      :
                                      <>
                                      <button
                                      type="button"
                                      className="buttonedit"
                                      onClick={(e)=> removeUrl(dta.key) }
                                     
                                        
                                        
                                    >
                                      remove
                                    </button></>}
                                    
                                  </td>
                                
                                </tr>
                              );
                            }
                          )
                          }
                          

                          
                            
                          
                        
                        </tbody>
                        
                      </table>
                    </div>
                  </div><div style={{textAlign:'center', width:'100%',paddingBottom:'20px'}}>

<button type="submit"  onClick={()=>handleSubmitproductarray()} class="btn btn-primary mr-2">
Submit
</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { AddOrderfile };