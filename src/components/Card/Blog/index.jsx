import React from 'react';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "./style.scss";

const BlogCard = ({blog}) => {
    return (
        <div className='blog_card'>
            <img src={blog.attachment} alt='' />
            <div className='blog_content'>
                <span>{blog.createdAt.toDateString()}</span>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <div className='blog_action'>
                    <p>Read More</p>
                    <KeyboardArrowRightIcon className='icon_more' />
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
