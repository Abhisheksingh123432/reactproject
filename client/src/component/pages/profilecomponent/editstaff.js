import React, { useState,useEffect } from "react";
import { Sidebar } from "../../sidebar_pages/sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import config from "../../../config";
function AddStaff() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setlocation] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [dealercode, setDealercode] = useState("");
  const [dealer, setdealer] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  console.log('DEALER',dealer);
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(); //formdata object

    formData.append("staff_name", name); //append the values with key, value pair
    formData.append("staff_designation", designation);
    formData.append("staff_email", email);
    formData.append("staff_image", image);
    formData.append("staff_location", location);
    
    formData.append("staff_password", password);
    formData.append("staff_username", username);
    
    formData.append("staff_dealer", dealer);
    formData.append("staff_roletype", role);
    console.log(formData);
    //api call starts using axios
    axios
      .post(`${config.backend_URL}/api/staffdata`, formData)
      .then(async (data) => {
        console.log(data.data);
        if (data.status) {
          setName("");
          setemail(""); 
          setDesignation("");
          setlocation("");
          setemail("");
          setPassword("");
          setUsername("");
          setDealercode("");
          setdealer("");
          setNumber("");
          setRole("");
          setImage("");

          toast(data.data.msg);
        } else {
          toast(data.data.msg);
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log("error", err);
      });

  };
 
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch(`${config.backend_URL}/api/test`)
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  };

  useEffect(() => { 
    fetchData();
  }, []);
  
  return (<><ToastContainer/>
    <div class="container-fluid page-body-wrapper">
      <div class="theme-setting-wrapper">
        <div id="settings-trigger">
          <i class="ti-settings"></i>
        </div>
        <div id="theme-settings" class="settings-panel">
          <i class="settings-close ti-close"></i>
          <p class="settings-heading">SIDEBAR SKINS</p>
          <div class="sidebar-bg-options selected" id="sidebar-light-theme">
            <div class="img-ss rounded-circle bg-light border mr-3"></div>Light
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
            <h4 class="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
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
              <p class="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
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
                <div class="badge badge-success badge-pill my-auto mx-2">4</div>
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
            <div class="col-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Add Staff </h4>
                  <p class="card-description"></p>
                  <form class="forms-sample" onSubmit={(e) => handleSubmit(e)}>
                    <div class="form-group">
                      <label for="exampleInputName1">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName1"
                        placeholder="Name"
                        value={name} onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail3">staff designation</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail3"
                        placeholder="staff designation"
                        value={designation} onChange={(e) => setDesignation(e.target.value)} 
                      />

                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputName1"
                        placeholder="email"
                        value={email} onChange={(e) => setemail(e.target.value)}
                      />
                      </div>
                    <div class="form-group">
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
                      </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control"
                        id="exampleInputPassword4"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                     <label for="exampleSelectGender">location</label>
                      
                    <input
                        type="password"
                        value={location}
                        onChange={(e) =>  setlocation (e.target.value)}
                        class="form-control"
                        id="exampleInputPassword4"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectGender">Role type</label>
                      <select class="form-control" id="options"  onChange={(e) =>   setRole(e.target.value)} value={role}>
                       <option value="" disabled selected>Select a role</option>
                       
                       <option value="1"> Executive</option>
                       <option value="2">Field Executive </option>
                      </select>
                      
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectGender">select dealer</label>
                      
                      <select class="form-control"  id="choices" name="dealer[]" value={dealer} onChange={(e) =>  setdealer(e.target.value)}>
                      {user.map((userdata, index) => {
                          
                          return (
                         <option value={userdata.Dealer_Id  ? userdata.Dealer_Id: ""} > {userdata.Dealer_Name  ? userdata.Dealer_Name: ""}</option>
                          );
                           } 
                           ) }
                      </select>
                    </div>
                    <div class="form-group">
                        <label>File upload</label>

                        <div class="input-group col-xs-12">
                          <input
                            required
                            type="file"
                            onChange={(e) => onFileChange(e)}
                            class="form-control file-upload-info"
                            placeholder="Upload Image"
                          />
                        </div> </div>
                   
                    
                    <button type="submit" class="btn btn-primary mr-2">
                      Submit
                    </button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}

export { AddStaff };
