import React from "react";
import { Layout } from 'antd';

import StoresListContainer from "../stores/stores-list-container";
import InputSearch from "../input/input-search";

const { Content } = Layout;

const GamesList = ({ title, handleChange, searchGamesOnTitle, games }) => (
    <Layout>
        <Content className="backgroundPage">
            <div className="wrapperContent">
                <InputSearch title={title} handleChange={handleChange} searchGamesOnTitle={searchGamesOnTitle} />
                <div className="colorGray">
                    <h1 className="header">Games</h1>
                    {games.length !== 0
                        ? games.map(game => <div key={"id_" + game.gameID}>
                            <div className="gameList">{game.external}</div>
                        </div>)
                        : <div>Empty games list</div>}
                    <StoresListContainer title={title} games={games} />
                </div>
            </div>
        </Content>
    </Layout>
)

export default GamesList