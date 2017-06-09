
import {
    fetchFn,
} from '../fetch';
import apiConfig from '../fetchIndex';

// get user info

/**
 * 基础城市设置列表
 * @param {*} data 
 */
export const baseSettingRequestApi = (data) => {
    
    return fetchFn(apiConfig.getAreaList,data).then(data => data);
}

/**
 * 基础城市设置列更新
 * @param {*} data 
 */
export const baseSettingUpdateApi = (data) => {
    
    return fetchFn(apiConfig.updateArea,data).then(data => data);
}

/**
 * 新增/更新参保类型
 * @param {*} data 
 */
export const updateSocialSetApi = (data) => {
    
    return fetchFn(apiConfig.updateSocialSet,data).then(data => data);
}

/**
 * 删除参保类型
 * @param {*} data 
 */
export const deleteSocialSetApi = (data) => {
    
    return fetchFn(apiConfig.deleteSocialSet,data).then(data => data);
}

/**
 * 新增/删除套餐
 * @param {*} data 
 */
export const updateAreaPackgeApi = (data) => {
    
    return fetchFn(apiConfig.updateAreaPackge,data,{
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(data),
    }).then(data => data);
}

/**
 * 得到套餐列表
 * @param {*} data 
 */
export const getPackageListApi = (data) => {

    return fetchFn(apiConfig.getPackageList,data).then(data => data);
}

/**
 * 是否存在关联的服务商政策包
 */
export const existCitySocialSetApi = (data) => {

    return fetchFn(apiConfig.existCitySocialSet,data).then(data => data);
}


