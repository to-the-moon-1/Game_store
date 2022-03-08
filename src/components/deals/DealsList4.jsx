import React, {useEffect, useState} from "react";
import axios from "axios";
import {URL} from "../../api/api";

const DealsList = (props) => {

    const [id, setId] = useState()

    // setId(props.stores.map(store => {
    //     if (store.checked === true) {
    //         return store.storeID
    //     } else return null
    // }))
    // console.log(id)

    // props.stores.map((store, id) =>
    //     store.checked
    //             ? console.log(store.storeID)
    //             : null
    // )

    const b = props.stores.filter(store => store.checked === true)
    const c = b.map(store => store.storeID).join()

    console.log(c)

    // console.log(props.title)

    // console.log(props.deals)
    // console.log(props.stores)

    useEffect(() => {
        props.stores.map(store => {
            // if (store.checked === true && props.deals.length === 0) {
            if (store.checked === true) {
                // console.log([...store.storeID, ...store.storeID])

                axios.get(`${URL}deals?storeID=${c}&limit=60${props.title ? `&title=${props.title}` : ''}`).then(response => {
                    // console.log(`${URL}deals?storeID=${store.storeID}&limit=60${props.title ? `&title=${props.title}` : ''}`)
                    // console.log(store.storeID)
                    // props.setDeals(response.data);
                    props.setDeals(response.data.length !== 0
                        ? ([...props.deals], [...response.data])
                        : props.deals);
                    // console.log(([...props.deals], [...response.data]))
                    // console.log(response.data)
                    // console.log(props.stores, store.storeID + ",", store.storeID[0])
                    // store.storeID.map(id => id)
                    // debugger
                })
            // } else if (store.checked === true && props.deals.length !== 0) {
            //
            //         {props.checked.map((check, id) => {
            //             const a = id + 1
            //             console.log(check, a)
            //             axios.get(`${URL}deals?storeID=${a}&limit=60`).then(response => {
            //                 props.setDeals(response.data);
            //             })
            //         })}
            //
            //         // props.setDeals([...props.deals, ...response.data]);
            //         // console.log(response.data)
            //         console.log(props.checked)
            //         debugger

            } else return props.setDeals([])
        })
    }, [props.stores])

    const deals = props.deals.map((deal, id) => {
        // console.log(deal.title)
        return <div key={"id_" + deal.gameID + id}>{deal.title}</div>
    })

    return <div>
        <h1>Deals</h1>
        {props.deals.length !== 0
            ? deals
            : <div>No deals</div>}

    </div>
}

export default DealsList