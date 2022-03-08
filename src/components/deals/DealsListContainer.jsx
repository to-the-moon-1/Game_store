import {connect} from "react-redux";
import {setDealsAC} from "../../redux/deals-reducer";
import DealsList from "./DealsList";

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

export default connect(mapStateToProps, mapDispatchToProps) (DealsList)