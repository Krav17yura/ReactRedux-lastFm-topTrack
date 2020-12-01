export const setTrackData = (data) => {
    return {
        type: 'SET_SEARCH_TRACK_DATA',
        payload: data
    }
}

export const isLoadedSearchTrackData = (value) => {
    return {
        type: 'IS_LOADED_SEARCH_TRACK_DATA',
        payload: value
    }
}

export const setSearchTrackDataError = (value) => {
    return {
        type: "SET_SEARCH_TRACK_DATA_ERROR",
        payload: value
    }
}

export const fetchSearchTrack = (name) => dispatch => {
    dispatch(isLoadedSearchTrackData(false))
    fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=83f51b9c2cd20c7b7f1a21f514e5c624&format=json&limit=200`)
        .then(res => res.json())
        .catch(e => dispatch(setSearchTrackDataError(false)))
        .then(data => {
            dispatch(setTrackData(data))
        })
        .finally(() => dispatch(isLoadedSearchTrackData(true)))
}


export const setSearchInputValue = (value) => {
    return {
        type: "SET_SEARCH_INPUT_VALUE",
        payload: value
    }
}