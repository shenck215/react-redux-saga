import {
    fetchFn,
} from '../fetch';
import apiConfig from '../fetchIndex';

/**
 * 获取初始数据
 * @param {*} data 
 */
export const getForecastPolicyInfoApi = (data) => {

    return fetchFn(apiConfig.getForecastPolicyInfo,data).then(data => data);
//    return fetch(`http://localhost:3005?cityStrategyId=1`).then(res => {
//     res.json()
//    }).then(data => data);
}

/**
 * 获取更改后的上浮规则
 * @param {*} data 
 */
export const getRemarkOfEdit = (data) => {
    return fetchFn(apiConfig.getRemarkOfEdit,data).then(data => data);
}


/**
 * 保存数据
 * @param {*} data 
 */
export const saveForecastPolicyInfo = (data) => {
    
    return fetchFn(apiConfig.saveForecastPolicyInfo,data,{
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(data),
    }).then(data => data);
}