const reSearch = (state = {
    trackDataStatus: {
        isLoaded: true,
        isError: true
    },
    searchInputValue: '',
    trackData: []
}, action) => {
    switch (action.type) {
        case "SET_SEARCH_INPUT_VALUE":
            return {
                ...state,
                searchInputValue: action.payload
            }
        case "SET_SEARCH_TRACK_DATA":
            return {
                ...state,
                trackData:action.payload
            }
        case "SET_SEARCH_TRACK_DATA_ERROR":
            return {
                ...state,
                trackDataStatus: {
                    ...state.trackDataStatus,
                    isError: action.payload
                }
            }
        case "IS_LOADED_SEARCH_TRACK_DATA":
            return {
                ...state,
                trackDataStatus: {
                    ...state.trackDataStatus,
                    isLoaded: action.payload
                }
            }
        default:
            return state;
    }
}

export default reSearch;