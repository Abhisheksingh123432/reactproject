import React from "react";
import { Sidebar } from "../sidebar";
import {Navigation} from "../../pages/header";
import { useEffect, useState } from "react";
import config from "../../../config";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

import { ToastContainer, toast } from "react-toastify";

function Vieworder() {
  let   [loadingInProgress, setLoading] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");

  const [orders, setorders] = useState([]);
  const [status, setStatus] = useState("");
  const [Idhook, setId] = useState("");
  const [callstatus, setcallstatus] = useState(false);

  const setproduct = (id,option) => {
   
    setLoading(true) ;
    let formData = new FormData();

    formData.append("status", option);
    formData.append("id", id);
    console.log(formData);
    //api call starts using axios
    axios
      .post(`${config.backend_URL}/api/statusupdate`, formData)
      .then(async (data) => {
        console.log("in api", data);
         if (data.data.status) {
     
          if (data.data.status) {
            setLoading(false) ;
          toast(data.data.msg);
          window.location.reload(true);
        }    
          
        } else {
          toast(data.data.msg);
          setLoading(false) ;
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  console.log("status:", status);
  const fetchData = () => {
    console.log(id);
    return setLoading(true) , fetch(`${config.backend_URL}/api/orderdatalist?id=${id}`)
      .then((response) => response.json())
      .then((data) => setorders(data.data),setTimeout(() => {
        setLoading(false);
      }, 1000));
  };
  console.log("orders", orders);
  useEffect(() => {
    fetchData();
  },[]);


  return (
    <>{loadingInProgress ? <div className="parentdiv"><div className="loaderclsdiv"><ClipLoader className="loadercls" text-align="center" color={'#000'} loading={loadingInProgress}  size={35} /></div></div>: ""}
      <Navigation />
      <div class="container-fluid page-body-wrapper">
        <ToastContainer />

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

        <Sidebar />

        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title"> Order Details</h4>

                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                          <th>S.no.</th>
                            <th>cat no.</th>
                            <th>product name</th>
                            <th>Description</th>
                            <th>Capacity</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Price after Discount </th>
                            <th>Total Price</th>
                            <th>Remark</th>
                            <th>Status</th>
                            <th>date/time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((orderdata, index) => {
                            return (
                              <tr>
                                <td>{index + 1}</td>

<td>
  {/*  <img
  src={orderdata.staff_image  ? `${config.backend_URL}/${orderdata.staff_image}`: "https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg"}
  alt="image"
/> */}
  {orderdata.orderdata_cat_no
    ? orderdata.orderdata_cat_no
    : ""}
</td>
<td>
  {orderdata.product_name
    ? orderdata.product_name
    : ""}
 
</td>
<td>
  {orderdata.order_item_description
    ? orderdata.order_item_description
    : ""}
 
</td>
<td>
  {" "}
  {orderdata.orderdata_capacity
    ? orderdata.orderdata_capacity
    : ""}
</td>



    <td>
      {" "}
      {orderdata.orderdata_item_quantity
        ? orderdata.orderdata_item_quantity
        : ""}
    </td>
   
    <td>
      {" "}
      {orderdata.orderdata_item_unit
        ? orderdata.orderdata_item_unit
        : ""}
    </td>
    
    <td>
      {" "}
      {orderdata.orderdata_price
        ? orderdata.orderdata_price
        : ""}
    </td>
    <td>
{" "}
{
  orderdata.orderdata_discount
    ? orderdata.orderdata_discount
    : ""
}
</td>
    <td>
{" "}
{
  orderdata.orderdata_afterDisPrice
    ? orderdata.orderdata_afterDisPrice
    : ""
}
</td>
<td>
{" "}
{
  orderdata.orderdata_totalprice
    ? orderdata.orderdata_totalprice
    : ""
}
</td>
<td>
{" "}
{
  orderdata.remark
    ? orderdata.remark
    : ""
}
</td>

                              <td >
                              
                                
                              <select
                              style={{width: '135px'}}
                                class="form-control"
                                id="options"
                                onChange={(e) =>
                                  setproduct(
                                    orderdata.orderdata_id
                                      ,
                                    e.target.value
                                  )
                                }
                                value={orderdata.orderdata_status}
                              >
                                <option value=""  selected>
                                  Select Status
                                </option>
                                <option value="1"> pack</option>
                                <option value="2"> Dispatch </option>
                                <option value="3"> Not in Stock </option>
                                <option value="4"> Successful </option>
                              </select>
                            
                      
                        </td>
                        <td>
                                {" "}
                                {
                                  orderdata.orderdata_datetime
                                    ? orderdata.orderdata_datetime
                                    : ""
                                }
                              </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Vieworder };
