import React from "react";
import"../about.css";
import config from "../../../config";
import { Sidebar } from "../../sidebar_pages/sidebar";
function Adminprofile() {
 const data= JSON.parse(localStorage.getItem('UserData'));

 return (
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
                <img src="../../images/faces/face1.jpg" alt="" />
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
                <img src="../../images/faces/face2.jpg" alt="" />
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
                <img src="../../images/faces/face3.jpg" alt="" />
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
                <img src="../../images/faces/face4.jpg" alt="" />
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
                <img src="../../images/faces/face5.jpg" alt="" />
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
                <img src="../../images/faces/face6.jpg" alt="" />
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
             {/* card starta */}
             <section class="vh-100" style={{backgroundColor: "#f4f5f7"}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-6 mb-4 mb-lg-0">
          <div class="card mb-3" style={{borderRadius: ".5rem"}}>
            <div class="row g-0">
              <div class="col-md-4 gradient-custom text-center text-white"
              style={{borderTopLeftRadius: ".5rem; border-bottom-left-radius: .5rem;"}}>
                <img src={data.ADMIN_IMAGE  ?`${config.backend_URL}/${data.ADMIN_IMAGE}`: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"}
                  alt="Avatar" class="img-fluid my-5" style={{width: "80px"}} />
                <h5>Marie Horwitz</h5>
                <p>Web Designer</p>
                <i class="far fa-edit mb-5"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Information</h6>
                  <hr class="mt-0 mb-4"/>
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                    <h6>Name</h6>
                      <p class="text-muted">{data.ADMIN_NAME  ? data.ADMIN_NAME: ""}</p>
                    <h6>Email</h6>
                      <p class="text-muted">{data.ADMIN_EMAIL  ? data.ADMIN_EMAIL: ""}</p>
                    
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Phone</h6>
                      <p class="text-muted">{data.ADMIN_PHONE  ? data.ADMIN_PHONE: ""}</p>
                      
                    </div>
                  </div>
                  <h6>Projects</h6>
                  <hr class="mt-0 mb-4"/>
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Recent</h6>
                      <p class="text-muted">Lorem ipsum</p>
                      
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Most Viewed</h6>
                      <p class="text-muted">Dolor sit amet</p>
                    </div>
                    <div class="col-12 mb-3 butncls">
                      
                      <button class="text-muted">edit</button>
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
             </section>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
);
}

export  {Adminprofile};


