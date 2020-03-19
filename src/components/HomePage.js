import React, {useEffect} from 'react';
import Header from "./Header";
import CardContainer from "./CardContainer";
import FilterModel from "./FilterModel";
import {connect} from 'react-redux';
import fetchContest from "../utils/fetchContests";
import Spinner from "react-bootstrap/Spinner";
import LoadingSpinner from "./LoadingSpinner";




const HomePage = (props) => {

    useEffect(()=>{
        props.fetchContest()
    },[])

    return (
        <>
            <Header  />

            {props.isLoading ? <LoadingSpinner/> : <CardContainer />}

            <FilterModel/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.data.isLoading
    }
}

export default connect(mapStateToProps,{fetchContest})(HomePage);
