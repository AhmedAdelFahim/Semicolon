import {SET_PLATFORM,SET_SEARCH_TEXT_FILTER,SORT_BY,SHOW_FILTER_MODEL,HIDE_FILTER_MODEL} from "../actions/filters";

const filtersReducerDefaultState = {
    text: '',
    sortBy: undefined,
    platform: 'all',
    filterModel:false
};

export default (state = filtersReducerDefaultState,action) => {
    switch (action.type) {
        case SET_SEARCH_TEXT_FILTER:
            return {
                ...state,
                text:action.text
            }
        case SORT_BY:
            return {
                ...state,
                sortBy: action.value
            }
        case SET_PLATFORM:
            return {
                ...state,
                platform: action.value
            }
        case SHOW_FILTER_MODEL:
            return {
                ...state,
                filterModel: true
            }
        case HIDE_FILTER_MODEL:
            return {
                ...state,
                filterModel: false
            }
        default:
            return state;
    }
}
