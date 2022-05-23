import React, { useMemo } from "react";
import "./Recommendations.css";
import { Link } from "react-router-dom";
import { getPlaylistInfo } from "../../spotify";
import Loader from "../Loader";
import { useState,useEffect} from "react";
import { catchErrors } from "../../utils";
import { getRecommendationsForTracks } from "../../spotify";
import { getCurrentUserProfile } from "../../spotify";
import TrackList from "../TrackList/TrackList";

const Recommendations = () => {
  const url = window.location.pathname;
  const playlistID = url.substring(url.lastIndexOf("/") + 1);

  const [playlist, setPlaylist] = useState(null);
  const [userID, setUserID] = useState(null);
  const [recommendations, setRecommmendations] = useState(null);
  const [isFollowing, setIsFollowing] = useState(null);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      const { data } = await getPlaylistInfo(playlistID);
      setPlaylist(data);
    };
    catchErrors(fetchPlaylistData());

    const fetchUserData = async () => {
      const { data } = await getCurrentUserProfile();
      setUserID(data.id);
    };
    catchErrors(fetchUserData());
  }, [playlistID]);

  useMemo(() => {
    const fetchData = async () => {
      if (playlist) {
        console.log(playlist.tracks.items)
        const { data } = await getRecommendationsForTracks(
          playlist.tracks.items
        );
        setRecommmendations(data);
        console.log(data)
      }
    };
    catchErrors(fetchData());
  }, [playlist]);

  if (!recommendations)
    return <Loader/>;

    return (
      <section className="recommendations_section">
        <div className="top_header recommend_header">
          <h1>
            Recommended Tracks Based on <span>{playlist.name}</span>
          </h1>
          <a className="green_button" href="">
            SAVE TO SPOTIFY
          </a>
        </div>
        <div className="subtitle_wrapper">
          <p>Refresh to get new tracks.</p>
        </div>
        <div className="recommended_tracks">
          <TrackList tracks={recommendations.tracks} />
        </div>
      </section>
    );
};

export default Recommendations;
