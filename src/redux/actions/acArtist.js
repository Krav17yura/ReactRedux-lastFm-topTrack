export const setLoadingArtistData = (value) => {
    return {
        type: "SET_LOADING_ARTIST_DATA",
        payload: value
    }
}

export const setArtistDataError = (value) => {
    return {
        type: "SET_ARTIST_DATA_ERROR",
        payload: value
    }
}

export const setArtistData = (data) => {
    return {
        type: "SET_ARTIST_DATA",
        payload: data
    }
}

export const fetchArtistData = (name, id) => dispatch => {

    dispatch(setLoadingArtistData(false))
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&mbid=${id}&api_key=83f51b9c2cd20c7b7f1a21f514e5c624&format=json`)
        .then(res => res.json())
        .catch(e => {
            dispatch(setArtistDataError(false))
        })
        .then(data => {
            dispatch(setArtistData(data))
            localStorage.setItem("itemData", JSON.stringify(data.artist))
        })
        .finally(() => dispatch(setLoadingArtistData(true)))
}