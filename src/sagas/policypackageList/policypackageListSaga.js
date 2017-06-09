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
    GETPOLICYPACKAGELIST_SAGA,
    EXPORTCOMPANYSTRATEGYEXCEL_SAGA,
    policyPackageListIsLoading,
    receivePolicyPackageList,
    receiveExcelUrl,
} from '../../action/policypackageList/policypackageListAction';
import {
    getCompanyStrategyList,
    exportCompanyStrategyExcel,
} from '../../api/policypackageList/policypackageListApi';


function* incrementAsync(obj){

    const {
        type,
        params,
    } = obj;
    
    switch (type) {

        case GETPOLICYPACKAGELIST_SAGA : {
            
            const {
                pageNow,
                pageSize,
                searchParamsCashe,
                searchTitleArr,
            } = params;

            yield put(policyPackageListIsLoading({ isLoading: true }));

            let data = yield getCompanyStrategyList(Object.assign({},{
                start: pageNow,
                length: pageSize,
            },searchParamsCashe));

            if(data.status === 0) {
                yield put(receivePolicyPackageList(Object.assign({},data.data,{
                    pageNow,
                    pageSize,
                },{searchParamsCashe,searchTitleArr,})));
            }

            yield put(policyPackageListIsLoading({ isLoading: false }));
            
            break;
        }

        case EXPORTCOMPANYSTRATEGYEXCEL_SAGA: {

            const {
                key,
                idList,
                searchParamsCashe,
            } = params;

            let data;

            if(key === 'select'){
                data = yield exportCompanyStrategyExcel({
                    idList,
                })
            }else if(key === 'search'){
                
                let obj = searchParamsCashe;

                delete obj['deadlineDay'];
                delete obj['deductionDate'];
                delete obj['housingFundDeadline'];
                delete obj['insuranceDeadline'];
                delete obj['supplierDeadline'];

                data = yield exportCompanyStrategyExcel({
                    idList,
                    strategyParm: obj,
                })
            }
            
            if(data.status === 0){
                yield put(receiveExcelUrl({
                    exportUrl: data.data,
                }))

                message.success('导出成功')
            }else{
                message.error('导出失败');
                return false;
            }
            

            break;
        }
    }
}

export default function* watchPolicyPackageList(){
    yield* takeEvery([
        GETPOLICYPACKAGELIST_SAGA,
        EXPORTCOMPANYSTRATEGYEXCEL_SAGA,
    ],incrementAsync)
}