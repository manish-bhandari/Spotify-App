import React,{useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import {ReactComponent as ProfileIcon} from '../../icons/profile.svg'
import { ReactComponent as PlaylistsIcon } from "../../icons/playlists.svg";
import { ReactComponent as TopArtistsIcon } from "../../icons/top-artists.svg";
import { ReactComponent as RecentIcon } from "../../icons/recent.svg";
import { ReactComponent as TopTracksIcon } from "../../icons/top-tracks.svg";
import { ReactComponent as GithubIcon } from "../../icons/github.svg";

const Navbar = () => {
  let tab = window.location.pathname.substring(1,);
  if (!tab)
    tab = "profile"
    
  const [active,setActive] = useState(tab);

  return (
    <nav>
      <div className="logo">
        <img src="/spotify.svg" alt="" />
      </div>
      <ul className="nav_items">
        <li className={active == "profile" ? "active" : ""}>
          <Link to="/" onClick={() => setActive("profile")}>
            <ProfileIcon fill="#bcb9b9" />
            Profile
          </Link>
        </li>
        <li className={active == "top-artists" ? "active" : ""}>
          <Link to="/top-artists" onClick={() => setActive("top-artists")}>
            <TopArtistsIcon fill="#bcb9b9" />
            Top Artists
          </Link>
        </li>
        <li className={active == "top-tracks" ? "active" : ""}>
          <Link to="/top-tracks" onClick={() => setActive("top-tracks")}>
            <TopTracksIcon fill="#bcb9b9" />
            Top Tracks
          </Link>
        </li>
        <li className={active == "recent" ? "active" : ""}>
          <Link to="/recent" onClick={() => setActive("recent")}>
            <RecentIcon fill="#bcb9b9" />
            Recent
          </Link>
        </li>
        <li className={active == "playlists" ? "active" : ""}>
          <Link to="/playlists" onClick={() => setActive("playlists")}>
            <PlaylistsIcon fill="#bcb9b9" />
            Playlists
          </Link>
        </li>
      </ul>
      <div className="github">
        <GithubIcon/>
      </div>
    </nav>
  );
};

export default Navbar;
