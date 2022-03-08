import {connect} from "react-redux";
import {setGamesAC} from "../../redux/games-reducer";
import GamesList from "./GamesList";

let mapStateToProps = (state) => {
    return {
        games: state.gamesPage.games
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setGames: (games) => {
            dispatch(setGamesAC(games))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (GamesList)