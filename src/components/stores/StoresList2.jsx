import React, {useEffect} from "react";
import {URL} from "../../api/api";
import axios from "axios";
import DealsListContainer from "../deals/DealsListContainer";

const StoresList2 = (props) => {

    useEffect(() => {
        if(props.stores.length === 0) {
            axios.get(`${URL}/stores`).then(response => {
                props.setStores(response.data);
            })
        }
    })

    return <div>
        <h1>Stores</h1>
        {props.stores.map(store => <div key={"id_" + store.storeID}>
            <img alt="store icon" src={`https://www.cheapshark.com/${store.images.icon}`} />
            <span>{store.storeName}</span>

            {store.checked
                ? <input type="checkbox" onChange={() => props.noActiveStores(store.storeID - 1)} checked={store.checked} />
                : <input type="checkbox" onChange={() => props.activeStores(store.storeID - 1)} checked={store.checked} />}
        </div>)}

        <DealsListContainer checked={props.stores.map(store => {return store.checked})}
                            stores={props.stores.map(store => {return store})}
                            title={props.title} />
    </div>
}

export default StoresList2