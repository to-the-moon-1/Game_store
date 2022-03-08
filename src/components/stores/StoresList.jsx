import React from "react";
import DealsListContainer from "../deals/DealsListContainer";
import {Col, Row} from "antd";

const StoresList = ({activeStores, noActiveStores, checkedStore, stores, title, games}) => (
    <div>
        <Row>
            <h1>Stores</h1>
        </Row>
        {stores.map((store, id) => <Row className="cardStore" key={"id_" + store.storeID}>
            <Col span={1}>
                <img className="storeImg" alt="store icon" src={`https://www.cheapshark.com/${store.images.icon}`} />
            </Col>

            <Col span={22}>
                <span className="storeName">{store.storeName}</span>
            </Col>

            <Col span={1}>
                <input style={{borderColor: "red"}} className="checkbox" type="checkbox" onChange={() => {
                    store.checked
                    ? noActiveStores(id)
                    : activeStores(id)
                }} checked={store.checked} />
            </Col>
        </Row>)}

        <DealsListContainer stores={stores}
                            checkedStore={checkedStore}
                            games={games}
                            title={title} />
    </div>
)

export default StoresList