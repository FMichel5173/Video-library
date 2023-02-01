import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoFilter from "../assets/filter-results-button.png";
import logoDelete from "../assets/x.png";
import VideoCard from "./VideoCard";

const videoList = () => {
  const [visible, setVisible] = useState(false);
  const [videoFilter, setVideoFilter] = useState([]);
  const [listFilter, setListFilter] = useState({
    ville: null,
    contract: null,
    title: null,
  });

  const filtre = () => {
    const newArray = videoList.filter((offer) =>
      listFilter.title
        ? offer.offer_name.toLowerCase().match(`^${listFilter.title}.*?`, "gmi")
        : true
    );

    setVideoFilter(newArray);
  };

  useEffect(() => {
    setVideoFilter(videoList);
  }, [videoList]);

  useEffect(() => {
    filtre();
  }, [listFilter]);

  return (
    <section className="listVideo">
      <button
        className="buttonFilter"
        type="button"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <img src={logoFilter} alt="" />
      </button>
      <div className={visible ? "filter" : "hidden"}>
        <div>
          <label htmlFor=" ">Recherche par titre</label>
          <input
            type="text"
            value={listFilter.title}
            onChange={(e) => {
              if (e.target.value) {
                setListFilter({
                  ...listFilter,
                  title: e.target.value.toLowerCase(),
                });
              } else {
                setListFilter({ ...listFilter, title: null });
              }
            }}
          />
          <button
            type="button"
            className="crossButton"
            onClick={() => setListFilter({ ...listFilter, title: "" })}
          >
            <img src={logoDelete} alt="" />
          </button>
        </div>
      </div>

      <ul className="VideoList">
        {videoFilter.map((video) => (
          <li key={video.id}>
            <Link to={`/videos/${video.id}`}>
              <VideoCard video={video} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default videoList;
