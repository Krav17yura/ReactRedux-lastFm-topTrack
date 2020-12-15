import transformTracks from "../../helpers/transformTracks";
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const isLoaded = (value) => {
    return {
        type: 'IS_LOADED',
        payload: value
    }
}

export const setData = (data) => {
    return {
        type: 'SET_DATA',
        payload: data
    }
}


export const setDataError = (value) => {
    return {
        type: "SET_DATA_ERROR",
        payload: value
    }
}

export const fetchData = () => dispatch => {
    dispatch(isLoaded(false))
    fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${accessKey}&format=json&limit=12`)
        .then(res => res.json())
        .catch(e => dispatch(setDataError(false)))
        .then(data => {
            dispatch(setData(transformTracks(data.tracks.track)))
        })
        .finally(() => dispatch(isLoaded(true)))
}

