import React from "react";
import Rating from "@mui/material/Rating";

import "./style.scss";

const TripCard = ({ trip, type }) => {
  return (
    <div className="trip_card">
      <div className="trip_header">
        <img src={trip.attachment} alt="" />
        <span>${trip.price},000</span>
      </div>
      <div className="trip_content">
        <h3>{trip.title}</h3>
        <p>{trip.place}</p>
        <div className="trip_footer">
          <Rating
            name="read-only"
            sx={{ color: "aqua" }}
            value={trip.ratings}
            size="small"
            readOnly
          />
          <span className="reviews">{trip.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
