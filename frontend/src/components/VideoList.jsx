import React from "react";
import VideoCard from "./VideoCard";

function VideoList() {
  return (
    <section>
      <ul>
        <li className="VideoList">
          <VideoCard />
        </li>
      </ul>
    </section>
  );
}

export default VideoList;
