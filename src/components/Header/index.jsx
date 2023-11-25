import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "./style.scss";
import TextInput from "../TextInput";
import Button from "../Button";

const textInputData = [
  { id: 0, placeholder: "Destination, city", type: "Search", options: [] },
  {
    id: 1,
    placeholder: "",
    type: "Date",
    options: [
      "Any Month",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  {
    id: 2,
    placeholder: "",
    type: "Sort",
    options: [
      "Sort By Date",
      "Price Low to High",
      "Price High to Low",
      "Sort By Name",
      "Sort By Popularity",
    ],
  },
  {
    id: 3,
    placeholder: "",
    type: "Select",
    options: ["All Categories", "Mountain", "Rural", "Snow & Ice", "Wildlife"],
  },
  {
    id: 4,
    placeholder: "",
    type: "Select",
    options: ["Any Destinations", "Tokyo", "Seoul", "Vietnam", "Newyork"],
  },
  { id: 5, placeholder: "Max budget ex. 500", type: "Search", options: [] },
];

const Header = () => {
  const [advanceSearch, setAdvanceSearch] = useState(false);

  return (
    <div className="header_container">
      <img
        className="image_header"
        src="https://img.youtube.com/vi/JPe2mwq96cw/maxresdefault.jpg"
        alt="paralax_image"
      />
      <div className="header_content">
        <h2>Where do you want to go?</h2>
        <p className="header_text">
          Trips, experiences, and places. All in one service.
        </p>
        <div className="textinput_list_container">
          {textInputData.slice(0, 3).map((item) => (
            <TextInput
              key={item.id}
              placeholder={item.placeholder}
              options={item.options}
              type={item.type}
            />
          ))}
          <Button label="Search" width="250px" height="36px" maxWidth="100%" />
          {advanceSearch &&
            textInputData
              .slice(3, 6)
              .map((item) => (
                <TextInput
                  key={item.id}
                  placeholder={item.placeholder}
                  options={item.options}
                  type={item.type}
                />
              ))}
        </div>
        <div style={{ width: "85%", display: "flex" }}>
          <div
            onClick={() => setAdvanceSearch(!advanceSearch)}
            className="advance_search"
          >
            {advanceSearch ? (
              <KeyboardArrowUpIcon
                sx={{ fontSize: "20px", color: "white", marginRight: "5px" }}
              />
            ) : (
              <KeyboardArrowDownIcon
                sx={{ fontSize: "20px", color: "white", marginRight: "5px" }}
              />
            )}
            <p>Advance Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
