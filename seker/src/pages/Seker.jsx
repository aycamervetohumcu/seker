import React, { useState, useEffect } from "react";
import Axios from "axios";

import searchIcon from "../assets/search.svg";
import clockIcon from "../assets/clock.svg";

function Seker() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("https://api.disneyapi.dev/character");
        setData(res.data.data);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  const filterSearch = () => {
    const results = data
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 4);
    setFilterData(results);
  };

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  return (
    <main>
      <div className="search-container">
        <div>
          <img className="search-icon" src={searchIcon} alt="Search Icon" />
        </div>
        <label for="search"></label>
        <input
          className="search-field"
          type="search"
          id="search-field"
          placeholder="Search for Disney characters.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" id="search-btn" onClick={filterSearch}>
          Search
        </button>
      </div>
      <div className="option-container">
        {filterData.map((item, index) => (
          <ul className="options-ul" key={index}>
            <li className="options-li" onClick={() => handleImageClick(item)}>
              <a className="options-text">
                <img className="clock-icon" src={clockIcon} alt="Clock Icon" />
                {item.name}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="img-container">
        {selectedImage && (
          <img src={selectedImage.imageUrl} alt={selectedImage.name} />
        )}
      </div>
    </main>
  );
}

export default Seker;