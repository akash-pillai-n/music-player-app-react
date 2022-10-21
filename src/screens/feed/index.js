import React, { useState, useEffect } from "react";
import APIKit from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
// import "./library.css";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    APIKit.get("me/following?type=artist").then(function (response) {
      console.log(response.data);
      setFeed(response.data);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div>Feed</div>
  );
}


// <div className="screen-container">
//       <div className="library-body">
//         {feed?.map((playlist) => (
//           <div
//             className="playlist-card"
//             key={playlist.id}
//             onClick={() => playPlaylist(playlist.id)}
//           >
//             <img
//               src={playlist.images[0].url}
//               className="playlist-image"
//               alt="Playlist-Art"
//             />
//             <p className="playlist-title">{playlist.name}</p>
//             <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
//             <div className="playlist-fade">
//               <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
//                 <AiFillPlayCircle />
//               </IconContext.Provider>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>