
import {
    fetchFn,
} from '../fetch';
import apiConfig from '../fetchIndex';

/**
 * 服务商政策管理列表
 * @param {*} data 
 */
export const getCompanyStrategyList = (data) => {
    
    return fetchFn(apiConfig.getCompanyStrategyList,data).then(data => data);
}

export const exportCompanyStrategyExcel = (data) => {
    
    return fetchFn(apiConfig.exportCompanyStrategyExcel,data,{
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(data),
    }).then(data => data);
}