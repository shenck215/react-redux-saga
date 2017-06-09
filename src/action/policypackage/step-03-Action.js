export const GETFORECASTPOLICYINFO_SAGA = 'GETFORECASTPOLICYINFO_SAGA';
export const RECEIVEFORECASTPOLICYINFO = 'RECEIVEFORECASTPOLICYINFO';

/**
 * 获取预测包的详情
 * @param {*} params
 */
export const getForecastPolicyInfo = (params) => {
    
    return {
        type: GETFORECASTPOLICYINFO_SAGA,
        params,
    }
}

export const receiveForecastPolicyInfo = (params) => {
    return {
        type: RECEIVEFORECASTPOLICYINFO,
        params,
    }
}