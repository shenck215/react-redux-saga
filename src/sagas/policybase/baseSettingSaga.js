import {
    takeEvery,
} from 'redux-saga';
import {
    put,
} from 'redux-saga/effects';
import {
    message,
} from 'antd';
import {
    BASICSETTING_LIST_GET_SAGA,
    receiveBasicSettingList,
    basicSettingListIsLoading,
    BASICSETTING_UPDATE_GET_SAGA,
    getBasicSettingList,
    UPDATESOCIALSET_GET_SAGA,
    EXISTCITYSOCIALSET_SAGA,
    DELETESOCIALSET_GET_SAGA,
    UPDATEAREAPACKAGE_GET_SAGA,
    GETPACKAGELIST_SAGA,
    receivePackageList,
    deleteSocialSuccess,
    deleteSocialError,
    existInfoModalLoading,
    smallTableModalLoading,
    deleteSuccessLoading,
} from '../../action/policybase/basicSettingAction';
import {
    baseSettingRequestApi,
    baseSettingUpdateApi,
    updateSocialSetApi,
    deleteSocialSetApi,
    updateAreaPackgeApi,
    getPackageListApi,
    existCitySocialSetApi,
} from '../../api/policybase/baseSettingApi';


function* incrementAsync(obj){

    const {
        type,
        params,
    } = obj;
    
    switch (type) {

        case BASICSETTING_LIST_GET_SAGA : {

            yield put(basicSettingListIsLoading({ isLoading: true }));

            let data = yield baseSettingRequestApi({
                start: params.start,
                length: params.length,
            });

            if(data.status === 0) {
                yield put(receiveBasicSettingList(Object.assign({},data.data,{
                    index: params.index,
                })));
            }

            yield put(basicSettingListIsLoading({ isLoading: false }));
            
            break;
        }

        case BASICSETTING_UPDATE_GET_SAGA: {

            const { 
                start,
                length,
                areaId,
                setChangeCache,
                nowKey,
                resolve,
            } = params;

            let dataObj = {
                areaId,
            };

            for(let key in setChangeCache) {
                if(key === nowKey || nowKey === 'existInfo') {
                    dataObj[key] = setChangeCache[key];
                    
                }
            }

            yield put(existInfoModalLoading({existInfoModalLoading: true}));

            let data = yield baseSettingUpdateApi(dataObj);

            if(data.status === 0) {
                if(resolve) {
                    resolve();
                }
                
                yield put(getBasicSettingList({
                    start,
                    length,
                }));
            }

            yield put(existInfoModalLoading({existInfoModalLoading: false}));

            break;
            
        }
         
        case UPDATESOCIALSET_GET_SAGA: {
            const { 
                start,
                length,
                index,
                id,
                areaId,
                nowKey,
                resolve,
                typeName,
                householdType,
                description,
            } = params;

            let dataObj  = Object.assign({},{
                typeName: typeName,
                householdType: householdType.join(','),
                description: description,
                belongBusi: nowKey === 'existInsurance'? 1 : 2,
            },{
                id,
                areaId,
            })

            yield put(smallTableModalLoading({smallTableModalLoading: true}));
            
            let data = yield updateSocialSetApi(dataObj);

            if(data.status === 0) {
                
                resolve();

                console.log(index)

                yield put(getBasicSettingList({
                    start,
                    length,
                    index,
                }));
            }

            yield put(smallTableModalLoading({smallTableModalLoading: false}));

            break;
        }

        case UPDATEAREAPACKAGE_GET_SAGA: {
            const { 
                start,
                length,
                areaId,
                setChangeCache,
                nowKey,
                resolve,
            } = params;

            let dataObj = {
                areaId,
                
            };

            for(let key in setChangeCache) {
                if(key === nowKey) {
                    dataObj[key] = setChangeCache[key];
                }
            }

            let data = yield updateAreaPackgeApi(dataObj);

            if(data.status === 0) {

                resolve();

                message.error('新增成功');

                yield put(getBasicSettingList({
                    start,
                    length,
                }));
            }

            break;
        }

        case EXISTCITYSOCIALSET_SAGA: {

            const {
                baseId,
                index,
            } = params;

            let data = yield existCitySocialSetApi({baseId,});

            if(data.status === 0) {
                
                yield put(deleteSocialSuccess({
                    index,
                    deleteSuccessVisible: true,
                }))
            }else{
                yield put(deleteSocialError({
                    deleteErrorVisible: true,
                }))
            }

            break;
        }

        case DELETESOCIALSET_GET_SAGA: {

            const {
                id,
                start,
                length,
                index,
            } = params;

            yield put(deleteSuccessLoading({deleteSuccessLoading: true}));

            let data = yield deleteSocialSetApi({id,});

            if(data.status === 0) {

                yield put(deleteSocialSuccess({
                    index,
                    deleteSuccessVisible: false,
                }));
                
                yield put(getBasicSettingList({
                    index,
                    start,
                    length,
                }));
            }

            yield put(deleteSuccessLoading({deleteSuccessLoading: false}));

            break;
        }

        case GETPACKAGELIST_SAGA: {

            let data = yield getPackageListApi(params);

            yield put(receivePackageList(data));

            break;
        }

        
    }
}

export default function* watchBaseSettingList(){
    yield* takeEvery([
        BASICSETTING_LIST_GET_SAGA,
        BASICSETTING_UPDATE_GET_SAGA,
        UPDATESOCIALSET_GET_SAGA,
        DELETESOCIALSET_GET_SAGA,
        UPDATEAREAPACKAGE_GET_SAGA,
        GETPACKAGELIST_SAGA,
        EXISTCITYSOCIALSET_SAGA,
    ],incrementAsync)
}