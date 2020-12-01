const reArtist = (state = {
    artistDataStatus: {
        isLoaded: true,
        isError: true
    },

    artistData: []

}, action) => {
    switch (action.type) {
        case "SET_LOADING_ARTIST_DATA":
            return {
                ...state,
                artistDataStatus: {
                    ...state.artistDataStatus,
                    isLoaded: action.payload
                }
            }
        case  "SET_ARTIST_DATA_ERROR": {
            return {
                ...state,
                artistDataStatus: {
                    ...state.artistDataStatus,
                    isError: true

                }
            }
        }
        case "SET_ARTIST_DATA":
            const data = action.payload.artist
            return {
                ...state,
                artistData: data
            }

        default :
            return state
    }
}

export default reArtist