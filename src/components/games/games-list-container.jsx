import {connect} from "react-redux";
import axios from "axios";

import useTitle from "../../hooks/use-title";
import {setGamesAC} from "../../redux/games-reducer";
import {URL} from "../../api/api";

import GamesList from "./games-list";

const GamesListContainer = ({setGames, games}) => {
    const [ title, handleChange ] = useTitle();

    const searchGamesOnTitle = () => {
        if(title && title.length ) {
            axios.get(`${URL}games?title=${title}&limit=60&exact=0`).then(response => {
                setGames(response.data);
            })
        } else setGames([])
    }

    return (
        <GamesList title={title} handleChange={handleChange} searchGamesOnTitle={searchGamesOnTitle} games={games} />
    )
}

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

export default connect(mapStateToProps, mapDispatchToProps) (GamesListContainer)