import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="d-flex justify-content-between">
            <span className="me-2">
                <i className="bi bi-chat me-1"></i>
                <span className="">{tuit.replies}</span>
            </span>
            <span className="me-2">
                <i className="bi bi-arrow-repeat me-1"></i>
                <span className="">{tuit.retuits}</span>
            </span>
            <span className="me-2">
                <i className="bi bi-heart-fill me-2 text-danger" onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))}></i>
                <span className={tuit.liked ? "text-danger" : "text-"}>{tuit.likes}</span>
            </span>
            <span className="me-2">
                <i className="bi bi-heart-fill me-2" onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))}></i>
                <span>{tuit.dislikes}</span>
            </span>
            <span className="me-2">
                <i className="bi bi-share me-1"></i>
            </span>
        </div>
    );
};
export default TuitStats;