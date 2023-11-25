import React from "react";
import "./style.scss";
import DestinationCard from "../Card/Destination";
import TripCard from "../Card/Trip";
import BlogCard from "../Card/Blog";

const DisplayCard = ({ title, desc, listData, type }) => {
  const MarketingCard = ({ src, title, desc }) => {
    return (
      <div className="marketing">
        <img src={src} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  };

  const renderCard = (type, item) => {
    switch (type) {
      case "Destination":
        return (
          <DestinationCard
            key={item.id}
            src={item.attachment}
            des={item.name}
          />
        );
      case "Trip":
        return <TripCard key={item.id} trip={item} />;
      case "Blog":
        return <BlogCard key={item.id} blog={item} />;
      case "Marketing":
        return (
          <MarketingCard
            src={item.attachment}
            title={item.title}
            desc={item.desc}
          />
        );
      default:
    }
  };

  return (
    <div className="display_content">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="content_grid">
        {listData.map((item) => renderCard(type, item))}
      </div>
    </div>
  );
};

export default DisplayCard;
