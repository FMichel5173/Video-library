import { useEffect, useState } from "react";
import axios from "axios";
import VideoList from "../components/VideoList";
import "../Home.css";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/videos`).then((response) => {
      setVideos(response.data);
    });
  }, []);

  const sortedVideos = videos.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="Home">
      <VideoList videoList={sortedVideos} />
    </div>
  );
}

export default Home;
