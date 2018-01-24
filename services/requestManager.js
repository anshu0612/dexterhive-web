/*
 * Get method
 * requestManager.get(url succesCallbackFunction, errorCallbackFunction)
 *
 * Post method
 * requestManager.post(url, requestData, succesCallbackFunction, errorCallbackFunction, request Type)
 *
 * Patch method
 * requestManager.post(url, requestData, succesCallbackFunction, errorCallbackFunction)
*/

import axios from 'axios';
// import cookie from 'react-cookie';
// import * as actions from '../../../Python Apps/MOM_VERSION_194/mom-web/src.v2/containers/MeetingContainer/actions/actions';
// // Load constants
// import { API_BASE_URL, CSRF_TOKEN_NOT_FOUND_MSG } from '../../../Python Apps/MOM_VERSION_194/mom-web/src.v2/constants/constants';

class AxiosRequestManager {
  constructor(baseEndPoint) {
    this.baseEndPoint = baseEndPoint;
    this.cookie = {};
  }

  get(url, dispatch, successCallback, errorCallback) {
    // return axios({
    //   url: this.baseEndPoint + url,
    //   timeout: 20000, // TODO: We should be able to update the settings by passing it as arguments
    //   method: 'get',
    //   crossDomain: true,
    //   responseType: 'json',
    //   withCredentials: false
    // })

     return  axios.get(this.baseEndPoint + url)
        .then(
      response => { console.log("before", response); this.successHandler(response, dispatch, successCallback); console.log("rer", response) } ,
      error => this.errorHandler(error, dispatch, errorCallback)
      );
  }

  patch(url, data, dispatch, successCallback, errorCallback) {
    let csrftoken = this.checkOrGetCookie('csrftoken');
    if (csrftoken) {
      return axios({
        url: this.baseEndPoint + url,
        timeout: 20000, // TODO: We should be able to update the settings by passing it as arguments
        method: 'patch',
        crossDomain: true,
        responseType: 'json',
        withCredentials: true,
        headers: { 'X-CSRFTOKEN': csrftoken },
        data: data
      }).then(
        response => this.successHandler(response, dispatch, successCallback),
        error => this.errorHandler(error, dispatch, errorCallback)
        );
    } else {
      this.errorHandler("temp", dispatch, errorCallback);
    }
  }

  post(url, data, dispatch, successCallback, errorCallback, responseType = 'json') {
    let csrftoken = this.checkOrGetCookie('csrftoken');
    if (csrftoken) {
      return axios({
        url: this.baseEndPoint + url,
        timeout: 20000, // TODO: We should be able to update the settings by passing it as arguments
        method: 'post',
        crossDomain: true,
        responseType: responseType,
        withCredentials: true,
        headers: { 'X-CSRFTOKEN': csrftoken },
        data: data
      }).then(
        response => this.successHandler(response, dispatch, successCallback),
        error => this.errorHandler(error, dispatch, errorCallback)
        );
    } else {
      this.errorHandler("temp", dispatch, errorCallback);
    }
  }

  checkOrGetCookie(key) {
    if (!this.cookie[key]) {
      this.cookie[key] = cookie.load(key);
    }
    return this.cookie[key];
  }

  successHandler(response, dispatch, callback) {
    // Add custom action for toast if required
    if (typeof callback === 'function') {
      console.log("successHAndeler---->", response);
      dispatch(callback(response));
    }
  }

  errorHandler(error, dispatch, callback) {
    // Add custom action for toast   
    if (typeof callback === 'function') {
      dispatch(callback(error));
    }
    //dispatch(actions.pushApiErrorResponse(error));
  }
}

export const requestManager = new AxiosRequestManager('http://api.chew.pro/');
