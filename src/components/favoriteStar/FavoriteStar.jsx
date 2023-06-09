import { useEffect, useState } from "react";
import star from "../../assets/star.png";
import "./FavoriteStar.css";

const FavoriteStar = ({ locationData, onStarClick }) => {
  const [activated, setActivated] = useState(
    localStorage.getItem("favoriteLocations")?.includes(locationData.label) ||
      false
  );

  useEffect(() => {
    setActivated(
      localStorage.getItem("favoriteLocations")?.includes(locationData.label) ||
        false
    );
  }, [locationData.label]);

  const handleClick = () => {
    setActivated(!activated);
    onStarClick();
  };

  return (
    <div
      className={`favorite-star ${activated ? "activated" : ""}`}
      onClick={handleClick}
    >
      <img src={star} alt="star" />
    </div>
  );
};

export default FavoriteStar;
