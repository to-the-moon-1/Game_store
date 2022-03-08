export const SET_GAMES = 'SET_GAMES';

let initialState = {
    games: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES: {
            return {...state, games: action.games}
        }
        default:
            return state
    }
}

export const setGamesAC = (games) => ({type: SET_GAMES, games})

export default gamesReducer