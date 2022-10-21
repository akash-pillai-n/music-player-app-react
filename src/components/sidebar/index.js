import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
// import { useClearCache } from 'react-clear-cache';
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://th.bing.com/th/id/OIP.SQcoBcEmGqppzqKlQamM_gHaFv?pid=ImgDet&rs=1"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/"
  };
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        {/* <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} /> */}
        {/* <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} /> */}
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton
        title="Sign Out"
        onClick={handleSignOut}
        to="/"
        icon={<FaSignOutAlt />}
        signout = {true}
      />
    </div>
  );
}
