
import {
    fetchFn,
} from '../fetch';
import apiConfig from '../fetchIndex';

// get user info
//apiConfig.initApi
export const policybaselistApi = (data) => {

    return fetchFn(apiConfig.getMaterialItemList, data).then(data => data);
}


export const existCitySocialSetm = (data) => {

    return fetchFn(apiConfig.existCitySocialSetm, data).then(data => data);
}


export const deleteMaterialItem = (data) => {

    return fetchFn(apiConfig.deleteMaterialItem, data).then(data => data);
}

export const existMaterialName = (data) => {
    
    return fetchFn(apiConfig.existMaterialName, data).then(data => data);
}

export const addMaterialItem = (data) => {
    
    return fetchFn(apiConfig.addMaterialItem, data).then(data => data);
}