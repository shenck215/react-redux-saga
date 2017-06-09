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
    GETFORECASTPOLICYINFO_SAGA,
    receiveForecastPolicyInfo,
} from '../../action/policypackage/step-03-Action';
import {
    getForecastPolicyInfoApi,
} from '../../api/policypackage/step-03-api';


function* incrementAsync(obj){

    const {
        type,
        params,
    } = obj;
    
    switch (type) {

        case GETFORECASTPOLICYINFO_SAGA : {

            const {
                cityStrategyId,
            } = params;
            
            
            let data = yield getForecastPolicyInfoApi({cityStrategyId,});

            if(data.status === 0){
                yield put(receiveForecastPolicyInfo(data))
            }
            
            break;
        }

    }
}

export default function* watchForecastPolicyInfo(){
    yield* takeEvery([
        GETFORECASTPOLICYINFO_SAGA,
    ],incrementAsync)
}