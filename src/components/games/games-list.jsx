import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import StoresListContainer from '../stores/stores-list-container';
import InputSearch from '../input/input-search';

const { Content } = Layout;

const GamesList = ({ title, handleChange, searchGamesOnTitle, games }) => (
  <Layout>
    <Content className="backgroundPage">
      <div className="wrapperContent">
        <InputSearch
          handleChange={handleChange}
          searchGamesOnTitle={searchGamesOnTitle}
          title={title}
        />
        <div className="colorGray">
          <h1 className="header">Games</h1>
          {games.length !== 0 ? (
            games.map(game => (
              <div key={`id_${game.gameID}`}>
                <div className="gameList">{game.external}</div>
              </div>
            ))
          ) : (
            <div>Empty games list</div>
          )}
          <StoresListContainer games={games} title={title} />
        </div>
      </div>
    </Content>
  </Layout>
);

GamesList.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
  searchGamesOnTitle: PropTypes.func,
  games: PropTypes.array,
};

GamesList.defaultProps = {
  title: '',
  handleChange: () => {},
  searchGamesOnTitle: () => {},
  games: [],
};

export default GamesList;
