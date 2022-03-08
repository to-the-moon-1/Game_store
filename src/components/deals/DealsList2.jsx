import React, {useEffect} from "react";
import axios from "axios";
import {URL} from "../../api/api";

const DealsList = (props) => {

    console.log(props.deals)
    console.log(props.stores)

    useEffect(() => {
        getDeals()
    }, [props.deals])

    const getDeals = async() => {
        try {
            const res = await axios.get(`${URL}deals?storeID=2&limit=60`)
            const data = res.data

            props.setDeals(data);
        } catch (err) {
            console.log(err)
        }
    }

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