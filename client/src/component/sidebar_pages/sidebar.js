import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [role, setrole] = useState("");
  useEffect(() => {
    setrole(JSON.parse(localStorage.getItem("roletype")));
    console.log("data is role:", role);
  }, [role]);
  return (
    /* <!-- partial -->
<!-- partial:partials/_sidebar.html --> */

    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <Link className="nav-link" to="/home">
            <i class="icon-grid menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </Link>
        </li>
        {/* for admin sidebar_pages */}
        {role === 3 ? (
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">Products</span>
              <i class="menu-arrow"></i>
            </a>

            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <Link className="nav-link" to="/addproduct">
                    Add product{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  {" "}
                  <Link className="nav-link" to="/productList">
                    Product list
                  </Link>
                </li>
                {/*<li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li> */}
              </ul>
            </div>
          </li>
        ) : (
          ""
        )}
        {role === 3 ? (
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#form-elements"
              aria-expanded="false"
              aria-controls="form-elements"
            >
              <i class="icon-columns menu-icon"></i>
              <span class="menu-title">Dealer Management</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <Link className="nav-link" to="/adddealer">
                    {" "}
                    Add Dealer{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  {" "}
                  <Link className="nav-link" to="/dealerlist">
                    {" "}
                    Dealer list
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          ""
        )}
        {role === 3 ? (
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#charts"
              aria-expanded="false"
              aria-controls="charts"
            >
              <i class="icon-bar-graph menu-icon"></i>
              <span class="menu-title">Staff Management</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="charts">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link className="nav-link" to="/addstaff">
                    {" "}
                    Add Staff
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/stafflist">
                    Staff list
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          ""
        )}
        {role === 3 ? (
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#tables"
              aria-expanded="false"
              aria-controls="tables"
            >
              <i class="icon-grid-2 menu-icon"></i>
              <span class="menu-title">Orders Management</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="tables">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link className="nav-link" to="/orderlist">
                    {" "}
                    Orders List
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          ""
        )}
       {/*  {role === 3 ? (
          <li class="nav-item">
            <Link className="nav-link" data-toggle="collapse" to="/orderlist">
              <i class="icon-contract menu-icon"></i>
              <span class="menu-title">View Data Analytics</span>
              <i class="menu-arrow"></i>
            </Link>
          </li>
        ) : (
          ""
        )} */}
        {/* {role === 3 ? (
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i class="icon-head menu-icon"></i>
              <span class="menu-title">Export Functions</span>
              <i class="menu-arrow"></i>
            </a>
           
          </li>
        ) : (
          ""
        )} */}

        {/* {role === 3 ? (
          <li class="nav-item">
            <Link
              className="nav-link"
              data-toggle="collapse"
              to="/pendinorderlist"
            >
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Pending Order Pdf</span>
            </Link>
          </li>
        ) : (
          ""
        )} */}
        {/* for admin sidebar_pages end */}
        {/* for dealers sidebar_pages */}
        {role === 2 ? (
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#tables"
              aria-expanded="false"
              aria-controls="tables"
            >
              <i class="icon-grid-2 menu-icon"></i>
              <span class="menu-title">Orders Management</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="tables">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link className="nav-link" to="/addorderfile">
                    Add Orders
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/dispatchpsts">
                    Orders Status
                  </Link>
                </li>

                <li class="nav-item">
                  <Link className="nav-link" to="/dispatchsts">
                    Dispatch Status
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/dealerOrderlist">
                    {" "}
                    Order History
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          ""
        )}
{/* 
        {role === 2 ? (
          <li class="nav-item">
            <Link
              className="nav-link"
              data-toggle="collapse"
              to="/pendinorderlist"
            >
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Pending Reviews</span>
            </Link>
          </li>
        ) : (
          ""
        )}
        {role === 2 ? (
          <li class="nav-item">
            <Link
              className="nav-link"
              data-toggle="collapse"
              to="/pendinorderlist"
            >
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Pending invoice</span>
            </Link>
          </li>
        ) : (
          ""
        )}
        {role === 2 ? (
          <li class="nav-item">
            <Link
              className="nav-link"
              data-toggle="collapse"
              to="/pendinorderlist"
            >
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Custom Product</span>
            </Link>
          </li>
        ) : (
          ""
        )} */}
        {/* dealer sidebar pages end */}
        {role === 1 ? (
          <li class="nav-item">
            <Link
              className="nav-link"
              data-toggle="collapse"
              to="/orderliststaff"
            >
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Order Status</span>
            </Link>
          </li>
        ) : (
          ""
        )}
        {role === 1 ? (
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#form-elements"
              aria-expanded="false"
              aria-controls="form-elements"
            >
              <i class="icon-columns menu-icon"></i>
              <span class="menu-title">Dealer Management</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  {" "}
                  <Link className="nav-link" to="/adddealerstaff">
                    {" "}
                    Add Dealer{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  {" "}
                  <Link className="nav-link" to="/dealerlist">
                    {" "}
                    Dealer list
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          ""
        )}
        {role === 1 ? (
          <li class="nav-item">
            <Link
              className="nav-link"
              data-toggle="collapse"
              to="/staffpdfpost"
            >
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Send pdf</span>
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
      <ul class="nav nav2">
      <h3>Help</h3>
          <li class="nav-item">
            <Link
              className="nav-link"
              data-toggle="collapse"
              to="/staffpdfpost"
            >
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Library</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              className="nav-link"
              data-toggle="collapse"
              to="/staffpdfpost"
            >
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Support</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              className="nav-link"
              data-toggle="collapse"
              to="/staffpdfpost"
            >
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">FAQ</span>
            </Link>
          </li>
      </ul>
    </nav>
  );
}

export { Sidebar };
