const reMain = (state = {
    data: [],
    itemStatus: {
        load: true,
        error: true
    },
}, action) => {
    switch (action.type) {
        case 'IS_LOADED':
            return {
                ...state,
                itemStatus: {
                    ...state.itemStatus,
                    load: action.payload
                }
            }
        case 'SET_DATA':
            const data = action.payload.tracks.track
            return {
                ...state,
                data
            }
        case  'SET_DATA_ERROR':
            return {
                ...state,
                itemStatus: {
                    ...state.itemStatus,
                    error: action.payload
                }
            }
        default:
            return state;
    }
}
export default reMain;