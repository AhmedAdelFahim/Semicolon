import React from "react";
import {getPlatformLogo} from "../utils/utils";

const ContestCard = (props) => {



    return (
        <div className="d-flex  flex-column border-dark border rounded  p-2 align-content-center align-items-center m-3 contest-card" style={{ width: 20+'rem'}}>
            <div className="rounded  border d-flex justify-content-center align-items-center mt-2" style={{ width: 5.5+'rem', height: 5.5+'rem'}}>
                <img alt={props.contest.name} src={getPlatformLogo(props.contest.platform)} style={{ width: 5+'rem', height: 5+'rem'}} />
            </div>
            <p className="mb-0 mt-3  contest-card-title ">{props.contest.name}</p>
            <div className="ml-2 mr-2 mt-2 ">
                <p className="mb-0 mt-2 m contest-card-body"><b >Start : </b>{new Date(props.contest.startTime * 1000).toLocaleString()}</p>
                <p className="mb-0 mt-2 m contest-card-body" ><b >End : </b>{new Date(props.contest.endTime * 1000).toLocaleString()}</p>
                <p className="mb-0 mt-2 m contest-card-body" style={{color: ((props.contest.startTime) < Math.floor(new Date().getTime()/1000))   ? "#00ff00" : "#ff8f00"}}><b >Status : </b>{((props.contest.startTime) < Math.floor(new Date().getTime()/1000))  ? "Running" : "Upcoming"}</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ContestCard
