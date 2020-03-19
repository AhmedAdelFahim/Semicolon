export const FETCH_CONTESTS_LOADING = 'FETCH_CONTESTS_LOADING';
export const FETCH_CONTESTS_SUCCESS = 'FETCH_CONTESTS_SUCCESS';
export const FETCH_CONTESTS_ERROR = 'FETCH_CONTESTS_ERROR';

export const fetchContestsLoading = () => {
    return {
        type: FETCH_CONTESTS_LOADING
    }
};


export const fetchContestsSuccess = (contests) => {
    return {
        type: FETCH_CONTESTS_SUCCESS,
        contests
    }
};

export const fetchContestsError = (error) => {
    return {
        type: FETCH_CONTESTS_ERROR,
        error
    }
};
