import React, {useEffect} from "react";
import axios from "axios";
import {URL} from "../../api/api";
import {Col, Row} from "antd";
import { StarOutlined } from "@ant-design/icons";

const DealsList = (props) => {

    // const b = props.stores.filter(store => store.checked === true)
    // const c = b.map(store => store.storeID).join()

    const e = props.stores.map(store => {
        return store
    })
    // const f = e.map((store, id) => {
    //     return store.checked
    // })
    const g = e.map((store, id) => {
        if(store.checked === true) {
            return id + 1
        }
    })
    const h = g.filter(store => store !== undefined).join()
    // const g = f.map((store, id) => {
    //     return store, id
    // })
    // const b = a.filter((store, id) => store.checked === true && id)

    // const b = props.stores.filter(store => store.checked === true)
    // const c = b.map((store, id) => {
    //     return store, id + 1
    // }).join()

    useEffect(() => {
        // debugger
            if (h) {
                // debugger
                axios.get(`${URL}deals?storeID=${h}&limit=60${props.games.length > 0 ? `&title=${props.title}` : ''}`).then(response => {
                    props.setDeals(response.data.length !== 0
                        ? ([...props.deals], [...response.data])
                        : props.deals);
                    // debugger
                })
            } else return props.setDeals([])
    }, [props.d, h, props.games])

    const deals = props.deals.map((deal, id) => {

        // let seconds = Math.floor(Date.now() / 1000)
        // const time = Math.floor(1621209600 / 60 / 60 / 24 / 365)

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
        {props.deals.length !== 0
            ? deals
            : <div>Empty deals list</div>}

    </div>
}

export default DealsList