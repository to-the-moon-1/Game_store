const BASE_PATH = 'https://www.cheapshark.com/api/1.0/';
// const ENDPOINT_PATH = {
//     stores: 'stores',
// };

export const URL = `${BASE_PATH}`;

// export const getStores = () => (dispatch) => {
//     debugger
//     return fetch(URL)
//         .then(response => {
//             debugger
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             return response
//         })
//         .then(response => response.json())
//         .then(data => dispatch(setStoresAC(data)))
//         .catch(err => console.error(err))
// }