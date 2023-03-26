import React from "react";
import TuitStats from "../post-summary-list/tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";


const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 10,
            "retuits": 14,
            "likes": 4,
            "handle": "@someone",
            "tuit": "This is what I am tweeting"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bolder">{tuit.userName}</span>
                        <span className="ms-1">{tuit.handle} . {tuit.time}</span>
                    </div>
                    <div>
                        {tuit.tuit}
                    </div>
                    <TuitStats replies={tuit.replies} liked={tuit.liked} likes={tuit.likes} retuits={tuit.retuits}></TuitStats>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;