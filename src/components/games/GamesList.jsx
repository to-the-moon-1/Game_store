import React from "react";
import StoresListContainer from "../stores/StoresListContainer";
import { Layout } from 'antd';
import InputSearch from "../input/InputSearch";

const { Content } = Layout;

const GamesList = ({ title, handleChange, searchGamesOnTitle, games }) => (
    <Layout>
        <Content className="background">
            <div className="wrapper">
                <InputSearch title={title} handleChange={handleChange} searchGamesOnTitle={searchGamesOnTitle} />
                <div className="colorGray">
                    <h1>Games</h1>
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