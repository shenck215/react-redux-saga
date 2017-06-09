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
    GET_MATERIALITEMLIST_SAGA,
    EXISTCITYSOCIALSETM_SAGA,
    DELETEMATERIALITEM_SAGA,
    EXISTMATERIALNAME_SAGA,
    isTableLoading,
    receiveMaterialItemList,
    deleteSuccessModule,
    deleteErrorModule,
    getMaterialItemList,
    deleteSuccessLoading,
    modalLoading,
} from '../../action/policybase/insuredmaterialsAction';

import {
    policybaselistApi,
    existCitySocialSetm,
    deleteMaterialItem,
    existMaterialName,
    addMaterialItem,
} from '../../api/policybase/insuredmaterialsApi';



function* incrementAsync(obj) {

    const {
        type,
        params,
    } = obj;

    switch (type) {

        case GET_MATERIALITEMLIST_SAGA: {
            
            yield put(isTableLoading({
                isLoading: true,
            }))

            let data = yield policybaselistApi(params);

            yield put(receiveMaterialItemList(data));

            yield put(isTableLoading({
                isLoading: false,
            }))


            break;
        }

        case EXISTCITYSOCIALSETM_SAGA: {
            
            yield put(isTableLoading({
                isLoading: true,
            }))

            let data = yield existCitySocialSetm(params);

            if(data.status === 0) {
                yield put(deleteSuccessModule({
                    isDeleteSuccess: true,
                    id: params.materialItemId,
                }))
            }else{
                yield put(deleteSuccessModule({
                    isDeleteSuccess: true,
                }))
            }

            yield put(isTableLoading({
                isLoading: false,
            }))

            break;
        }

        case DELETEMATERIALITEM_SAGA: {
            
            yield put(deleteSuccessLoading({deleteSuccessLoading: true}));
            
            let data = yield deleteMaterialItem(params);

            if(data.status === 0) {
                yield put(deleteSuccessModule({
                    isDeleteSuccess: false,
                    id: params.materialItemId,
                }))

                message.success('删除成功',1);

                yield put(getMaterialItemList({
                    start: params.start,
                    length: params.length,
                }))
            }

            yield put(deleteSuccessLoading({deleteSuccessLoading: false}));

            break;
        }

        case EXISTMATERIALNAME_SAGA : {

            const {
                start,
                length,
                name,
				property,
				boundProperties,
                resolve,
            } = params;

            yield put(modalLoading({modalLoading: true}));

            let data = yield existMaterialName({name,});
            
            if(data.data === false){

                let d = yield addMaterialItem({
                    name,
                    property,
                    boundProperties,
                })

                if(d.status === 0){
                    resolve();

                    message.success('新增成功');

                    yield put(getMaterialItemList({
                        start,
                        length,
                    }))
                }
            }else {
                message.error('该材料已存在，材料名称不可重复');
            }
            

            yield put(modalLoading({modalLoading: false}))
            
            break;
        }



    }
}
export default function* watchinsuredmaterialsRequestList() {
    yield* takeEvery([
        GET_MATERIALITEMLIST_SAGA,
        EXISTCITYSOCIALSETM_SAGA,
        DELETEMATERIALITEM_SAGA,
        EXISTMATERIALNAME_SAGA,
    ], incrementAsync)
}