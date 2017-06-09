export const BASICSETTING_LIST_GET_SAGA = 'BASICSETTING_LIST_GET';
export const BASICSETTING_LIST_RECEIVE = 'BASICSETTING_LIST_RECEIVE';
export const BASICSETTING_UPDATE_GET_SAGA = 'BASICSETTING_UPDATE_GET_SAGA';
export const BASICSETTING_ISLOADING = 'BASICSETTING_ISLOADING';
export const UPDATESOCIALSET_GET_SAGA = 'UPDATESOCIALSET_GET_SAGA';
export const UPDATEAREAPACKAGE_GET_SAGA = 'UPDATEAREAPACKAGE_GET_SAGA';
export const EXISTCITYSOCIALSET_SAGA = 'EXISTCITYSOCIALSET_SAGA';
export const DELETESOCIALSET_GET_SAGA = 'DELETESOCIALSET_GET_SAGA';
export const GETSMALLTABLEDATA_GET = 'GETSMALLTABLEDATA_GET';
export const GETPACKAGELIST_SAGA = 'GETPACKAGELIST_SAGA';
export const RECEIVE_PACKAGELIST = 'RECEIVE_PACKAGELIST';
export const DELETE_SOCIAL_SUCCESS = 'DELETE_SOCIAL_SUCCESS';
export const DELETE_SOCIAL_ERROR = 'DELETE_SOCIAL_ERROR';
export const EXISTINFOMODAL_LOADING = 'EXISTINFOMODAL_LOADING';
export const SMALLTABLEMODAL_LOADING = 'SMALLTABLEMODAL_LOADING';
export const DELETESUCCESS_LOADING = 'DELETESUCCESS_LOADING';

export const getBasicSettingList = (params) => {
    return {
        type: BASICSETTING_LIST_GET_SAGA,
        params,
    }
}

export const receiveBasicSettingList = (params) => {
    return {
        type: BASICSETTING_LIST_RECEIVE,
        params,
    }
}

export const basicSettingListIsLoading = (params) => {
    return {
        type: BASICSETTING_ISLOADING,
        params,
    }
}

export const getBasicSettingUpdate = (params) => {
    
    return {
        type: BASICSETTING_UPDATE_GET_SAGA,
        params,
    }
}

export const getUpdateSocialSet = (params) => {
    
    return {
        type: UPDATESOCIALSET_GET_SAGA,
        params,
    }
}

export const getUpdateAreaPackge = (params) => {
    
    return {
        type: UPDATEAREAPACKAGE_GET_SAGA,
        params,
    }
}

export const getDeleteSocialSet = (params) => {
    
    return {
        type: DELETESOCIALSET_GET_SAGA,
        params,
    }
}

export const existCitySocialSet = (params) => {
    
    return {
        type: EXISTCITYSOCIALSET_SAGA,
        params,
    }
}

export const getSmallTableDate = (params) => {
    
    return {
        type: GETSMALLTABLEDATA_GET,
        params,
    }
}

export const getPackageListData = (params) => {
    
    return {
        type: GETPACKAGELIST_SAGA,
        params,
    }
}

export const receivePackageList = (params) => {
    
    return {
        type: RECEIVE_PACKAGELIST,
        params,
    }
}

export const deleteSocialSuccess = (params) => {
    
    return {
        type: DELETE_SOCIAL_SUCCESS,
        params,
    }
}

export const deleteSocialError = (params) => {
    
    return {
        type: DELETE_SOCIAL_ERROR,
        params,
    }
}

export const existInfoModalLoading = (params) => {
    return {
        type: EXISTINFOMODAL_LOADING,
        params,
    }
}

export const smallTableModalLoading = (params) => {
    return {
        type: SMALLTABLEMODAL_LOADING,
        params,
    }
}


export const deleteSuccessLoading = (params) => {
    return {
        type: DELETESUCCESS_LOADING,
        params,
    }
}



