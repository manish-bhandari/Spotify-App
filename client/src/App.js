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
      <div className="App-container">{!token ? <Login /> : <Section />}</div>
    </div>
  );
}

const Section = ({profile}) => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/top-artists" element={<TopArtists/>} />
          <Route path="/top-tracks" element={<h1>Top Tracks</h1>} />
          <Route path="/playlists/:id" element={<h1>Playlist</h1>} />
          <Route path="/playlists" element={<h1>Playlists</h1>} />
          <Route path="/" element={<Profile logout={logout} profile={profile}/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
