import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation} from "./component/pages/header";
//import { Footer} from "./component/pages/footer";
import { Home} from "./component/pages/home";
import { About} from "./component/pages/about";
import { Login} from "./component/pages/login";
import { Register} from "./component/pages/register";
import { Sidebar} from "./component/sidebar_pages/sidebar";

import { AddPoduct} from "./component/sidebar_pages/adminpages/productadd"; 
import { ProductList} from "./component/sidebar_pages/adminpages/productlist";

import { AddDealer} from "./component/sidebar_pages/adminpages/adddealer";
import { Dealerlist} from "./component/sidebar_pages/adminpages/dealerlist";

import { AddStaff} from "./component/sidebar_pages/adminpages/addstaff";
import { Stafflist} from "./component/sidebar_pages/adminpages/stafflist";
import { Orderlist} from "./component/sidebar_pages/adminpages/orderlist";
import { DealerOrderlist} from "./component/sidebar_pages/dealerpages/orderlist";
import { Vieworder} from "./component/sidebar_pages/adminpages/vieworderdata";
import { Vieworderdealer} from "./component/sidebar_pages/dealerpages/vieworderdata";
import { PendingOrderpdf} from "./component/sidebar_pages/adminpages/pendingorderpdf";
import { AddOrderfile} from "./component/sidebar_pages/dealerpages/placeorder";
import { Dispatchstatus} from "./component/sidebar_pages/dealerpages/dispatchstatus";
import { DispatchSts} from "./component/sidebar_pages/dealerpages/orderstatus";
import { OrderHistory} from "./component/sidebar_pages/dealerpages/Orderhistory";
import { Orderliststaff} from "./component/sidebar_pages/staffpages/orderlist";
import { AddDealerstaff} from "./component/sidebar_pages/staffpages/adddealer";
import { PostStaffPdf} from "./component/sidebar_pages/staffpages/Uploadpdf";
import { SDealerlist} from "./component/sidebar_pages/staffpages/dealerlist";
ReactDOM.render( 
  
  <Router>


    <Routes>  
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Login />} />
      <Route path="/addproduct" element={<AddPoduct />} />
      <Route path="/adddealer" element={<AddDealer />} />
      <Route path="/dealerlist" element={<Dealerlist />} />
      <Route path="/staffdealerlist" element={<SDealerlist />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="/addstaff" element={<AddStaff />} />
      <Route path="/stafflist" element={<Stafflist />} />
      <Route path="/orderlist" element={<Orderlist />} />
      <Route path="/dealerorderlist" element={<DealerOrderlist />} />
      <Route path="/vieworderdata" element={<Vieworder />} />
      <Route path="/dvieworderdata" element={<Vieworderdealer />} />
      <Route path="/pendinorderlist" element={<PendingOrderpdf />} />
      <Route path="/dispatchsts" element={<Dispatchstatus />} />
      <Route path="/dispatchpsts" element={<DispatchSts />} />
      <Route path="/addorderfile" element={<AddOrderfile />} />
      <Route path="/orderliststaff" element={<Orderliststaff />} />
      <Route path="/OrderHistory" element={<OrderHistory />} />
      <Route path="/adddealerstaff" element={<AddDealerstaff />} />
      <Route path="/staffpdfpost" element={<PostStaffPdf />} />
     
    </Routes>
  </Router>,

  document.getElementById("root")
);


