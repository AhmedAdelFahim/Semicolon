import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import filtersReducer from '../reducers/filters'
import contestsReducer from "../reducers/contests";
export default () => {
    const store = createStore(
        combineReducers({
            data: contestsReducer,
            filters: filtersReducer
        }),applyMiddleware(thunk)
    );

    return store;
};
