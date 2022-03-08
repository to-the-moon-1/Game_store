import React, {useEffect} from "react";
import axios from "axios";
import {URL} from "../../api/api";

const DealsList = (props) => {

    console.log(props.deals)
    console.log(props.stores)

    useEffect(() => {
        props.stores.map(store =>
            store.checked === true
                ? axios.get(`${URL}deals?storeID=${store.storeID}&limit=60`).then(response => {
                    // props.setDeals(response.data);
                    props.setDeals([...props.deals, ...response.data]);
                    console.log(response.data)
                })
            : props.setDeals([]))
    }, [props.stores])

    const deals = props.deals.map((deal, id) => {
        console.log(deal.title)
        return <div key={"id_" + deal.gameID + id}>{deal.title}</div>
    })

    return <div>
        <h1>Deals</h1>
        <span>{props.stores.storeID}</span>
        {deals}
    </div>
}

export default DealsList