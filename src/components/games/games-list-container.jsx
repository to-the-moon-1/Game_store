import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import useTitle from '../../hooks/use-title';
import { setGamesAC } from '../../redux/games-reducer';
import URL from '../../api/api';

import GamesList from './games-list';

const GamesListContainer = ({ setGames, games }) => {
  const [title, handleChange] = useTitle();

  const searchGamesOnTitle = () => {
    if (title && title.length) {
      axios
        .get(`${URL}games?title=${title}&limit=60&exact=0`)
        .then(response => {
          setGames(response.data);
        });
    } else setGames([]);
  };

  return (
    <GamesList
      games={games}
      handleChange={handleChange}
      searchGamesOnTitle={searchGamesOnTitle}
      title={title}
    />
  );
};

const mapStateToProps = state => {
  return {
    games: state.gamesPage.games,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setGames: games => {
      dispatch(setGamesAC(games));
    },
  };
};

GamesListContainer.propTypes = {
  setGames: PropTypes.func,
  games: PropTypes.array,
};

GamesListContainer.defaultProps = {
  setGames: () => {},
  games: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesListContainer);
