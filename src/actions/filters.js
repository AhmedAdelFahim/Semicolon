export const SET_SEARCH_TEXT_FILTER = 'SET_SEARCH_TEXT_FILTER';
export const SET_PLATFORM = 'SET_PLATFORM';
export const SORT_BY = 'SORT_BY';
export const SHOW_FILTER_MODEL = 'SHOW_FILTER_MODEL';
export const HIDE_FILTER_MODEL = 'HIDE_FILTER_MODEL';

export const setSearchTextFilter = (text = '') => {
    return {
        type: 'SET_SEARCH_TEXT_FILTER',
        text
    }
};

export const sortBy = (value = undefined) => {
    return {
        type: 'SORT_BY',
        value
    }
};

export const setPlatform = (value = 'all') => {
    return {
        type: 'SET_PLATFORM',
        value
    }
};

export const showFilterModel = () => {
    return {
        type: SHOW_FILTER_MODEL
    }
};

export const hideFilterModel = () => {
    return {
        type: HIDE_FILTER_MODEL
    }
};
