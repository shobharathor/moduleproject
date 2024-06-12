import React from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import { MdFormatAlignCenter } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdApps } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
function Header({ photoURL }) {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-google-drive-2923656-2416659.png?f=webp&w=256"
          alt="#"
        />
        <span>Drive</span>
      </div>
      <div className="header__search">
        <FaSearch />
        <input type="text" placeholder="Search in Drive" />
        <MdFormatAlignCenter />
      </div>
      <div className="header__icons">
        <span>
          <FaRegCircleQuestion />
          <IoSettingsSharp />
        </span>
        <span>
          <IoMdApps />
          </span>
           <div>
            <img className="header_img" alt="" src={photoURL}></img>
          </div>
         
        
      </div>
       
      <div className="menubar">
            <span><IoMenu/></span>
          
          </div>
    </div>
  );
}

export default Header;
