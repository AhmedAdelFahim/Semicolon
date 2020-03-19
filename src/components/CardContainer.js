import React from "react";
import ContestCard from "./ContestCard";
import '../styles/main.css'
import { connect } from 'react-redux'

import getContests from '../selectors/contests'
import NoContests from "./NoContests";

const CardContainer = (props) => {

    return (
        props.contests.length === 0 ? <NoContests/> :
        <div className="d-flex flex-row flex-wrap w-auto justify-content-center align-items-center container contest-container">
            {
                props.contests.map((contest) => {
                    return <ContestCard key={contest.name} contest={contest} />
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contests: getContests(state.data,state.filters)
    }
}

export default connect(mapStateToProps)(CardContainer);
