import {useEffect} from "react";
import {connect} from "react-redux";
import axios from "axios";

import {setActiveStoresAC, setNoActiveStoresAC, setStoresAC} from "../../redux/stores-reducer";
import {URL} from "../../api/api";

import StoresList from "./stores-list";

const StoresListContainer = ({activeStores, noActiveStores, setStores, stores, title, games}) => {
    const checkedStore = stores.some(store => store.checked === true)

    useEffect(() => {
        if(stores.length === 0) {
            axios.get(`${URL}/stores`).then(response => {
                setStores(response.data);
            })
        }
    })

    return <StoresList activeStores={activeStores} noActiveStores={noActiveStores} checkedStore={checkedStore} stores={stores} title={title} games={games} />
}

let mapStateToProps = (state) => {
    return {
        stores: state.storesPage.stores
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setStores: (stores) => {
            dispatch(setStoresAC(stores))
        },
        activeStores: (id) => {
            dispatch(setActiveStoresAC(id))
        },
        noActiveStores: (id) => {
            dispatch(setNoActiveStoresAC(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (StoresListContainer)