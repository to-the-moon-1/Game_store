import React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import store from './redux/redux-store';
import GamesListContainer from './components/games/games-list-container';

import './app.css';

function App() {
  return (
    <Provider store={store}>
      <GamesListContainer />
    </Provider>
  );
}

export default App;
