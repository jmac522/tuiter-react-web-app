import React from "react";

const TuitStats = ({replies, retuits, likes, liked}) => {
    return(
        <div className="d-flex justify-content-between">
            <span  className="me-2">
                <i className="bi bi-chat me-1"></i>
                <span className="">{replies}</span>
            </span>
            <span  className="me-2">
                <i className="bi bi-arrow-repeat me-1"></i>
                <span className="">{retuits}</span>
            </span>
            <span  className="me-2">
                <i className={liked ? "bi bi-heart-fill text-danger me-1" : "bi bi-heart me-1"}></i>
                <span className={liked ? "text-danger" : "text-"}>{likes}</span>
            </span>
            <span  className="me-2">
                <i className="bi bi-share me-1"></i>
            </span>
        </div>
    );
};
export default TuitStats;