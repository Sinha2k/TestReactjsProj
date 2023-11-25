import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Scroll from "react-scroll";

import "./style.scss";
import { images } from "../../utils/constants";
import dataPage from "../../data/dataPage";

const Navbar = () => {
  const [openOption, setOpenOption] = useState(false);

  const [openNavbarMobile, setOpenNavbarMobile] = useState(false);

  const [option, setOption] = useState("");

  const [activeNavbar, setActiveNavbar] = useState("normal");

  const [y, setY] = useState(window.scrollY);

  const scroll = Scroll.animateScroll;

  const goOnTop = () => {
    scroll.scrollToTop(Navbar);
  }

  const appearNavbar = (e) => {
    if (window.scrollY > 0) {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setActiveNavbar("active");
      } else if (y < window.scrollY) {
        setActiveNavbar("inactive");
      }
      setY(window.scrollY);
    } else {
      setActiveNavbar("normal");
    }
  };

  window.addEventListener("scroll", (e) => appearNavbar(e));

  const openOptionMenu = (label) => {
    setOpenOption(true);
    setOption(label);
  };

  const closeOptionMenu = () => {
    setOpenOption(false);
  };

  return (
    <div
      className={`navbar_container ${
        activeNavbar !== "normal"
          ? activeNavbar === "active"
            ? "active"
            : "inactive"
          : ""
      }`}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
          width: "100%",
        }}
      >
        <img
          className="logo_image"
          src={activeNavbar !== "normal" ? images.logoBlack : images.logoWhite}
          alt="gtour"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="navbar_content">
            {dataPage.map((item) => (
              <div key={item.id} className="direct_item">
                <div className="item_label">
                  <p
                    style={{
                      color: activeNavbar !== "normal" ? "black" : "white",
                    }}
                  >
                    {item.label}
                  </p>
                  <KeyboardArrowDownIcon
                    fontSize="16"
                    sx={{
                      color: activeNavbar !== "normal" ? "black" : "white",
                    }}
                  />
                </div>
                <ul id={item.label}>
                  {item.options.map((option) => (
                    <li className="li_style">
                      <span>{option.label}</span>
                      {option?.options?.length > 0 && (
                        <KeyboardArrowRightIcon
                          fontSize="16"
                          className="icon_arrow"
                        />
                      )}
                      {option?.options?.length > 0 && (
                        <ul className="ul_options">
                          {option?.options?.map((optionItem) => (
                            <li className="li_options">{optionItem.label}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mobile_menu">
            <MenuIcon
              onClick={() => setOpenNavbarMobile(!openNavbarMobile)}
              sx={{
                color: activeNavbar !== "normal" ? "black" : "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
            <div className="cart_quanity">
              <ShoppingBasketIcon
                sx={{
                  color: activeNavbar !== "normal" ? "black" : "white",
                  fontSize: "17px",
                  cursor: "pointer",
                }}
              />
              <div>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        {openNavbarMobile && (
          <div className="navbar_mobile">
            <div
              onClick={() => setOpenNavbarMobile(false)}
              className="layout_container"
            ></div>
            <div className="navbar_mobile_container">
              <div className="navbar_close_container">
                <div
                  onClick={() => setOpenNavbarMobile(false)}
                  className="navbar_close"
                >
                  <CloseIcon sx={{ color: "white", fontSize: "30px" }} />
                </div>
              </div>
              <div className="navbar_mobile_content">
                <ul
                  className={`mobile_ul_container ${
                    openOption ? "open" : "hide"
                  }`}
                >
                  {dataPage.map((item) => (
                    <li className="mobile_li_container" key={item.id}>
                      <span
                        className="span_container"
                        onClick={() => openOptionMenu(item.label)}
                      >
                        {item.label}
                      </span>
                      <ul
                        className={`mobile_ul_item ${
                          option === item.label ? "display" : ""
                        }`}
                      >
                        <div
                          onClick={() => closeOptionMenu()}
                          className="back_button"
                        >
                          <KeyboardArrowLeftIcon sx={{ fontSize: "14px" }} />
                          <span style={{ fontSize: "14px" }}>Back</span>
                        </div>
                        {item.options.map((option) => (
                          <li className="mobile_li_item">
                            <span className="span_item">{option?.label}</span>
                            {option.options.length > 0 && (
                              <ul>
                                {option.options.map((optionsItem) => (
                                  <li>{optionsItem.label}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {activeNavbar !== "normal" && (
        <div onClick={goOnTop} className="scroll_to_top">
          <KeyboardArrowUpIcon sx={{fontSize: '25px', color: 'white'}} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
