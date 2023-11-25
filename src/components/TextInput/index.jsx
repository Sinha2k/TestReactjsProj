import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./style.scss";

const TextInput = ({ placeholder, type, options }) => {
  const renderIconTextinput = (type) => {
    switch (type) {
      case "Search":
        return (
          <SearchIcon
            className="icon"
            sx={{ fontSize: "25px", color: "gray" }}
          />
        );
      case "Date":
        return (
          <CalendarTodayIcon
            className="icon"
            sx={{ fontSize: "25px", color: "gray" }}
          />
        );
      case "Sort":
        return (
          <SwapVertIcon
            className="icon"
            sx={{ fontSize: "25px", color: "gray" }}
          />
        );
      default:
        return (
          <KeyboardArrowDownIcon
            className="icon"
            sx={{ fontSize: "25px", color: "gray" }}
          />
        );
    }
  };

  return (
    <div className="textinput_container">
      {type === "Search" ? (
        <input placeholder={placeholder} type="text" />
      ) : (
        <select>
          {options.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      )}
      {renderIconTextinput(type)}
    </div>
  );
};

export default TextInput;
