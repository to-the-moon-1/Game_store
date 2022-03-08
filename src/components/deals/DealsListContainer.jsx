import {connect} from "react-redux";
import {setDealsAC} from "../../redux/deals-reducer";
import DealsList from "./DealsList";
import {useEffect} from "react";
import axios from "axios";
import {URL} from "../../api/api";

const DealListContainer = ({stores, checkedStore, games, title, deals, setDeals}) => {
    const storeData = stores.map((store, id) => {
        if(store.checked === true) {
            return id + 1
        }
    })
    const isStore = storeData.filter(store => store !== undefined).join()

    useEffect(() => {
        if (isStore) {
            axios.get(`${URL}deals?storeID=${isStore}&limit=60${games.length > 0 ? `&title=${title}` : ''}`).then(response => {
                setDeals(response.data.length !== 0
                    ? ([...deals], [...response.data])
                    : deals);
            })
        } else return setDeals([])
    }, [checkedStore, isStore, games])

    return <DealsList deals={deals} />
}

let mapStateToProps = (state) => {
    return {
        deals: state.dealsPage.deals
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setDeals: (deals) => {
            dispatch(setDealsAC(deals))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DealListContainer)