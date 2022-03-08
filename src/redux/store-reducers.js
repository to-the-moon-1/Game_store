export const SET_STORES = 'SET_STORES';
export const ACTIVE_STORES = 'ACTIVE_STORES';
export const NO_ACTIVE_STORES = 'NO_ACTIVE_STORES';
// export const CHECKED_STORES = 'CHECKED_STORES';

let initialState = {
    stores: []
}

const storesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STORES: {
            const stores = action.stores.map(store => ({ ...store, storeID: `${new Date().getTime() * Math.random()}` }))
            // return {...state, stores: action.stores}
            return {...state, stores}
        }
        case ACTIVE_STORES: {
            return {...state,
                stores: state.stores.map((store, id) => {
                    if(id === action.id) {
                        return{...store, checked: true}
                    }
                    return store
                })
            }
        }
        case NO_ACTIVE_STORES: {
            return {...state,
                stores: state.stores.map((store, id) => {
                    if(id === action.id) {
                        return{...store, checked: false}
                    }
                    return store
                })
            }
        }
        // case CHECKED_STORES: {
        //     return {...state,
        //         stores: state.stores.map(store => {
        //             if((store.storeID - 1) === action.id) {
        //                 return{...store, checked: !checked}
        //             }
        //             return store
        //         })
        //     }
        // }
        default:
            return state
    }
}

export const setStoresAC = (stores) => ({type: SET_STORES, stores})
export const setActiveStoresAC = (id) => ({type: ACTIVE_STORES, id})
export const setNoActiveStoresAC = (id) => ({type: NO_ACTIVE_STORES, id})
// export const setCheckedStoreAC = (id) => ({type: CHECKED_STORES, id})

export default storesReducer