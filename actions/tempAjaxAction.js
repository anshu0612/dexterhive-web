// TODO: Remove this file later
import axios from 'axios';
import * as types from '../constants/ActionTypes';
import { requestManager } from '../services/requestManager';

export function getRandomMessage() {
    const url = `trbmb`
    let handleSuccessResponse = (response) => {
        console.log("here came with data--->", response);
        return { type: types.GET_MSG, data: response.data};
    }

    let handleErrorResponse = (error) => {
        // TODO: Return appropriate action to show toast or error message
        console.log('Failed to fetch previous meeting notes', error);
    }

    return function (dispatch) {
        requestManager.get(url, dispatch, handleSuccessResponse, handleErrorResponse);
    }
}

// export function getRandomMessage() {
//
//     const API_URL = 'https://api.github.com/zen';
//     let temp = null;
//     axios.get(API_URL)
//     .then(response => {
//         console.log("API RESPONSE----->  ", response);
//         temp = response.data;
//         return { type: types.GET_MSG, data: temp };
//     })
//     .catch(error => {
//         console.log('Error fetching and parsing data', error);
//     });
//     console.log("HOPE SO IT DOESN:T COMES HERE");
//     //return { type: types.GET_MSG, data: temp };
// }
