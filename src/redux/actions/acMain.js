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
    fetch("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=83f51b9c2cd20c7b7f1a21f514e5c624&format=json&limit=20")
        .then(res => res.json())
        .catch(e => dispatch(setDataError(false)))
        .then(data => {
            dispatch(setData(data))
        })

        .finally(() => dispatch(isLoaded(true)))
}

