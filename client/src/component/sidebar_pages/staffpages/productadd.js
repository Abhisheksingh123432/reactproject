import React,{useState} from "react";
import {  Sidebar} from "../sidebar";
import config from "../../../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {Navigation} from "../../pages/header";
function AddPoduct() {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discription, setDiscription] = useState("");
  const [unit, setunit] = useState("");
  const [cat, setcat] = useState("");
  const [quantity, setquantity] = useState("");
  const [image, setImage] = useState("");

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(); //formdata object

    formData.append("product_name", name); //append the values with key, value pair
    formData.append("product_discription", discription);
    formData.append("product_unit", unit);
    formData.append("product_image", image);
    formData.append("product_quantity", quantity);
    formData.append("product_cat", cat);
    formData.append("product_price", price);

    //api call starts using axios
    axios
      .post(`${config.backend_URL}/api/addproduct`, formData)
      .then(async (data) => {
       
        if (data.status) {
          setName("");
          setDiscription("");
          setunit("");
          setcat("");
          setquantity("");
        
          setPrice("");
          
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
  
    return (
      <><Navigation/>
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
                
              <div class="col-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Add Product </h4>
                 
                  <form class="forms-sample"   onSubmit={(e) => handleSubmit(e)}>
                    <div class="form-group">
                      <label for="exampleInputName1">Name</label>
                      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputName1" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail3">price</label>
                      <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}  class="form-control" id="exampleInputEmail3" placeholder="price"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4"> discription</label>
                      <input type="text" name="discription" value={discription} onChange={(e) => setDiscription(e.target.value)} class="form-control" id="exampleInputPassword4" placeholder="discription"/>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword4"> Units</label>
                      <input type="text" name="discription" value={unit} onChange={(e) => setunit(e.target.value)} class="form-control" id="exampleInputPassword4" placeholder="Units"/>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword4"> Category Log Number</label>
                      <input type="text" name="discription" value={cat} onChange={(e) => setcat(e.target.value)} class="form-control" id="exampleInputPassword4" placeholder="Category Log Number"/>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword4">Quantity</label>
                      <input type="text" name="discription" value={quantity} onChange={(e) => setquantity(e.target.value)} class="form-control" id="exampleInputPassword4" placeholder="Quantity"/>
                    </div>
                    <div class="form-group">
                      <label>File upload</label>
                     
                      
                        <input type="file" class="form-control file-upload-info"  id="fileInput" onChange={(e) => onFileChange(e)}  placeholder="Upload Image"/>
                        
                     
                    </div>
                    
                    
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
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

export { AddPoduct };
