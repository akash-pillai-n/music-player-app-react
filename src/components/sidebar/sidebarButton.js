import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import "./sidebarButton.css";

export default function SidebarButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnClass = isActive ? "btn-body active" : "btn-body";
  const {signout} = props
  return (
    <>
    {
      signout ? 
     <div className={btnClass } onClick={props.onClick}>
       <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
         {props.icon}
         <p className="btn-title" >{props.title}</p>
       </IconContext.Provider>
     </div> :
       <Link to={props.to}>
       <div className={btnClass } onClick={props.onClick}>
         <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
           {props.icon}
           <p className="btn-title" >{props.title}</p>
         </IconContext.Provider>
       </div>
     </Link>
        
    }
    
      </>
  );
}
