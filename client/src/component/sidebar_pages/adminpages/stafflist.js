import React from "react";
import {  Sidebar} from "../sidebar";
import { AiFillEdit,AiFillDelete } from 'react-icons/ai';
import  { useEffect, useState } from "react";
import config from "../../../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {Navigation} from "../../pages/header";
import { confirmAlert } from "react-confirm-alert";
import ClipLoader from "react-spinners/ClipLoader";
function Stafflist() {
  let   [loadingInProgress, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return setLoading(true) , fetch(`${config.backend_URL}/api/stafflist`)
          .then((response) => response.json())
          .then((data) => setUser(data.data) , setLoading(false));
          
  }
  useEffect(() => {
    fetchData();
  },[])
  let confirmit = async (id) => {
   
    await confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this.",
      buttons: 
      [
        {
          label: "Yes",
          onClick: () => deletedata(id)
        },
        {
          label: "No",
           //onClick: () => alert("Click No")
        }
      ]
    });}
  const deletedata=(id)=>{
    console.log(id)
   
      
      let formData = new FormData(); //formdata object  
      formData.append("id", id);
      formData.append("tbl", "staff_tbl");
      formData.append("field", "staff_id");
      //api call starts using axios
      axios
        .post(`${config.backend_URL}/api/delete`, formData)
        .then(async (data) => {
          console.log(data.data.msg);
          if (data.status) {
  
  
            toast(data.data.msg);
            fetchData();
          } else {
            toast(data);
            
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
  
    
  }
    return (
      <>{loadingInProgress ? <div className="parentdiv"><div className="loaderclsdiv"><ClipLoader className="loadercls" text-align="center" color={'#000'} loading={loadingInProgress}  size={35} /></div></div>: ""}<Navigation/>
        <div class="container-fluid page-body-wrapper"><ToastContainer/>
          
          <div class="theme-setting-wrapper">
            <div id="settings-trigger"><i class="ti-settings"></i></div>
            <div id="theme-settings" class="settings-panel">
              <i class="settings-close ti-close"></i>
              <p class="settings-heading">SIDEBAR SKINS</p>
              <div class="sidebar-bg-options selected" id="sidebar-light-theme"><div class="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
              <div class="sidebar-bg-options" id="sidebar-dark-theme"><div class="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
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
                <a class="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
              </li>
            </ul>
            <div class="tab-content" id="setting-content">
              <div class="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                <div class="add-items d-flex px-3 mb-0">
                  <form class="form w-100">
                    <div class="form-group d-flex">
                      <input type="text" class="form-control todo-list-input" placeholder="Add To-do"/>
                      <button type="submit" class="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                    </div>
                  </form>
                </div>
                <div class="list-wrapper px-3">
                  <ul class="d-flex flex-column-reverse todo-list">
                    <li>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="checkbox" type="checkbox"/>
                          Team review meeting at 3.00 PM
                        </label>
                      </div>
                      <i class="remove ti-close"></i>
                    </li>
                    <li>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="checkbox" type="checkbox"/>
                          Prepare for presentation
                        </label>
                      </div>
                      <i class="remove ti-close"></i>
                    </li>
                    <li>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="checkbox" type="checkbox"/>
                          Resolve all the low priority tickets due today
                        </label>
                      </div>
                      <i class="remove ti-close"></i>
                    </li>
                    <li class="completed">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="checkbox" type="checkbox" checked/>
                          Schedule meeting for next week
                        </label>
                      </div>
                      <i class="remove ti-close"></i>
                    </li>
                    <li class="completed">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="checkbox" type="checkbox" checked/>
                          Project review
                        </label>
                      </div>
                      <i class="remove ti-close"></i>
                    </li>
                  </ul>
                </div>
                <h4 class="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
                <div class="events pt-4 px-3">
                  <div class="wrapper d-flex mb-2">
                    <i class="ti-control-record text-primary mr-2"></i>
                    <span>Feb 11 2018</span>
                  </div>
                  <p class="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
                  <p class="text-gray mb-0">The total number of sessions</p>
                </div>
                <div class="events pt-4 px-3">
                  <div class="wrapper d-flex mb-2">
                    <i class="ti-control-record text-primary mr-2"></i>
                    <span>Feb 7 2018</span>
                  </div>
                  <p class="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                  <p class="text-gray mb-0 ">Call Sarah Graves</p>
                </div>
              </div>
              
              <div class="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                <div class="d-flex align-items-center justify-content-between border-bottom">
                  <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                  <small class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
                </div>
                <ul class="chat-list">
                  <li class="list active">
                    <div class="profile"><img src="../../images/faces/face1.jpg" alt="image"/><span class="online"></span></div>
                    <div class="info">
                      <p>Thomas Douglas</p>
                      <p>Available</p>
                    </div>
                    <small class="text-muted my-auto">19 min</small>
                  </li>
                  <li class="list">
                    <div class="profile"><img src="../../images/faces/face2.jpg" alt="image"/><span class="offline"></span></div>
                    <div class="info">
                      <div class="wrapper d-flex">
                        <p>Catherine</p>
                      </div>
                      <p>Away</p>
                    </div>
                    <div class="badge badge-success badge-pill my-auto mx-2">4</div>
                    <small class="text-muted my-auto">23 min</small>
                  </li>
                  <li class="list">
                    <div class="profile"><img src="../../images/faces/face3.jpg" alt="image"/><span class="online"></span></div>
                    <div class="info">
                      <p>Daniel Russell</p>
                      <p>Available</p>
                    </div>
                    <small class="text-muted my-auto">14 min</small>
                  </li>
                  <li class="list">
                    <div class="profile"><img src="../../images/faces/face4.jpg" alt="image"/><span class="offline"></span></div>
                    <div class="info">
                      <p>James Richardson</p>
                      <p>Away</p>
                    </div>
                    <small class="text-muted my-auto">2 min</small>
                  </li>
                  <li class="list">
                    <div class="profile"><img src="../../images/faces/face5.jpg" alt="image"/><span class="online"></span></div>
                    <div class="info">
                      <p>Madeline Kennedy</p>
                      <p>Available</p>
                    </div>
                    <small class="text-muted my-auto">5 min</small>
                  </li>
                  <li class="list">
                    <div class="profile"><img src="../../images/faces/face6.jpg" alt="image"/><span class="online"></span></div>
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
                  <h4 class="card-title">Staff List</h4>
                  
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>S.no.</th>
                          <th>Staff name</th>
                          <th>Email</th>
                          <th>Roletype</th>
                          
                          <th>Username</th>
                          <th>Password</th>
                          <th>Operations</th>
                        </tr>
                      </thead>
                      <tbody>
                      {user.map((userdata, index) => {
                          
                          return (
                            <tr>
                             <td>{index+1}</td>
                             {/*  <td class="py-1">
                                <img
                                  src={userdata.Dealer_Image  ? `${config.backend_URL}/${userdata.Dealer_Image}`: "https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg"}
                                  alt="image"
                                />
                              </td> */}
                              <td>
                            {/*   <img
                                  src={userdata.staff_image  ? `${config.backend_URL}/${userdata.staff_image}`: "https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg"}
                                  alt="image"
                                /> */}
                                {userdata.staff_name  ? userdata.staff_name: ""}
                              </td>
                              <td>
                              {userdata.staff_email  ? userdata.staff_email: ""}
                                {/* <div class="progress">
                                  <div
                                    class="progress-bar bg-warning"
                                    style={{ width: "50%" }}
                                    role="progressbar"
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                  
                                </div> */}
                              </td>
                              <td>  {userdata.staff_roletype=="1"  ? "Executive":userdata.staff_roletype=="2"? "Field Executive":""}</td>
                              
                              <td>  {userdata.staff_username  ? userdata.staff_username: ""}</td>
                              <td>  {userdata.staff_password  ? userdata.staff_password: ""}</td>
                              <td>
                                <button type="button" className="buttonedit">
                                  <AiFillEdit />
                                  Edit
                                </button>
                                <button type="button" className="buttonedit" onClick={()=>confirmit(userdata.staff_id  ? userdata.staff_id: "")}>
                                  
                                  <AiFillDelete />
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                         
                        } ) }
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

export { Stafflist };
