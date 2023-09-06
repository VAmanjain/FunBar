import { Link } from "react-router-dom";
import React from "react";
import { posts } from "./dat";
// import "./blogList.css";

const BlogList = () =>{
    return(
        <div className="blog-List">
            <h2>Blog Posts</h2>

            <ul>
                {posts.map((oneObj)=>{
                    return(
                        <>
                        <li className="blod-item">
                            <Link to={`/posts/${oneObj.id}`}>{oneObj.title}</Link>
                        </li>
                        <br />
                        
                        </>
                    );
                })}
            </ul>

        </div>
    )
}

export default BlogList;