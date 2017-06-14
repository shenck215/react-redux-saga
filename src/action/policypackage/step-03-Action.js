export const GETFORECASTPOLICYINFO_SAGA = 'GETFORECASTPOLICYINFO_SAGA';
export const RECEIVEFORECASTPOLICYINFO = 'RECEIVEFORECASTPOLICYINFO';
export const CHANGELOCALDATE = 'CHANGELOCALDATE';
export const TABLEISLOADING = 'TABLEISLOADING';
export const GETREMARKOFEDIT_SAGA = 'GETREMARKOFEDIT_SAGA';
export const SAVEFORECASTPOLICYINFO_SAGA = 'SAVEFORECASTPOLICYINFO_SAGA';
export const BTNISLOADING = 'BTNISLOADING';
export const EMPTYREMARKDATA = 'EMPTYREMARKDATA';

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

/**
 * 编辑时改变remark
 * @param {*} params 
 */
export const getRemarkOfEdit = (params) => {
    return {
        type: GETREMARKOFEDIT_SAGA,
        params,
    }
}

/**
 * 改变数据——本地
 * @param {*} params 
 */
export const changeLocalData = (params) => {
    return {
        type: CHANGELOCALDATE,
        params,
    }
}

export const emptyRemarkData = (params) => {
    return {
        type: EMPTYREMARKDATA,
        params,
    }
}

/**
 * 表格数据加载中
 */
export const tableIsLoading = (params) => {
    return {
        type: TABLEISLOADING,
        params,
    }
}

/**
 * 保存数据
 * @param {*} params 
 */
export const saveForecastPolicyInfo = (params) => {
    return {
        type: SAVEFORECASTPOLICYINFO_SAGA,
        params,
    }
}

export const btnIsLoading = (params) => {
    return {
        type: BTNISLOADING,
        params,
    }
}