export const GET_MATERIALITEMLIST_SAGA = 'GETMATERIALITEMLIST_SAGA'; 
export const RECEIVE_MATERIALITEMLIST = 'RECEIVE_MATERIALITEMLIST';
export const IS_TABLE_LOADING = 'IS_TABLE_LOADING';
export const EXISTCITYSOCIALSETM_SAGA = 'EXISTCITYSOCIALSETM_SAGA';
export const DELETEMATERIALITEM_SAGA = 'DELETEMATERIALITEM_SAGA';
export const DELETE_SUCCESS_MODULE = 'DELETE_SUCCESS_MODULE';
export const DELETESUCCESS_LOADING = 'DELETESUCCESS_LOADING';
export const DELETE_ERROR_MODULE = 'DELETE_ERROR_MODULE';
export const LOOK_MATERIAL_DETAIL = 'LOOK_MATERIAL_DETAIL';
export const EXISTMATERIALNAME_SAGA = 'EXISTMATERIALNAME_SAGA';
export const MODAL_LOADING = 'MODAL_LOADING';

export const getMaterialItemList = (params) => {
    return {
        type: GET_MATERIALITEMLIST_SAGA,
        params,
    }
}

export const receiveMaterialItemList = (params) => {
    return {
        type: RECEIVE_MATERIALITEMLIST,
        params,
    }
}

export const isTableLoading = (params) => {
    return {
        type: IS_TABLE_LOADING,
        params,
    }
}

export const existCitySocialSetm = (params) => {
    
    return {
        type: EXISTCITYSOCIALSETM_SAGA,
        params,
    }
}

export const deleteSuccessModule = (params) => {
    return {
        type: DELETE_SUCCESS_MODULE,
        params,
    }
}

export const deleteSuccessLoading = (params) => {
   
    return {
        type: DELETESUCCESS_LOADING,
        params,
    }
}

export const deleteErrorModule = (params) => {
    return {
        type: DELETE_ERROR_MODULE,
        params,
    }
}

export const deleteMaterialItem = (params) => {
    return {
        type: DELETEMATERIALITEM_SAGA,
        params,
    }
}

export const lookMaterialDetail = (params) => {
    return {
        type: LOOK_MATERIAL_DETAIL,
        params,
    }
}

export const existMaterialName = (params) => {
    return {
        type: EXISTMATERIALNAME_SAGA,
        params,
    }
}

export const modalLoading = (params) => {
    return {
        type: MODAL_LOADING,
        params,
    }
}
