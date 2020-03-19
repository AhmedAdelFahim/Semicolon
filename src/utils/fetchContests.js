import {fetchContestsError, fetchContestsLoading, fetchContestsSuccess} from "../actions/contests";
import axios from "axios";

const API_URL = 'http://api.codercalendar.io/';

function fetchContest  () {
    return (dispatch) => {
        dispatch(fetchContestsLoading());
        axios.get(API_URL).then((response) => {
            // console.log(response)
            dispatch(fetchContestsSuccess([...response.data.results.ongoing, ...response.data.results.upcoming]))
        }).catch((error) => {
            dispatch(fetchContestsError(error));
        })
    }
};

export default fetchContest
