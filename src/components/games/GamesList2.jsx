import React, {useState} from "react";
import axios from "axios";
import {URL} from "../../api/api";
import StoresListContainer from "../stores/StoresListContainer";
import { Layout } from 'antd';
import InputSearch from "../input/InputSearch";

const { Content } = Layout;

const GamesList2 = (props) => {

    let [title, setTitle] = useState()

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const searchGamesOnTitle = () => {
        axios.get(`${URL}games?title=${title}&limit=60&exact=0`).then(response => {
            props.setGames(response.data);
            console.log(response.data)
        })
    }

    return <Layout>
        <Content className="background">
            <div className="wrapper">
                <InputSearch title={title} handleChange={handleChange} searchGamesOnTitle={searchGamesOnTitle} />
                <h1>Games</h1>
                {props.games.length !== 0
                    ? props.games.map(game => <div key={"id_" + game.gameID}>
                        <div>{game.external}</div>
                    </div>)
                    : <div>No games</div>}
                <StoresListContainer title={title} />
            </div>
        </Content>
    </Layout>
}

export default GamesList2