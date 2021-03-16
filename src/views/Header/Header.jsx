import React,{useState} from "react";
import HeaderUser from "./HeaderUser";
import HeaderAdmin from "./HeaderAdmin";

import {useSelector} from "react-redux"; 

const Header = () => {
  
  const Role = useSelector(state => state.Logged.Role);

  const switchHeader = (role) => {
    if(role == "User"){
      return <HeaderUser bgColor='#63B995' />;
    } 
    else if(role == "Admin"){
      return <HeaderAdmin bgColor='#63B995' />;
    }
  }; 

  return (
    <div>
      {switchHeader(Role)}
    </div>
  );
}

export default Header;






