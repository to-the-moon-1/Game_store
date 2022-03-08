import React from "react";
import {Col, Row} from "antd";
import { StarOutlined } from "@ant-design/icons";

const DealsList = ({deals}) => {

    const dealsList = deals.map((deal, id) => {

        let date = new Date(+`${deal.releaseDate}`).toLocaleDateString();

        return <Row className="dealCard" key={"id_" + deal.gameID + id}>
            <Col span={2}>
                <img className="dealImg" alt={'game'} src={`${deal.thumb}`}/>
            </Col>
            <Col span={22} className="containerContentGame">
                <Row>
                    <Col className="leftAlign" span={12}>
                        <span>{deal.title}</span>
                    </Col>
                    <Col className="centerAlign" span={3}>
                        <span>{deal.dealRating}&nbsp;&nbsp;<StarOutlined /></span>
                    </Col>
                    <Col className="centerAlign" span={6}>
                        <span>{date}</span>
                    </Col>
                    <Col className="rightAlign" span={3}>
                        <a rel="noreferrer" href={`https://www.metacritic.com${deal.metacriticLink}`} target="_blank"><em>More . . .</em></a>
                    </Col>
                </Row>
            </Col>
        </Row>
    })

    return <div>
        <Row>
            <h1>Deals</h1>
        </Row>
        {deals.length !== 0
            ? dealsList
            : <div>Empty deals list</div>}

    </div>
}

export default DealsList