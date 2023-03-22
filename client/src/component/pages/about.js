import React, { useEffect,useState } from "react";
import"./about.css";
import {Adminprofile} from "./profilecomponent/admin";
import {Staffprofile} from "./profilecomponent/staffprofile";
import {Dealerprofile} from "./profilecomponent/dealerprofile";
function About() {
  const  [role,setrole]=useState('');
  console.log("data is role:",role);
  useEffect(()=>{
    setrole(JSON.parse(localStorage.getItem('roletype')))
   
    
  },[role])
  
  
  return (
    <div className="main">
      
      {
        role === 3
            ? (
              <Adminprofile/>
            ) : (
               ""
            )
    }
      {
        role === 1
            ? (
              <Staffprofile/>
            ) : (
               ""
            )
    }
          {
        role === 2
            ? (
              <Dealerprofile/>
            ) : (
               ""
            )
    }
    </div>
  );
}

export  {About};