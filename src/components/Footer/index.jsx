import React from "react";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlaceIcon from '@mui/icons-material/Place';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import "./style.scss";

const dataImage = [
    {id: 0, src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"},
    {id: 1, src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"},
    {id: 2, src: "https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"},
    {id: 3, src: "https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"},
    {id: 4, src: "https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"},
    {id: 5, src: "https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"},
    {id: 6, src: "https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"},
    {id: 7, src: "https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"}
]

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_item">
          <h4>Our Awards</h4>
          <p>
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </p>
          <img className="image_footer" src={dataImage[0].src} alt="" />
        </div>
        <div className="footer_item">
          <h4>Contact Info</h4>
            <div className="contact_item">
                <PhoneAndroidIcon sx={{color: 'white'}} />
                <p>1-567-124-44227</p>
            </div>
            <div className="contact_item">
                <PlaceIcon sx={{color: 'white'}} />
                <p>184 Main Street East Perl Habour 8007</p>
            </div>
            <div className="contact_item">
                <AccessAlarmIcon sx={{color: 'white'}} />
                <p>Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
            </div>
        </div>
        <div className="footer_item">
          <h4>Recent Trips</h4>
          <div className="display_image">
            {dataImage.slice(2, 8).map(item => (
                <img src={item.src} alt="" key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>Copyright by Sinha2k</p>
        <ul>
            <li>Home</li>
            <li>Tour</li>
            <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
