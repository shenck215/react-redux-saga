export const GETPOLICYPACKAGELIST_SAGA = 'GETPOLICYPACKAGELIST_SAGA';
export const RECEIVEPOLICYPACKAGELIST = 'RECEIVEPOLICYPACKAGELIST';
export const POLICYLIST_ISLOADING = 'POLICYLIST_ISLOADING';
export const EXPORTCOMPANYSTRATEGYEXCEL_SAGA = 'EXPORTCOMPANYSTRATEGYEXCEL_SAGA';
export const RECEIVE_EXCEL_URL = 'RECEIVE_EXCEL_URL';

export const getPolicyPackageList = (params) => {
    
    return {
        type: GETPOLICYPACKAGELIST_SAGA,
        params,
    }
}

export const receivePolicyPackageList = (params) => {
    
    return {
        type: RECEIVEPOLICYPACKAGELIST,
        params,
    }
}

export const policyPackageListIsLoading = (params) => {

    return {
        type: POLICYLIST_ISLOADING,
        params,
    }
}

export const exportCompanyStrategyExcel = (params) => {

    return {
        type: EXPORTCOMPANYSTRATEGYEXCEL_SAGA,
        params,
    }
}

export const receiveExcelUrl = (params) => {

    return {
        type: RECEIVE_EXCEL_URL,
        params,
    }
}