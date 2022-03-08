import {connect} from "react-redux";
import {setActiveStoresAC, setNoActiveStoresAC, setStoresAC} from "../../redux/store-reducers";
import StoresList from "./StoresList";

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

export default connect(mapStateToProps, mapDispatchToProps) (StoresList)