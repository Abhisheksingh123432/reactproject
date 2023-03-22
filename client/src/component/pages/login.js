import React, { useState } from "react";
import config from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader"; 
import "./login.css";

function Login() {
  const navigate = useNavigate();
  let   [loadingInProgress, setLoading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
 
  const [role, setRole] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true) ;
    let formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    formData.append("roletype", role);

    //console.log(formData);
    //api call starts using axios
    axios
      .post(`${config.backend_URL}/login/login_verify`, formData)
      .then(async (data) => {
        console.log("in api", data);
        if (data.data.status) {
          setemail("");
          setPassword("");
          setRole("");

          if (data.data.status) {
            /*        localStorage.setItem('Id',data.data.data.ADMIN_ID); */
            setLoading(false)
            localStorage.setItem("status", true);
            localStorage.setItem("UserData", JSON.stringify(data.data.data));
            localStorage.setItem("roletype", role);
            toast(data.data.msg);
            
            navigate("/home");
          }
        } else {
          toast(data.data.msg);
          e.target.reset();
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div className="container-scroller">
      {loadingInProgress ? <div className="parentdiv"><div className="loaderclsdiv"><ClipLoader className="loadercls" text-align="center" color={'#000'} loading={loadingInProgress}  size={35} /></div></div>: ""}
      {" "}
      <ToastContainer />
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        
        <div className="content-wrapper content-wrapper1 d-flex align-items-center auth px-0">
        
          <div className="row w-100 mx-0">
            <div className="col-lg-8 mx-auto jss1 ">
              <div
                className="row w-100 mx-0 justify-content-center "
                style={{ textAlign: "center" }}
              >
                <div className="col-lg-12 mx-auto  ">
                  <img
                    src="../../images/logo.3d432ca2.svg"
                    alt="logo"
                    class="jss3"
                  />
                </div>
                <div className="col-lg-12 mx-auto">
                  <p class="MuiTypography-root jss4 MuiTypography-body1">
                    Omsons
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mx-auto" style={{ paddingTop: "50px" }}>
              <div className="auth-form text-left py-5 px-4 px-sm-5">
                <h1 style={{ textAlign: "center" }}>Welcome User</h1>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3" onSubmit={(e) => handleSubmit(e)}>
                  
                 {/*  <div class="form-group">
                   
                    <input
                      type="email"
                      class="form-control"
                     
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                   
                  </div> */}
                
            <div class="form-group">
          
              <input type="email" value={email}
                      onChange={(e) => setemail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            
            </div>
                  {/* <div className="form-group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div> */}
                  <div class="form-group">
          
          <input type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password"/>
        
        </div>

                  <div className="form-group">
                    <select
                      className="form-control"
                      id="options"
                      onChange={(e) => setRole(e.target.value)}
                      value={role}
                    >
                      <option value="" disabled selected>
                        Select a role
                      </option>

                      <option value="1"> Staff</option>
                      <option value="2"> Dealer </option>
                      <option value="3"> Admin </option>
                    </select>
                  </div>

                  <div className="mt-3">
                    <button className="btnlogin" type="submit"> SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted"></label>
                    </div>
                    <a href="#" className="auth-link text-black">
                      Forgot password?
                    </a>
                  </div>

                  {/* <div className="text-center mt-4 font-weight-light">
                  Don't have an account? <a href="/register" className="text-primary">Create</a>
                </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login };
