export const SET_DEALS = 'SET_DEALS';

export let initialState = {
    deals: []
}

const dealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEALS: {
            return {...state, deals: action.deals}
        }
        default:
            return state
    }
}

export const setDealsAC = (deals) => ({type: SET_DEALS, deals})

export default dealsReducer