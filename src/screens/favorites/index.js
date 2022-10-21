import React ,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";

export default function Favorites() {
  const location = useLocation();


  useEffect(()=>{
    if(location.state)
    {
      apiClient.get("me/following")
    }
  },[location.state])
   
  return <div className="screen-container">Favorites</div>;
}
