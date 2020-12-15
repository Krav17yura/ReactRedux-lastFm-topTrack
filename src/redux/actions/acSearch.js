import transformTracks from "../../helpers/transformTracks";
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

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
    fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=${accessKey}&format=json&limit=200`)
        .then(res => res.json())
        .catch(e => dispatch(setSearchTrackDataError(false)))
        .then(data => {
            dispatch(setTrackData(transformTracks(data.results.trackmatches.track)))
        })
        .finally(() => dispatch(isLoadedSearchTrackData(true)))
}


export const setSearchInputValue = (value) => {
    return {
        type: "SET_SEARCH_INPUT_VALUE",
        payload: value
    }
}