import './App.css';
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import GamesListContainer from "./components/games/GamesListContainer";

function App() {
  return (
      <Provider store={store}>
          <GamesListContainer />
      </Provider>
  );
}

export default App;
