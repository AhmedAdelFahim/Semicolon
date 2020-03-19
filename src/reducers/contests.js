// import { fetchContests } from "../utils/Api";
import {FETCH_CONTESTS_LOADING,FETCH_CONTESTS_ERROR,FETCH_CONTESTS_SUCCESS} from "../actions/contests";

const defaultData = {
    isLoading:false,
    contests : [],
    allContests : [],
    errors:''
 };

export default  (state = defaultData,action) => {
    switch (action.type) {
        case FETCH_CONTESTS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CONTESTS_SUCCESS:
            // console.log(action.contests)
            return {
                isLoading: false,
                contests: action.contests,
                allContests: action.contests,
                errors: ''
            }
        case FETCH_CONTESTS_ERROR:
            return {
                ...state,
                isLoading: false,
                errors: action.error
            }

        default:
            return state
    }
}
