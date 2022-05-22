import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components/macro";
import { useEffect, useState } from "react";
import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import axios from "axios";
import { catchErrors } from "./utils";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import TopArtists from "./components/TopArtists/TopArtists";
import TopTracks from "./components/TopTracks/TopTracks";
import Recent from "./components/Recent/Recent";
import Playlists from "./components/Playlists/Playlists";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);

  useEffect(()=>{
    setToken(accessToken);
  },[])
  
  return (
    <div className="App">
      {!token ? <Login /> : <Section />}
    </div>
  );
}

const Section = ({profile}) => {
  return (
    <div className="App-container">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-tracks" element={<TopTracks />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/playlists/:id" element={<h1>Playlist</h1>} />
          <Route path="/playlists" element={<Playlists />} />
          <Route
            path="/"
            element={<Profile logout={logout} profile={profile} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
