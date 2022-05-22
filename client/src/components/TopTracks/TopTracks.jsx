import React from "react";
import "./TopTracks.css";
import { useState,useEffect } from "react";
import { getTopTracks } from "../../spotify";
import { catchErrors } from "../../utils";
import { Link } from "react-router-dom";
import { ReactComponent as InfoIcon } from "../../icons/info.svg";
import { formatDuration } from "../../utils";

const TopTracks = () => {
    const [topTracks, setTopTracks] = useState(null);
    const [activeRange, setActiveRange] = useState("long_term");

    useEffect(() => {
      const fetchData = async () => {
        const userTopTracks = await getTopTracks(10, activeRange);
        setTopTracks(userTopTracks.data);
        console.log(userTopTracks.data);
      };

      console.log(activeRange);
      catchErrors(fetchData());
    }, [activeRange]);

    if (!topTracks) return;
  return (
    <section className="top_tracks_section">
      <div className="top_header">
        <h1>Top Tracks</h1>
        <div className="top_range">
          <div
            className={activeRange === "long_term" ? "active" : ""}
            onClick={() => setActiveRange("long_term")}
          >
            All Time
          </div>
          <div
            className={activeRange === "medium_term" ? "active" : ""}
            onClick={() => setActiveRange("medium_term")}
          >
            Last 6 Months
          </div>
          <div
            className={activeRange === "short_term" ? "active" : ""}
            onClick={() => setActiveRange("short_term")}
          >
            Last 4 Weeks
          </div>
        </div>
      </div>
      <div className="preview_list_container">
        <ul className="preview_list">
          {topTracks.items.map((track, idx) => (
            <Link to={`/track/${track.id}`} key={idx}>
              <div className="preview_image_wrapper">
                <img
                  className="preview_image track"
                  src={track.album.images[0].url}
                  alt=""
                />
                <div className="info_svg">
                  <InfoIcon />
                </div>
              </div>

              <div className="track_info">
                <div className="track_details">
                  <p>{track.name}</p>
                  <span className="track_artists">
                    {track.artists.map((artist, i) => (
                      <span key={i}>
                        {artist.name}
                        {i !== track.artists.length - 1 && ", "}
                      </span>
                    ))}
                    {"  ·  "}
                    <span>{track.album.name}</span>
                  </span>
                </div>
                <span className="track_time">
                  {formatDuration(track.duration_ms)}
                </span>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopTracks;
