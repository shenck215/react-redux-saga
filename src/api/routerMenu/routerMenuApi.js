import React from 'react';
import {
    fetchFn,
} from '../fetch';
import apiConfig from '../fetchIndex';


// get user info
//apiConfig.initApi
export const routerMenuApi = (data) => {
    return fetchFn(apiConfig.initApi,data,{method: 'get',body: {}}).then(data => data);
}