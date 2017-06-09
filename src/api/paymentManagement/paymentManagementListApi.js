import React from 'react';
import {
    fetchFn,
} from '../fetch';
import apiConfig from '../fetchIndex';

// get user info
//apiConfig.initApi
export const paymentRequestApi = (data) => {

    return fetchFn(apiConfig.getpaymentlist,data).then(data => data);
}

export const paymentCancelApi = (data) => {
    return fetchFn(apiConfig.cancleApply,data).then(data => data);
}