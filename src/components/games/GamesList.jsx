import React, {useState} from "react";
import axios from "axios";
import {URL} from "../../api/api";
import StoresListContainer from "../stores/StoresListContainer";
import { Layout } from 'antd';
import InputSearch from "../input/InputSearch";

const { Content } = Layout;

const GamesList = (props) => {

    let [title, setTitle] = useState()

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const searchGamesOnTitle = () => {
        if(title && title.length ) {
            axios.get(`${URL}games?title=${title}&limit=60&exact=0`).then(response => {
                props.setGames(response.data);
            })
        } else props.setGames([])
    }

    return <Layout>
        <Content className="background">
            <div className="wrapper">
                <InputSearch title={title} handleChange={handleChange} searchGamesOnTitle={searchGamesOnTitle} />
                <div className="colorGray">
                    <h1>Games</h1>
                    {props.games.length !== 0
                        ? props.games.map(game => <div key={"id_" + game.gameID}>
                            <div className="gameList">{game.external}</div>
                        </div>)
                        : <div>Empty games list</div>}
                    <StoresListContainer title={title} games={props.games} />
                </div>
            </div>
        </Content>
    </Layout>
}

export default GamesList