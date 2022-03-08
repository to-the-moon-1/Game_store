import React, {useEffect} from "react";
import {URL} from "../../api/api";
import axios from "axios";
import DealsListContainer from "../deals/DealsListContainer";
import {Col, Row} from "antd";

const StoresList = (props) => {

    const d = props.stores.some(store => store.checked === true)
    // console.log(d)

    useEffect(() => {
        if(props.stores.length === 0) {
            axios.get(`${URL}/stores`).then(response => {
                props.setStores(response.data);
            })
        }
    })

    return <div>
        <Row>
            <h1>Stores</h1>
        </Row>
        {props.stores.map((store, id) => <Row className="cardStore" key={"id_" + store.storeID}>
            <Col span={1}>
                <img className="storeImg" alt="store icon" src={`https://www.cheapshark.com/${store.images.icon}`} />
            </Col>

            <Col span={22}>
                <span className="storeName">{store.storeName}</span>
            </Col>

            <Col span={1}>
                <input style={{borderColor: "red"}} className="checkbox" type="checkbox" onChange={() => {
                    store.checked
                    ? props.noActiveStores(id)
                    : props.activeStores(id)
                }} checked={store.checked} />
            </Col>
        </Row>)}

        <DealsListContainer checked={props.stores.map(store => {return store.checked})}
                            // check={props.stores.some(store => store.checked === true)}
                            // stores={props.stores.map(store => {return store})}
                            stores={props.stores}
                            d={d}
                            // id={props.stores.map((store, id) => {return store, id})}
                            // searchGamesOnTitle={props.searchGamesOnTitle}
                            games={props.games}
                            title={props.title} />
    </div>
}

export default StoresList