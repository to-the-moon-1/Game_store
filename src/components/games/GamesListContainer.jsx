import {connect} from "react-redux";
import {setGamesAC} from "../../redux/games-reducer";
import GamesList from "./GamesList";
import axios from "axios";
import {URL} from "../../api/api";
import useGames from "../../hooks/use-games";

const GamesListContainer = ({setGames, games}) => {
    const [ title, handleChange ] = useGames();

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