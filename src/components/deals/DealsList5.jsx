import React, {useEffect} from "react";
import axios from "axios";
import {URL} from "../../api/api";

const DealsList5 = (props) => {

    const b = props.stores.filter(store => store.checked === true)
    const c = b.map(store => store.storeID).join()

    console.log(c)
    useEffect(() => {
        props.stores.map(store => {
            if (store.checked === true) {
                axios.get(`${URL}deals?storeID=${c}&limit=60${props.title ? `&title=${props.title}` : ''}`).then(response => {
                    props.setDeals(response.data.length !== 0
                        ? ([...props.deals], [...response.data])
                        : props.deals);
                })
            } else return props.setDeals([])
        })
    }, [props.stores])

    const deals = props.deals.map((deal, id) => {
        return <div key={"id_" + deal.gameID + id}>
            <a href={`https:/${deal.metacriticLink}`} target="_blank">{deal.title}</a>
            <span>{deal.dealRating}</span>
            <img src={`${deal.thumb}`}/>
        </div>
    })

    return <div>
        <h1>Deals</h1>
        {props.deals.length !== 0
            ? deals
            : <div>No deals</div>}

    </div>
}

export default DealsList5